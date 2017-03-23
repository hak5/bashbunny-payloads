# SMB Exfiltrator

* Author: Hak5Darren
* Version: Version 1.0
* Target: Windows XP SP3+ (Powershell)
* Category: Exfiltration
* Attackmodes: HID, Ethernet

## Description

Exfiltrates select files from users's documents folder via SMB.
Liberated documents will reside in Bash Bunny loot directory under loot/smb_exfiltrator/HOSTNAME-#

## Configuration

Configured to copy PDF files by default. Change EXFILTRATE_FILES variable to desired. 

## STATUS

| LED                 | Status                                 |
| ------------------- | -------------------------------------- |
| Red (fast blink)    | Impacket not found in /pentest         |
| Red (slow blink)    | Setup Failed. Target didn't obtain IP  |
| Purple              | HID Stage                              |
| Purple (fast blink) | Ethernet Stage                         |
| Blue (interupt)     | Receiving files                        |
| White               | Files received, moving to mass storage |
| Green               | Finished                               |

## Discussion
[Hak5 Forum Thread](https://forums.hak5.org/index.php?/topic/40509-payload-smb-exfiltrator/ "Hak5 Forum Thread")
