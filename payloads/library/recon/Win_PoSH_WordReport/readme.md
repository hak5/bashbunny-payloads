# Word Report
- Author: Cribbit
- Version: 1.0
- Target: Windows (Powershell 5.1+)
- Category: Recon
- Attackmode: HID & Storage
- Extensions: Run
- Props: Don Murdoch, Boe Prox, Simen Kjeserud, DannyK999 & T.J. Connor

## Change Log
| Version | Changes         |
| ------- | --------------- |
| 1.0     | Initial release |

## Description
This payload in similar to the [InfoGrabber](https://github.com/hak5/bashbunny-payloads/tree/master/payloads/library/recon/InfoGrabber) payload. But save the info to a MS Word document and collects some different data.

This payload needs an admin powershell prompt to run

## Configuration
This payload is written for an English version of windows. You will need to update the letters used when accessing the menu with ALT for other languages

## Colours
| Status   | Colour                        | Description                 |
| -------- | ----------------------------- | --------------------------- |
| SETUP    | Magenta solid                 | Setting attack mode         |
| ATTACK   | Yellow single blink           | Injecting Powershell script |
| INJECTED | Green blink followed by SOLID | Injection finished          |
| FINISHED | Blinks the scroll lock twice  | Script is finished          |