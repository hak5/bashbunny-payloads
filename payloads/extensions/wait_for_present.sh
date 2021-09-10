#!/bin/bash
#
# WAIT_FOR_PRESENT v1 by @Hak5Darren
# Pauses payload execution until specified bluetooth identifier IS present
# Usage: WAIT_FOR_PRESENT devicename

function WAIT_FOR_PRESENT() {
    stty -F /dev/ttyS1 speed 115200 cs8 -cstopb -parenb -echo -ixon -icanon -opost 
    stty -F /dev/ttyS1 speed 115200 cs8 -cstopb -parenb -echo -ixon -icanon -opost 
    sleep 1
    echo -n -e "AT+ROLE=2" > /dev/ttyS1
    echo -n -e "AT+RESET" > /dev/ttyS1
    while true; do
        timeout 5s cat /dev/ttyS1 > /tmp/bt_observation
        if grep -qao $1 /tmp/bt_observation; then
            break
        else
            echo "$1 not found"
        fi
    done
}

export -f WAIT_FOR_PRESENT
