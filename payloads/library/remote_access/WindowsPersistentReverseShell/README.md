# Windows Persistent Reverse Shell for Bash Bunny

* Author: 0dyss3us (KeenanV)
* Version: 1.1

## Description

Opens a persistent reverse shell through NetCat on victim's Windows machine and connects it back to host attacker.
* Targets Windows 10 (working on support for older versions)
* Connection can be closed and reconnected at any time
* Deploys in roughly 15-20 sec
* Works with NetCat

## Requirements

Have a working Bash Bunny :)

## STATUS

| LED                  | STATUS                         |
| -------------------- | ------------------------------ |
| Purple               | Setup                          |
| Amber (Single Blink) | Installing and running scripts |
| Green                | Finished                       |

## Installation and Execution

1. Plug in Bash Bunny in arming mode
2. Move files from WindowsPersistentReverseShell to either switch folder
3. Edit the persistence.vbs file and replace `ATTACKER_IP` with attacker's IP and `PORT` with whichever port you like to use (I use 1337 :wink:)
4. Edit the run.ps1 file and replace `BashBunny` with the volume name of your Bash Bunny
5. Save the persistence.vbs file
6. Unplug Bash Bunny and switch it to the position the payload is loaded on
7. Plug the Bash Bunny into your victim's Windows machine and wait until the final light turns green (about 15-20 sec)
8. Unplug the Bash Bunny and go to attacker's machine
9. Listen on the port you chose in the persistence.vbs file on NetCat
   * Run the command `nc -nlvp 1337` (replace the port with the port in persistence.vbs)
    * If using Windows as the attacker machine, you must install Ncat from: http://nmap.org/dist/ncat-portable-5.59BETA1.zip and use the command `ncat` instead of `nc` from the directory that you installed ncat.exe.
10. Wait for connection (Should take no longer than 1 minute as the powershell command runs every minute)
11. Once a Windows cmd prompt appears...YOU'RE DONE!! :smiley: and you can disconnect and reconnect at any time as long as the user is logged in

## Discussion

[Click here](https://forums.hak5.org/topic/42729-payload-windows-persistent-reverse-shell/) for forum discussion
