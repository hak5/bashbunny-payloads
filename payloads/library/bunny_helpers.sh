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

################################################################################
# Get switch position
# Taken from bash_bunny.sh
################################################################################

check_switch() {
	switch1=`cat /sys/class/gpio_sw/PA8/data`
	switch2=`cat /sys/class/gpio_sw/PL4/data`
	switch3=`cat /sys/class/gpio_sw/PL3/data`
	echo "--- switch1 = $switch1, switch2 = $switch2, switch3 = $switch3"
	if [ "x$switch1" = "x0" ] && [ "x$switch2" = "x1" ] && [ "x$switch3" = "x1" ]; then
		SWITCH_POSITION="switch1"
	elif [ "x$switch1" = "x1" ] && [ "x$switch2" = "x0" ] && [ "x$switch3" = "x1" ]; then
		SWITCH_POSITION="switch2"
	elif [ "x$switch1" = "x1" ] && [ "x$switch2" = "x1" ] && [ "x$switch3" = "x0" ]; then
		SWITCH_POSITION="switch3"
	else
		SWITCH_POSITION="invalid"
	fi
}

check_switch
export SWITCH_POSITION