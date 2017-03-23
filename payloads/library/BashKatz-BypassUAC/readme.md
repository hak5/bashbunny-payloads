# BashKatz for Bash Bunny

* Author: robemmerson
* Version: Version 1.0
* Target: Windows

## Description

Captures a memory dump of the lsass.exe process which can be used offline with Mimikatz to extract plaintext credentials
Saves the files to the loot folder on the Bash Bunny under the BashKatz directory

For safety, leave the USB plugged in for a few extra seconds once it's gone green to ensure all the data is written correctly. Test the dump with: Mimikatz "sekurlsa::minidump <path to file>" "sekurlsa::logonPasswords"

## Configuration

Everything has been included to get you started but I am also providing the source as I don't expect the compiled binaries to be trusted (even though they are clean!).

### payload.exe
This file was created by 'iexpress' within Windows and only includes and executes the 'payload.cmd' file (included in the source directory).

You can extract this file to prove its contents by executing (on Windows): "payload.exe /T:<full path to extract to> /C"

### run_cmd.exe
This is a C# application used to launch whatever command is stored in the HKCU\Software\Microsoft\exe key. I am bypassing UAC by abusing the fact that 'sdclt' auto-elevates and skips UAC and then checks the "HKCU\Software\Microsoft\Windows\CurrentVersion\App Paths\control.exe" key which can be overridden the by user. Unfortunately iexpress applications don't seem to launch correctly from here so this was created to launch a silent CMD in the background to launch this file. This file can be decompiled by any good C# decompiler!

Source: https://github.com/robemmerson/Execute-CMD-From-HKCU

## STATUS

| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| Orange (blinking)  | Setting up                                   |
| Blue (blinking)    | Attack running                               |
| Green              | Attack complete                              |

## Discussion
There's probably a more efficient way of achieving the same result and also executing other files but I thought I'd start off with this to demostrate the power of abusing MS signed applications as well as bypassing UAC.