# ghost_cleanup for Bash Bunnys

* Author: bg-wa
* Version: Version 0.1
* Target: Windows, Mac, Linux

## Description

Cleans the input history on Windows, Mac and Linux

## Configuration

By default this script clears ALL Mac /Linux history.  
To only delete a certain number of lines, use the LINES=XX param (MAC / LINUX).

To delete Windows history, create the file '/root/udisk/loot/ghost_cleanup_win' manually, or in your attack.

This Script:

1. Clears bash history (Mac, Linux)
2. Clears Windows Run History
3. Clears Windows Ethernet Adapters

## STATUS

| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| Red                | Cleanup Setup                                |
| Green              | Cleanup Complete                             |

