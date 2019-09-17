# psh_DownloadExecSMB
## Powershell Download and Execute SMB

* Author: LowValueTarget  
* Version: Version 1.2  
* Target: Windows XP SP3+ (Powershell)  
* Category: Powershell  
* Attackmodes: HID, RNDIS_Ethernet  
* Firmware: >= 1.2  

## Description

Quick HID attack to retrieve and run powershell payload from BashBunny SMBServer. SMB Credentials are stored as loot.  

## Configuration

* Ensure p.txt exists in payload directory. This is the powershell script that will be downloaded and executed.  
* Requires Impacket

__Installation__

See Hak5's Tool Thread Here: https://forums.hak5.org/index.php?/topic/40971-info-tools/

## STATUS

| Attack Stage        | Description                   |
| ------------------- | ------------------------------|
| Stage 1             | Powershell                    |
| Stage 2             | Delivering powershell payload |
