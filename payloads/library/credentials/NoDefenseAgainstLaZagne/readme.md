# NoDefenseAgainstLaZagne

* Author: [rafa-guillermo](https://github.com/rafa-guillermo)
* Creds: [Hak5Darren](https://github.com/hak5darren), [AlessandroZ](https://github.com/AlessandroZ), TeCHemically, dragmus13, RazerBlade, jdebetaz
* Version: 1.0
* Frimware support: 1.1 and higher
* Target version: Windows 11
* Tested on: Windows 11

## Description
Disables Windows defender and runs LaZagne to grab passwords from the host system from apps like: chrome, internet explorer, firefox, filezilla and more. Wifi passwords and Win password hashes included. This payload is quick, but opens up an ugly PS terminal which can probably be obfuscated. This payload springboards off of AleZssandroZ's LaZagne password recovery tool as well as the Password Grabber by jdebetaz.

Full read here: [LaZagne Repository](https://github.com/AlessandroZ/LaZagne)
Password grabber: [Also in this repo](https://github.com/hak5/bashbunny-payloads/tree/master/payloads/library/credentials/PasswordGrabber)

## Configuration
1. You need to download LaZagne from the [LaZagne release page](https://github.com/AlessandroZ/LaZagne/releases). Tested with LaZagne 2.2 but might work with newer versions too.
2. Unzip the exe file and place it in the folder called 'tooling' on the root of the Bash Bunny. The payload folder should contain payload.ps1 and payload.txt, LaZagne.exe needs to be in a folder called tooling.
3. Set up your Bash Bunny Drive Label (default is BashBunny, config is on line 22 of payload.txt and line 1 of payload.ps1)
4. Plug your BashBunny and Enjoy


## Info
rafa-guillermo: I've added a whole bunch of stuff to disable Windows Defender file scanner, smart screen and RTP before running LaZagne, I was having issues where otherwise it would immediately be quarantined. Defender will be enabled again after execution.

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
