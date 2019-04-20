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
| WIFI_NAME        | WIFI SSID {string}|
| WIFI_USER    | Wifi username : This is used if enterprise wifi type is selected {string}|
| WIFI_PASS    | Wifi password : used on all wireless connection types {string}|
| WIFI_ANNON | Wifi annonymous id : can be used on enterprise auth {string}|
| ENROL_USER | This is the user account used for device enrolment {string}|
| ENROL_PASS | The password for ENROL_USER {string}|
| - | - |
| WIFI TYPES | Only one of these should be set to y |
| EwWEP | WIFI type: WEP {y/n}|
| EwWPA | WIFI type: WPA {y/n}|
| EwPEAP | WIFI type: PEAP {y/n}|
| EwLEAP | WIFI type: LEAP {y/n}|
| EwEAP | WIFI type: EAP {y/n} |
| - | - |
| checkCERT | Check or ignore WIFI certificate {y/n}|
| SaveWIFI | Set to save wifi connection. isnt needed if enrolment forces a wifi connection {y/n}|
| sendGoogleData | Send analytic data to google... unsure why you would want to but the option is here {y/n} |
| WaitForUpdates | Can wait for updates to complete then flick switch to continue or wait 10secs for the update check then move on {y/n} |
| EwDEFAULT | Do not change this; it is used to check that only one wifi type is set to 'y' else use EwWPA |
| - | - |
| AuthMethod | This defines what you want to use as authentication when using enterprise wifi, set one of the following numbers |
| 0 | auto |
| 1 | EAP-MDS |
| 2 or 3 | MSCHAP  or MSCHAPv2 |
| 4 | PAP |
| 5 | CHAP |
| 6 | GTC |


## STATUS

| LED              | Status                                                                        |
| ---------------- | ----------------------------------------------------------------------------- |
| Blue slow        | Booting                                                                       |
| Red              | Executing                                                                     |
| Green flashing   | Waiting for switch change to continue, used in case any updates are avalible  |
| Green            | Task complete, ready to unplug                                                |