#! /bin/bash

# Read useful data
clear
echo "[                    ] 0%"
date=$(date "+%Y-%m-%d-%H-%M")
clear
echo "[#                   ] 5%"
user=$(whoami)
clear
echo "[##                  ] 10%"
users=$(dscacheutil -q user | grep -A 3 -B 2 -e uid:\ 5'[0-9][0-9]')
clear
echo "[###                 ] 15%"
host=$(hostname)
clear
echo "[####                ] 20%"
wifi_interface=$(networksetup -listallhardwareports | grep Wi-Fi -A 1 | tail -1 | sed 's/.* //')
clear
echo "[#####               ] 25%"
current_wifi=$(airport --getinfo)
clear
echo "[######              ] 30%"
preffered_wifi=$(networksetup -listpreferredwirelessnetworks ${wifi_interface})
clear
echo "[#######             ] 35%"
bt_devices=$(system_profiler SPBluetoothDataType)
clear
echo "[########            ] 40%"
clipboard=$(osascript -e 'the clipboard')
clear
echo "[#########           ] 45%"
public_ip=$(curl ipinfo.io/ip)
clear
echo "[###########         ] 55%"
ports=$(lsof -Pn -i4 | grep LISTEN)
clear
echo "[###########         ] 60%"
apps=$(ls /Applications)
clear
echo "[############        ] 65%"
login_apps=$(osascript -e 'tell application "System Events" to get the name of every login item')
clear
echo "[############        ] 70%"
term_history=$(cat -n ~/.zsh_history | tail -15)
clear
echo "[############        ] 75%"
login=$(last | head -60)
clear
echo "[#############       ] 80%"
appleid=$(defaults read MobileMeAccounts Accounts)
clear
echo "[##############      ] 85%"
ware_info=$(system_profiler SPSoftwareDataType SPHardwareDataType)
clear
echo "[###############     ] 90%"
ifaceconf=$(ifconfig)
clear
echo "[################    ] 95%"

# Write useful data
cat << EOF > /Volumes/BashBunny/loot/MacFetch-${date}.log
--- CURRENT USER ---
${user}

--- ALL USERS ---
${users}

--- HOST ---
${host}

--- WIFI INTERFACE ---
${wifi_interface}

--- CURRENT WIFI ---
${current_wifi}

--- PREFERRED WIFI NETWORKS ---
${preffered_wifi}

--- KNOWN BLUETOOTH DEVICES ---
${bt_devices}

--- CLIPBOARD ---
${clipboard}

--- PUBLIC IP ---
${public_ip}

--- OPEN NETWORK PORTS ---
${ports}

--- APPLICATIONS ---
${apps}

--- APPLICATIONS STARTING AT SYSTEM START ---
${login_apps}

--- SOFT-, HARDWARE INFO ---
${ware_info}

--- TERMINAL HISTORY ---
${term_history}

--- LOGIN HISTORY ---
${login}

--- APPLE ID INFO ---
${appleid}

--- IFCONFIG ---
${ifaceconf}
EOF
clear
echo "[####################] 100%"