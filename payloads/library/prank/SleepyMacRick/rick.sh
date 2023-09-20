#! /bin/bash

sleep 3
inactive=$(osascript -e 'tell application "System Events" to tell (first process whose frontmost is true) to return name')

while [[ ${inactive} = $(osascript -e 'tell application "System Events" to tell (first process whose frontmost is true) to return name') ]]; do
	sleep 0.5
done

osascript -e "set volume output volume 100"
open -u "https://www.youtube.com/watch?v=xvFZjo5PgG0"

# Self destruct
rm /tmp/rick.sh