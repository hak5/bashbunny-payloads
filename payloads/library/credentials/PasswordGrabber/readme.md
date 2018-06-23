# PasswordGrabber

* Author: [jdebetaz](https://github.com/jdebetaz)
* Creds: [Hak5Darren](https://github.com/hak5darren), [AlessandroZ](https://github.com/AlessandroZ), TeCHemically, dragmus13, RazerBlade
* Version: 1.3
* Frimware support: 1.1 and higher
* Target version: Windows 7 and higher

## Description
Grabs password from all sort of things: chrome, internet explorer, firefox, filezilla and more... This payload is quick and silent and takes about 3 seconds after the Bash Bunny have started to quack. This payload makes use of AleZssandroZ awsome LaZagne password recovery tool.

Full read here: [LaZagne Repository](https://github.com/AlessandroZ/LaZagne)

## Configuration
1. You need to download the lastest file from [LaZagne release page](https://github.com/AlessandroZ/LaZagne/releases).
2. Unzip the exe file and place it in the tools folder. The payload folder should contain all the files that are in this payload and the LaZagne.exe
3. Plug your BashBunny and Enjoy

Tips: You may need to disable your antivirus when downloading and unziping the file as I have noticed that some antivirus like AVAST removes the file.

## Info
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
