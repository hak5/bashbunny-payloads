# To avoid the use of find in the next section, let's verify the switch position
# and therefore the exact position of tools_to_install
source bunny_helpers.sh

# Check to ensure that the tools_to_install directory isn't empty. 
# Exit with solid red LED if it is, otherwise note tools in log.
TOOLSDIR=/root/udisk/payloads/$SWITCH_POSITION/tools_to_install/
if [ "$(ls -A $TOOLSDIR)" ]; then
    cd $TOOLSDIR
	echo "Available Tools:" > /tmp/tools_installer.log
	echo "----------------" >> /tmp/tools_installer.log
	for i in $(ls -d */); do echo ${i%%/} >> /tmp/tools_installer.log; done
else
    LED R
	exit 1
fi

# Set LED to purple blinking and move tools
LED R B 100
mkdir -p /pentest
mv $TOOLSDIR/* /pentest/

# Be sure that there are no OS made hidden files in the directory
rm .*

# Set LED to purple solid and check that move completed
LED R B
if [ "$(ls -A $TOOLSDIR)" ]; then
    # Set LED to red on fail and exit
    LED R
    exit 1
else
    # Set LED to amber blinking on setup
    LED G R 100
    
	# Setup impacket
    cd /pentest/impacket
    python ./setup.py install
	
	# Additional tool setup goes here
	
	# List installed tools in /pentest and save to tools.txt on USB disk
	cd /pentest/
	echo "Installed Tools:" > /root/udisk/installed-tools.txt
	echo "----------------" >> /root/udisk/installed-tools.txt
	for i in $(ls -d */); do echo ${i%%/} >> /root/udisk/installed-tools.txt; done
	sync && sleep 1 && sync
	
	# Set LED to white on success
	LED R G B
    exit 0
fi
