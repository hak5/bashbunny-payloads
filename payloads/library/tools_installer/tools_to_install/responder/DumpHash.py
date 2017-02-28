#!/usr/bin/env python
# This file is part of Responder, a network take-over set of tools 
# created and maintained by Laurent Gaffie.
# email: laurent.gaffie@gmail.com
# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU General Public License for more details.
#
# You should have received a copy of the GNU General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.
import sqlite3

def DumpHashToFile(outfile, data):
	with open(outfile,"w") as dump:
		dump.write(data)

def DbConnect():
    cursor = sqlite3.connect("./Responder.db")
    return cursor

def GetResponderCompleteNTLMv2Hash(cursor):
     res = cursor.execute("SELECT fullhash FROM Responder WHERE type LIKE '%v2%' AND UPPER(user) in (SELECT DISTINCT UPPER(user) FROM Responder)")
     Output = ""
     for row in res.fetchall():
         Output += '{0}'.format(row[0])+'\n'
     return Output

def GetResponderCompleteNTLMv1Hash(cursor):
     res = cursor.execute("SELECT fullhash FROM Responder WHERE type LIKE '%v1%' AND UPPER(user) in (SELECT DISTINCT UPPER(user) FROM Responder)")
     Output = ""
     for row in res.fetchall():
         Output += '{0}'.format(row[0])+'\n'
     return Output

cursor = DbConnect()
print "Dumping NTLMV2 hashes:"
v2 = GetResponderCompleteNTLMv2Hash(cursor)
DumpHashToFile("DumpNTLMv2.txt", v2)
print v2
print "\nDumping NTLMv1 hashes:"
v1 = GetResponderCompleteNTLMv1Hash(cursor)
DumpHashToFile("DumpNTLMv1.txt", v1)
print v1
