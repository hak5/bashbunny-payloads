# Receives the path for the wallpaper file from the Bunnys Playload Dir
Param([string]$Path)

# Sets the new wallpaper path to the desktop
# Copies the file from the Playload Dir to the Users Desktop
$new_path = "$env:USERPROFILE\Desktop\w.png"
cp $Path $new_path

#Sets the wallpaper
Set-ItemProperty -path 'HKCU:\Control Panel\Desktop\' -name wallpaper -value $new_path