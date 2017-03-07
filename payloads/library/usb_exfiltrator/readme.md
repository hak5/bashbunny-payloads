# Exfiltrator for Bash Bunnys

* Author: Hak5Darren
* Version: Version 1.1
* Target: Windows

## Description

Exfiltrates files from the users Documents folder
Saves to the loot folder on the Bash Bunny USB Mass Storage partition named by the victim hostname, date and timestamp.

## Configuration

By default the staged payload exfiltrates PDF files. Change the xcopy commands from e.cmd to your liking.

## STATUS

| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| White (blinking)   | Setup Failed. Target didn't obtain IP        |
| Red                | Attack Setup                                 |
| Green              | Attack Complete                              |

## Discussion
[Hak5 Forum Thread](https://forums.hak5.org/index.php?/topic/40225-payload-usb_exfiltrator/ "Hak5 Forum Thread")
