#!/bin/bash

# Title:     Mac_Happy
# Author:    thehappydinoa
# Target:    Mac
# Version:   0.2
#
# Makes Mac happy by correctly setting pid and vid
# Use by running mac_happy ATTACKMODE HID <attack modes here>
#

function MAC_HAPPY() {
    [[ "$#" -gt 1 && "$1" == "ATTACKMODE" ]] || exit 1
    eval "$@ vid_0x05ac pid_0x021e"
}
export -f MAC_HAPPY
