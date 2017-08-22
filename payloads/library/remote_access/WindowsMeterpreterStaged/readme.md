# Windows Meterpreter staged payload

* Author: Silvian
* Version: Version 1.0
* Target: Windows 7, 8, 8.1, 10

## Description

This is an a advanced meterpreter staged payload injection using the
rubber ducky capabilites of the bash bunny to call a powershell script referred
to sc.txt which must be hosted on a remote server.
This script then downloads the update.exe which is also hosted on
a remote host, and then executes it on the target machine.
Note it will also attempt to clean up any registry footprint from the run command.
Once the bash bunny is initialized the script should not take more than 2-3 sec to execute.

## Dependencies

you must have sc.txt and update.exe hosted on a remote server.
replace the 127.0.0.1 with your own host and also feel free to change the name
of either sc.txt or update.exe to names of your choosing.
You must also generate the appropariate update.exe payload using msfvenom for
windows meterpreter reverse http/https/tcp etc. Please see Mubix's fantastic
tutorials on metasploit minute/ meterpreter/ msfvenom for details. :)

## STATUS

| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| Amber              | Executin Payload                             |
| Green              | Attack Finished                              |
| Red                | Failed to load dependencies                  |
