# RAZ_ReverseShell
* Author: RalphyZ & JamesCullum
* Version: 2.0
* Target: Windows 7+ (verified on Windows 10)
* Category: Remote Access
* Attackmode: HID, STORAGE

## Change Log
| Version | Changes                       |
| ------- | ------------------------------|
| 2.0     | Added faked identifier, cleanup, persistence and fixed bugs (firmware 1.5)      |
| 1.1     | Updated for firmware 1.1      |
| 1.0     | Initial release               |

## Dependencies
The following files must exist in the switch folder:

[nc.exe](https://nmap.org/ncat/) - Statically compiled windows binary for netcat

listener_port.txt - The port number for the netcat listener

listener_ip.txt - The IP Address for the netcat listener
 
## Description
Configures a persistent netcat reverse cmd shell at a given IP and Port on the remote computer.
The reverse shell establishes the connection after every windows restart and right after the attack. 

This script removes the log of the run dialog.

It can auto-increment the listener port so that the PenTester can create several listeners, and target multiple machines while on a walkabout in an office.  

## Configuration
Set the location of your listener in the listener_ip and listener_port text files.  

If you want the listener port to auto-increment, set:

`AUTO_INCREMENT=true`

## Colors
| Status     | Color                         | Description                                      |
| ---------- | ------------------------------| ------------------------------------------------ |
| SETUP      | Magenta solid                 | Setting attack mode, getting the switch position | 
| FAIL1      | Red slow blink                | Could not find the listener_port.txt file        | 
| FAIL2      | Red fast blink                | Could not find the listener_ip.txt file          | 
| FAIL3      | Red very fast blink           | Could not find the nc.exe file                   | 
| SPECIAL    | Cyan inverted single blink    | Incrementing the port in listener_port.txt       | 
| ATTACK     | Yellow single blink           | Running the Powershell payload                   | 
| FINISH     | Green blink followed by SOLID | Script is finished                               |