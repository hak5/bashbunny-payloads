#!/bin/sh
#
# CAPSLOCK_DISABLE v1 by @drapl0n
# Disables CapsLock on target's system.
# Usage: CAPSLOCK_DISABLE ----------------------------(to disable CAPSLOCK on target's system.)

function CAPSLOCK_DISABLE() {
	Q DELAY 200
	Q CTRL-ALT t
	Q DELAY 1000
	Q STRING setxkbmap -option ctrl:nocaps \&\& exit
	Q ENTER
	Q DELAY 200
}

export -f CAPSLOCK_DISABLE
