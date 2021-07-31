#!/bin/bash
#
# WAIT v1 by @Hak5Darren
# Pauses payload until the switch position has changed
# Usage: WAIT
function WAIT() {
    GET SWITCH_POSITION
    TEST=$SWITCH_POSITION
    while true
    do GET SWITCH_POSITION
    if [ $SWITCH_POSITION != $TEST ]; then break; fi
    sleep 1
    done
}
export -f WAIT


# WAIT_FOR_LOOT v1 by Korben
# WAIT_FOR_LOOT <file_path> (optional)<refresh interval in seconds>
#
# Example: WAIT_FOR_LOOT /root/loot/captured_keys.txt
# Will return once /root/loot/captured_keys.txt exists
# OR IF FILE ALREADY EXISTS
# Will return once the file line count has increased

function WAIT_FOR_LOOT() {
# Check for refresh interval override
if [ -z "${2}" ]; then
        REFRESH_INTERVAL=1
else
        REFRESH_INTERVAL=$2
fi

if [ -f "${1}" ]; then
        # If file already exists wait for it to change size
        start_count=$(cat $1|wc -l)
        while [ $(cat $1|wc -l) -eq $start_count ]; do
                sleep $REFRESH_INTERVAL
        done
else
        # File doesn't exist, wait for it to be created
        while [ ! -f "${1}" ]; do
                sleep $REFRESH_INTERVAL 
        done
fi
}
export -f WAIT_FOR_LOOT

# WAIT_FOR_TARGET_IP v1 by Hak5Darren
# Pauses payload until target receives IP address
function WAIT_FOR_TARGET_IP() {
    until [ ! -z $(cat /var/lib/dhcp/dhcpd.leases | grep ^lease | awk '{ print $2 }' | sort | uniq) ]; do sleep 1; done
}
export -f WAIT_FOR_TARGET_IP
