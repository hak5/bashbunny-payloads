# Read It Out
- Author: Cribbit
- Version: 1.0
- Target: Windows 10 (Powershell 5.1+)
- Category: Exfiltration
- Attackmode: HID
- Extensions: Run

## Change Log
| Version | Changes         |
| ------- | --------------- |
| 1.0     | Initial release |

## Description
Super subtle exfiltration method.

Gets the Microsoft Speech API (SAPI) to read out the content of text files in the MyDocuments directory.

## Config
Add -r to do subdirectorys

## Colours
| Status | Colour                        | Description                 |
| ------ | ----------------------------- | --------------------------- |
| SETUP  | Magenta solid                 | Setting attack mode         |
| ATTACK | Yellow single blink           | Injecting Powershell script |
| FINISH | Green blink followed by SOLID | Script is finished          |
