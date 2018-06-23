#!/bin/bash
#
# RUN v1 by @Hak5Darren
# Simplifies executing commands from HID attacks for various targets
# Usage: RUN [OS] [Command to execute]
#
# Examples:
# RUN WIN notepad.exe
# RUN WIN "powershell -Exec Bypass \"tree c:\\ > tree.txt; type tree.txt\"
# RUN OSX http://www.example.com
# RUN UNITY xterm

function RUN() {
   local os=$1
   shift

   [[ -z "$os" || -z "$*" ]] && exit 1 # Both OS and Command parameter must be set

   case "$os" in
      WIN)
         QUACK GUI r
         QUACK DELAY 500
         QUACK STRING "$@"
         QUACK ENTER
         ;;
      OSX)
         QUACK GUI SPACE
         QUACK DELAY 500
         QUACK STRING "$@"
         QUACK DELAY 500
         QUACK ENTER
         ;;
      UNITY)
         QUACK ALT F2
         QUACK DELAY 500
         QUACK STRING "$@"
         QUACK DELAY 500
         QUACK ENTER
         ;;
      LINUX)
         QUACK ALT F2
         QUACK DELAY 500
         QUACK STRING "$@"
         QUACK DELAY 500
         QUACK ENTER
         ;;
      *)
         # OS parameter must be one of the above
         exit 1
         ;;
   esac
}

export -f RUN
