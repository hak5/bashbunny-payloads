## About:
* Title: mine4me
* Description: mine4me make your target's system mine Monero for you.
* AUTHOR: drapl0n
* Version: 1.0
* Category: Execution
* Target: Unix-like operating systems.
* Attackmodes: HID, Storage

## mine4me: mine4me payload makes your target system mine Monero for you. Spread payload in multiple systems to acquire more Monero.

### Features:
* Autostart mining if Internet is connected.
* Fully covert.
* CPU/GPU mining.
* Persistent.
* Autostart payload on trigger. 
* Intelligently manages processes.

### Changes to be made in mine4me/systemIn/config.json:
* MANDATORY: Enter your wallet address on line no `136`.
* Change mining pool(Default pool: `pool.hashvault.pro:443`) on line no `135`.
* Default configuration is for CPU mining for four threads, Can be configured in Block starting from line no `28` to `111`.
* Change number of threads assigned for mining at line no `105`.
* GPU mining can be enabled if you know hardware of target's system. OpenCL/CUDA required.
* For AMD GPU replace `"enabled": false,` with `"enabled": true,` at line no `113`.
* For NVIDIA GPU replace `"enabled": false,` with `"enabled": true,` at line no `122`.

### LED Status:
* `SETUP`   : MAGENTA
* `ATTACK`  : YELLOW
* `FINISH`  : GREEN

### Directory Structure of payload components:
| FileName       | Directory                     |
| -------------- | ----------------------------- |
| payload.txt    | /payloads/switch1/            |
| mine4me/       | /payloads/library/            |

#### Support me if you like my work:
* https://twitter.com/drapl0n  
