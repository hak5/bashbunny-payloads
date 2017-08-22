#!/bin/bash

################################################################################
# Allow Debugging messages written to: "/root/udisk/debug/debug_[timestamp].txt"
# on the BashBunny
#
# How this works?
# 1) Once the library is included in your payload, write text to
#    the debug file with:
#	    debug_log "DEBUG MESSAGE"
#	    (To write to log with timestamps)
#	    OR
#       echo "DEBUG MESSAGE" >> "${DEBUG_FILE}"
#	    (To write to log without timestamps)
#
# 2) After attack, Text can be read at: "/root/udisk/debug/debug_[timestamp].txt"
#    on the BashBunny
# 3) To turn off debugging, pass the OFF command when including the helper
#       source debug.sh OFF
################################################################################

################################################################################
# Start Debug
################################################################################
if [ "$1" = "OFF" ]; then
    DEBUG_STATE="OFF"
else
    DEBUG_STATE="ON"
fi

timestamp () {
    echo "$(date +"%Y-%m-%d_%H-%M-%S")"
}

start_debug () {
    DEBUG_FILE="/root/udisk/debug/debug_$(timestamp).txt"
    if [ ! -d "/root/udisk/debug/" ]; then
      mkdir /root/udisk/debug/
    fi
    touch "${DEBUG_FILE}"
    echo "$(timestamp): DEBUG STARTED" >> "${DEBUG_FILE}"
}

debug_log () {
    echo "$(timestamp): ${1}" >> "${DEBUG_FILE}"
}

if [ "${DEBUG_STATE}" = "ON" ]; then
    start_debug
else
    DEBUG_FILE="/dev/null/"
fi

export -f DEBUG_FILE
