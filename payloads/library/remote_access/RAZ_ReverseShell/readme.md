# RAZ_ReverseShell
* Author: RalphyZ 
* Version: 1.0
* Target: Windows 7+
* Category: Reverse Shell
* Attackmode: HID, STORAGE

## Dependencies
The following files must exist in the switch folder:
nc.exe - Windowsbinaryfornetcatwiththe-eflag
listener_port.txt - ThePortnumberforthenetcatlistener
listener_ip.txt - TheIPAddressforthenetcatlistener
 
## Description
Executes a netcat reverse cmd shell at a given IP and Port.  This script leaves a trace in the Run Box.  The script can auto-increment the listener port so that the PenTester can create several listeners, and target multiple machines while on a walkabout in an office.  

## Configuration
Set the location of your listener in the listener_ip and listener_port text files.  

If you want the listener port to auto-increment, set:
auto_increment=true

## STATUS
| LED                   | Status                                     |
| --------------------- | ------------------------------------------ |
| Green                 | Working                                    | 
| White                 | Completed without error                    | 
| White (blinking)      | Incrementing the port in listener_port.txt | 
| Blue (blinking)       | listener_port.txt was not found            | 
| Light-Blue (blinking) | listener_ip.txt was not found              | 
| Amber (blinking)      | nc.exe was not found                       |