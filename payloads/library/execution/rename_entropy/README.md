## About:
* Title: rename_entropy
* Description: rename_entropy is a powerful payload which renames target files with extensions.
* AUTHOR: drapl0n
* Version: 1.0
* Category: Execution.
* Target: Unix-like operating systems.
* Attackmodes: HID, Storage.

## rename_entropy: rename_entropy is a powerful payload which renames target files with extensions.

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

### Directory Structure of payload components:
| FileName       | Directory                         |
| -------------- | ----------------------------------|
| payload.txt    | /payloads/switch1/                |
| payload.sh     | /payloads/library/rename_entropy/ |

* Note: Create directory named `rename_entropy` in `/payloads/library/`

### Changes which can be made:
* You can change location of renaming files and directories at line `2` in `payload.sh` (Default location ~/home/<target's username>).

#### Support me if you like my work:
* https://twitter.com/drapl0n 
