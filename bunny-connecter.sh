#!/bin/bash
# Bash Bunny Connector for Linux
# EULA https://www.bashbunny.com/licence/eula.txt
# License https://www.bashbunny.com/licence/software_licence.txt

bbver=1
BBSH_CONFIG="$(dirname $0)/bunny_connecter_config.txt"

if [ "$EUID" -ne 0 ]
    then echo "This Bash Bunny Connection script requires root."
    sudo su -s "$0"
    exit
fi

function banner {
    # Show random banner because 1337
    b=$(( ( RANDOM % 5 ) + 1 ))
    case "$b" in
        1)
        echo $(tput setaf 3)
	echo "           _____  _____  _____  _____     _____  _____  _____  _____  __ __ ";
	echo " (\___/)  | __  ||  _  ||   __||  |  |   | __  ||  |  ||   | ||   | ||  |  |";
	echo " (='.'=)  | __ -||     ||__   ||     |   | __ -||  |  || | | || | | ||_   _|";
	echo " (\")_(\")  |_____||__|__||_____||__|__|   |_____||_____||_|___||_|___|  |_|  ";
	echo " Bash Bunny by Hak5     USB Attack/Automation Platform                      ";
        echo "$(tput sgr0) v$bbver";
        ;;
        2)
        echo $(tput setaf 3)
	echo "           _____  _____  _____  _____     _____  _____  _____  _____  __ __ ";
	echo " (\___/)  | __  ||  _  ||   __||  |  |   | __  ||  |  ||   | ||   | ||  |  |";
	echo " (='.'=)  | __ -||     ||__   ||     |   | __ -||  |  || | | || | | ||_   _|";
	echo " (\")_(\")  |_____||__|__||_____||__|__|   |_____||_____||_|___||_|___|  |_|  ";
	echo " Bash Bunny by Hak5     USB Attack/Automation Platform                      ";
        echo "$(tput sgr0) v$bbver";
        ;;
        3)
        echo $(tput setaf 3)
	echo "           _____  _____  _____  _____     _____  _____  _____  _____  __ __ ";
	echo " (\___/)  | __  ||  _  ||   __||  |  |   | __  ||  |  ||   | ||   | ||  |  |";
	echo " (='.'=)  | __ -||     ||__   ||     |   | __ -||  |  || | | || | | ||_   _|";
	echo " (\")_(\")  |_____||__|__||_____||__|__|   |_____||_____||_|___||_|___|  |_|  ";
	echo " Bash Bunny by Hak5     USB Attack/Automation Platform                      ";
        echo "$(tput sgr0) v$bbver";
        ;;
        4)
        echo $(tput setaf 3)
	echo "           _____  _____  _____  _____     _____  _____  _____  _____  __ __ ";
	echo " (\___/)  | __  ||  _  ||   __||  |  |   | __  ||  |  ||   | ||   | ||  |  |";
	echo " (='.'=)  | __ -||     ||__   ||     |   | __ -||  |  || | | || | | ||_   _|";
	echo " (\")_(\")  |_____||__|__||_____||__|__|   |_____||_____||_|___||_|___|  |_|  ";
	echo " Bash Bunny by Hak5     USB Attack/Automation Platform                      ";
        echo "$(tput sgr0) v$bbver";
        ;;
        5)
        echo $(tput setaf 3)
	echo "           _____  _____  _____  _____     _____  _____  _____  _____  __ __ ";
	echo " (\___/)  | __  ||  _  ||   __||  |  |   | __  ||  |  ||   | ||   | ||  |  |";
	echo " (='.'=)  | __ -||     ||__   ||     |   | __ -||  |  || | | || | | ||_   _|";
	echo " (\")_(\")  |_____||__|__||_____||__|__|   |_____||_____||_|___||_|___|  |_|  ";
	echo " Bash Bunny by Hak5     USB Attack/Automation Platform                      ";
        echo "$(tput sgr0) v$bbver";
        ;;
    esac
}

function showsettings {
    printf "\n\
    $(tput bold)Saved Settings$(tput sgr0): Share Internet connection from $sbunnywan\n\
    to Bash Bunny at $sbunnylan through default gateway $sbunnygw\n"
}

function menu {
    start_clean # removes bunny related rules without doing a full flush
    printf "\n\
    [$(tput bold)C$(tput sgr0)]onnect using saved settings\n\
    [$(tput bold)G$(tput sgr0)]uided setup (recommended)\n\
    [$(tput bold)M$(tput sgr0)]anual setup\n\
    [$(tput bold)A$(tput sgr0)]dvanced IP settings\n\
    [$(tput bold)Q$(tput sgr0)]uit\n\n    "
    read -r -sn1 key
    case "$key" in
            [gG]) guidedsetup;;
            [mM]) manualsetup;;
            [cC]) connectsaved;;
            [aA]) advancedsetup;;
            [bB]) bunny;;
            [qQ]) printf "\n"; start_clean; exit;;
    esac
}

function manualsetup {
    ipinstalled=$(which ip)
    if [[ "$?" == 0 ]]; then
        ifaces=($(ip link show | grep -v link | awk {'print $2'} | sed 's/://g' | grep -v lo))
        printf "\n    Select Bash Bunny Interface:\n"
        for i in "${!ifaces[@]}"; do
            printf "    [$(tput bold)%s$(tput sgr0)]\t%s\t" "$i" "${ifaces[$i]}"
            printf "$(ip -4 addr show ${ifaces[$i]} | grep inet | awk {'print $2'} | head -1)\n"
        done
        read -r -p "    > " planq
        if [ "$planq" -eq "$planq" ] 2>/dev/null; then
            sbunnylan=(${ifaces[planq]})
        else
            printf "\n    Response must be a listed numeric option\n"; manualsetup
        fi
        printf "\n    Select Internet Interface:\n"
        for i in "${!ifaces[@]}"; do
            printf "    [$(tput bold)%s$(tput sgr0)]\t%s\t" "$i" "${ifaces[$i]}"
            printf "$(ip -4 addr show ${ifaces[$i]} | grep inet | awk {'print $2'} | head -1)\n"
        done
        read -r -p "    > " inetq
        if [ "$inetq" -eq "$inetq" ] 2>/dev/null; then
            sbunnywan=(${ifaces[inetq]})
        else
            printf "\n    Response must be a listed numeric option\n"; manualsetup
        fi
        printf "\n$(netstat -nr)\n\n"
        read -r -p "    Specify Default Gateway IP Address: " sbunnygw
        savechanges
    else
        printf "\n\n    Configuration requires the 'iproute2' package (aka the 'ip' command).\n    Please install 'iproute2' to continue.\n"
        menu
    fi
}

function guidedsetup {
    hasiproute2=$(which ip)
    if [[ "$?" == 1 ]]; then
        printf "\n\n    Configuration requires the 'iproute2' package (aka the 'ip' command).\n    Please install 'iproute2' to continue.\n"; menu
    fi
    hasdefaultroute=$(ip route)
    if [[ "$?" == 1 ]]; then
        printf "\n    No route detected. Check connection and try again.\n"; menu
    fi

    printf "\n    $(tput setaf 3)Step 1 of 3: Select Default Gateway$(tput sgr0)\n\
    Default gateway reported as $(tput bold)$(ip route | grep default | awk {'print $3'} | head -1)$(tput sgr0)\n"
    read -r -p "    Use the above reported default gateway?             [Y/n]? " usedgw
    case $usedgw in
        [yY][eE][sS]|[yY]|'')
        sbunnygw=($(ip route | grep default | awk {'print $3'}))
        ;;
        [nN][oO]|[nN])
        printf "\n$(ip route)\n\n"
        read -r -p "    Specify the default gateway by IP address: " sbunnygw
        ;;
    esac

    printf "\n    $(tput setaf 3)Step 2 of 3: Select Internet Interface$(tput sgr0)\n\
    Internet interface reported as $(tput bold)$(ip route | grep default | awk {'print $5'} | head -1)$(tput sgr0)\n"
    read -r -p "    Use the above reported Internet interface?          [Y/n]? " useii
    case $useii in
        [yY][eE][sS]|[yY]|'')
            sbunnywan=($(ip route | grep default | awk {'print $5'}))
        ;;
        [nN][oO]|[nN])
            printf "\n    Available Network Interfaces:\n"
            ifaces=($(ip link show | grep -v link | awk {'print $2'} | sed 's/://g' | grep -v lo))
            for i in "${!ifaces[@]}"; do
                printf "    \t%s\t" "${ifaces[$i]}"
                printf "$(ip -4 addr show ${ifaces[$i]} | grep inet | awk {'print $2'} | head -1)\n"
            done
            read -r -p "    Specify the internet interface by name: " sbunnywan
        ;;
    esac

    printf "\n    $(tput setaf 3)Step 3 of 3: Select Bash Bunny Interface$(tput sgr0)\n    Please connect the Bash Bunny to this computer.\n    "

    a="0"
    until bunnyiface=$(ip addr | grep '00:11:22:33:44:55' -B1 | awk {'print $2'} | head -1 | grep 'eth\|en')
    do
        printf "."
        sleep 1
        a=$[$a+1]
        if [[ $a == "51" ]]; then
            printf "\n    "
            a=0
        fi
    done
    printf "[Checking]"
    sleep 5 # Wait as the system is likely to rename interface. Sleeping rather than more advanced error handling becasue reasons.
    bunnyiface=$(ip addr | grep '00:11:22:33:44:55' -B1 | awk {'print $2'} | head -1 | grep 'eth\|en' | sed 's/://g')
    printf "\n    Detected Bash Bunny on interface $(tput bold)$bunnyiface$(tput sgr0)\n";
    read -r -p "    Use the above detected Bash Bunny interface?    [Y/n]? " pi
    case $pi in
        [yY][eE][sS]|[yY]|'')
            sbunnylan=$bunnyiface
        ;;
        [nN][oO]|[nN])
            printf "\n    Available Network Interfaces:\n"
            ifaces=($(ip link show | grep -v link | awk {'print $2'} | sed 's/://g' | grep -v lo))
            for i in "${!ifaces[@]}"; do
                printf "    \t%s\t" "${ifaces[$i]}"
                printf "$(ip -4 addr show ${ifaces[$i]} | grep inet | awk {'print $2'} | head -1)\n"
            done
            read -r -p "    Specify the Bash Bunny interface by name: " sbunnylan
        ;;
    esac
    savechanges
}

function advancedsetup {
    printf "\n\
    By default the Bash Bunny resides on the $(tput bold)172.16.64.0/24$(tput sgr0) network\n\
    with the IP Address $(tput bold)172.16.64.1$(tput sgr0) and Ethernet default route $(tput bold)172.16.64.64$(tput sgr0).\n\n\
    The Bash Bunny expects an Internet connection from 172.16.64.64 by\n\
    default, which this script aids in configuring. These IP addresses may\n\
    be changed if desired by modifying network configs on the Bash Bunny.\n\n"
    read -r -p "    Continue with advanced IP config [y/N]? " qcontinue
    case $qcontinue in
        [nN][oO]|[nN]|'') menu ;;
        [yY][eE][sS]|[yY])
            read -r -p "    Bash Bunny Network               [172.16.42.0/24]: " sbunnynet
            if [[ $sbunnynet == '' ]]; then 
            sbunnynet=172.16.64.0/24 # Bash Bunny network. Default is 172.16.64.0/24
            fi
            read -r -p "    Bash Bunny Netmask               [255.255.255.0]: " sbunnynmask
            if [[ $sbunnynmask == '' ]]; then 
            sbunnynmask=255.255.255.0 #Default netmask for /24 network
            fi
            read -r -p "    Host IP Address                  [172.16.42.42]: " sbunnyhostip
            if [[ $sbunnyhostip == '' ]]; then 
            sbunnyhostip=172.16.64.64 #IP Address of host computer
            fi
            read -r -p "    Bash Bunny IP Address            [172.16.42.1]: " sbunnyip
            if [[ $sbunnyip == '' ]]; then 
            sbunnyip=172.16.64.1 #If this seems familiar it's becuase I'm just recycling wp6.sh from the WiFi Pineapple 
            fi
            printf "\n    Advanced IP settings will be saved for future sessions.\n    Default settings may be restored by selecting Advanced IP settings and\n    pressing [ENTER] when prompted for IP settings.\n\n    Press any key to continue"
            savechanges
        ;;
    esac
}

function savechanges {
    # using ";" as a delmiter in sed is a-okay
    sed -i "s;^sbunnynmask.*;sbunnynmask=$sbunnynmask;"     "$BBSH_CONFIG"
    sed -i "s;^sbunnynet.*;sbunnynet=$sbunnynet;"           "$BBSH_CONFIG"
    sed -i "s;^sbunnylan.*;sbunnylan=$sbunnylan;"           "$BBSH_CONFIG"
    sed -i "s;^sbunnywan.*;sbunnywan=$sbunnywan;"           "$BBSH_CONFIG"
    sed -i "s;^sbunnygw.*;sbunnygw=$sbunnygw;"              "$BBSH_CONFIG"
    sed -i "s;^sbunnyhostip.*;sbunnyhostip=$sbunnyhostip;"  "$BBSH_CONFIG"
    sed -i "s;^sbunnyip.*;sbunnyip=$sbunnyip;"              "$BBSH_CONFIG"
    sed -i "s;^sfirsttime.*;sfirsttime=0;"                  "$BBSH_CONFIG"
    sfirsttime=0
    printf "\n    Settings saved.\n"
    showsettings
    menu
}

function connectsaved {
    if [[ "$sfirsttime" == "1" ]]; then
        printf "\n    Error: Settings unsaved. Run either Guided or Manual setup first.\n"; menu
    fi
    ifconfig $sbunnylan $sbunnyhostip netmask $sbunnynmask up #Bring up Ethernet Interface directly connected to Bash Bunny
    printf "Detecting Bash Bunny..."
    until ping $sbunnyip -c1 -w1 >/dev/null
    do
        printf "."
        ifconfig $sbunnylan $sbunnyhostip netmask $sbunnynmask up &>/dev/null
        sleep 1
    done
    printf "...found.\n\n"
    printf "    $(tput setaf 6)     _ .   $(tput sgr0)        $(tput setaf 7)___$(tput sgr0)         $(tput setaf 3)(\___/)$(tput sgr0)\n"
    printf "    $(tput setaf 6)   (  _ )_ $(tput sgr0) $(tput setaf 2)<-->$(tput sgr0)  $(tput setaf 7)[___]$(tput sgr0)  $(tput setaf 2)<-->$(tput sgr0)  $(tput setaf 3)(='.'=)$(tput sgr0)\n"
    printf "    $(tput setaf 6) (_  _(_ ,)$(tput sgr0)       $(tput setaf 7)\___\\$(tput sgr0)        $(tput setaf 3)(\")_(\")$(tput sgr0)\n"
    ifconfig $sbunnylan $sbunnyhostip netmask $sbunnynmask up #Bring up Ethernet Interface directly connected to Pineapple
    echo '1' > /proc/sys/net/ipv4/ip_forward # Enable IP Forwarding
    iptables -I FORWARD -i $sbunnywan -o $sbunnylan -s $sbunnynet -m state --state NEW -j ACCEPT #setup IP forwarding
    iptables -I FORWARD -m state --state ESTABLISHED,RELATED -j ACCEPT
    iptables -I POSTROUTING -t nat -s $sbunnyip -j MASQUERADE
    route del default #remove default route
    route add default gw $sbunnygw $sbunnywan #add default gateway
    printf "\n\n"
    exit
}

function start_clean {
    # undo all iptables Bashbunny related rules
    iptables -D FORWARD -i $sbunnywan -o $sbunnylan -s $sbunnynet -m state --state NEW -j ACCEPT 2>/dev/null
    iptables -D FORWARD -m state --state ESTABLISHED,RELATED -j ACCEPT 2>/dev/null
    iptables -D POSTROUTING -t nat -s $sbunnyip -j MASQUERADE 2>/dev/null
    echo '0' > /proc/sys/net/ipv4/ip_forward # Disable forwarding
}

function create_bbsh_config {
    echo "sbunnynmask=255.255.255.0"     > "$BBSH_CONFIG"
    echo "sbunnynet=172.16.64.0/24"     >> "$BBSH_CONFIG"
    echo "sbunnylan=enx001122334455"    >> "$BBSH_CONFIG"
    echo "sbunnywan=wlo1"               >> "$BBSH_CONFIG"
    echo "sbunnygw=192.168.1.1"         >> "$BBSH_CONFIG"
    echo "sbunnyhostip=172.16.64.64"    >> "$BBSH_CONFIG"
    echo "sbunnyip=172.16.64.1"         >> "$BBSH_CONFIG"
    echo "sfirsttime=1"                 >> "$BBSH_CONFIG"
}

function bunny {
    printf "\nNetmask $sbunnynmask\nBunny Net $sbunnynet\nBunny LAN $sbunnylan\nBunny WAN $sbunnywan\nBunny GW $sbunnygw\nBunny IP $sbunnyip\nHost IP $sbunnyhostip\n"
    printf "\n/)___(\ \n(='.'=)\n(\")_(\")\n"
    exit
}

banner #remove for less 1337
showsettings

# create bbsh_config if it doesn't exist
[ -f "$BBSH_CONFIG" ] || create_bbsh_config
source "$BBSH_CONFIG"

if [[ "$sfirsttime" == "1" ]]; then
    printf "
    Since this is the first time running the BB Internet Connection Sharing\n\
    script, Guided setup is recommended to save initial configuration.\n\
    Subsequent sessions may be quickly connected using saved settings.\n"
fi

# Removes iptables rules if the script gets a Ctrl-C
trap start_clean INT

menu
