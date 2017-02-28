#!/bin/bash

################################################################################
# Get target ip address and hostname from dhcp lease.
# This is for the attack mode of ETHERNET specified.
# Without ETHERNET specified, below environment variables will be empty.
#
# How this works?
# 1) ATTACKMODE waits until:
#    a) target ip address is negotiated by dhcp
#    b) time out
# 2) After ATTACKMODE, we can get target ip address and hostname.
################################################################################
leasefile="/var/lib/dhcp/dhcpd.leases"
export TARGET_IP=$(cat $leasefile | grep ^lease | awk '{ print $2 }' | sort | uniq)
export TARGET_HOSTNAME=$(cat $leasefile | grep hostname | awk '{print $2 }' \
		| sort | uniq | tail -n1 | sed "s/^[ \t]*//" | sed 's/\"//g' | sed 's/;//')
export HOST_IP=$(cat /etc/network/interfaces.d/usb0 | grep address | awk {'print $2'})

