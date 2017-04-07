# PrivEscChecker
* Author: illwill
* Version: Version 0.1
* Target: Windows

## Description

Checks Windows boxes for unpatched vulns that allow privilege escalation
then stores the result in /root/udisk/loot/PrivEscChecker/%ComputerName%-%username%

Credits to rasta-mouse for their powershell script:
https://github.com/rasta-mouse/Sherlock Sherlock.ps1

Tested on:
+ Windows 7 SP1 32-bit
+ Windows 7 SP1 64-bit
+ Windows 8 64-bit
+ Windows 10 64-bit

## Configuration

Option to change payload.txt to webDL the powershell script by commenting line 47 & uncommenting line 50

## STATUS

| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| Blue (blinking)    | Running Powershell script                    |
| Purple (blinking)  | Checking Results                             |
| Green (blinking)   | Found Possible Privilege Escalation          |
| Red (solid         | No Possible Privilege Escalation             |

## TO-DO
Add more priv checks
Eventually add https://github.com/PowerShellMafia/PowerSploit/tree/master/Privesc 
to check for unquoted paths,dll hijacking, editable services, and other misconfigurations...

## Discussion
https://forums.hak5.org/index.php?/topic/40642-payload-privescchecker/