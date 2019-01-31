#!/bin/bash

# Title:     Mac_Happy
# Author:    thehappydinoa
# Target:    macOS
# Version:   0.3
#
# Makes Mac happy by correctly setting pid and vid
# Use by running MAC_HAPPY HID/ETHERNET/...
#

function MAC_HAPPY() {
    [[ "$#" -gt 1 ]] || exit 1
    case "$1" in
        HID)
            ATTACKMODE HID vid_0x05ac pid_0x021e
            ;;
        ETHERNET)
            ATTACKMODE ECM_ETHERNET vid_0x05ac pid_0x021e
            ;;
        ATTACKMODE)
            eval "$@ vid_0x05ac pid_0x021e"
            ;;
        *)
            exit 1
            ;;
    esac
}
export -f MAC_HAPPY
