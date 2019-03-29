#!/bin/bash
#
# WAITEJECT v1 by kamotswind (https://github.com/kamotswind)
# Blocks the payload from continuing until the USB storage is ejected from the host
# Usage: WAITEJECT

function WAITEJECT() {
	until [ ! -z "`dmesg | grep \"usb close backing file\"`" ]
	do
		sleep 1
	done
}

export -f WAITEJECT
