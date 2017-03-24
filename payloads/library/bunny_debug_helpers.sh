#!/bin/bash

################################################################################
# Allow Debugging messages written to: "/root/udisk/debug/debug.txt"
# on the BashBunny
#
# How this works?
# 1) Write text to the debug file with:
#       echo "DEBUG MESSAGE" >> "${DEBUG_FILE}"
# 2) After attack, Text can be read at: "/root/udisk/debug/debug.txt"
# on the BashBunny
################################################################################

################################################################################
# Start Debug
################################################################################

start_debug() {
	DEBUG_FILE="/root/udisk/debug/debug.txt"
    if [ ! -d "/root/udisk/debug" ]; then
      mkdir /root/udisk/debug
    fi
    touch "${DEBUG_FILE}"
    echo "DEBUG STARTED" >> "${DEBUG_FILE}"
}

start_debug
export DEBUG_FILE