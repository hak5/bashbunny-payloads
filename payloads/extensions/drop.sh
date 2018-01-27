#!/bin/bash
#
# DROP v1 by bg-wa
# Simplifies dropping files from HID attacks for LINUX
# Usage: DROP bb_source_file.txt attack_destination_file.txt [overwrite]
#
# Example:
# DROP /root/udisk/payloads/$SWITCH_POSITION/source.txt ~/target_destination.txt true
source ./run.sh

function DROP() {
    local source=$2
    local destination=$3
    local overwrite=$4
   #local os=

    ehco "start" >> "/root/udisk/payloads/${SWITCH_POSITION}/debug.txt"
    RUN terminal
    QUACK DELAY 1000
    QUACK STRING vi "$destination"
    QUACK ENTER
    QUACK DELAY 500
    QUACK STRING i
    ;;
   
   while IFS= read data
    do
        if [ "${data}" = " " ]
        then
           QUACK SPACE
        else
           QUACK STRING "$data"
        fi
    done < "$source"

    QUACK ESC
    if $overwrite
        QUACK STRING :wq!
    else
        QUACK STRING :wq
    fi
    QUACK ENTER
}

export -f DROP
