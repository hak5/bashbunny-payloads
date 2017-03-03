# QuickCreds for Bash Bunnys

Author: Hak5Darren
Version: Version 1.0
Credit: Mubix

## Description

Snags credentials from locked or unlocked machines 
Based on the attack by Mubix of Room362.com
Implements a responder attack. Saves creds to the loot folder on the USB Disk
Looks for *NTLM* log files

## Configuration

Configured for Windows by default. Swap RNDIS_ETHERNET for ECM_ETHERNET on Mac/*nix

## Requirements

Responder must be in /pentest/responder/
Run the latest tools_installer payload or manually install

## STATUS

| LED              | Status                                |
| ---------------- | ------------------------------------- |
| White (blinking) | Dependencies not met                  |
| Red              | Setup                                 |
| Red (blinking)   | Setup Failed. Target didn't obtain IP |
| Amber            | Responder running, waiting for creds  |
| Green            | Finished                              |

## Discussion
[Hak5 Forum Thread](https://forums.hak5.org/index.php?/topic/40226-payload-quickcreds/ "Hak5 Forum Thread")
