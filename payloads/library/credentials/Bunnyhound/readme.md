# Bunnyhound
* Author: golem445
* Version: 1.0
* Target: Windows Domains

## Description

Sets up Ethernet and HID keyboard interfaces simultaneously,
then uses HID to import Sharphound into memory via Bash Bunny
web server and execute the attack. Results are exported to
the loot directory via SMB. 

Note: This module will bypass network restrictions on USB
disk drives as only a network card and keyboard are emulated.

## Requirements

Impacket and gohttp should be installed

## STATUS

| Status              | Description                              |
| ------------------- | ---------------------------------------- |
| Flashing Red        | Impacket or gohttp not found             |
| Solid Violet        | Setup for attack                         |
| Flashing Amber      | Attack in progress                       |
| Flashing Cyan       | Cleaning up                              |
| Solid Green         | Attack complete                          |

## Credits

* Hak5Darren for SMB exfil