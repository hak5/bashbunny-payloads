#!/bin/bash
###############################################################################
#           _____  _____  _____  _____     _____  _____  _____  _____  __ __  #
# (\___/)  | __  ||  _  ||   __||  |  |   | __  ||  |  ||   | ||   | ||  |  | #
# (='.'=)  | __ -||     ||__   ||     |   | __ -||  |  || | | || | | ||_   _| #
# (")_(")  |_____||__|__||_____||__|__|   |_____||_____||_|___||_|___|  |_|   #  
#                           Bash Bunny by Hak5 USB Attack/Automation Platform #
#                                                                             #
###############################################################################
#                                                                             #
# Title:         OSX Extension                                                #
# Author:        Quentin Lamamy <contact@quentin-lamamy.fr>                   #
# Description    Various function for OSX                                     #
# Version:       1.1                                                          #
# Platform       OSX                                                          #
#                                                                             #
###############################################################################

function OSX() {

     case $1 in
     
          "TERMINAL")
          
               case $2 in
               
                    # @desc  Open a terminal
                    # @usage OSX TERMINAL OPEN
                    "OPEN")
                         Q CTRL SPACE
                         Q STRING terminal
                         Q ENTER
                    ;;
                    
                    # @desc  Initialize the terminal to become more clear (make the difference with previous session terminal command)
                    # @usage OSX TERMINAL MINIMIZE
                    # @info  This command need a focused terminal
                    "INIT")
                         Q STRING "export PS1='\e[0;31mbashbunny>\e[m '"
                         Q ENTER
                         Q STRING "clear"
                         Q ENTER
			           ;;
                    
                    # @desc  Minimize the terminal
                    # @usage OSX TERMINAL MINIMIZE
                    # @info  This command need a focused terminal
		              "MINIMIZE")
                         Q STRING 'printf \\e[2t'
                         Q ENTER
			           ;;

                    # @desc  Maximize the terminal
                    # @usage OSX TERMINAL MAXIMIZE
		              "MAXIMIZE")
                        # Trying to lauch an already opened app maximize it
                         Q CTRL SPACE
                         Q STRING terminal
                         Q ENTER    
			           ;;
                    
                    # @desc  Hide the focused terminal
                    # @usage OSX TERMINAL HIDE
                    # @info  This command need a focused terminal
		              "HIDE")
                         Q STRING 'printf \\e[6t'
                         Q ENTER
			           ;;
                    
                    # @desc  Show the focused terminal
                    # @usage OSX TERMINAL SHOW
                    # @info  This command need a focused terminal                    
		              "SHOW")
                         Q STRING 'printf \\e[5t'
                         Q ENTER
			           ;;
                    
                    # @desc  Zoom the focused terminal
                    # @usage OSX TERMINAL ZOOM
                    # @info  This command need a focused terminal
		              "ZOOM")
                         Q STRING 'printf \\[9;1t'
                         Q ENTER
			           ;;
                    
                    # @desc  Resize the focused terminal
                    # @usage OSX TERMINAL RESIZE <WIDTH> <HEIGHT>
                    # @param (int) WIDTH
                    # @param (int) HEIGHT
                    # @info  This command need a focused terminal
		              "RESIZE")
                         Q STRING "printf '\e[8;'$3';'$2't'"
                         Q ENTER
			           ;;
                    
                    # @desc  Zoom the focused terminal
                    # @usage OSX TERMINAL ZOOM
                    # @info  This command need a focused terminal                   
 		              "CLEAR")
                         Q STRING "clear"
                         Q ENTER       
			           ;;  
                    
                    # @desc  Close all terminal
                    # @usage OSX TERMINAL CLOSE
                    # @info  This command need a focused terminal 
 		              "CLOSE")
                         Q STRING "killall Terminal"
                         Q ENTER
			           ;;   
                    
                    # @desc Change terminal window name
                    # @usage OSX TERMINAL NAME <WINDOW_NAME>
                    # @info This command need a focused terminal
                    "NAME")
                         Q STRING "printf '\033]0;'$3'\007'"
                         Q ENTER
                    ;;                   
               esac         
          ;;
          "NETWORK")
          
               case $2 in
                                   
                    "WIFI")
                         case $3 in
                         
                              "ENABLE")
                                   Q STRING "networksetup -setairportpower en0 on"
                                   Q ENTER                              
                              ;;
                         
                              "DISABLE")
                                   Q STRING "networksetup -setairportpower en0 off"
                                   Q ENTER                              
                              ;;
                              
                              "CONNECT")
                                   Q STRING "networksetup -setairportnetwork en0 $4 $5"
                                   Q ENTER
                              ;;
                                   
                         esac
                    ;;                   
                    
               esac
          ;;
          "COMPUTER")
          
               case $2 in
               
                    # @desc Shutdown the computer
                    # @usage OSX COMPUTER SHUTDOWN
                    "SHUTDOWN")
                         Q STRING "osascript -e 'tell app \"System Events\" to shut down'"
                         Q ENTER
                    ;;
                    
                    # @desc Restart the computer
                    # @usage OSX COMPUTER RESTART
                    "RESTART")
                         Q STRING "osascript -e 'tell app \"System Events\" to restart'"
                         Q ENTER
                    ;;
                    
                    # @desc  Lock the computer
                    # @usage OSX COMPUTER LOCK 
                    "LOCK")
                         Q STRING "osascript -e 'tell app \"System Events\" to sleep'"
                         Q ENTER
                    ;;
                    
                    # @desc  Logout current session
                    # @usage OSX COMPUTER LOGOUT
                    "LOGOUT")
                         Q STRING "osascript -e 'tell app \"System Events\" to log out'"
                         Q ENTER
                    ;;
                    
                    "VOLUME")
                         Q STRING "osascript -e 'set Volume $3'"
                         Q ENTER
                    ;;
               esac     
          ;;
          "MISC")
          
               case $2 in
               
                    # @desc Display notification
                    # @usage OSX NOTIFICATION
                    "NOTIFICATION")
                         Q STRING "osascript -e 'display notification \"$3\" with title \"$4\" subtitle \"$5\"'"
                         Q ENTER
                    ;;
               
                    "DESKTOP_ICON")
                         if [ $3 == "HIDE" ]; then
                              Q STRING "defaults write com.apple.finder CreateDesktop -bool false && \
                                   killall Finder"
                              Q ENTER
                         else
                              Q STRING "defaults write com.apple.finder CreateDesktop -bool true && \
                                   killall Finder"
                              Q ENTER
                         fi
                    ;;
               esac
     esac
}

export -f OSX