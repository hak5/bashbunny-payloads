# psh_DownloadExec
## Powershell Download and Execute

* Author: LowValueTarget
* Version: Version 1.1
* Target: Windows XP SP3+ (Powershell)
* Category: Powershell
* Attackmodes: HID, RNDIS_Ethernet
* Firmware: >= 1.1

## Description

Quick HID attack to retrieve and run powershell payload from BashBunny web server.

## Configuration

Ensure psh.txt exists in payload directory. This is the powershell script that will be downloaded and executed.

## STATUS
```
| Attack Stage        | Description                              |
| ------------------- | ---------------------------------------- |
| Stage 1             | Running Initial Powershell Commands      |
| Stage 2             | Turning up web server and DHCP           |
| Stage 3             | Delivering powershell payload            |
```