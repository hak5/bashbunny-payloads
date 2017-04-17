#!/bin/bash
#
# SETKB v2.0 by @elkentaro
# Simplifies executing commands from HID attacks for different language keyboards. on Windows by using Powershell.
# Usage: SETKB en-US [give the command the 2 letter combination of keyboard settings]
#
# Examples:
# SETKB START (set the keyboard layout to a US keyboard layout)
# SETKB DONE (set the keyboard layout to the default keyboard determined by the OS language settings)
# SETKB xx-XX (overwrite the keyboard layout to whatever keyboard layout you need, you will need the [lanugage].json file to run Ducky scripts) 
# One caveat is that the "-" keycode has to be set to the appropriate key code. Not an issue for most might be an issue for some.
# The simplist way to counter this is to edit the us.json file and change the keycode for "-" to "00:00:56" which is the keypad "-"  
# this will work even if your original keyboard doesnt have a numpad.

function SETKB() {
   local state=$1
   shift
   
   [[ -z "$state" ]] && exit 1 # state keyboard parameter must be given.
   
   case "$state" in
      'START')
         QUACK GUI r
         QUACK DELAY 500
         QUACK STRING "powershell.exe Set-WinUserLanguageList -LanguageList en-US -force;"
         QUACK ENTER
         QUACK DELAY 1500

         ;;
      'DONE')
         QUACK GUI r
         QUACK DELAY 500
         QUACK "STRING powershell.exe \$back2kb=(get-Culture | Select -ExpandProperty Name) ; Set-WinUserLanguageList -LanguageList \$back2kb -force; "
         QUACK ENTER
         QUACK DELAY 1500

         ;;    
         
      *)
         QUACK GUI r
         QUACK DELAY 500
         QUACK "STRING powershell.exe Set-WinUserLanguageList -LanguageList $state -force"
         QUACK ENTER
         QUACK DELAY 1500

         ;;    



   esac
}

export -f SETKB
