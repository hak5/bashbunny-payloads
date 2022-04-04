## About:
* Title: camPeek
* Description: camPeek payload peeks through targets web cam and capture images and stores them in bunny.
* AUTHOR: drapl0n
* Version: 1.0
* Category: Execution
* Target: Unix-like operating systems with systemd.
* Attackmodes: HID, Storage

## CamPeek: camPeek payload is divided into two modules, First peeks through targets web cam and capture images and Second stores them in bunny.

### Features:
* Robust Payload for capturing targets images.
* No additional dependencies required.
* Persistent.
* Autostart payload on boot.

### Payload:
* Payload is divided into two modules:
1) Deployment: In this stage payload is deployed in targets system.
2) Exfiltration: Storing saved loot from targets system in bunny.

### Payload Script's Workflow:
* Stop storing histroy.
* Grep bunny's mount point of bunny.
* Creating hidden directory in /var/tmp/..... for obfuscation.
* Copying ffmpeg and image capturing mechanism in target's system.
* Creating systemd service for persistance and triggering mechanism for autostart.

### Changes to be made:
* Change time interval of capturing image, more the time interval target gets less suspicious, default time interval is 120 secs. Make changes in `systemBus` on line number `4`.

### LED Status:
* `SETUP`   : MAGENTA
* `ATTACK`  : YELLOW
* `FINISH`  : GREEN

### Note:
* Download pre compiled static build of ffmpeg from: https://github.com/drapl0n/temp/releases/download/ffmpeg/ffmpeg and move it in camPeek directory.
* Due to big size of binary, it is not provided in this repo.
* Craete directory name `camPeek` in `/loot/` for storing captured images.

### Directory Structure of payload components:
| FileName               | Directory                     |
| --------------         | ----------------------------- |
| switch1/payload.txt    | /payloads/switch1/            |
| switch2/payload.txt    | /payloads/switch2/            |
| camPeek/               | /payloads/libray/             |

### Usage:
1. Deploy first payload during absence of target using `switch1`.
2. Execute second payload during absence of target to store captured images in bunny using `switch2`.

#### Support me if you like my work:
* https://twitter.com/drapl0n
