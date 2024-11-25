# MrsRobot
* Author: hacXsbix, based on MrRobot by illwill & tuxxy
* Version: Version 0.1
* Target: Windows 32bit and 64bit

## Description

Dumps the usernames & plaintext passwords from Windows boxes using Powershell in memory
with Mimikatz then stashes them in /root/udisk/loot/MrsRobot
works with 32 and 64bit Windows, but mimikatz cannot always find the password

The powershell windows are visible for you to check the process, it takes about ~30s, but depending mostly on your machine.

Compared to the MrRobot by illwill & tuxxy, I took the original mimikatz.exe from https://github.com/gentilkiwi/mimikatz as 32bit and 64bit versions and download their hex code to targets machine.
Attention: this saves the mimikatz.exe shortly in $env:temp which is mostly C:\Users\Username\AppData\Local\Temp, on my machine it got never detected by antivirus, but be aware

## Configuration

Adjust Delay times of hid attack to targets computer hardware, to launch the powershell on my pc it took less than 0.2s, on a laptop ~3s. 

## STATUS

| LED                                   | Status                                                     |
|---------------------------------------|------------------------------------------------------------|
| Purple (SETUP)                        | Setup                                                      |
| Yellow single blink (STAGE1)          | Running Powershell HID attack                              |
| Cyan inverted single blink (SPECIAL1) | Waiting for target machine to send mimikatz results        |
| SUCCESS G                             | Got Creds and copied to loot folder and password found     |
| SUCCESS B                             | Got Creds and copied to loot folder and password not found |
| Red (Fail1)                           | Error running mimikatz or getting results                  |

