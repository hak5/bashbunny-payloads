# USB Intruder for BashBunny and TwinDucky

- Title:         USB Intruder
- Author:        B0rk
- Version:       1.1
- Target:        Windows 7+
- Props:         Hak5Darren, Diggster, IMcPwn, Dice
- Category:      Infiltration/Execution

## Description

Infiltrates a target system and performs the following:

Created a hidden ProgData folder in the %WinDir%
Sets powershell execution to unrestricted
Copies files from the USB_Intruder directory on the BashBunny to the hidden ProgData folder in the Windows directory
Creates a new user with the following credentials - pwnie:dungothacked
Shares the root of the C: drive with full permissions to the new user pwnie with the label HACKED$ (Hidden)
Hides the new user pwnie from the logon screen
Executes the eject.ps1 file that properly ejects the Mass Storage portion of the payload
Executes a shell.bat file that is in fact a Meterpreter script calling back to the Attacker's Handler (RTFM if you don't know how to DIY)
Cleans up the Run dialogue history

**undo.bat is provided to reverse the creation actions above (in case you want to test)**

**Be sure to have your handler ready to accept the incoming connection from the victim**

## Configuration

Replace the shell.bat file in the USB_Intruder folder with your own custom Meterpreter script or what ever bat file you would like.

**You will need to change delays accordingly to the profile of the victim's PC hardware.**

## STATUS

| LED             | Status           |
| --------------- | ---------------- |
| Solid White     | Initialization   |
| Blue Flashing   | HID Phase        |
| Yellow Flashing | Cleanup of Run   |
| Green Flashing  | Sync/EOF         |
| Solid Green     | 100% Complete    |
