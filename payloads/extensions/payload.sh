#!/bin/bash

#Payload selector by Dragonkeeper
#  Allows selecting payloads by amount of switch changes
#
#  Execution RUN_PAYLOAD "/Payload/folder/" "payload1.txt" "anotherpayload.txt" "awesomepayload.txt"
#
# LED will go red, to let you know its ready.  It is currently about to execute the 1st given payload
# the LED will blue, to let you decide if you want to run that payload.  if yes do nothing, if no flick the switch.
#
# if you flicked the switch, the LED will flash green to indicate this, it will then flick to red and go blue,  it is now on the 2nd given payload and awaiting decision.
#
# if you leave the switch alone while its blue, the LED will go solid green to indicate that the selection is locked in.
# and the payload of the given number will run.
#
# This will let you add as many payloads as you desire.

function RUN_PAYLOAD() {
    payloadcount=$#
    payloadarray=("$@")
    PAYLOAD=1
    LED R
    sleep 3
    while [ $payloadcount -ge $PAYLOAD ]; do
       LED R
       GET SWITCH_POSITION
       TEST=$SWITCH_POSITION
       LED B
       sleep 2
       GET SWITCH_POSITION
       if [ $SWITCH_POSITION == $TEST ]; then
           LED G
           "${payloadarray[0]}""${payloadarray["$PAYLOAD"]}"
           return
       fi
       LED G FAST
       PAYLOAD=$((PAYLOAD+1))
       sleep 1
    done
}

export -f RUN_PAYLOAD
