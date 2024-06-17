# Eternal_SAM_Dump
* Author: golem445
* Version: 1.0
* Target: Windows 7, Windows 2008

## Description

This module first tests if a host is vulnerable to MS17-010. If patched, the LED will
turn red. If vulnerable, a blue light will flash and the module will dump the SAM
regardless if the machine is locked. SAM hashes are then exported to the loot directory.

## Requirements

Metaspsloit and Nmap 7.70+ should be installed

## STATUS

| Status              | Description                              |
| ------------------- | ---------------------------------------- |
| Solid Violet        | Setup for attack                         |
| Flashing Red        | Host is patched against MS17-010         |
| Flashing Cyan       | Appears vulnerable, attack in progress   |
| Solid Green         | Attack complete                          |

## Credits

* zerosum0x0 for his work on the Eternalblue Metasploit module