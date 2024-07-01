# SSH server
- Author: Cribbit
- Version: 1.0
- Target: Windows 10 Creators Update (Powershell)
- Category: Execution
- Attackmode: HID

## Change Log
| Version | Changes         |
| ------- | --------------- |
| 1.0     | Initial release |

## Description
Installs and runs a SSH Server on Windows. 

## Notes
This payload needs an admin powershell prompt and an internet connection to run.

## Configuration
Add ` -StartupType 'Automatic'` after Start-Service to start ssh on boot.

## Colours
| Status   | Colour                        | Description                 |
| -------- | ----------------------------- | --------------------------- |
| SETUP    | Magenta solid                 | Setting attack mode         |
| ATTACK   | Yellow single blink           | Injecting Powershell script |
| FINISHED | Green blink followed by SOLID | Script is finished          |