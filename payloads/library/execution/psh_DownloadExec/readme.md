# psh_DownloadExec
## Powershell Download and Execute

* Author: LowValueTarget
* Version: Version 1.3
* Target: Windows XP SP3+ (Powershell)
* Category: Powershell
* Attackmodes: HID, RNDIS_Ethernet
* Firmware: >= 1.3

## Description

Quick HID attack to retrieve and run powershell payload from BashBunny web server.

## Configuration

Ensure p.txt exists in payload directory. This is the powershell script that will be downloaded and executed.

## Requirements

### gohttp

gohttp is a standalone simple webserver that is quicker and more stable than python's SimpleHTTPServer.

__Installation__

See Hak5's Tool Thread Here: https://forums.hak5.org/index.php?/topic/40971-info-tools/

## STATUS
```
| Attack Stage        | Description                              |
| ------------------- | ---------------------------------------- |
| Stage 1             | Running Initial Powershell Commands      |
| Stage 2             | Delivering powershell payload            |
```
