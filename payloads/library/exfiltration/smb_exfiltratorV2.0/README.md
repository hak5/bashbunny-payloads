# Faster SMB Exfiltrator V 2.0

* Author: Hak5Darren
* Props: ImNatho, mike111b, madbuda, jblk01
* Version: Version 1.6.1
* Target: Windows XP SP3+ (Powershell)
* Category: Exfiltration
* Attackmodes: HID, Ethernet
 
## Description

Exfiltrates select files from users's documents folder via SMB.
Liberated documents will reside in Bash Bunny loot directory under loot/smb_exfiltrator/HOSTNAME/DATE_TIME

## Configuration

Configured to copy docx, pdf, and xlsx files by default. Change $exfil_ext# in s.ps1 to desired. 

## STATUS

| LED                 | Status                                 |
| ------------------- | -------------------------------------- |
| Red (blinking)      | Impacket not found in /pentest         |
| Yellow Single       | Ethernet Stage                         |
| Yellow Double       | HID Stage                              |
| Cyan                | Receiving files                        |
| White               | Moving liberated files to mass storage |
| Green               | Finished                               |

# NOTICE

As of May 2019, Microsoft has disabled both SMB version 2 along with disallowing anonymous access to an SMB share.
To fix this, first follow these instructions, then you may use both the payload.txt and the s.ps1 files.

# Starting from a fresh Bash Bunny

1. apt update ; apt install gcc
2. pip install impacket
3. cd /tools/
4. wget https://github.com/SecureAuthCorp/impacket/releases/download/impacket_0_9_19/impacket-0.9.19.tar.gz
5. tar -xzvf impacket-0.9.19.tar.gz ; mv -v impacket-0.9.19/ impacket/
6. python impacket/examples/smbserver - ## You should see entries for both a '-username' and a '-password'

Both the username and the password have been set as 'user' and 'Password01' respectively.

# Changes to the payload.txt include:

* Support for SMB version 2 enabled.
* Username and password set to bypass Microsoft's disallowing of anonymous access.
* Authentication to said SMB share with credentials specified in both the payload.txt and s.ps1 files.
