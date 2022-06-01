# Title:         FireSnatcher
# Description:   Copies Wifi Keys, and Firefox Password Databases
# Author:        KarrotKak3
# Props:         saintcrossbow & 0iphor13
# Version:       1.0.2.0 (Work in Progress)
# Category:      Credentials
# Target:        Windows (Logged in) 
# Attackmodes:   HID, Storage

# Full Description
# ----------------
#   Attacks an Unlocked Windows Machine
#  Payload targets:
#    - All WiFi creds
#    - Firefox Saved Password Database
#
#  PAYLOAD RUNS START TO FINISH IN ABOUT 20 SEC
#    Delays to Allow Powershell Time to Open and to Give Attack time to Run

# HOW TO USE PASSWORD DB: COPY KEY4.DB AND LOGINS.JSON TO YOUR COMPUTER AT
#   %APPDATA%\MOZILLA\FIREFOX\PROFILES\*.DEFAULT-RELEASE
#     Open Firefox and find loot in Settings-> Privacy & Security -> Saved Logins


#   KNOWN ISSUES
#  ---------------
#  Loot is saved in Payloads/switch#/loot


# Files
# -----
# - payload.txt: Starts the attack. All configuration contained in this file.
# - FireSnatcher.bat: Worker that grabs Creds


# Setup
# -----
# - Place the payload.txt and FireSnatcher.bat in Payload folder
# - If you are using a SD card, copy FireSnatcher.bat under /payloads/switchn/ (where n is the switch you are running)
# - Good idea to have the Bunny ready to copy to either the device or SD for maximum versatility

**LED meanings**
- Magenta: Initial setup – about 1 – 3 seconds
- Single yellow blink: Attack in progress
- Green rapid flash, then solid, then off: Attack complete
