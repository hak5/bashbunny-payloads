## About:
* Title: FileRipper
* Description: FileRipper is a payload which encrypts users data.
* AUTHOR: drapl0n
* Version: 1.0
* Category: Execution
* Target: Unix-like operating systems with systemd.
* Attackmodes: HID, Storage

## FileRipper: FileRipper is a payload which encrypts users data using asymmetric cipher.

### Features:
* Encrypts personal files and directories in home directory.
* Decryptable using private key.
* Persistent.
* Autostart payload on boot.

### Workflow:
1. Stop storing history, this helps to keep tracks clear from begining.
2. Importing Public GPG key.
3. Creating non-root systemd service.
4. Deploying fileRipper.
5. Autostarting service on opening terminal with shell (bash and zsh).
6. Entering Message. 

### Directory Structure of payload components:
| FileName       | Directory                     |
| -------------- | ----------------------------- |
| payload.txt    | /payload/switch1/             |
| payload.sh     | /payload/                     |
| fileRipper     | /tools/                       |
| public.pub     | /tools/                       |

### Changes to be made:
* Replace key name "alice" with your key name in payload.sh on line no ```50```.
* Replace key name "alice" with your key name in fileRipper on line no ```6```.
* Change message in payload.sh on line no ```14```.
* Remove line no ```14``` and ```15``` in payload.sh to disable displaying message.

### Usage:
* #### Create new key pair: 
 ```gpg --full-gen-key --expert```
* #### Dump public key of freshly created gpg key: 
 ```gpg --armor --export <key name> > public.pub``` 

### LED Status:
* `SETUP`   : MAGENTA
* `ATTACK`  : YELLOW
* `FINISH`  : GREEN

#### Support me if you like my work:
* https://twitter.com/drapl0n 

