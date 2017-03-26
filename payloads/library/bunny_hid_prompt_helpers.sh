#!/bin/bash

################################################################################
# Quickly get to a prompt on any platform with the BashBunny
#
# How this works?
# 1) Once the library is included in your payload, launch terminal\powershell\run
#    with:
#       open_prompt "${OS}"
# 2) OS options are:
#       "AUTO"       : Default - Hak5 2124 cross platform code
#       "UNITY"      : Launches Terminal in Unity
#       "UNITY_RUN"  : Opens run prompt in Unity
#       "MAC"        : Launches Terminal in OSX
#       "POWERSHELL" : Launches Powershell in Windows
#       "WINDOWS_RUN": Opens run prompt in Windows
# 3) To close a prompt use:
#       close_prompt "${OS}"
################################################################################

################################################################################
# Start HID Prompt
################################################################################

#FUNCTIONS
wait_enter_wait() {
    if [ -z "$1" ]; then
        BEFORE_WAIT=100
    else
        BEFORE_WAIT=$1
    fi
    if [ -z "$2" ]; then
        AFTER_WAIT=100
    else
        AFTER_WAIT=$2
    fi

    QUACK DELAY ${BEFORE_WAIT}
    QUACK ENTER
    QUACK DELAY ${AFTER_WAIT}
}

clear_active_input() {
    QUACK DELAY 50
    QUACK BACKSPACE
    QUACK DELAY 100
}

open_prompt() {
if [ -z "$1" ]; then
    OS="AUTO"
else
    OS=$1
fi

#AUTO
if [ "${OS}" = "AUTO" ]; then
    LED G B 100
    QUACK ALT F2
    QUACK DELAY 50
    QUACK GUI SPACE
    QUACK DELAY 50
    QUACK GUI r
    clear_active_input
    wait_enter_wait 200 1000
fi

#UNITY
if [ "${OS}" = "UNITY" ]; then
    LED R B 100
    QUACK GUI
    clear_active_input
    QUACK STRING terminal
    wait_enter_wait 200 1000
fi

#UNITY_RUN
if [ "${OS}" = "UNITY_RUN" ]; then
    LED R B 100
    QUACK ALT F2
fi

#MAC
if [ "${OS}" = "MAC" ]; then
    LED R B G 100
    QUACK GUI SPACE
    clear_active_input
    QUACK STRING terminal
    wait_enter_wait 200 1000
fi

#POWERSHELL
if [ "${OS}" = "POWERSHELL" ]; then
    LED B 100
    QUACK GUI
    QUACK DELAY 500
    QUACK powershell
    wait_enter_wait 200 1000
fi

#WINDOWS_RUN
if [ "${OS}" = "WINDOWS_RUN" ]; then
    LED B 100
    QUACK GUI r
    QUACK DELAY 500
fi

LED 0

}

close_prompt() {
    if [ -z "$1" ]; then
        QUACK ALT F4
    else
        if [ "$1" = "MAC" ]; then
            QUACK GUI w
        else
             QUACK ALT F4
         fi
    fi
}

#END fUNCTIONS