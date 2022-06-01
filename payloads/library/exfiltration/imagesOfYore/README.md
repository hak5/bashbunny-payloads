## About:
* Title: imagesOfYore
* Description: imagesOfYore payload steals every image that target ever had in his disk.
* AUTHOR: drapl0n
* Version: 1.0
* Category: Exfiltration
* Target: Unix-like operating systems.
* Attackmodes: HID, Storage

## imagesOfYore: Taking advantaged of cached images, imagesOfYore is simple payload which steals every image that target ever had in his disk.

### Features:
* Sotres all images(curently stored on disk and deleted too).
* Extremly fast zstd compression for transfering images.

### Payload Workflow:
* Stop storing histroy.
* Auto Mounting bunny.
* Transfering payload script.
* Executing script in background and disowning 
* Unmounting bunny.

### LED Status:
* `SETUP`   : MAGENTA
* `ATTACK`  : YELLOW
* `FINISH`  : GREEN

### Directory Structure of payload components:
| FileName               | Directory                     |
| --------------         | ----------------------------- |
| payload.txt            | /payloads/switch1/            |
| imagesOfYore/          | /payloads/libray/             |

### Note:
* Create directory named `imagesOfYore` in `/loot/` for storing loot.

#### Support me if you like my work:
* https://twitter.com/drapl0n
