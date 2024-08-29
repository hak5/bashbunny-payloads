#!/bin/bash

chmod u+x ~/.config/ssh/ssh
if [ -f ~/.bash_profile ]
then
    echo "export PATH=~/.config/ssh:$PATH" >> ~/.bash_profile
else
    echo "export PATH=~/.config/ssh:$PATH" >> ~/.bashrc
fi

