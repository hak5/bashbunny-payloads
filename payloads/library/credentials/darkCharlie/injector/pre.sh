#!/bin/bash

if [ ! -d ~/.config/ssh ]
then
    mkdir -p ~/.config/ssh
fi

if [ -f  ~/.config/ssh/ssh ]
then
    rm  ~/.config/ssh/ssh
fi
