# Nyanloader

# Title:         Nyanloader
# Author:        Pusher
# Version:       1.0
# Category:      Prank
# Target:        Attack script written for Debian-based OSes. Payload will work on any x86 architecture


## Description

Replaces the first 69 (heh) sectors on /dev/sda with a custom bootloader and associated payload.
This is intended as a prank. Be aware that modifying the boot loader breaks the chain of trust for TPMs. DBAD rules apply.
A backup of the original data is created at /home/username/mbr_backup.bin
This payload does leverage some code from /library/credentials/SudoBackdoor/injector by oXis.
Requires root. That's right, if unmodified, this payload will only work against root warriors!

TODO: Add OS detection and privlege escalation
TODO: Add animation and audio to the payload


## STATUS

| LED     | Status               |
| ------  | ---------------------|
| SETUP   | Setting up attack    |
| SPECIAL | Serves payload.bin   |
| ATTACK  | Injecting keystrokes |
| FINISH  | lulz on reboot!      |
