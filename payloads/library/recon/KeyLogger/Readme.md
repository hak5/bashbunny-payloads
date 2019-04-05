# Keylogger For Bash Bunny

Author: TheDragonkeeper

Version: Version 1

## Description

Dirty keylogger.  Runs a webserver to pull code from for multiOS targeting

Captures all keyboard input without the need for root access
Uses the user keyboard map file for decoding the captured data

## STATUS

| LED              | Status                                                                        |
| ---------------- | ----------------------------------------------------------------------------- |
| Blue flash       | Booting                                                                       |
| Red slow         | Waiting on webserver                                                          |
| Blue Fast        | Identifying Target and deploying accordingly                                  |
| LED OFF          | Capturing data, no led for victim to spot, waiting for switch position change |
| LED Red Fast     | Decoding keys, Then doing any cleanup required                                |
| Green flashing   | Task complete, ready to unplug                                                |

Still WIP, Currently supports linux (tested on ubuntu)
If you want to add payloads for OSX or Windows place them into the switch folder then,
Change TARGET_OS= to 'auto' and add the payloads to lines 15,16 as well as the clean up to lines 40,41  in payload.txt

