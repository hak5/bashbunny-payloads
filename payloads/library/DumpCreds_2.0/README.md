# DumpCreds 2.0 
* Author: QDBA
* Version: Version 2.0.2 Build 1003
* Target: Windows

## Description

Dumps the usernames & plaintext passwords from 
 - Browsers (Crome, IE, FireFox)
 - Wifi 
 - SAM Hashes (only if AdminMode=True)
 - Mimimk@tz Dump (only if AdminMode=True)
 - Computerinformation (Hardware Info, Windows ProductKey, Hotfixes, Software, Local, AD Userlist)
 
 without 
 - Use of USB Storage (Because USB Storage ist mostly blocked by USBGuard or DriveLock)
 - Internet connection (becaus Firewall ContentFilter Blocks the download sites)
 


## Configuration

None needed. 

## Requirements

Impacket must be installed. 
Install it from tools_installer payload 

https://github.com/hak5/bashbunny-payloads/tree/master/payloads/library/tools_installer


## Download


https://github.com/qdba/bashbunny-payloads/tree/master/payloads/library/DumpCreds_2.0


## Install

Copy payload.txt, main.ps1 and the complete PS Folder to your favorite switch direcrory.

## STATUS

| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| White              | Give drivers some time for installation      |
| Red Blink Fast     | Impacket not found                           |
| Red Blink Slow     | Target did not acquire IP address            |
| Amber Blink Fast   | Initialization                               |
| Amber              | HID Stage                                    |
| Purple Blink Fast  | Wait for IP coming up                        |
| Purple Blink Slow  | Wait for Handshake (SMBServer Coming up)     |
| Purple / Amber     | Powershell scripts running                   |
| RED                | Error in Powershell Scripts                  |
| Green              | Finished                                     |
| ------------------ | -------------------------------------------- |


## Discussion

https://forums.hak5.org/index.php?/topic/40582-payload-drumpcreds-20-wo-internet-wo-usb-storage

## Credits

to...... 

https://github.com/EmpireProject/Empire         Get-FoxDump.ps1, Invoke-M1m1k@tz.ps1, Invoke-PowerDump.ps1, Get-ChromeCreds.ps1


## ToDo

- paralellize Creds gathering with PS  -- check 
- while Bashbunny is waiting for Target finished the script it can some other nice work. i.e. nmap the target. 
  (Not very useful at ths time because I'm still Admin on Computer)
- remove the modifications of the Powersploit scripts, so you can download and use the original Files. (At the moment you must use my scripts) (and in future) 
- rewrite some code of the payload so the payload will work no matter if you have admin rights (UAC MsgBox) or not (Credentials MsgBox) -- check
  (There is no exploitation. You will not get admin rights, but it passes sucessfully never mind if there is a Credential prompt or a UAC prompt)
- Maybe! If Target is in a AD Domain and Mimik@tz give us some Passwords try to get some more information about the AD Domain  