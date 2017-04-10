# Process Info for Bash Bunny

* Author: Decoy
* Version: Version 1.0
* Target: Windows

## Description

This is just a quick and dirty payload to return all running processes under the current user. 
This will return the path/filename/version, and quite a bit of other info as well. This information 
can be useful for planning future attacks, such as taking advantage of buffer overflows, and other 
various vulnerabilities to gain a more permanent foothold into a target system. It can also be 
useful in identifying what AV is in use on a target system.

## Configuration

None needed. 

## STATUS

| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| Amber (blinking)   | Setting up                                   |
| Amber              | Attack running                               |
| White (blinking)   | Moving loot to mass storage                  |
| Blue (blinking)    | Syncing File System                          |
| Green              | Trap is clean                                |

## Discussion
https://forums.hak5.org/index.php?/topic/40605-payload-process-info/
