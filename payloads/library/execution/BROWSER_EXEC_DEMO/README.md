## About:
# Title: BROWSER_EXEC_DEMO
# Description: BROWSER_EXEC_DEMO finds browser installed in target's system and searche URL in it.
# AUTHOR: drapl0n
# Version: 1.0
# Category: Execution.
# Target: Unix-like operating systems.
# Attackmodes: HID

## BROWSER_EXEC_DEMO: A payload which finds installed browser in target's system and searche URL in it. This payload can be used as a module to craft a new payload which requires browser execution in it.

### Workflow:
1. Executing Terminal Emulator.
2. Prevent storing history.
3. Storing script in target's system.
4. Granting execution privilege.
5. Executing script in background.

### LED Status:
* `SETUP`   : MAGENTA
* `ATTACK`  : YELLOW
* `FINISH`  : GREEN

### Directory Structure of payload components:
| FileName       | Directory                       |
| -------------- | --------------------------------|
| payload.txt    | /payloads/switch1/              |

### Changes to be done:
* Replace URL on line `27` to the URL which you want your target system to visit. 

#### Support me if you like my work:
* https://twitter.com/drapl0n 
