#!/bin/bash

function GET() {
  TIMEOUT=$2
  [[ -z "$2" ]] && TIMEOUT=0
  WAITED=0
  case $1 in
    "TARGET_IP")
      export TARGET_IP=$(tac /var/lib/dhcp/dhcpd.leases | grep ^lease | awk '{print $2}')
      while [[ -z $TARGET_IP && $WAITED -lt $TIMEOUT ]]; do
        sleep 1
        ((WAITED++))
	export TARGET_IP=$(tac /var/lib/dhcp/dhcpd.leases | grep ^lease | awk '{print $2}')
      done
      ;;
    "TARGET_HOSTNAME")
      export TARGET_HOSTNAME=$(tac /var/lib/dhcp/dhcpd.leases | grep hostname | awk '{print $2}' | sed "s/^[ \t]*//" | sed 's/[\";]//g')
      while [[ -z $TARGET_HOSTNAME && $WAITED -lt $TIMEOUT ]]; do
        sleep 1
	((WAITED++))
	export TARGET_HOSTNAME=$(tac /var/lib/dhcp/dhcpd.leases | grep hostname | awk '{print $2}' | sed "s/^[ \t]*//" | sed 's/[\";]//g')
      done
      ;;
    "HOST_IP")
      export HOST_IP=$(cat /etc/network/interfaces.d/usb0 | grep address | awk {'print $2'})
      while [[ -z $HOST_IP && $WAITED -lt $TIMEOUT ]]; do
        sleep 1
        ((WAITED++))
        export HOST_IP=$(cat /etc/network/interfaces.d/usb0 | grep address | awk {'print $2'})
      done
      ;;
    "SWITCH_POSITION")
      [[ "$(cat /sys/class/gpio_sw/PA8/data)" == "0" ]] && export SWITCH_POSITION="switch1" && return
      [[ "$(cat /sys/class/gpio_sw/PL4/data)" == "0" ]] && export SWITCH_POSITION="switch2" && return
      [[ "$(cat /sys/class/gpio_sw/PL3/data)" == "0" ]] && export SWITCH_POSITION="switch3" && return
      export SWITCH_POSITION="invalid"
      ;;
    "TARGET_OS")
      TARGET_IP=$(cat /var/lib/dhcp/dhcpd.leases | grep ^lease | awk '{ print $2 }' | sort | uniq)
      ScanForOS=$(nmap -Pn -O $TARGET_IP -p1 -v2)
      [[ $ScanForOS == *"Too many fingerprints"* ]] && ScanForOS=$(nmap -Pn -O $TARGET_IP --osscan-guess -v2)
      [[ "${ScanForOS,,}" == *"windows"* ]] && export TARGET_OS='WINDOWS' && return
      [[ "${ScanForOS,,}" == *"apple"* ]] && export TARGET_OS='MACOS' && return
      [[ "${ScanForOS,,}" == *"linux"* ]] && export TARGET_OS='LINUX' && return
      export TARGET_OS='UNKNOWN'
      ;;
      "BB_LABEL")
      export BB_LABEL=$(ls -l /dev/disk/by-label/ | awk '/nandf$/ { print $9 }')
      ;;

  esac
}

export -f GET
