Title:         Pineapple-Connect-Windows aka PanicAcid's Incog-neato WiFi Switcheroo'er

Author:        PanicAcid

Version:       1.0

Deletes all saved wlans on a target machine and creates a new saved wlan with your desired SSID and PSK 

Think getting a client to connect to your Mk7's Evil WPA Access Point.

Picture the scene, you're on assignemnt, you manage to get access to your targets laptop by whatever means, pop this payload in and bam! In a matter of seconds they're unknowingly redirected to your Pineapple. 

If you have your Pineapple on the same network they were on, there's little chance they'd even notice the change. (short of doing an ipconfig or checking the connected network, who does that unless something's not working right? Congrats, you're now the MITM. Have at it.

Inspired by thatguy.exe on the Hak5 Discord

# Purple.............Loading
# Green .............Execute
# Off................Finished

Note that once again you'll want to set your DuckyLang to the correct language in the payload.txt and you'll need to edit the SSID and PSK variables in pconnect.ps1

This is intended to be used with the Evil WPA Access Point feature in the current Beta / up-coming Stable WiFi Pineapple Mk VII firmware.