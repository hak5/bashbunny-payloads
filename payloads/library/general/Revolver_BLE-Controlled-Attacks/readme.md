## Revolver


This payload was made in the style of Q Branch: it provides multiple options for attack and getting out of bad situations. Switching into this payload will place the Bash Bunny in a command waiting mode. BLE beacons are sent to start attacks, including QuickCreds and nmap. A loot self-destruct option is also available. The payload is easily extendable to include any attack you might need in the field.

Note other payloads were co-opted into this multimode attack, and to make it easy
I used Hak5Darren's code, partially because I imagine he wants to see these payloads
extended, and also because I know he appreciates Q Branch.

**Features**
 - Once active, the Bash Bunny blinks a white LED indicating it is waiting for BLE beacons 
 - Commands may be issued to start classic payloads (nmap, quickcreds), switch modes (USB storage or Ethernet), shutdown for removal, or initiate a loot self-destruct
 - After attacks are complete, Bash Bunny returns to a waiting state for more commands (except for self destruct and shut down)

**Payload Configuration**
1. Change the BLE beacons in the *Options* section. Don't leave in defaults - you don't want someone else to control your Bash Bunny!
2. Verify the responder and nmap options are to your liking

**LED meanings**
- Slow 1 second white on and off: Awaiting commands
- Single yellow blink: Attack in progress
- Green rapid flash, then solid: Attack complete
- Solid red: Loot self-destruct - complete and ready to remove when off
- Solid blue: USB mode
- Solid cyan: Ethernet mode
