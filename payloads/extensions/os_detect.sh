#!/bin/bash
#
# OS_DETECT v1 by DannyK999
# Creds: gled, Hak5Darren, and Hak5
# Runs OS detection on the target, and returns s variable 'OS', containing the OS.
# Variable value will be either 'WIN', 'OSX', OR 'UNITY'. 
# (This is for compatibility with the RUN extension)
# Based on code by gled, and inspired by Hak5 episode 2304
#
# LED STATUS
# ==========
# SPECIAL1........Stage 1 running - IP test, and Nmap scan.
# SPECIAL2........Stage 2 running - deriving OS from Nmap results.
# FAIL............IP test failed, likely has no OS (i.e. USB powersupply)
#
# Usage: OS DETECT
#
# Example:
# OS DETECT
# ATTACKMODE HID
# RUN $OS http://example.com

function OS_DETECT() {
    LED SPECIAL1
    # Stage 1 - IP Test and Nmap Scan.
    ATTACKMODE ECM_ETHERNET
    sleep 3
    GET TARGET_IP
    LOOTDIR='/root/udisk/loot'
    DEFAULT_OS='UNITY'

    if [ -z "${TARGET_IP}" ]; then
    DEFAULT_OS='WIN'

    ATTACKMODE RNDIS_ETHERNET
    sleep 3
    GET TARGET_IP
    if [ -z "${TARGET_IP}" ]; then
        LED FAIL
        exit 1
    fi
    fi
    nmap -O -sV --osscan-guess $TARGET_IP > $LOOTDIR/nmap_results.log

    LED SPECIAL2
    # Stage 2 - OS Derivation.
    ATTACKMODE HID
    grep -i 'linux' $LOOTDIR/nmap_results.log
    RES=$?
    if [ $RES -eq 0 ]
    then
        DETECTED='UNITY'
    else
        grep -v 'MAC Address' $LOOTDIR/nmap_results.log | grep -i 'mac'
        RES=$?
        if [ $RES -eq 0 ]
        then
        DETECTED='OSX'
        else
        grep -i 'windows' $LOOTDIR/nmap_results.log
        RES=$?
        if [ $RES -eq 0 ]
        then
            DETECTED='WIN'
        else
            DETECTED=$DEFAULT_OS
        fi
        fi
    fi

    #Clean-up and export the OS variable.
    rm $LOOTDIR/nmap_results.log
    export OS=$DETECTED
}

export -f OS_DETECT