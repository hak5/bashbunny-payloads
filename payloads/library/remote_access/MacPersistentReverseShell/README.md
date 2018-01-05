# Reverse Shell Mac for Bash Bunny

* Author: 0dyss3us (KeenanV)
* Version: 1.0

## Description

Opens a persistent reverse shell on victim's mac and connects it back to host attacker over TCP.
* Targets MacOS
* Connection can be closed and reconnected at any time
* Deploys in roughly 30 sec (working on making it faster)
* Works well with NetCat as the listener

## Requirements

Have a working Bash Bunny :)

## STATUS

| LED                  | STATUS                       |
| -------------------- | ---------------------------- |
| Purple               | Setup                        |
| Amber (Single Blink) | Installing connect.sh script |
| Amber (Double Blink) | Creating cron job            |
| White (Fast Blink)   | Cleaing up                   |
| Green                | Finished                     |

## Installation and Execution

1. Plug in Bash Bunny in arming mode
2. Move files from MacPersistentReverseShell to either switch folder
3. Edit the connect.sh file and replace the placeholder IP with attacker's IP and the port with whichever port you like to use (I use 1337 :wink:)
4. Save the connect.sh file
5. Unplug Bash Bunny and switch it to the position the payload is loaded on
6. Plug the Bash Bunny into your victim's Mac and wait until the final light turns green (about 30 sec)
7. Unplug the Bash Bunny and go to attacker's machine
8. Listen on the port you chose in the connect.sh file on whichever program you'd like (I use NetCat)
	* If using NetCat, run the command `nc -nlvp 1337` (replace the port with the port in connect.sh)
9. Wait for connection (Should take no longer than 1 minute as the cron job runs every minute)
10. Once a bash shell prompt appears...YOU'RE DONE!! :smiley: and you can disconnect and reconnect at any time as long as the user is logged in

## Discussion

There will be a link [here](https://www.google.com).
