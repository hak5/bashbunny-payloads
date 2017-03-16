# Installs dependencies for BunnyTap payload
# Requires Internet connection
# See documentation for Internet Connection Sharing details
# 
# LED STATUS
# purple..............setup
# purple (blinking)...installing dependencies
# white (blinking)....finished installing
# red (blinking)......install failed, no Internet connection


# Setup Ethernet (Switch RNDIS to ECM if Mac/Linux)
LED R B
ATTACKMODE RNDIS_ETHERNET
# ATTACKMODE ECM_ETHERNET

# Check if connected to the Internet
wget -q --tries=5 --timeout=15 --spider http://example.com
if [[ $? -eq 0 ]]; then
    # Online
	LED R B 100
	apt-get -y install dsniff
	LED R G B 50
	sleep 2
	exit 0
else
    # Offline
    LED R 100
    exit 1
fi