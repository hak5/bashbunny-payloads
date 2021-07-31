#!/bin/bash
#
# WAIT_FOR_NOTPRESENT v1 by @Hak5Darren
# Pauses payload execution until specified bluetooth identifier IS NOT present
# Usage: WAIT_FOR_NOTPRESENT devicename

function WAIT_FOR_NOTPRESENT() {
    stty -F /dev/ttyS1 speed 115200 cs8 -cstopb -parenb -echo -ixon -icanon -opost 
    stty -F /dev/ttyS1 speed 115200 cs8 -cstopb -parenb -echo -ixon -icanon -opost 
    sleep 1
    echo -n -e "AT+ROLE=2" > /dev/ttyS1
    echo -n -e "AT+RESET" > /dev/ttyS1
    while true; do
        timeout 5s cat /dev/ttyS1 > /tmp/bt_observation
        if grep -qao $1 /tmp/bt_observation; then
            echo "$1 found"
        else
            break
        fi
    done
}

export -f WAIT_FOR_NOTPRESENT
