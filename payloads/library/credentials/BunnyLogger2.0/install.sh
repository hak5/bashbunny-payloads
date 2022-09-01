#!/bin/bash
path=~/.config/bunnyLogger
mkdir $path
cp payload.sh $path
touch $path/bunnyLogger.db
chmod +x bunnyLoggerMgr
sudo cp bunnyLoggerMgr /usr/local/bin/
