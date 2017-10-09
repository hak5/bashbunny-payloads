# RevShellBack

- Author: NodePoint
- Version: 0.1.3
- Target: Windows
- Category: Execution

## Description

Set up a reverse shell and execute PowerShell/generic commands in the background from the Bash Bunny via USB ethernet.

## Configuration

Place powershell and/or generic commands between lines 53 and 58 (within the EOF).
<br>
Need to run as admin? Set the variable ADMIN to true.
<br>
Having issues obtaining a connection with the listener? Alter the time before connection attempt in NCDELAY.

## STATUS

| LED      | Status                                    |
| -------- | ----------------------------------------- |
| SETUP    | Setup (attackmode, variables, networking) |
| STAGE1   | Open CMD (bypass UAC if ADMIN is true)    |
| STAGE2   | Initiate reverse shell                    |
| SPECIAL1 | Set up listener and send out commands     |
| FINISH   | Finished                                  |

## Discussion

https://forums.hak5.org/topic/41955-payload-revshellback/
