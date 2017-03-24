#!/bin/bash

################################################################################
# Cross platform cleanup after an attack
#
# How this works?
# 1) Once the library is included in your payload, clean up with:
################################################################################

################################################################################
# Start Cleanup
################################################################################
if [ "$1" = "OFF" ]; then
    DEBUG_STATE="OFF"
else
    DEBUG_STATE="ON"
fi

timestamp () {
    echo "$(date +"%Y-%m-%d_%H-%M-%S"):"
}

start_debug () {
        DEBUG_FILE="./debug/debug.txt"
    if [ ! -d "./debug" ]; then
      mkdir ./debug
    fi
    touch "${DEBUG_FILE}"
    echo $(timestamp) "DEBUG STARTED" >> "${DEBUG_FILE}"
}

debug_log () {
    echo $(timestamp) "${1}" >> "${DEBUG_FILE}"
}


if [ "${DEBUG_STATE}" = "ON" ]; then
    start_debug
else
    DEBUG_FILE="/dev/null/"
fi

export DEBUG_FILE
