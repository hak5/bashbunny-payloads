## About:
* Title: mysql_dump
* Description: mysql_dump, a payload used to exfiltrate mysql history. Looting mysql history can be useful understanding targets database schema.
* AUTHOR: drapl0n
* Version: 1.0
* Category: Exfiltaration
* Target: Unix-like operating systems.
* Attackmodes: HID, Storage

## mysql_dump: mysql_dump payload exfiltrates MySQL history, which can be used to understand targets database schema..

### Workflow:
1. Prevent storing history.
2. Fetching BashBunny's block device.
3. Mounting BashBunny.
4. Looting mysql_history keys.
5. Unmounting BashBunny.

### LED Status:
* `SETUP`   : MAGENTA
* `ATTACK`  : YELLOW
* `FINISH`  : GREEN

### Directory Structure of payload components:
| FileName       | Directory                     |
| -------------- | ----------------------------- |
| payload.txt    | /payloads/switch1/            |
| payload.sh     | /payloads/library/mysql_dump/ |

* Note: Create directory named `mysql_dump` in `/payloads/library/`

#### Support me if you like my work:
* https://twitter.com/drapl0n 
