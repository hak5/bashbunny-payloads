#!/bin/bash

start_bunny() {
	echo ========== Starting Bash Bunny ...
	dmesg -c > /dev/null

	# disable usb otg
	echo 0 > /sys/bus/platform/devices/sunxi_usb_udc/otg_role
	cat /sys/bus/platform/devices/sunxi_usb_udc/otg_role

	# blink green led
	/root/tools/blink_led.sh green 1000 &

	# To disable the message "INFO: task vsync proc 0:58 blocked for more than 120 seconds."
	echo 0 > /proc/sys/kernel/hung_task_timeout_secs

	# clear bootcount
	bootcountpart=/dev/nanda
	bootcountfolder=/root/bootcount
	mkdir -p $bootcountfolder

	mount -t vfat $bootcountpart $bootcountfolder
	echo "0" > $bootcountfolder/bootcnt.txt
	if [ -f $bootcountfolder/tar_fail.txt ]; then
		rm $bootcountfolder/tar_fail.txt
	fi
	umount $bootcountpart
}

# start bunny platform
start_bunny


do_mount() {
#	private_folder=/root/private
#	mkdir -p $private_folder
#	mount -t ext4 /dev/nandg $private_folder
#	private_folder=/root/private/private

	udisk_folder=/root/udisk
	mkdir -p $udisk_folder
	mount /dev/nandf $udisk_folder
}

do_unmount() {
#	umount /dev/nandg	# private/sysrecovery partition
	umount /dev/nandf	# mass storage partition
}

check_switch() {
	switch1=`cat /sys/class/gpio_sw/PA8/data`
	switch2=`cat /sys/class/gpio_sw/PL4/data`
	switch3=`cat /sys/class/gpio_sw/PL3/data`
	echo "--- switch1 = $switch1, switch2 = $switch2, switch3 = $switch3"
	if [ "x$switch1" = "x0" ] && [ "x$switch2" = "x1" ] && [ "x$switch3" = "x1" ]; then
		switch="switch1"
	elif [ "x$switch1" = "x1" ] && [ "x$switch2" = "x0" ] && [ "x$switch3" = "x1" ]; then
		switch="switch2"
	elif [ "x$switch1" = "x1" ] && [ "x$switch2" = "x1" ] && [ "x$switch3" = "x0" ]; then
		switch="switch3"
	else
		switch="invalid"
	fi
}

set_payload() {
	payload_dir=$udisk_folder/payloads/$switch
	config_file=$udisk_folder/config.txt
	if [ -f $config_file ]; then
		payload=$(cat $config_file | grep $switch | awk -F: '{print $2}')
		payload_dir=$udisk_folder/$payload
	fi
	payload_file=$payload_dir/payload.txt
}

################################################################################
# Run Bash Bunny script /payloads/switch[1|2]/payload.txt
################################################################################

run_script() {
	echo switch = $switch =========
	# bunny attack/automation only happen for switch1 or switch2.
	if [ "x$switch" = "xswitch1" ] || [ "x$switch" = "xswitch2" ]; then
		if [ -f $payload_file ]; then
			# New $PATH is temporarily valid for all .sh scripts
			#     in folder $udisk_folder/payloads/$switch/.
			# Note the order of searching path
			PATH=$payload_dir/:$udisk_folder/payloads/library/:$PATH
			echo --- PATH = $PATH

			# make a copy of payload file to /tmp/ folder
			cp $payload_file /tmp/payload.txt
			payload_file="/tmp/payload.txt"
			# remove dos format trailing Carriage Return \r
			sed -i 's/\r//g' $payload_file

			lang_line=$(cat $payload_file | grep 'Q SET_LANGUAGE')
			if [ "x$lang_line" = "x" ]; then
				lang_line=$(cat $payload_file | grep 'QUACK SET_LANGUAGE')
			fi
			DUCKY_LANG=$(echo $lang_line | awk {'print $3'} | awk '{print tolower($0)}')
			if [ "x$DUCKY_LANG" = "x" ]; then
				DUCKY_LANG="us"
			fi
			echo DUCKY_LANG = $DUCKY_LANG
			export DUCKY_LANG

			# run install.sh in $payload_dir if it exists
			local install_file=$payload_dir/install.sh
			if [ -f $install_file ]; then
				# make a copy of install.sh file to /tmp/ folder
				cp $install_file /tmp/install.sh
				install_file="/tmp/install.sh"
				# remove dos format trailing Carriage Return \r
				sed -i 's/\r//g' $install_file

				/bin/bash -c "$install_file"
				local status=$?
				echo --- Exit status of install.sh is $status
				if [ $status -eq 0 ]; then
					mv $payload_dir/install.sh \
					   $payload_dir/install.sh.INSTALLED
					sync
				fi
			fi

			# Run payload.txt
			/bin/bash -c "$payload_file"
		fi
	else
		# run maintenance mode when in switch3 position
		if [ "x$switch" = "xinvalid" ]; then
			echo --- Wrong switch positions!!!
		fi
		killall blink_led.sh
		/root/tools/blink_led.sh blue 1000 &
		# sleep 1s for cdc acm driver
		sleep 1
		/bin/bash -c "ATTACKMODE SERIAL STORAGE"
	fi
}

do_mount
check_switch
set_payload
run_script
do_unmount

exit 0
