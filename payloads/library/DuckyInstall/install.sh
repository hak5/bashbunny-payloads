#!/usr/bin/env bash
# Based on bashbunnypayloads installer
# https://github.com/hak5/bashbunny-payloads/blob/master/payloads/library/tools_installer/install.sh

# Check Switch Position
source bunny_helpers.sh

TARGET_DIR='/root/tools'
RELEASE_ARCHIVE=$(find /root/udisk/payloads/${SWITCH_POSITION} -name DuckToolkit-*)

echo "Install Log:" > /tmp/duck_installer.log
echo "----------------" >> /tmp/duck_installer.log

if [ -f ${RELEASE_ARCHIVE} ]; then
        echo "Found ${RELEASE_ARCHIVE}" >> /tmp/duck_installer.log
else
    LED R
    echo "No ducktoolkit release found" >> /tmp/duck_installer.log
        exit 1
fi

# Set LED to purple blinking and move files
LED R B 100

# Backup Existing library
if [ -d "$TARGET_DIR/DuckToolkit" ]; then
    echo "Library Exists; removing" >> /tmp/duck_installer.log
    rm -rf  ${TARGET_DIR}/DuckToolkit
fi

echo "Copying files to target dir" >> /tmp/duck_installer.log
cp ${RELEASE_ARCHIVE} ${TARGET_DIR}
cd ${TARGET_DIR}
tar zxf DuckToolkit-* && mv $(find . -name "DuckToolkit-*" ! -name "*.gz") DuckToolkit && rm DuckToolkit*.tar.gz

echo "Move Complete" >> /tmp/duck_installer.log

# Set LED to purple solid and check that move completed
LED R B
if ! [ -d "${TARGET_DIR}/DuckToolkit" ]; then
    # Set LED to red on fail and exit
    LED R
    echo "Failed to copy files to target dir" >> /tmp/duck_installer.log
    exit 1
else
    # Set LED to amber blinking on setup
    LED G R 100
    # Set calling script executable
    chmod +x ${TARGET_DIR}/DuckToolkit/bunnyducky.py
   	
   	# Update Q and QUACK to use the new library
	echo "Update Q" >> /tmp/duck_installer.log
	cat <<'EOF' > /root/Q
	#!/bin/sh
	# Input parameters;
	strparam="$@"
	/root/tools/DuckToolkit/bunnyducky.py -l $DUCKY_LANG "$strparam" >> /root/ducklog.txt
	exit 0
EOF

	echo "Update QUACK" >> /tmp/duck_installer.log
	cat <<'EOF' > /root/QUACK
	#!/bin/sh
	# Input parameters;
	strparam="$@"
	/root/tools/DuckToolkit/bunnyducky.py -l $DUCKY_LANG "$strparam" >> /root/ducklog.txt
	exit 0
EOF

	# LED To green for complete
	LED R G B
	
fi
cp /tmp/duck_installer.log /root/udisk/payloads/${SWITCH_POSITION}/install_log.txt
