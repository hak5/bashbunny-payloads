#!/bin/bash

################################################################################
# Quickly get to a prompt on any platform with the BashBunny
#
# How this works?
# 1) Once the lobrary is included in your payload, launch terminal\poershell\run
#    with:
#
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
#END fUNCTIONS


open_prompt() {
if [ -z "$1" ]; then
    OS="AUTO"
else
    OS=$1
fi

#AUTO
if [ "${OS}" = "AUTO" ]; then
    LED G B 100
    init_keyboard
    QUACK GUI
    clear_active_input
    QUACK STRING terminal
    wait_enter_wait 200 1000
fi

#UNITY
if [ "${OS}" = "UNITY" ]; then
    LED R B 100
    init_keyboard
    QUACK GUI
    clear_active_input
    QUACK STRING terminal
    wait_enter_wait 200 1000
fi

#UNITY_RUN
if [ "${OS}" = "UNITY_RUN" ]; then
    LED R B 100
    init_keyboard
    QUACK ALT F2
fi

#MAC
if [ "${OS}" = "MAC" ]; then
    init_keyboard "${OS}"
    LED R B G 100
    QUACK GUI SPACE
    clear_active_input
    QUACK STRING terminal
    wait_enter_wait 200 1000
fi

#POWERSHELL
if [ "${OS}" = "POWERSHELL" ]; then
    init_keyboard
    LED B 100
    QUACK GUI
    QUACK DELAY 500
    QUACK powershell
    wait_enter_wait 200 1000
fi

#WINDOWS_RUN
if [ "${OS}" = "WINDOWS_RUN" ]; then
    init_keyboard
    LED B 100
    QUACK GUI r
    QUACK DELAY 500
fi

LED 0

}
