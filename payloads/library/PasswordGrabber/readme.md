# PasswordGrabber

* Author: RazerBlade
* Creds: Hak5Darren, AlessandroZ
* Version: Version 1.0
* Target: Windows

## Description

Grabs password from all sort of things: chrome, internet explorer, firefox, filezilla and more...
This payload is quick and silent and takes about 3 seconds after the Bash Bunny have started to quack.
Full read here: https://github.com/AlessandroZ/LaZagne


## Configuration
By default the payload is identical to the Payload [usb_exfiltrator] but adds some commands to execute LaZagne and save the passwords to the loot folder.
I have commented out the copy command but if you want copy command and password just remove the remove infront of xcopy

If you are afraid of .exe you can compile your self from his github: https://github.com/AlessandroZ/LaZagne

## STATUS

| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| Red                | Attack Setup                                 |
| Green              | Attack Complete                              |

## Discussion
[Hak5 Forum Thread]("https://forums.hak5.org/index.php?/topic/40437-payload-passwordgrabber/")

## Future Work

I will try to add mac support and also make the password file appear in the loot folder that [usb_exfiltrator] creates.
