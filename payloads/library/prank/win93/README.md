# Win93 Prank
* Author: gled
* Version: Version 0.1
* Target: Linux or MacOS ( tested on Linux only, with Chromium installed ), Windows planned

## Description

- First, uses a Ethernet Attack to run an OS detection via NMAP
- Second, uses a HID Attack to launch a fullscreen browser pointing to www.windows93.net
- leaves a log and the last nmap scan result in $LOOTDIR/win93

## Configuration

None needed but:
- you can set the default OS if nmap scan fail to detect ( set DEFAULT_OS to MAC or LINUX )

## STATUS

| LED                | Status                                                  |
| ------------------ | ------------------------------------------------------- |
| Magenta (solid)    | Setting up                                              |
| Yellow (blinking1) | Nmap scan in progress,Ethernet Attack                   |
| Yellow (blinking2) | Os Detection running, remounted as HID                  |
| Yellow (blinking3) | HID attack in progress on the detected OS               |
| Cyan (blinking)    | HID attack in progress on the DEFAULT_OS, detect failed |
| White (blinking)   | Cleaning up and syncin                                  |
| Green (solid)      | Finished, safe to remove the BB                         |
| Red (blinking)     | Error, check the logs                                   |


## Discussion
None yet

## TODO
Relaunch the attack in RDNIS_ETHERNET if no ip has been found previously, to start supporting windows too.
