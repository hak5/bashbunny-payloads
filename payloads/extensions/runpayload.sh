#!/bin/bash

#Payload selector by Dragonkeeper
#  Allows selecting payloads by amount of switch changes
#
#Step1. put all your payloads into a folder
#
#Step2. in the switch folder make a payload.txt and define the payloads and the dir to use as variables. like so:
#scriptfolder=" /root/udisk/payloads/payloads/ "
#script1="payload1.txt"
#script2="payload2.txt"
#
#Step3. now call the extension as with the payloads you would like to use 
#RUN_PAYLOAD $scriptfolder $script1 $script2 $script3 $script4
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
