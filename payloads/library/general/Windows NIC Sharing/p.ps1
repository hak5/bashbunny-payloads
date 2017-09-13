# Set up and configure NIC to share internets with BB
# Credit to wiki.bashbunny.com for the outline
# Credit to Wasabi Fan on technet for the Com-Object stuff

Clear-Host
# Share Internet connection
Write-Output "Configuring Bash Bunny for internet usage..."
Write-Output "Getting WMI info on NICs..."
$BBWMIAdapter = (Get-WmiObject -Class Win32_NetworkAdapterConfiguration -Filter 'MACAddress = "00:11:22:33:44:55"')
$WMIAdapters = (Get-WmiObject -Class Win32_NetworkAdapterConfiguration -Filter 'MACAddress<>"00:11:22:33:44:55"') | %{ if ($_.IPAddress -ne $null) {$_}}
# Get Target GUID (shareable NIC)
# This is an imperfect method of getting the GUID, I'm just assuming that no one has
# more than 38 NICs on their Windows PC, and using it as an indicator of array dimensions
if ((($WMIAdapters.SettingID).Length -gt 1) -and (($WMIAdapters.SettingID).Length -lt 38)){
    $ETHGuid = $WMIAdapters[0].SettingID
} else {
    $ETHGuid = $WMIAdapters.SettingID
}
regsvr32 /s hnetcfg.dll # Register HNetCfg library
$NetSharing = New-Object -ComObject HNetCfg.HNetShare  # Create NetSharingManager object
function share ($GUID, $Public) {
    $Connection = $NetSharing.EnumEveryConnection | ?{ $NetSharing.NetConnectionProps.Invoke($_).Guid -eq $GUID } # Find Connection
    $CfgSharing = $NetSharing.INetSharingConfigurationForINetConnection.Invoke($Connection) # Get sharing config
    if ($Public) { $pubvar = 0 } else { $pubvar = 1 }
    $CfgSharing.EnableSharing($pubvar) # Enable sharing with public (public = 0, private = 1)
}
function unshare ($GUID) {
    $Connection = $NetSharing.EnumEveryConnection | ?{ $NetSharing.NetConnectionProps.Invoke($_).Guid -eq $GUID } # Find Connection
    $NetSharing.INetSharingConfigurationForINetConnection.Invoke($Connection).DisableSharing() # Disable Sharing
}
Write-Output "Setting up interface sharing..."
Write-Output "Setting up interface sharing on primary NIC...."
share -GUID $ETHGuid -Public $true # Set live NIC to share public
Write-Output "Setting up interface sharing on Bash Bunny...."
share -GUID $BBWMIAdapter.SettingID -Public $false # Set Bash Bunny NIC to share private

Write-Output "Setting static IP for bash buny NIC..."
$BBWMIAdapter.EnableStatic('172.16.64.64','255.255.255.0')

Clear-Host
# Sharing should be done
Write-Output "#########################################################"
Write-Output "The Bash Bunny should now be able to access the internet"
Write-Output "You should be able to ssh into your Bash Bunny at:"
Write-Output "172.16.64.1"
Write-Output "Hit ENTER to clean up network settings"
Write-Output "#########################################################"
Pause

# Take down sharing
Write-Output "Disabling interface sharing on primary NIC...."
unshare -GUID $ETHGuid -Public $true # Stop public sharing on live NIC
Write-Output "Disabling interface sharing on Bash Bunny...."
unshare -GUID $BBWMIAdapter.SettingID # Stop private sharing on Bash Bunny NIC

EXIT
