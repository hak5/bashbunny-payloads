$BB = Get-WMIObject Win32_Volume | ? { $_.Label -eq 'BASHBUNNY' } | Select-Object -First 1 -ExpandProperty Driveletter
$driveEject = New-Object -comObject Shell.Application
$driveEject.Namespace(17).ParseName("$BB").InvokeVerb("Eject")