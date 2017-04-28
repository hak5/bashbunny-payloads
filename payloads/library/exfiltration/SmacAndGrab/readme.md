# sMacAndGrab

Author: audibleblink  
Version: Version 1.2  
Target: macOS  

## Description

Mounts as storage and acts as HID. Backup a list of files to the BashBunny

## Configuration

Provide a newline-separated list of files you want to backup and wait for the green light.
You can also provide `find` and `grep` commands as literal strings to pass to QUACK which get run on TARGET.

## STATUS

| LED              | Status                                |
| ---------------- | ------------------------------------- |
| Amber (blinking) | Attacking                             |
| Green            | Finished                              |

