# Morse Code File Exfiltration
* Author: Cribbit 
* Version: 1.0
* Target: Windows (Powershell 5.1+)
* Category: PoC
* Attackmode: HID & Storage

## Change Log
| Version | Changes                       |
| ------- | ------------------------------|
| 1.0     | Initial release               |
| 1.1     | Update for non-alphanumeric   |

## Description
Reads all txt file in my documents and Flashes the Scrolllock on and off to represent Morse code of the engish alphanumeric characters (0..9 A..Z)

## Update
For characters out side the Morse code 0..9 A..Z it now flash one long pulse then the chars ordinal value ie (@ = 64 = -.... ....-)  

## Note
This is not a very useful payload with limitation of morse code but I thought it was fun to create.

The payload uses a base64 encode version of the payload (b.txt) to get round the Script Execution Policy. There is a not base64 version in the file (MorseCodeFileExfiltration.ps1) so you can see what it is doing. 

Please check the encoded payload before execution, to make sure it has not been replaced with something more malicious. 

## Colors
| Status    | Color                         | Description                                      |
| --------- | ------------------------------| ------------------------------------------------ |
| SETUP     | Magenta solid                 | Setting attack mode                              | 
| ATTACK    | Yellow single blink           | Injecting Powershell script                      | 
| FINISH    | Green blink followed by SOLID | Script is finished                               |