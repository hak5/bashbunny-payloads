# psh_DownloadExecSMB
## Powershell Download and Execute SMB

* Author: LowValueTarget  
* Version: Version 1.2  
* Target: Windows XP SP3+ (Powershell)  
* Category: Powershell  
* Attackmodes: HID, RNDIS_Ethernet  
* Firmware: >= 1.2  

## Description

Quick HID attack to retrieve and run powershell payload from BashBunny SMBServer. Credentials are stored as loot.  

## Configuration

* Ensure psh.txt exists in payload directory. This is the powershell script that will be downloaded and executed.  
* Requires Impacket is installed (python ./impacket/setup.py install)  

## STATUS

| Attack Stage        | Description                   |
| ------------------- | ------------------------------|
| Stage 1             | Powershell                    |
| Stage 2             | Delivering powershell payload |