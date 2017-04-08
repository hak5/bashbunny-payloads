#!/bin/bash
#
# SETKB v1 by @elkentaro
# Simplifies executing commands from HID attacks for different language keyboards. on Windows by using Powershell.
# Usage: SETKB en-US [give the command the 2 letter combination of keyboard settings]
#
# Examples:
# SETKB en-US (set the keyboard layout to a US keyboard layout)
# SETKB ja-JP (set the keyboard layout to a Japanese 106 layout)


function SETKB() {
   local kb=$1
   shift
   
   [[ -z "$kb" ]] && exit 1 # KB keyboard parameter must be given.
   
   case "$kb" in
      'en-US')
         QUACK GUI r
         QUACK DELAY 500
         QUACK STRING "powershell.exe Set-WinUserLanguageList -LanguageList en-US -force"
         QUACK ENTER
         QUACK DELAY 1500

         ;;
      *)
         QUACK GUI r
         QUACK DELAY 500
         QUACK "STRING powershell.exe Set-WinUserLanguageList -LanguageList $kb -force"
         QUACK ENTER
         QUACK DELAY 1500

         ;;       
   esac
}

export -f SETKB
