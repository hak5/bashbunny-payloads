# WifiPass
* Author: TheRoninRunner
* Version: Version 1.0
* Props: illwill
* Target: Windows
* Working on Windows 7, 8.1, and 10

## About
A bit of a fork from WiFiCreds, this uses the same Powershell attack to get wifi networks and their passwords.

WifiPass starts with getting the list of wireless networks saved on the device, storing those to a file.  With a little bit of logic, it runs through the networks, only saving out networks that have a Key Content of anything besides 1 (1 being used in the case of WEP and open networks). *NOTE: this will give you network names of university/college networks that pass user accounts to log into them.  They won't give you the password with this attack.*

It stores all those in a loot file with the name of the computer.  Eject, sync, Ghostbusters reference, then you're good to go.

# No Configuration needed

## Lights
| LED | Status |
|---|---|
| Blue | Creating loot dir and getting network names |
| Yellow | Looking through networks |
| White | Eject drive, sync, and remove network file |
| Green | Finished |
