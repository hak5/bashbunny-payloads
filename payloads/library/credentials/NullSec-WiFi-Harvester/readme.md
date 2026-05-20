# NullSec WiFi Harvester 📡

Extracts all saved WiFi passwords from Windows and saves to Bash Bunny loot folder.

## Description

This payload silently extracts all saved WiFi network passwords from a Windows machine using the built-in `netsh` command, then saves them to the Bash Bunny's loot directory with the target hostname.

## Requirements

- Windows 10/11
- Target must have saved WiFi networks

## Status LEDs

| LED | Status |
|-----|--------|
| SETUP | Initializing attack modes |
| ATTACK | Running WiFi extraction |
| FINISH | Complete, safe to unplug |

## Output

Loot saved to: `/root/udisk/loot/NullSec-WiFi-Harvester/<HOSTNAME>_wifi.txt`

Format:
```
[HOSTNAME] NetworkName : Password
[HOSTNAME] AnotherNetwork : AnotherPassword
```

## Execution Time

~8-10 seconds depending on number of saved networks

## Author

- **GitHub**: [bad-antics](https://github.com/bad-antics)
- **More payloads**: [nullsec-flipper-suite](https://github.com/bad-antics/nullsec-flipper-suite)
