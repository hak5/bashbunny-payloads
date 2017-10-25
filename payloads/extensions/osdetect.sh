function OSDETECT() {
    OSfound='UNKNOWN'
    LED Y
    ScanForOS=$(nmap -Pn -O $TARGET_IP -p1)
    [[ $ScanForOS == *"Too many fingerprints"* ]] && ScanForOS=$(nmap -Pn -O --osscan-guess $TARGET_IP)
    [[ $ScanForOS == *"Windows"* ]] && OSfound='Windows'
    [[ $ScanForOS == *"Linux"* ]] && OSfound='Linux'
    export TARGET_OS=$OSfound
}
ATTACKMODE RNDIS_ETHERNET
sleep 5
GET TARGET_IP
if [ -z $TARGET_IP ]
    ATTACKMODE ECM_ETHERNET
    sleep 5
    GET TARGET_IP
fi
[[ -z $TARGET_IP ]] && exit
export -f OSDETECT
