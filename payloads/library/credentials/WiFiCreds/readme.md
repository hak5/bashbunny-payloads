# WiFiCreds

* Author: illwill
* Version: Version 0.3
* Target: Windows

## Description

Dumps the stored plaintext Wifi SSID & passwords from Windows boxes using 
Powershell HID attack, then stashes them in /root/udisk/loot/WiFiCreds/

## Configuration

None needed. 

## STATUS

| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| White (blinking)   | Setting up                                   |
| Blue (blinking)    | Attack running                               |
| Purple (blinking)  | Dumping WiFi Credentials                     |
| Green  (blinking)  | Succeeded Dumping WiFi Credentials           |
| Red  (blinking)    | Failed Dumping WiFi Credentials              |

## Discussion
https://forums.hak5.org/index.php?/topic/40413-payload-wificreds/
