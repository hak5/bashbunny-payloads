#!/bin/bash
#
# WAIT v1 by @Hak5Darren
# Waits blocks the payload from continuing until the switch position has changed
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
