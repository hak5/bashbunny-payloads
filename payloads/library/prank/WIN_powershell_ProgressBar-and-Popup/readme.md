# Progress bar and Popup
* Author: Cribbit 
* Version: 1.0
* Target: Windows 10 (Powershell)
* Category: pranks
* Attackmode: HID

## Change Log
| Version | Changes                       |
| ------- | ------------------------------|
| 1.0     | Initial release               |

## Description
Uses PowerShell to show a progress bar telling the user it's installing a virus. After that uses text-to-speech, then shows a few silly error messages.

## Configuration
May need to change the text-to-speech to `Add-Type -AN System.speech;$s=New-Object System.Speech.Synthesis.SpeechSynthesizer;`

## Colors
| Status    | Color                         | Description                                      |
| --------- | ------------------------------| ------------------------------------------------ |
| SETUP     | Magenta solid                 | Setting attack mode                              | 
| ATTACK    | Yellow single blink           | Injecting Powershell script                      | 
| FINISH    | Green blink followed by SOLID | Script is finished                               |
