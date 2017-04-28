<<<<<<< HEAD
# 1PumpDump for Bash Bunnys

Author:  Anthony Siravo
Version: Version 1.0
Credit:  Hak5Darren's many existing scripts and videos were main contributors

## Description

Payload utilizes Windows Sysinternal ProcDump to dump lsass.exe process memory for post exploitation utilizing tools such as mimicatz after initial Red Team engagement.

Important: Procdump.exe is a 3rd party binary. Hak5 is not responsible for the execution of 3rd party binaries.  Use at your own risk.



## Requirements

procdump.exe, iPump.vps, 1PumpHidden.cmd, and 1PumpDump.cmd must be in the same folder as payload.txt

Windows Sysinternals ProcDump (procdump.exe) must be in the same folder as payload.txt
Obtain procdump.exe from https://technet.microsoft.com/en-us/sysinternals/dd996900.aspx


## Payload
Launches PowerShell as Administrator
Bypasses UAC
Executes 1PumpHidden.cmd
Runs procdump.exe
Copies the dump to the loot folder on the Bash Bunny.

## Tweaks
Adjust DELAY Statements if Target Systems are Super Slow

## LED Mapping
Red LED - Payload Start
Purple LED - Command Started
=======
# 1PumpDump for Bash Bunnys

Author:  Anthony Siravo
Version: Version 1.0
Credit:  Hak5Darren's many existing scripts and videos were main contributors

## Description

Payload utilizes Windows Sysinternal ProcDump to dump lsass.exe process memory for post exploitation utilizing tools such as mimicatz after initial Red Team engagement.

## Requirements

procdump.exe, iPump.vps, 1PumpHidden.cmd, and 1PumpDump.cmd must be in the same folder as payload.txt

## Payload
Launches PowerShell as Administrator
Bypasses UAC
Executes 1PumpHidden.cmd
Runs procdump.exe
Copies the dump to the loot folder on the Bash Bunny.

## Tweaks
Adjust DELAY Statements if Target Systems are Super Slow

## LED Mapping
Red LED - Payload Start
Purple LED - Command Started
>>>>>>> origin/master
Blue LED - Payload Complete