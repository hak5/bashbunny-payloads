#!/bin/bash

# Title: Get OS
# Description: Uses ethernet attack modes to attempt to identify the OS,
#		based on the win93 prank payload code.
# Author: FraterVI
# Version: 0.1
# Category: Extention
# Attackmodes: ECM_ETHERNET and RNDIS_ETHERNET

function GET_OS {
	ATTACKMODE RNDIS_ETHERNET
	QUACK DELAY 3000
	GET TARGET_IP
	if [ -z "${TARGET_IP}" ]; then
		echo "No Target IP" > /dev/null
		ATTACKMODE ECM_ETHERNET
		QUACK DELAY 3000
		GET TARGET_IP
		if [ -z "${TARGET_IP}" ]; then
			LED FAIL3
			OS=FAIL3
			exit 1
		else
			export OS="FAIL3"
		fi
	else
		export OS="WIN"
	fi
	case $OS in
		"FAIL3")
			nmap -O -sV --osscan-guess $TARGET_IP > /root/udisk/loot/nmap_results.log
			grep -v 'unknown-linux' /root/udisk/loot/nmap_results.log | grep -i 'linux'
			RES=$?
			if [ $RES -eq 0 ]; then
				export OS='LINUX'
			else
				grep -v 'MAC Address' /root/udisk/loot/nmap_results.log |grep -i 'mac'
				RES=$?
				if [ $RES -eq 0 ]; then
					OS='MAC'
				else
					OS="FAIL3"
				fi
			fi
			;;
	esac
}

export -f GET_OS
