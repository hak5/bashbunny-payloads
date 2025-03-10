## About:
* Title: swap_jack
* Description: swap_jack, simple yet powerful payload which can be used to replace one command with another on target's system.
* AUTHOR: drapl0n
* Version: 1.0
* Category: Execution.
* Target: Unix-like operating systems.
* Attackmodes: HID, Storage.

## swap_jack: Simple yet Powerful payload which can be used to replace one command with another on target’s system. swap_jack gives your target ability to trigger backdoors for you.

### Features:
1. Swap commands/Execute scripts covertly.
2. Persistent.
3. Can swap multiple commands.
4. Makes your target run commands/script for you.

### Workflow:
1. Prevent storing history.
2. Fetching BashBunny's block device.
3. Mounting BashBunny.
4. Executing Payload Script.
5. Unmounting BashBunny.

### LED Status:
* `SETUP`   : MAGENTA
* `ATTACK`  : YELLOW
* `FINISH`  : GREEN

### Usage:
* To swap custom commands make following changes at line `2` in `payload.sh`:
* Default swaped commands: `swap_array='alias ls=\"du\" \\n alias cd=\"dh\" \\n alias cat=\"lsblk\"'`.
* Example: Swapping `pwd` command with `find`: 
* Add entry seperated by `\\n` to the line `2`: `swap_array='alias ls=\"du\" \\n alias cd=\"dh\" \\n alias cat=\"lsblk\"' \\n alias pwd=\"find\"`

### Directory Structure of payload components:
| FileName       | Directory                     |
| -------------- | ----------------------------- |
| payload.txt    | /payloads/switch1/            |
| payload.sh     | /payloads/library/swap_jack/  |

* Note: Create directory named `swap_jack` in `/payloads/library/`

#### Support me if you like my work:
* https://twitter.com/drapl0n 
