# PasswordGrabber

* Author: RazerBlade
* Creds: Hak5Darren, AlessandroZ
* Version: Version 1.1
* Firmware support: 1.1
* Target: Windows

## Description

Grabs password from all sort of things: chrome, internet explorer, firefox, filezilla and more...
This payload is quick and silent and takes about 3 seconds after the Bash Bunny have started to quack.
Full read here: https://github.com/AlessandroZ/LaZagne


## Configuration
By default the payload is identical to the Payload [usb_exfiltrator] but adds some commands to execute LaZagne and save the passwords to the loot folder.
I have commented out the copy command but if you want copy command and password just remove the remove infront of xcopy

Hak5 is not responsible for the execution of 3rd party binaries. Therefore I am not allowed to include it in github. You can easily download the binary from here or compile yourself https://github.com/AlessandroZ/LaZagne
When compiled or downloaded, just drop it of to the PasswordGrabbers folder and you are good to go!

## STATUS

| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| Red                | Attack Setup                                 |
| Green              | Attack Complete                              |

## Discussion
[Hak5 Forum Thread] https://forums.hak5.org/index.php?/topic/40437-payload-passwordgrabber/

