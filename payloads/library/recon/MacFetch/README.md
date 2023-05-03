# MacFetch
* Author: 90N45
* Version: 1.0
* Target: Mac
* Attackmodes: HID, STORAGE

### Description
Get a bunch of delicious data from unlocked macOS devices.

### Saving the following Data:
- Current User
- All Users
- Hostname
- WiFi Interface
- Current WiFi Connection State
- Preferred WiFi Networks (Perfect for WiFi Pineapple’s SSID pool)
- Known Bluetooth Devices
- Clipboard
- Public IP
- Open Network Ports
- Applications
- Applications Starting at System Boot/Login
- Software and Hardware Information
- Terminal History
- Login History
- Apple ID Information
- Ifconfig output

### Status
| LED | State |
| --- | --- |
| Magenta solid (SETUP) | Set ATTACKMODE and get SWITCH_POSITION |
| Yellow single blink (ATTACK) | Ongoing information collection |
| White fast blink (CLEANUP) | Erase the footprint and clean up |
| Green 1000ms VERYFAST blink followed by SOLID (FINISH) | Attack finished |

*Average runtime: 25 seconds*
