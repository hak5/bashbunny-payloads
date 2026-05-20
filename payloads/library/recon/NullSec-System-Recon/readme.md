# NullSec System Recon 🔍

Comprehensive Windows system reconnaissance saved to Bash Bunny loot.

## Description

Silently gathers detailed system information and saves to the Bash Bunny's loot folder:
- OS version and system specs
- Current user and domain info  
- Local user accounts
- Network configuration (IP, gateway, DNS, MAC)
- Windows Defender/AV status

## Requirements

- Windows 10/11
- PowerShell (default on Windows)

## Status LEDs

| LED | Status |
|-----|--------|
| SETUP | Initializing attack modes |
| ATTACK | Running reconnaissance |
| FINISH | Complete, safe to unplug |

## Output

Loot saved to: `/root/udisk/loot/NullSec-System-Recon/<HOSTNAME>_recon.txt`

## Execution Time

~15-20 seconds

## Author

- **GitHub**: [bad-antics](https://github.com/bad-antics)
