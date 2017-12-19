# PasswordGrabber

* Author: RazerBlade
* Creds: Hak5Darren, AlessandroZ, TeCHemically, dragmus31
* Version: Version 1.2
* Firmware support: 1.1+
* Target: Windows 7+

## Description

Grabs password from all sort of things: chrome, internet explorer, firefox, filezilla and more...
This payload is quick and silent and takes about 3 seconds after the Bash Bunny have started to quack.
This payload makes use of AleZssandroZ awsome LaZagne password recovery tool.

Full read here: https://github.com/AlessandroZ/LaZagne
Downloads here: https://github.com/AlessandroZ/LaZagne/releases


## Configuration
1. You need to download the latest file from LaZagnes release page. 
2. Unzip the exe file and place it in the payload folder. The payload folder should contain all the file that is in the Payload folder + LaZagne.exe
3. Plug it in a computer and PWN them.

Tips: You may need to disable antivirus when downloading and unziping the file as I have noticed that some antivirus like AVAST removes the file.

## INFO
By default the payload is identical to the Payload [usb_exfiltrator] but adds some commands to execute LaZagne and save the passwords to the loot folder.

## DISCLAIMER
Hak5 is not responsible for the execution of 3rd party binaries.
## STATUS

| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| Red                | Attack Setup                                 |
| Green              | Attack Complete                              |

## Discussion
[Hak5 Forum Thread] = https://forums.hak5.org/index.php?/topic/40437-payload-passwordgrabber/

