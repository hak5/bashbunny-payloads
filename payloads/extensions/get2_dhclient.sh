#!/bin/bash

# get2_dhclient.sh - Bash Bunny extension to change from a DHCP server to a client.
# This is needed when connected to macOS/OSX with Internet Sharing because
# the host is the DHCP server and the Bash Bunny is the DHCP client.
#
# It also replaces the standard GET function so that TARGET_IP, TARGET_HOSTNAME
# and HOST_IP work properly without having to modify the standard version. It
# renames and uses the standard version for any other environment variables.
#
# Note that this must be sourced after get.sh so it is named "get2_dhclient.sh"
# on the assumption that they are sourced in order by filename.
#
# This is free software released under the terms of the GPLv2+
#
# 20190321 raf <raf@raf.org>

function DHCLIENT() {

	# Do nothing if GET isn't defined (get.sh hasn't been sourced yet)
	[ $(declare -f GET | /usr/bin/wc -l) = 0 ] && return

	# Do nothing if we've already done it
	[ $(declare -f orig_GET | /usr/bin/wc -l) != 0 ] && return

	# Stop the DHCP server if it is running
	/bin/systemctl status isc-dhcp-server && /bin/systemctl stop isc-dhcp-server

	# Bring down the usb0 network interface
	/sbin/ifdown usb0

	# Bring it up again as a DHCP client
	/sbin/dhclient usb0

	# Rename the standard GET function before we replace it
	eval "$(echo "orig_GET()"; declare -f GET | tail -n +2)"
	export -f orig_GET

	# Replace GET so that TARGET_IP, TARGET_HOSTNAME and HOST_IP work
	function GET() {
		case "$1" in
			"TARGET_IP")
				export TARGET_IP=$(awk '/option routers/ { tip = substr($3, 1, length($3)-1) } END { print tip }' /var/lib/dhcp/dhclient.leases)
				;;
			"TARGET_HOSTNAME")
				export TARGET_HOSTNAME=$(awk '/server-name/ { thn = substr($2, 2, length($2)-3) } END { print thn }' /var/lib/dhcp/dhclient.leases)
				;;
			"HOST_IP")
				export HOST_IP=$(awk '/fixed-address/ { hip = substr($2, 1, length($2)-1) } END { print hip }' /var/lib/dhcp/dhclient.leases)
				;;
			*)
				orig_GET "$1"
				;;
		esac
	}
}

export -f DHCLIENT

