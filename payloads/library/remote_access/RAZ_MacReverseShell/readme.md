# RAZ_MacReverseShell
* Author: RalphyZ 
* Version: Version 1.1
* Target: Mac OSX
* Category: Reverse Shell
* Attackmode: HID

## Dependencies
None
 
## Description
Starts a terminal window on a Mac,then creates a bash reverse shell inside a script, /tmp/s.sh.  It then adds the script to the Launch Agent - establishing persistence - running at startup

## Configuration
Set the location of your listener:
LISTENER_IP="192.168.1.100"
LISTENER_PORT="4444"

Set the frequency you want the script to run (in minutes)
FREQUENCY="60"

## STATUS
| LED                 | Status                                 |
| ------------------- | -------------------------------------- |
| Green (blinking)    | Working                                |
| White               | Script has completed                   |
