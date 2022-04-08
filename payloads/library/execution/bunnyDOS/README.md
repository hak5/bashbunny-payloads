## About:
* Title: bunnyDOS
* Description: bunnyDOS payload intelligently search target's network for open http(configurable for https) ports and executes DOS it.
* AUTHOR: drapl0n
* Version: 1.0
* Category: Execution
* Target: Unix-like operating systems with systemd.
* Attackmodes: HID, Storage

## bunnyDOS: bunnyDOS payload intelligently search target's network for open http(configurable for https) ports and DOS it. Inject payload into multiple systems in network for robust DDOS.

### Features:
* Auto scan Network.
* Capable for DDOS.
* Persistent.
* Autostart payload on boot.

### Payload Workflow:
* Stop storing histroy.
* Auto Mounting bunny.
* Transfering payload script.
* Executing script in background and disowning it(this helps to reduce physical access time as network can be large).
* Unmounting bunny.

### LED Status:
* `SETUP`   : MAGENTA
* `ATTACK`  : YELLOW
* `FINISH`  : GREEN

### Directory Structure of payload components:
| FileName               | Directory                     |
| --------------         | ----------------------------- |
| payload.txt            | /payloads/switch1/            |
| bunnyDOS/              | /payloads/libray/             |

#### Support me if you like my work:
* https://twitter.com/drapl0n
