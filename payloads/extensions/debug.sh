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
    session=$1
    message=$2

    timestamp () {
        echo "$(date +"%Y-%m-%d_%H-%M-%S")"
    }

    mkdir -p /root/udisk/debug/
    debug_file="/root/udisk/debug/${session}.txt"
    [[ -f "${debug_file}" ]] || echo "$(timestamp): DEBUG STARTED" >> "${debug_file}"
    echo "$(timestamp): ${message}" >> ${debug_file}
}

export -f DEBUG
