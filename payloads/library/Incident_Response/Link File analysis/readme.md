
Author : Paul Murton

Notes :

My background is in Computer Forensics and incident response.
I am new to Powershell, so it's likely that the script is inefficient,
but it does work.

In an incident where a user is suspected of exfiltrating data to a USB 
storage device, CD/DVD etc, its possible that the user may subsequently 
open an exfiltrated file on the media. In this scenario, a local lnk 
file will be created, providing evidence of the files existance.

This payload uses a powershell script to search the user profle for lnk
files where the target is on a drive other than the C: Drive.

The output is put into a CSV file in the folder \loot\link-files

Tested on ver 1.3

## STATUS

| LED              | Status                                |
| ---------------- | ------------------------------------- |
| Purple (blinking)| Attack in progress                    |
| Green (blinking) | Attack Finished                       |




