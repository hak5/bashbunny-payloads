# RAZ_VBScript
* Author: RalphyZ 
* Version: 1.1a
* Target: Windows 7+
* Category: Execution
* Attackmode: HID, STORAGE

## Change Log
| Version | Changes                       |
| ------- | ------------------------------|
| 1.1a    | Fixed an error with a comment |
| 1.1     | Updated for firmware 1.1      |
| 1.0     | Initial release               |

## Dependencies
The following files must exist in the switch folder:

a.vbs - VBScript to be executed in a hidden Powershell window

## Description
VBScript (a.vbs) in the switch folder with this file

## Configuration
None

## Colors
| Status    | Color                         | Description                                      |
| --------- | ------------------------------| ------------------------------------------------ |
| SETUP     | Magenta solid                 | Setting attack mode, getting the switch position | 
| FAIL      | Red slow blink                | Could not find the a.vbs script                  | 
| ATTACK    | Yellow single blink           | Running the VBScript                             | 
| FINISH    | Green blink followed by SOLID | Script is finished                               |