# PasswordGrabber

* Author: [jdebetaz](https://github.com/jdebetaz)
* Modified by: DennisVeninga
* Creds: [Hak5Darren](https://github.com/hak5darren), [AlessandroZ](https://github.com/AlessandroZ), TeCHemically, dragmus13, RazerBlade
* Version: 2.0
* Frimware support: 1.1 and higher
* Target version: Windows 7 and higher

## Description
Grabs password from all sort of things: chrome, internet explorer, firefox, filezilla and more... This payload is quick and takes about 8 seconds after the Bash Bunny have started to quack. This payload makes use of AleZssandroZ awsome LaZagne password recovery tool.
## Added feature
This version has an added feature. It disables Windows Defender just before launching LaZagne.exe and activates again after finishing.

Full read here: [LaZagne Repository](https://github.com/AlessandroZ/LaZagne)

## Configuration
1. Download LaZagne_x86.exe and LaZagne_x86.exe (Windows.zip) from this source -> [LaZagne release page](https://github.com/AlessandroZ/LaZagne/releases).
2. Unzip the exe file and place it in the tools folder. Don't forget to rename x64 or x86 to just LaZagne.exe. In /switch1 put payload.txt and payload.ps1.
3. Plug your BashBunny and Enjoy

NOTE: Disable your AV/Firewall software. Best is to download via FireFox and allow it to download. To prefend this file to be deleted, save the file to for example your Download folder, add this folder to the whitelist in your AV/Firewall software. So this folder will not be scanned and delete LaZagne everytime. Rename Lazagne_x64 or x86 to just LaZagne.exe and put it in /tools.

For personal reasons I changed the payload location in payload.txt. Scroll down and set payload\switch1\ . Set this value back to $SWITCH_POSITION if you want.

## Info
DennisVeninga: I've made some changes that allows the script to disable Windows Defender (only) and activates again when finished.

jdebetaz: I remake this playload with the Payload Best Practice / Style Guide

RazerBlade: By default the payload is identical to the Payload [usb_exfiltrator] but adds some commands to execute LaZagne and save the passwords to the loot folder.

## Disclaimer
__Hak5 and playload's contributors are not responsible for the execution of 3rd party binaries.__

## Led status

| LED                                           | Status |
|-----------------------------------------------|--------|
| Magenta solid                                 | Setup  |
| Yellow single blink                           | Attack |
| Green 1000ms VERYFAST blink followed by SOLID | Finish |
