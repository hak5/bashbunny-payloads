#!/bin/bash

#Title:     Mac_Happy
# Author:    thehappydinoa
# Target:    Mac
# Version:   0.1
#
# Makes Mac happy by correctly setting pid and vid
# Use by running mac_happy ATTACKMODE HID <attack modes here>
#

function mac_happy() {
    [[ -z "$1" ]] && exit 1 # parameter must be set

    [[ ! $1 =~ "ATTACKMODE" ]] && exit 1 # parameter must be for ATTACKMODE

    for i in $*;
    do
        command=$(echo $command $i)
    done

    command=$(echo $command VID_0X05AC PID_0X021E)

    eval $command
}
export -f mac_happy
