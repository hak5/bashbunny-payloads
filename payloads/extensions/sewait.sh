#!/bin/bash

# Social engineering wait by GermanNoob
#
# This extension can be used if no hidden access to the victim computer is possible and you have to social engineer your way to the target
# This script will mount as a standard drive and wait until the attacker starts the real payload by changing the switch position
#
# This is just a small extension to DarrenKitchen's WAIT

function SEWAIT() {
	LED SPECIAL
	ATTACKMODE STORAGE
	GET SWITCH_POSITION
    TEST=$SWITCH_POSITION
    LED SPECIAL2
    while true
    do GET SWITCH_POSITION
    if [ $SWITCH_POSITION != $TEST ]; then break; fi
    sleep 1
    done
}

export -f SEWAIT
