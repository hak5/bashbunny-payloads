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
      DATABASE=/root/udisk/payloads/extensions/OSdatabase
      FINGERPRINT=$(cat /var/log/syslog | grep FINGERPRINT | awk '{ print $9 " " $7 }' | sort -u | awk '{ print $2 }' | awk 'END{print}')
      [[ -f $DATABASE ]] || touch $DATABASE
      sed -i $FINGERPRINT > /var/log/syslog
      if [ -f $DATABASE ] ; then
          TARGET_OS=$(cat $DATABASE | grep $FINGERPRINT | awk '{ print $2 }')
          GET TARGET_IP
          if [ -z $TARGET_OS ]; then
              ScanForOS=$(nmap -Pn -O $TARGET_IP -p1 -v2)
              [[ $ScanForOS == *"Too many fingerprints"* ]] && ScanForOS=$(nmap -Pn -O $TARGET_IP --osscan-guess -v2)
              [[ "${ScanForOS,,}" == *"linux"* ]] && export TARGET_OS='LINUX'
              [[ "${ScanForOS,,}" == *"apple"* ]] && export TARGET_OS='MACOS'
              [[ "${ScanForOS,,}" == *"windows"* ]] && export TARGET_OS='WINDOWS'
              [[ -z $TARGET_OS ]] && export TARGET_OS='UNKNOWN'
              echo $FINGERPRINT $TARGET_OS >> $DATABASE
          fi
      fi
      ;;
  esac
}

export -f GET
