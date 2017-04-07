# Meterpreter shell on an Amazon Fire TV

* Author: DemmSec
* Version: Version 1.0
* Target: Amazon FireTV (Latest Firmware/Version)


## Description

Enables ADB and Unknown sources via keyboard input on the target Fire TV, then uses ADB to go ahead and install payload.apk from the switch directory and then execute it.

## Requirements

Requires: android-tools-adb
To install this simply share your internet connection with the Bash Bunny. SSH into it and run: apt-get install android-tools-adb

## Configuration

Create a payload APK file and place it in the same directory as payload.txt, plug in and wait.

## STATUS

| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| Purple             | Running keyboard emulation                   |
| Blue Blinking      | Running ADB to push payload to Fire TV       |
| Red Blinking       | Fire TV failed to get an IP address          |
| Green              | Finished                                     |
