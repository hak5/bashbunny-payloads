## About:
* Title: persistentReverseBunny
* Description: persistentReverseBunny provides you persistent reverse shell remotely/locally.
* AUTHOR: drapl0n
* Version: 1.0
* Category: Remote Access
* Target: Unix-like operating systems with systemd.
* Attackmodes: HID, STORAGE

## persistentReverseBunny: provides you persistent encoded reverse shell remotely/locally within 15 secs.

### Workflow:
Keeping tracks clear by disabling and deleting history. Creating hidden directory to store payload. Creating payload mechanism and compiling it for obfuscation, which checks whether internet is connected to the target system, if yes then it creates reverse shell to attackers machine. Creating non-root systemd service to keep payload running in background. Enabling service. Autostarting service on trigger of terminal emulator or shell. 

### Algorithm:
1. Stop storing history, this helps to keep tracks clear from begining.
2. Creating reverse shell.
3. Creating non-root systemd service.
4. Enabling service.
5. Starting service on trigger of firing terminal emulator/shell.

### LED Status:
* `SETUP`   : MAGENTA
* `ATTACK`  : YELLOW
* `FINISH`  : GREEN

### Directory Structure of payload components:
| FileName                | Directory                     |
| ----------------------- | ----------------------------- |
| payload.txt             | /payloads/switch1/            |
| persistentReverseBunny/ | /payloads/libray/             |

### Note:
* Change ip address(0.0.0.0) and port number(4444) to your server's ip address and port number in `reversePersistentBunny/payload.sh` on line `6`.
#### Support me if you like my work:
* https://twitter.com/drapl0n 
