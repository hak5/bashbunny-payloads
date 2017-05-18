# USB Intruder for BashBunny (and adaptable to TwinDucky)

- Title:         USB Intruder
- Author:        B0rk
- Version:       1.1
- Target:        Windows 7+
- Props:         Hak5Darren, Diggster, IMcPwn, and many more
- Category:      Infiltration/Execution

## Description

**THIS PAYLOAD ASSUMES YOUR VICTIM HAS ADMINISTRATOR PRIVILEGES**

Infiltrates a target system and performs the following:

Created a hidden ProgData folder in the %WinDir% (HID)
Sets powershell execution to unrestricted (HID)
Copies files from the USB_Intruder directory on the BashBunny to the hidden ProgData folder in the Windows directory (STORAGE)
Launches seq1.ps1 that launches the following tasks in order
Creates a new user with the following credentials - pwnie:dungothacked (UAC.bat)
Sets new user pwnie to local Administrators group (UAC.bat)
Shares the root of the C: drive with full permissions to the new user pwnie with the label HACKED$ (Hidden) (UAC.bat)
Hides the new user pwnie from the logon screen (hide.ps1)
Executes the eject.ps1 file that properly ejects the Mass Storage portion of the payload (eject.ps1)
Executes a shell.bat file that a Meterpreter script that calls back to the Attacker's Handler (Create/Replace with your own)
Cleans up the Run dialogue history (HID)
Sync's the BashBunny for final removal (BB)

**undo.bat is provided to reverse the creation actions above (in case you want to test)**

**Be sure to have your handler ready to accept the incoming connection from the victim**

## Configuration

Replace the shell.bat file in the USB_Intruder folder with your own custom Meterpreter script or what ever payload you would like.

There is always potential for additional scripts to be run from the seq1.bat file, so bolster it with additional jobs.

**You will need to change delays accordingly to the profile of the victim's PC hardware.**

## STATUS

| LED             | Status           |
| --------------- | ---------------- |
| Solid White     | Initialization   |
| Blue Flashing   | HID/Storage Phase|
| Yellow Flashing | Cleanup of Run   |
| Green Flashing  | Sync/EOF         |
| Solid Green     | 100% Complete    |

Discussion and Comments at https://forums.hak5.org/index.php?/topic/40981-payloadusb_intruder/
