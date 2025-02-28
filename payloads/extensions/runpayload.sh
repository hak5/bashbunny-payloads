#!/bin/bash

#Payload selector by Dragonkeeper and edited by Ludicro
#  Allows selecting payloads by amount of switch changes
#
#Step1. put all your payloads into a folder
#
#Step2. in the switch folder make a payload.txt and define the payloads and the dir to use as variables. like so:
#scriptfolder=" /root/udisk/payloads/payloads/ "
#script1="payload1.txt"
#script2="payload2.txt"
# Be sure to include the trailing spaces on either end
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
    # Add debug logging
    #echo "RUN_PAYLOAD started at $(date)" >> /root/udisk/extensions/debug/runpayload_debug.log
    #echo "Number of arguments: $#" >> /root/udisk/extensions/debug/runpayload_debug.log
    #echo "Arguments received: $@" >> /root/udisk/extensions/debug/runpayload_debug.log

    payloadcount=$#
    payloadarray=("$@")
    PAYLOAD=1

    #echo "Payload count: $payloadcount" >> /root/udisk/extensions/debug/runpayload_debug.log
    #echo "Payload array contents:" >> /root/udisk/extensions/debug/runpayload_debug.log
    #for i in "${payloadarray[@]}"; do
    #    echo "  $i" >> /root/udisk/extensions/debug/runpayload_debug.log
    #done


    LED R
    sleep 3
    while [ $payloadcount -ge $PAYLOAD ]; do
       LED R
       GET SWITCH_POSITION
       TEST=$SWITCH_POSITION

       #echo "Current switch position: $TEST" >> /root/udisk/extensions/debug/runpayload_debug.log

       LED B
       sleep 2
       GET SWITCH_POSITION

       #echo "New switch position: $SWITCH_POSITION" >> /root/udisk/extensions/debug/runpayload_debug.log

       if [ $SWITCH_POSITION == $TEST ]; then
           LED G

           FULL_PATH="${payloadarray[0]}${payloadarray[$PAYLOAD]}"
           #echo "Full path to execute: $FULL_PATH" >> /root/udisk/extensions/debug/runpayload_debug.log
           #echo "Checking if file exists: $(ls -la $FULL_PATH)" >> /root/udisk/extensions/debug/runpayload_debug.log
           #echo "Attempting to execute payload..." >> /root/udisk/extensions/debug/runpayload_debug.log
           sed -i 's/\r$//' "$FULL_PATH"
           . "$FULL_PATH" #2>> /root/udisk/extensions/debug/runpayload_debug.log
           #echo "Payload execution result: $?" >> /root/udisk/extensions/debug/runpayload_debug.log

           return
       fi
       LED G FAST
       PAYLOAD=$((PAYLOAD+1))
       sleep 1
    done
}

export -f RUN_PAYLOAD
