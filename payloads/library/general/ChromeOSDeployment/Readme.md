ChromeOS Deployment For Bash Bunny

Author: TheDragonkeeper

Version: Version 1

## Description

This is the enterprise enrolment process for ChromeOS.
I use this code at work when we get a bulk order in.

WIP im still merging my different payloads into one.

Set the DUCKY_LANG to the correct keyboard to avoid credential mistypes
## Variables
| Vars              | Notes                                                                        |
| ---------------- | ----------------------------------------------------------------------------- |
| ChromePre70        | if the OS is pre 70 then there is a slight variation in key presses so set correctly {y/n}|
| WIFI_USER    | Wifi username : This is used if enterprise wifi type is selected {string}|
| WIFI_PASS    | Wifi password : used on all wireless connection types {string}|
| ENROL_USER | This is the user account used for device enrolment {string}|
| ENROL_PASS | The password for ENROL_USER {string}|
| EwWPA | WIFI type: WPA {y/n}|
| EwPEAP | WIFI type: PEAP {y/n}|
| EwLEAP | WIFI type: LEAP {y/n}|
| checkCERT | Check or ignore WIFI certificate {y/n}|
| sendGoogleData | Send analytic data to google... unsure why you would want to but the option is here {y/n} |
| EwDEFAULT | Do not change this; it is used to check that only one wifi type is set to 'y' else use EwWPA |


## STATUS

| LED              | Status                                                                        |
| ---------------- | ----------------------------------------------------------------------------- |
| Blue slow        | Booting                                                                       |
| Red              | Executing                                                                     |
| Green flashing   | Waiting for switch change to continue, used in case any updates are avalible  |
| Green            | Task complete, ready to unplug                                                |
