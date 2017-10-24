# Bash Bunny NIC Sharing from Windows
* Author: hayze
* Version: Version 0.1
* Target: Windows 10

## Description

Sets up Networking for Bash Bunny. You should be able to SSH to the Bash Bunny
at 172.16.64.1 once networking has been configured.

## Configuration

None needed. 

## STATUS

| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| Magenta (solid)    | Setting mode to HID                          |
| Yellow (blinking)  | Running PowerShell as admin                  |
| Cyan (blinking)    | Entering PowerShell IEX command              |
| White (solid)      | Setting mode to RNDIS_ETHERNET               |
| White (blinking)   | Running WebServer for IEX script             |
| Blue (solid)       | Running PowerShell script                    |
| Green              | Windows should be configured to share        |

## Credits

QDBA for the server py and readme layout
Hak5 for the Windows sharing instructions
Wasabi Fan on technet for the Com-Object stuff

