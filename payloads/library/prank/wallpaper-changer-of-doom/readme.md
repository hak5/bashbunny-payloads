# Wallpaper Changer of DOOM!!!!

* Author: Hak5Darren
* Props: Alex Goat
* Demo: Hak5 episode 2502 - https://youtu.be/f3C58OKOsuo
* Target: Windows Vista+
* Category: Prank

## Description

Single stage powershell one-liner executes from run dialog. CMD opens a minimized powershell window which downloads b.jpg (change this URL) to c:\windows\temp then sets the registry entry to change the wallpaper, then finally loops over an undocumented USER32.DLL feature for 60 seconds to force a user profile refresh.

## STATUS

| LED               | Status                                 |
| ----------------- | -------------------------------------- |
| SETUP             | Setting attack mode                    |
| ATACK             | Injecting keystrokes                   |
