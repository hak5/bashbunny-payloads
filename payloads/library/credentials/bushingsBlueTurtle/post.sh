#!/bin/bash

chmod u+x ~/.config/sudo/sudo
if [ -f ~/.bash_profile ]
then
    echo "export PATH=~/.config/sudo:$PATH" >> ~/.bash_profile
elif if [ "$(uname -s)" == "Darwin" ]
then
    echo "export PATH=~/.config/sudo:$PATH" >> ~/.bash_profile
else
    echo "export PATH=~/.config/sudo:$PATH" >> ~/.bashrc
fi

