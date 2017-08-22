# Nmapper for Bash Bunny

- Author: Hak5Darren
- Version: Version 1.1
- Target: multi
- Category: Enumeration


## Description

Scans target with nmap using specified options
Saves sequential logs to mass storage loot folder

## Configuration

Configured for Windows by default. Swap RNDIS_ETHERNET for ECM_ETHERNET on Mac/*nix
Uncomment ATTACKMODE at the bottom of this payload to enable switching to USB Mass Storage when scan completes.

## STATUS

| LED     | Status                                |
| ------- | ------------------------------------- |
| SETUP   | Setup                                 |
| FAIL    | Setup Failed. Target didn't obtain IP |
| ATTACK  | Scanning                              |
| CLEANUP | Syncing file system                   |
| FINISH  | Finished                              |

## Discussion

[Hak5 Forum Thread](https://forums.hak5.org/index.php?/topic/40224-payload-nmapper/ "Hak5 Forum Thread")
