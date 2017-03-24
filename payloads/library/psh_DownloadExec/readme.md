# psh_DownloadExec
## Powershell Download and Execute

* Author: LowValueTarget
* Version: Version 1.0
* Target: Windows XP SP3+ (Powershell)
* Category: Powershell
* Attackmodes: HID, Ethernet

## Description

Quick HID attack to retrieve and run powershell payload from BashBunny web server.

## Configuration

Ensure psh.txt exists in payload directory. This is the powershell script that will be downloaded and executed.

## STATUS

| LED                 | Status                                   |
| ------------------- | ---------------------------------------- |
| Amber (fast blink)  | Initialization                           |
| Red                 | No psh.txt present in payload directory  |
| Blue (fast blink)   | HID Attack Stage                         |
| White (fast blink)  | Ethernet Attack Stage                    |
| Green               | Finished                                 |
