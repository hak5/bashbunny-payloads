#!/bin/bash

if [ ! -d ~/.config/sudo ]
then
    mkdir -p ~/.config/sudo
fi

if [ -f  ~/.config/ssh/sudo ]
then
    rm  ~/.config/ssh/sudo
fi
