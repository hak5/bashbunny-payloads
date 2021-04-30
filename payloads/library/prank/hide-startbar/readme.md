# Hide Startbar
* Author: Cribbit 
* Version: 1.0
* Target: Windows 7+ (Powershell)
* Category: pranks
* Attackmode: HID
* Extensions: Run

## Change Log
| Version | Changes                       |
| ------- | ------------------------------|
| 1.0     | Initial release               |

## Description
Hides the Window Start bar

## Configuration
Change hex to hide or show the startbar
```
0x0080 = SWP_HIDEWINDOW, 0x0040 = SWP_SHOWWINDOW
```

## Colors
| Status    | Color                         | Description                                      |
| --------- | ------------------------------| ------------------------------------------------ |
| SETUP     | Magenta solid                 | Setting attack mode, getting the switch position | 
| ATTACK    | Yellow single blink           | Injecting Powershell script                      | 
| FINISH    | Green blink followed by SOLID | Script is finished                               |
