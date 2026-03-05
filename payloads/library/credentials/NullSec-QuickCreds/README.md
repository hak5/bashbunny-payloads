# NullSec-QuickCreds

> **Bash Bunny payload — Rapid Credential & Intelligence Harvester**

## Description

Multi-phase credential and intelligence harvester for Windows 10/11 targets. Combines HID keystroke injection with USB storage exfiltration for a grab-and-go attack.

## Attack Phases

| Phase | Target | Method |
|-------|--------|--------|
| 1 | WiFi Credentials | `netsh wlan` profile + key extraction |
| 2 | System Info | OS, hostname, domain, IP addresses |
| 3 | Clipboard | Current clipboard contents |
| 4 | Recent Documents | Last 50 accessed files |
| 5 | Browser Data | Checks for Chrome/Firefox/Edge/Brave profile paths |
| 6 | Environment Secrets | Env vars matching token/key/secret/api patterns |
| 7 | Saved Credentials | Windows Credential Manager (`cmdkey /list`) |
| 8 | Network | Active ESTABLISHED connections |

## Setup

1. Copy `payload.txt` to switch position folder on your Bash Bunny
2. Arm the switch to the corresponding position
3. Insert into Windows target
4. Wait for LED sequence: SETUP → ATTACK → FINISH
5. Remove and check `loot/` folder on the Bash Bunny USB

## Output Files

```
loot/quickcreds_YYYYMMDD_HHMMSS/
├── wifi.txt          # WiFi SSIDs and passwords
├── sysinfo.txt       # System identification
├── clipboard.txt     # Clipboard contents
├── recent_docs.txt   # Recently accessed files
├── browser_paths.txt # Browser data locations
├── env_secrets.txt   # Sensitive environment variables
├── saved_creds.txt   # Windows Credential Manager
└── connections.txt   # Active network connections
```

## LED Status

| LED | Status |
|-----|--------|
| SETUP (Magenta) | Initializing attack mode |
| ATTACK (Yellow) | Harvesting credentials |
| FINISH (Green) | Complete — safe to remove |

## Requirements

- **Device:** Bash Bunny Mark I or II
- **Target:** Windows 10/11
- **Privileges:** Standard user (no admin needed)
- **Duration:** ~15-20 seconds

## Attack Mode

`HID + STORAGE` — The Bash Bunny acts as both a keyboard (for injection) and a USB drive (for loot storage).

## Author

NullSec (bad-antics)
