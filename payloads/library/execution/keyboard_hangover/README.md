## About:
* Title: keyboard_hangover
* Description: keyboard_hangover is a powerful payload which randomly remaps target's keyboard.
* AUTHOR: drapl0n
* Version: 1.0
* Category: Execution.
* Target: Unix-like operating systems.
* Attackmodes: HID, Storage.

## keyboard_hangover: keyboard_hangover is a powerful payload which randomly remaps target's keyboard and and auto-triggers it.

### Features:
1. Randomly remaps keyboard.
2. Auto-Triggers on shell execution.
3. Persistent payload.
4. Fast execution.

### Workflow:
1. Prevent storing history.
2. Fetching BashBunny's block device.
3. Mounting BashBunny.
4. Executing Payload Script.
5. Unmounting BashBunny.

### Directory Structure of payload components:
| FileName       | Directory                             |
| -------------- | --------------------------------------|
| payload.txt    | /payloads/switch1/                    |
| payload.sh     | /payloads/library/keyboard_hangover/  |

* Note: Create directory named `keyboard_hangover` in `/payloads/library/`

#### Support me if you like my work:
* https://twitter.com/drapl0n 
