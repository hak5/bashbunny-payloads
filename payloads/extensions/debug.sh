#!/bin/bash

################################################################################
# Allow Debugging messages written to: "/root/udisk/debug/[session].txt"
# on the BashBunny
#
# How this works?
# 1) Example Command: DEBUG "switch-1-debug" "Hello from debug extension!"
# 2) After bashing, text can be read at: "/root/udisk/debug/[session].txt"
#    on the BashBunny
################################################################################

function DEBUG() {
    session = $1
    message = $2

    init_debug
    debug_log

    timestamp () {
        echo "$(date +"%Y-%m-%d_%H-%M-%S")"
    }

    init_debug () {
        DEBUG_FILE="/root/udisk/debug/$(session).txt"
        if [ ! -d "/root/udisk/debug/" ]; then
          mkdir /root/udisk/debug/
        fi
        if [ ! -f "/root/udisk/debug/${DEBUG_FILE}" ]; then
            touch "${DEBUG_FILE}"
            echo "$(timestamp): DEBUG STARTED" >> "${DEBUG_FILE}"
        fi
    }

    debug_log () {
        echo "$(timestamp): $(message)" >> "${DEBUG_FILE}"
    }
}

export -f DEBUG
