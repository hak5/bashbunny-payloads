# MrRobot
![alt tag](http://i.imgur.com/eunFr0U.jpg)
* Author: illwill & tuxxy
* Version: Version 0.2
* Target: Windows

## Description

Dumps the usernames & plaintext passwords from Windows boxes using Powershell in memory
with Mimikatz then stashes them in /root/udisk/loot/MrRobot

## Configuration

None needed. 

## STATUS

| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| Blue (blinking)    | Running Powershell / Waiting for WebServer   |
| White (blinking)   | WebServer started and Uploading Results      |
| Purple  (blinking) | DChecking for Results                        |
| Green              | Got Creds and copied to loot folder          |
| Amber (blinking)   | MimiKatz failed (Not Admin?)                 |
| Red (blinking)     | No Creds / Mimikatz failed                   |

## Discussion
[Hak5 Forum Thread](https://forums.hak5.org/index.php?/topic/40524-payload-mrrobot/ "Hak5 Forum Thread")
