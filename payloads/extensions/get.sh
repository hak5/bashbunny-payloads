#!/bin/bash

function GET() {
	case $1 in
		"TARGET_IP")
			export TARGET_IP=$(cat /var/lib/dhcp/dhcpd.leases | grep ^lease | awk '{ print $2 }' | sort | uniq)
			;;
		"TARGET_HOSTNAME")
			export TARGET_HOSTNAME=$(cat /var/lib/dhcp/dhcpd.leases | grep hostname | awk '{print $2 }' | sort | uniq | tail -n1 | sed "s/^[ \t]*//" | sed 's/\"//g' | sed 's/;//')
			;;
		"HOST_IP")
			export HOST_IP=$(cat /etc/network/interfaces.d/usb0 | grep address | awk {'print $2'})
			;;
		"SWITCH_POSITION")
			[[ "$(cat /sys/class/gpio_sw/PA8/data)" == "0" ]] && export SWITCH_POSITION="switch1" && return
			[[ "$(cat /sys/class/gpio_sw/PL4/data)" == "0" ]] && export SWITCH_POSITION="switch2" && return
			[[ "$(cat /sys/class/gpio_sw/PL3/data)" == "0" ]] && export SWITCH_POSITION="switch3" && return
			export SWITCH_POSITION="invalid"
			;;
		"OS")
			LOOTDIR = '/root/udisk/loot/nmap'
			GET TARGET_IP
			nmap -O -sV --osscan-guess $TARGET_IP > $LOOTDIR/nmap_results.log
			grep -i 'linux' $LOOTDIR/nmap_results.log
			RES=$?
			if [ $RES -eq 0 ]
			then
			    export OS='LINUX'
			else
			    grep -v 'MAC Address' $LOOTDIR/nmap_results.log | grep -i 'mac'
			    RES=$?
				if [ $RES -eq 0 ]
			    then
			       export OS='MAC'
			    else
			       grep -i 'windows' $LOOTDIR/nmap_results.log
			       RES=$?
				   if [ $RES -eq 0 ]
			       then
			          export OS='WIN'
			       else
			          export OS=$DEFAULT_OS
				  	fi
			   	fi
		   	fi
			;;
	esac
}

export -f GET
