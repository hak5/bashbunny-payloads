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
    "TARGET_OS")
      ScanForOS=$(nmap -Pn -O $TARGET_IP -p1)
      [[ $ScanForOS == *"Too many fingerprints"* ]] && ScanForOS=$(nmap -Pn -O --osscan-guess $TARGET_IP)
      [[ $ScanForOS == *"Windows"* ]] && export TARGET_OS='WINDOWS' && return
      [[ $ScanForOS == *"Linux"* ]] && export TARGET_OS='LINUX' && return
      [[ $ScanForOS == *"Apple"* ]] && export TARGET_OS='MACOS' && return
      export TARGET_OS='UNKNOWN'
      ;;
  esac
}

export -f GET
