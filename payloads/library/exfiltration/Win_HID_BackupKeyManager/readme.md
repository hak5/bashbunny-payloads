# KeyManager Backup
- Author: Cribbit
- Version: 1.0
- Tested on: Windows 10
- Category: Exfiltration
- Attackmode: HID & STORAGE
- Extensions: Run
- Props: Paranoid Ninja https://twitter.com/NinjaParanoid/status/1516442028963659777

## Description
Create a backup of the key manager which stores log-on credentials for servers, websites and programs.

## Change Log
| Version | Changes         |
| ------- | --------------- |
| 1.0     | Initial release |

## Config
set the password for the backup by setting the `password` variable

## Notes
This payload relays heavily on button shortcuts this mean it is very target to an English version of windows. 
If you are targeting a different language, you will need to change the letter after the ALT key to the corresponding letter for the button.

## Colours
| Status   | Colour                        | Description                 |
| -------- | ----------------------------- | --------------------------- |
| SETUP    | Magenta solid                 | Setting attack mode         |
| ATTACK   | Yellow single blink           | Injecting script            |
| FINISHED | Green blink followed by SOLID | Injection finished          |