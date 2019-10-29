$scriptpath = $MyInvocation.MyCommand.Path
$dir = Split-Path $scriptpath
$desktop = [Environment]::GetFolderPath("Desktop") 
$templockdir = "$desktop\Locker"
$extension = (Get-Content -Path "$dir\settings.db" -TotalCount 2)[-1]
$lockedfiles = Get-ChildItem -Path "$templockdir" -Include "*$extension" -Recurse
$pcname = $env:computername
$bunny = (get-item $scriptPath ).parent
$lockerkeys = "$bunny\loot\lockerkeys"
$pclockerkey = "$lockerkeys\$pcname.key"

Get-Content -Path "$dir\version"

#Import AES Encryption/Decryption/Key source to Script.
Import-Module "$dir\enc.psm1" 3>$null

# Check if key exists for Target PC.
if(!(Test-Path "$pclockerkey")){
Write-Host "No Key present for this Machine."
write-host "`n"
}
# If Key exists start Decrypting.
if(Test-Path "$pclockerkey"){
Write-Host "KEY FOUND! Loading Key.."
$key = Get-Content -Path "$pclockerkey"

# Decrypt Files using PC's Unique Key
Write-Host "Decrypting Files... Please Wait.."
write-host "`n"
Write-Host "DO NOT TURN EXIT PROGRAM OR RISK LOSSING DATA WHILE DECRYPTING!!"
write-host "`n"
Decrypt-File "$lockedfiles" -Key $key -Suffix ".$extension"
}

exit