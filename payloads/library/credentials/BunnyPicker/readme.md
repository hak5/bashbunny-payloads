# Bunnypicker (Win10 Lockpicker for Bash Bunny)
.______    __    __  .__   __. .__   __. ____    ____ .______    __    ______  __  ___  _______ .______      
|   _  \  |  |  |  | |  \ |  | |  \ |  | \   \  /   / |   _  \  |  |  /      ||  |/  / |   ____||   _  \     
|  |_)  | |  |  |  | |   \|  | |   \|  |  \   \/   /  |  |_)  | |  | |  ,----'|  '  /  |  |__   |  |_)  |    
|   _  <  |  |  |  | |  . `  | |  . `  |   \_    _/   |   ___/  |  | |  |     |    <   |   __|  |      /     
|  |_)  | |  `--'  | |  |\   | |  |\   |     |  |     |  |      |  | |  `----.|  .  \  |  |____ |  |\  \----.
|______/   \______/  |__| \__| |__| \__|     |__|     | _|      |__|  \______||__|\__\ |_______|| _| `._____|
         ,
        /|      __
       / |   ,-~ /
      Y :|  //  /
      | jj /( .^
      >-"~"-v"
     /       Y
    jo  o    |
   ( ~T~     j
    >._-' _./
   /   "~"  |
  Y     _,  |
 /| ;-"~ _  l
/ l/ ,-"~    \
\//\/      .- \
 Y        /    Y    -Row
 l       I     !
 ]\      _\    /"\
(" ~----( ~   Y.  )
~~~~~~~~~~~~~~~~~~~~~~~~~~

                                                                                                             
Author: rf_bandit
Version: Version 1.0
Credit: Hak5Darren, Mubix, catatonic, mame82
Firmware: 1.7
Target: Windows 10/11
Date: May 2023

## Description
This is based on Quickcreds, Jackalope, and Win10Lockpicker (for the OG P4wnP1)
Snags credentials from locked machines 
Implements a responder attack. Saves creds to the loot folder on the USB Disk
Looks for *NTLM* log files
Cracks hash with John the Ripper. Best with a smaller dictionary.
Saves cracked hash to loot folder
Quacks password and unlocks machine

On a current (May 2023) Win10/Win11 machine, it shouldn't take more about 35 seconds to get a hash.
If attack stage lasts longer than ~1, try disconnecting/reconnecting from wifi/network.
We can run through 100K simple passwords in 1 second.
Best time I got was 29.60 seconds from Bash Bunny boot to machine unlock.



## Configuration
.
Configured for Windows. Not tested on Mac/*nix
The path to the wordfile needs to be configured, eg /tools/<your-file-here> or /tools/john/password.lst (included) . The most straightforwrd way to get a large wordlist is to put it in the /tools folder in arming mode. A future version could check for a wordlist in /tools and if not found fallback to the included /tools/john/password.lst.
 

## Requirements

Responder must be in /tools/responder/
(Can be otained from https://forums.hak5.org/topic/40971-info-tools/)
JtR must be in /tools/john
Requires initial setup (below)

## Initial Setup
Install responder from https://forums.hak5.org/topic/40971-info-tools/

Replace /etc/apt/sources.list with:
deb http://archive.debian.org/debian/ jessie main non-free contrib
deb-src http://archive.debian.org/debian/ jessie main non-free contrib
deb http://archive.debian.org/debian-security/ jessie/updates main non-free contrib
deb-src http://archive.debian.org/debian-security/ jessie/updates main non-free contrib

apt update (DO NOT RUN apt upgrade as it will break RNDIS_ETHERNET. Not entirely clear why.)

The john package included can't handle NTLM hashes so we will make our own. 
Install gcc and git if you don't have them.

apt-get install gcc

apt-get install git
git config --global http.sslverify "false" (this is insecure but I'm not worried)

git clone https://github.com/openwall/john

cd john
./configure && make
mv run /tools/john
cd ..
rm -r john (not required but a space saving measure)


## STATUS


| Status              | Description                              |
| ------------------- | ---------------------------------------- |
| LED SETUP           | Starting                                 |
| LED ATTACK          | Grabbing creds                           |
| LED STAGE1          | Running JtR                              |
| LED STAGE2          | Unlocking                                |
| LED CLEANUP         | Sync to disk                             |                               
| LED FINISH          | Trap is clean                            |   
| FAIL1               | Responder not found at /tools/responder  |
| FAIL2               | Target did not aquire IP address         |
| FAIL3               | Hash not cracked - move to offline attack|

## ADDITIONAL NOTES

For debugging its better to use LED B for STAGE1 and LED W for STAGE2 because its easier to pinpoint failure.
A future version could check for a wordlist in /tools and if not found fallback to /tools/john/password.lst.
Might also steal catatonic's use of the switch (very cool) to initiate password quacking to make the payload more versatile on both locked
and unlocked machines.

This was fun to make. Thanks to everyone who put in all the hard work before me.
 
