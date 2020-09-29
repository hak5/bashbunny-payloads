# Backup User registry (HKU)
* Author: Cribbit 
* Version: 1.0
* Target: Windows 7+ (Powershell)
* Category: Exfiltration
* Attackmode: HID & STORAGE

## Change Log
| Version | Changes                       |
| ------- | ------------------------------|
| 1.0     | Initial release               |

## Description
Uses PowerShell, to run Reg.exe to export the HKU entry to a file on the bunny.

## Configuration
RootKeys: [ HKLM | HKCU | HKCR | HKU | HKCC ]
Usesful Reg.exe export parameters
  /y       Force overwriting the existing file without prompt.

  /reg:32  Specifies the key should be accessed using the 32-bit registry view.

  /reg:64  Specifies the key should be accessed using the 64-bit registry view.

## Colors
| Status    | Color                         | Description                                      |
| --------- | ------------------------------| ------------------------------------------------ |
| SETUP     | Magenta solid                 | Setting attack mode                              | 
| ATTACK    | Yellow single blink           | Injecting Powershell script                      | 
| FINISH    | Green blink followed by SOLID | Script is finished                               |