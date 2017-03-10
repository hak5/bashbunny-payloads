# Shows details of currently running PC
# Simen Kjeserud



#Get info about pc
$computerSystem = Get-CimInstance CIM_ComputerSystem
$computerBIOS = Get-CimInstance CIM_BIOSElement
$computerOS = Get-CimInstance CIM_OperatingSystem
$computerCPU = Get-CimInstance CIM_Processor
$computerHDD = Get-CimInstance Win32_LogicalDisk -Filter "DeviceID = 'C:'"
$computerPubIP = irm ipinfo.io/ip
$computerIP = get-WmiObject Win32_NetworkAdapterConfiguration|Where {$_.Ipaddress.length -gt 1}

#Check RDP
$RDP
if ((Get-ItemProperty "hklm:\System\CurrentControlSet\Control\Terminal Server").fDenyTSConnections -eq 0) { $RDP = "RDP is Enabled" } else { $RDP = "RDP is NOT enabled" }

#Get wifi SSID and password
$Networks =  Get-WmiObject Win32_NetworkAdapterConfiguration -Filter "DHCPEnabled=$True" | ? {$_.IPEnabled}
foreach ($Network in $Networks) {

$IsDHCPEnabled = $false
If($network.DHCPEnabled) {
$IsDHCPEnabled = $true
  }
[string[]]$computerMAC =$Network.MACAddress
}
$output = netsh.exe wlan show profiles
$profileRows = $output | Select-String -Pattern 'All User Profile'
$profileNames = New-Object System.Collections.ArrayList
for($i = 0; $i -lt $profileRows.Count; $i++){
$profileName = ($profileRows[$i] -split ":")[-1].Trim()
$profileOutput = netsh.exe wlan show profiles name="$profileName" key=clear 
$SSIDSearchResult = $profileOutput| Select-String -Pattern 'SSID Name'
$profileSSID = ($SSIDSearchResult -split ":")[-1].Trim() -replace '"'
$passwordSearchResult = $profileOutput| Select-String -Pattern 'Key Content'
if($passwordSearchResult){
$profilePw = ($passwordSearchResult -split ":")[-1].Trim()
} else {
$profilePw = ''
}
$networkObject = New-Object -TypeName psobject -Property @{
ProfileName = $profileName
SSID = $profileSSID
Password = $profilePw
}
$profileNames.Add($networkObject)
}
$profileNames.Add($networkObject)

#The output
Clear-Host
Write-Host "System Information for: " $computerSystem.Name -BackgroundColor DarkCyan
"Manufacturer: " + $computerSystem.Manufacturer
"Model: " + $computerSystem.Model
"Serial Number: " + $computerBIOS.SerialNumber
"CPU: " + $computerCPU.Name
"HDD Capacity: "  + "{0:N2}" -f ($computerHDD.Size/1GB) + "GB"
"HDD Space: " + "{0:P2}" -f ($computerHDD.FreeSpace/$computerHDD.Size) + " Free (" + "{0:N2}" -f ($computerHDD.FreeSpace/1GB) + "GB)"
"RAM: " + "{0:N2}" -f ($computerSystem.TotalPhysicalMemory/1GB) + "GB"
"Operating System: " + $computerOS.caption + ", Service Pack: " + $computerOS.ServicePackMajorVersion
"User logged In: " + $computerSystem.UserName
"Last Reboot: " + $computerOS.LastBootUpTime
"Computers MAC adress: " + $computerMAC
"Computers IP adress: " + $computerIP.ipaddress[0]
"Public IP adress: " + $computerPubIP
"RDP: " + $RDP
$profileNames | Sort-Object ProfileName | Select-Object ProfileName, SSID, Password
