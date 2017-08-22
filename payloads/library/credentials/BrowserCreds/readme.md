# BrowserCreds

* Author: illwill
* Version: Version 0.1
* Target: Windows

## Description

Dumps the stored plaintext Browser passwords from Windows boxes using 
Powershell HID attack, then stashes them in /root/udisk/loot/BrowserCreds/

## Configuration

None needed. 

## STATUS

| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| White (blinking)   | Setting up                                   |
| Blue (blinking)    | Attack running                               |
| Purple (blinking)  | Dumping Browser Credentials                  |
| Green  (blinking)  | Succeeded Dumping Browser Credentials        |
| Red  (blinking)    | Failed Dumping Browser Credentials           |

## Discussion
https://forums.hak5.org/index.php?/topic/40431-payload-browsercreds
