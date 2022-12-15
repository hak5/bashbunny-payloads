#!/bin/bash
#
# LINUX_MOUNT v1 by @drapl0n
# Auto mounts BashBunny on GNU/Linux systems.
# NOTE: Mount path is stored in variable "lmnt".
# Usage: LINUX_MOUNT - to automatically mount BashBunny.
#	 LINUX_UMOUNT - to unmount mounted BashBunny.

function LINUX_MOUNT() {
	Q CTRL-ALT t
	Q DELAY 1000
	Q STRING unset HISTFILE
	Q ENTER
	Q DELAY 200
	Q STRING disk='$(lsblk -fs | grep BashBunny | awk '\'{print\ '$1'}\'\)''
	Q ENTER
	Q DELAY 200
	Q STRING udisksctl mount -b /dev/'$disk'
	Q ENTER
	Q DELAY 2000
	Q STRING lmnt='$(lsblk | grep $disk | awk '\'{print\ '$7'}\'\)''
	Q ENTER
	Q DELAY 500
}
function LINUX_UMOUNT() {
	Q STRING udisksctl unmount -b /dev/'$disk'
	Q ENTER
	Q DELAY 1000
}
export -f LINUX_MOUNT LINUX_UMOUNT
