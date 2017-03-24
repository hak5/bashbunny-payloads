sbunnynmask=255.255.255.0
sbunnynet=172.16.64.0/24
sbunnyhostip=172.16.64.64
sbunnyip=172.16.64.1
bunnydetected=$(ip addr | grep '00:11:22' -B1 | awk {'print $2'} | head -1 | grep 'eth\|en')
hasiproute2=$(which ip)
hasdefaultroute=$(ip route)
sbunnygw=($(ip route | grep default | awk {'print $3'}))
sbunnywan=($(ip route | grep default | awk {'print $5'}))
a="0"
until bunnyiface=$(ip addr | grep '00:11:22' -B1 | awk {'print $2'} | head -1 | grep 'eth\|en')
do
    sleep 1
    a=$[$a+1]
    if [[ $a == "51" ]]; then
        a=0
    fi
done
sleep 5
bunnyiface=$(ip addr | grep '00:11:22' -B1 | awk {'print $2'} | head -1 | grep 'eth\|en' | sed 's/://g')
sbunnylan=$bunnyiface

ifconfig $sbunnylan $sbunnyhostip netmask $sbunnynmask up
until ping $sbunnyip -c1 -w1 >/dev/null
do
    ifconfig $sbunnylan $sbunnyhostip netmask $sbunnynmask up &>/dev/null
    sleep 1
done
ifconfig $sbunnylan $sbunnyhostip netmask $sbunnynmask up
echo '1' > /proc/sys/net/ipv4/ip_forward
iptables -X
iptables -F
iptables -A FORWARD -i $sbunnywan -o $sbunnylan -s $sbunnynet -m state --state NEW -j ACCEPT
iptables -A FORWARD -m state --state ESTABLISHED,RELATED -j ACCEPT
iptables -A POSTROUTING -t nat -j MASQUERADE
route del default
route add default gw $sbunnygw $sbunnywan
exit
