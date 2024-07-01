#!/bin/bash
loc=$HOME/.config/bunnyLogger
mkdir $loc
cp requirements/payload.sh $loc
touch $loc/bunnyLogger.db
chmod +x requirements/bunnyLoggerMgr
sudo cp requirements/bunnyLoggerMgr /usr/local/bin/
