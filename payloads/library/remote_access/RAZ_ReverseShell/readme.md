# RAZ_ReverseShell
* Author: RalphyZ 
* Version: 1.1
* Target: Windows 7+
* Category: Reverse Shell
* Attackmode: HID, STORAGE

## Change Log
| Version | Changes                       |
| ------- | ------------------------------|
| 1.1     | Updated for firmware 1.1      |
| 1.0     | Initial release               |

## Dependencies
The following files must exist in the switch folder:

nc.exe - Windows binary for netcat with the -e flag

Find nc.exe on Kali, or on NMap's website: http://nmap.org/ncat

listener_port.txt - The Port number for the netcat listener

listener_ip.txt - The IP Address for the netcat listener
 
## Description
Executes a netcat reverse cmd shell at a given IP and Port.  This script leaves a trace in the Run Box.  The script can auto-increment the listener port so that the PenTester can create several listeners, and target multiple machines while on a walkabout in an office.  

## Configuration
Set the location of your listener in the listener_ip and listener_port text files.  

If you want the listener port to auto-increment, set:

auto_increment=true

## Colors
| Status     | Color                         | Description                                      |
| ---------- | ------------------------------| ------------------------------------------------ |
| SETUP      | Magenta solid                 | Setting attack mode, getting the switch position | 
| FAIL1      | Red slow blink                | Could not find the listener_port.txt file        | 
| FAIL2      | Red fast blink                | Could not find the listener_ip.txt file          | 
| FAIL3      | Red very fast blink           | Could not find the nc.exe file                   | 
| SPECIAL    | Cyan inverted single blink    | Incrementing the port in listener_port.txt       | 
| ATTACK     | Yellow single blink           | Running the VBScript                             | 
| FINISH     | Green blink followed by SOLID | Script is finished                               |