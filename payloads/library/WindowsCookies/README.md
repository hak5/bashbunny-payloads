# WindowsCookies for Bash Bunnys

Author: oXis    
Version: Version 2.0    
Credit: illwill, sekirkity, EmpireProject     

## Description

Based on BrowserCreds from illwill, this version grabs Facebook session cookies from Chrome/Firefox on Windows, decrypt them and put them in /root/udisk/loot/FacebookSession    
Only works for Chrome/Firefox on Windows. Tested on two different Windows 10 machines.    
Only payload.txt, server.py and p are required.    
Server.py will load a local HTTP server, the script is downloaded from that server and then uploads the cookies to it.    

## Payload LED STATUS

| LED              | Status                                 |
| ---------------- | -------------------------------------- |
| Blue (blinking)  | Payload init                           |
| White (blinking) | Setup RNDIS_ETHERNET  				    |
| Green (blinking) | Done               				    |

