#!/bin/bash
#
# Title:         OSX Extension
# Description:   Allow a bunch of osx interaction
# Author:        quentin_lamamy <contact@quentin-lamamy.fr>
# Version:       2.0
# Category:      Extension

function OSX() {

   case $1 in

      "TERMINAL")

         case $2 in

            # @desc  Open a terminal
            # @usage OSX TERMINAL OPEN
            "OPEN")
               Q GUI SPACE
               Q STRING terminal
               Q ENTER
            ;;

            # @desc  Initialize the terminal
            #        Make the PS1 nicer (just because I like it)
            #        Grab Host information and store it in BB_OSX vars
            # @usage OSX TERMINAL INIT
            # @info  This command need a focused terminal
            "INIT")

               Q STRING "bash"
               Q ENTER
               Q STRING "clear"
               Q ENTER
               Q STRING "printf '\e7'"
               Q ENTER
               Q STRING "export PS1='\e[0;31mbashbunny>\e[m '"
               Q ENTER
               Q STRING 'BB_HOST_USER=$(whoami)'
               Q ENTER

               Q STRING 'BB_HOST_NAME=$(hostname)'
               Q ENTER

               Q STRING "BB_HOST_OS='OSX'"
               Q ENTER

               Q STRING 'BB_HOST_IP_V4=$(curl -s ipinfo.io/ip)'
               Q ENTER

               Q STRING 'BB_HOST_IP_V6=$(curl -s ident.me)'
               Q ENTER

               Q STRING "printf '\e8\e[1A\e[0J'"
               Q ENTER

            ;;
                 
            # @desc  Minimize the terminal
            # @usage OSX TERMINAL MINIMIZE
            # @info  This command need a focused terminal
            "MINIMIZE")
                  Q STRING 'printf \e[2t'
                  Q ENTER
            ;;

            # @desc  Resize the focused terminal
            # @usage OSX TERMINAL RESIZE $width $height
            # @param <integer> $width  The terminal width
            # @param <integer> $height The terminal height
            # @info  This command need a focused terminal
            "RESIZE")
               Q STRING "printf '\e[8;'$4';'$3't' && printf '\e[2A\e[K\e[0J'"
               Q ENTER
            ;;
               
            # @desc  Clear the focused terminal
            # @usage OSX TERMINAL ZOOM
            # @info  This command need a focused terminal
            "CLEAR")
               Q STRING clear
               Q ENTER
            ;;
                 
            # @desc  Close all terminal
            # @usage OSX TERMINAL CLOSE
            # @info  This command need a focused terminal
            "CLOSE")
               Q STRING history -c
               Q ENTER
               Q STRING killall Terminal
               Q ENTER
            ;;
               
            # @desc Change terminal window name
            # @usage OSX TERMINAL NAME <WINDOW_NAME>
            # @info This command need a focused terminal
            "NAME")
               Q STRING "printf '\033]0;'$3'\007' && printf '\e[2A\e[K\e[0J'"
               Q ENTER
            ;;

         esac
        
      ;;

      "NETWORK")
         
         case $2 in

            "WIFI")

               case $3 in
               
                  # @desc  Enable wifi
                  # @usage OSX NETWORK WIFI ENABLE
                  "ENABLE")
                     Q STRING "networksetup -setairportpower en0 on"
                     Q ENTER
                  ;;
                  
                  # @desc  Disable wifi 
                  # @usage OSX NETWORK WIFI DISABLE
                  "DISABLE")
                     Q STRING "networksetup -setairportpower en0 off"
                     Q ENTER
                  ;;
                  
                  # @desc  Connect to a wifi network
                  # @usage OSX NETWORK CONNECT $ssid $password
                  # @arg   <string> Wifi SSID
                  # @arg   <string> Wifi Password
                  "CONNECT")
                     Q STRING "networksetup -setairportnetwork en0 $4 $5"
                     Q ENTER
                  ;;

               esac

            ;;
               
            "ETHERNET")
            ;;

            esac
      ;;
        
      "SESSION")

         case $2 in

            # @desc Shutdown the computer
            # @usage OSX SESSION SHUTDOWN
            "SHUTDOWN")
               Q STRING "osascript -e 'tell app \"System Events\" to shut down'"
               Q ENTER
            ;;

            # @desc Restart the computer
            # @usage OSX SESSION RESTART
            "RESTART")
               Q STRING "osascript -e 'tell app \"System Events\" to restart'"
               Q ENTER
            ;;

            # @desc  Lock the computer
            # @usage OSX SESSION LOCK
            "LOCK")
               Q STRING "osascript -e 'tell app \"System Events\" to sleep'"
               Q ENTER
            ;;

            # @desc  Logout current session
            # @usage OSX SESSION LOGOUT
            "LOGOUT")
               Q STRING "osascript -e 'tell app \"System Events\" to log out'"
               Q ENTER
            ;;

            "GET_USER")
               #Q STRING "BB_OSX_USER=$(who | grep console | cut -d ' ' -f 1)"
               Q STRING 'BB_OSX_USER=$(whoami)'
               Q ENTER
            ;;

         esac
               
      ;;
          
      "SOUND")

         case $2 in

         "PLAY")
            Q STRING "afplay $3"
         ;;

         # @desc  Change the computer volume
         # @usage OSX MISC VOLUME $volumeValue
         # @arg   <integer> An integer between 0 and 10
         "VOLUME")
            Q STRING "osascript -e 'set Volume $3'"
            Q ENTER
         ;;

         esac
      ;;

      "NOTIFICATION")

         case $2 in

            "CLEAR")
               Q STRING "ps -e | grep /NotificationCenter | grep app | cut -d ' ' -f 1 | xargs kill -9 && printf '\e[2A\e[K\e[0J'"
               Q ENTER
            ;;

            "DISPLAY")

               if [ -z $6]; then
                  $6=${1:-"Purr"}
               fi

               Q STRING "osascript -e 'display notification \"$3\" with title \"$4\" subtitle \"$5\" sound name \"$6\"'"
               Q ENTER  
            ;;

         esac


      ;;

      "MISC")

         case $2 in

            # @desc  Show or hide desktop icon
            # @usage OSX MISC DESKTOP_ICON $action
            # @arg   <string> HIDE | void
            "DESKTOP_ICON")
               if [ $3 == "HIDE" ]; then
                  Q STRING "defaults write com.apple.finder CreateDesktop -bool false && killall Finder"
                  Q ENTER
               else
                  Q STRING "defaults write com.apple.finder CreateDesktop -bool true && killall Finder"
                  Q ENTER
               fi
            ;;

            # @desc  Change wallpaper with the specified url image
            # @usage OSX MISC WALLPAPER_URL
            "WALLPAPER_URL")
               Q STRING "cd ~/Desktop"
               Q ENTER
               Q STRING "curl $3 > img.bb"
               Q ENTER
               Q STRING "sqlite3 ~/Library/Application\ Support/Dock/desktoppicture.db \"update data set value = '~/Desktop/img.bb'\" && killall Dock"
               Q ENTER
            ;;

            # @desc  Say something in the way of bigben
            # @usage OSX MISC SAY <VOICE> <TEXT_TO_SAY>
            # @info  Need a focused terminal
            "SAY")
               Q STRING "say -v $3 $4 && printf '\e[2A\e[K\e[0J'"
               Q ENTER
            ;;

         esac

      ;;

   esac

}

export -f OSX
