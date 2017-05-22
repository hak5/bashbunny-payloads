# Faster SMB Exfiltrator

* Author: Hak5Darren
* Props: ImNatho, mike111b, madbuda
* Version: Version 1.0
* Target: Windows XP SP3+ (Powershell)
* Category: Exfiltration
* Attackmodes: HID, Ethernet
 
## Description

Exfiltrates select files from users's documents folder via SMB.
Liberated documents will reside in Bash Bunny loot directory under loot/smb_exfiltrator/HOSTNAME/DATE_TIME

Rewrite of the original SMB Exfiltrator payload with:
* Faster copying, using robocopy multithreaded mode
* Faster finish, using a EXFILTRATION_COMPLETE file
* Offload logic to target PC for accurate date/time
* Clears tracks by default without second run dialog
* Test-Connection handling by ICMP (no lame sleeps)
* Hidden powershell window by default


## Configuration

Configured to copy docx files by default. Change $exfil_ext in s.ps1 to desired. 

## STATUS

| LED                 | Status                                 |
| ------------------- | -------------------------------------- |
| Red (blinking)      | Impacket not found in /pentest         |
| Magenta (blinking)  | HID Stage                              |
| Magenta             | Ethernet Stage                         |
| Magenta/Blue        | Receiving files                        |
| White               | Moving liberated files to mass storage |
| Green               | Finished                               |