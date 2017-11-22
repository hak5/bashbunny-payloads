# DumpCreds 2.3.3
* Author: QDBA
* Version: Version 2.3.3 Build 1013
* Target: Windows 7, 10

## Description

** !!!!! works only at Bash Bunny with FW 1.1+ !!!!! **

Dumps the usernames & plaintext passwords from 
 * Browsers (Chrome, FireFox)
 * Wifi 
 * SAM Hashes (only if AdminMode=True)
 * Mimimk@tz Dump (only if AdminMode=True) 
 * Computerinformation (Hardware Info, Windows ProductKey, Hotfixes, Software, Local, AD Userlist)
 
 without 
 * Use of USB Storage (Because USB Storage ist mostly blocked by USBGuard or DriveLock)
 * Internet connection (becaus Firewall ContentFilter Blocks the download sites)
 
 
# Problems
- if you use the payload on a computer th efirst time, it will take some time and tries until the drivers are successfully loaded.
- If the payload doesnt work. (Red LED or Yellow LED blinks 2 or 4 times) plug off the BB  and try it once more (can take 3 or 4 times)
- If the payload stops working yellow LED blinks very fast or triples longer than 2min. You get no white LED. Your run into a time out. 
  If you plugin the BB every payload has 1min 30sfor doing the job. At 1min 30s every payload stops. (Thats a FW 1.1 issue)  
- Don't us a static IP adress for the Target_Host (GET TARGET_IP will only work with DHCP)
 

## Configuration

None. 

## Requirements

- If you have an other language than us install it according to the Bash Bunny documentation

## Download


official Bash Bunny payload at Github


## Install

1. Put Bash Bunny in arming mode

2. Set DUCKY_LANG in payload.txt (FW 1.1) or ind config.txt (FW 1.2)  if needed, 
   Edit Get-WifiCreds.ps1 and change ".... | Select-String -Pattern entries to your language if other than "de" or "us"

3. Copy all files and folders in Githubs DumpCred Folder to your favorit switch folder		
2. Change DUCKY_LANG in payload.txt if needed, 
   Edit Get-WifiCreds.ps1 and change ".... | Select-String -Pattern entries to your language if other than "de" or "us"

3. Copy all files and folders in Githubs DumpCred Folder to your favorit switch folder		
				
4. eject Bash Bunny safely!!

5. move switch into right position

6. if necessary set UAC Mode in payload.txt ( 1 = Fodhelper UAC  (Win 10 only) ; 0 = Standard UAC ( Win 7 + Win 10))

7. plugin Bash Bunny and have fun....! :-)


## STATUS


| LED                     | Status                                       |
| ----------------------- | -------------------------------------------- |
| Magenta Solid           | Setup                                        |
| Red fast blink          | Target did not acquire IP address            |
| Yellow single blink     | Initialization                               |
| Yellow double blink     | HID Stage                                    |
| Yellow triple blink     | Wait for IP coming up                        | 
| White			              | Cleanup, copy Files to <root>/loot           |
| Green               	  | Finished                                     |
| ----------------------- | -------------------------------------------- |


## Discussion

https://forums.hak5.org/index.php?/topic/40806-payload-new-dumpcreds-22

## Credits

- special thx to illwill & tux for the server.py (HTTP_Server)  
- https://github.com/EmpireProject/Empire     (Get-FoxDump.ps1, Invoke-M1m1k@tz.ps1, Invoke-PowerDump.ps1, Get-ChromeCreds.ps1)
- Valentin-Metz for inserting the Fodhelper UAC-Bypass  ( Resource: https://github.com/winscripting/UAC-bypass/blob/master/FodhelperBypass.ps1 )

## Changelog

Version 2.3.3

  [Build 1013]
  - Minor changes
  - Encode Invoke-PowerDump because of caught by AV
  - Add dumpCredStore; Dumps credential from Vault

Version 2.3.2

 [Build 1012]
 - Multiple UAC Modes 1 = Fodhelper; 0 = Standard UAC
 
 [Build 1011]
 - Undo all changes in RunMRU and Powershell history

Version 2.3.1

 [Build 1009]
 - Merged the UAC Bypass fodhelper changes from valentin-metz
 
Version 2.2 
 
 [Build 1008]
 - Removed DUCKY_LANG from payload.txt because set it in config.txt [FW 1.2]. 
 [Build 1007] 
 - Some Errors fixed with Char Encoding and Encrypted PS Payloads in Windows 7 

 [Build 1006]
- smbserver stuff removed
- handshake removed
- HTTP Server added (Download Powershell scripts, upload loot)
- Invoke-m1m1d0gz.ps1 AES encrypted to Invoke-M1m1d0gz.enc. 
     Not really neccessary but if you are in storage mode, the AV doesn't remove it. :-)
- All in all a little bit faster
- remove the debug code
- recoded the Get-WiFiCreds.ps1 for working on Windows 7


Version 2.1

 [Build 1007] 
 - Some Errors fixed with Char Encoding and Encrypted PS Payloads in Windows 7 

 [Build 1006]
- smbserver stuff removed
- handshake removed
- HTTP Server added (Download Powershell scripts, upload loot)
- Invoke-m1m1d0gz.ps1 AES encrypted to Invoke-M1m1d0gz.enc. 
     Not really neccessary but if you are in storage mode, the AV doesn't remove it. :-)
- All in all a little bit faster
- remove the debug code
- recoded the Get-WiFiCreds.ps1 for working on Windows 7

Version 2.1
- Complete new payload.txt code for BashBunny 1.1
- Added a lot of debug cod into the payload 
- Universal payload. Never mind if you are admin (With UAC Prompt) or not (with Credentials Prompt) the payload works anyway.
