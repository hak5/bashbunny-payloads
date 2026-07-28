## About:
# Title: SHELL_TRIGGER_DEMO
# Description: SHELL_TRIGGER_DEMO payload demonstrates working of SHELL_TRIGGER extension.
# AUTHOR: drapl0n
# Version: 1.0
# Category: Execution.
# Target: Unix-like operating systems.
# Attackmodes: HID

## SHELL_TRIGGER: SHELL_TRIGGER is an extension which triggers commands/scripts on shell execution on target's system OR triggers commands/scripts when target executes terminal emulator.

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

### Changes to be made:
* Replace command on line `7` to the command/script which you want your target system to execute on shell execution.

#### Support me if you like my work:
* https://twitter.com/drapl0n 
