## About:
* Title: BunnyLogger 2.0
* Description: Key logger which sends each and every key stroke of target remotely/locally.
* AUTHOR: drapl0n
* Version: 1.0
* Category: Credentials
* Target: Unix-like operating systems with systemd.
* Attackmodes: HID, Storage

## BunnyLogger 2.0: BunnyLogger is a Key Logger which captures every key stroke of target and send them to attacker.

### Features:
* Live keystroke capturing.
* Stored Keystroke capturing.
* Bunny Logger Manager: Interactive TUI Dashboard. 
* Detailed key logs.
* Persistent.
* Autostart payload on boot.

### Directory Structure of payload components:

| FileName       | Directory                      |
| -------------- | ------------------------------ |
| payload.txt    | /payload/switch1/              |
| payload.sh     | /payload/                      |
| requirements/* | /payloads/library/bunnyLogger2 |

### LED Status:

* `LED SETUP`   : MAGENTA
* `LED ATTACK`  : YELLOW
* `LED FINISH`  : GREEN

### Usage:
* Install BunnyLogger 2.0: `chmod +x install.sh && sudo ./install.sh`
* Run : `bunnyLoggerMgr` to launch BunnyLogger Manager.

#### Support me if you like my work:
* https://twitter.com/drapl0n 
