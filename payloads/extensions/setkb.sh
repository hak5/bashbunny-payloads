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
      QUACK "STRING powershell.exe \$sl=(Get-WinSystemLocale | Select -ExpandProperty Name) ; Set-WinUserLanguageList -LanguageList \$sl -force; "
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
