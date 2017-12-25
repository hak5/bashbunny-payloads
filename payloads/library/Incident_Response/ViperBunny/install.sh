#!/bin/bash
# Title:         ViperBunny
# Description:   Viper Malware Analysis Web on Bash Bunny
# Author:        Zappus
# Version:       1.0
# Category:      Incident-Response
# Attackmodes:   Ethernet
# Firmware:      1.5


# Update the system
apt-get update && apt-get upgrade -y

# Install dependencies
apt-get install -y automake libtool make gcc flex bison libmagic-dev libssl-dev python-dev swig


# Install Ssdeep
cd /tmp
wget https://github.com/ssdeep-project/ssdeep/archive/release-2.14.1.tar.gz
tar xf release-2.14.1.tar.gz
rm release-2.14.1.tar.gz
mv ssdeep-release-2.14.1/ /tools/ssdeep
cd /tools/ssdeep
./bootstrap
./configure
make
make install
pip install pydeep


# Install Yara
cd /tmp
wget https://github.com/VirusTotal/yara/archive/v3.7.0.tar.gz
tar xf v3.7.0.tar.gz
rm v3.7.0.tar.gz
mv yara-3.7.0/ /tools/yara
cd /tools/yara
./bootstrap.sh
./configure --enable-magic --enable-dotnet
make
make install
pip install yara-python


# Install Viper
pip install SQLAlchemy PrettyTable python-magic
cd /tmp
wget https://github.com/viper-framework/viper/archive/v1.2.tar.gz
tar xf v1.2.tar.gz
rm v1.2.tar.gz
mv viper-1.2/ /tools/viper
cd /tools/viper
pip install -r requirements.txt
