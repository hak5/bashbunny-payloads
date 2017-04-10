# QuickCreds for Bash Bunnys

Author: Hak5Darren
Version: Version 1.0
Credit: Mubix
Firmware: >= 1.1

## Description

Snags credentials from locked or unlocked machines 
Based on the attack by Mubix of Room362.com
Implements a responder attack. Saves creds to the loot folder on the USB Disk
Looks for *NTLM* log files

## Configuration

Configured for Windows by default. Swap RNDIS_ETHERNET for ECM_ETHERNET on Mac/*nix

## Requirements

Responder must be in /tools/responder/

## STATUS


| Status              | Description                              |
| ------------------- | ---------------------------------------- |
| FAIL1               | Responder not found at /tools/responder  |
| FAIL2               | Target did not aquire IP address         |

All other LED statuses are standard to v1.1

## Discussion
[Hak5 Forum Thread](https://forums.hak5.org/index.php?/topic/40226-payload-quickcreds/ "Hak5 Forum Thread")
