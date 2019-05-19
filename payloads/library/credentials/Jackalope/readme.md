# Jackalope
* Author: catatonic
* Target: Windows (for now)

## Description

Uses ethernet to attempt dictionary attacks against passwords. When the password is discovered a payload is automatically generated and placed in the alternate switch location. This alternate payload may be used to unlock the machine by:

1. Checking loot OR...
2. Unplug the bunny
3. Flip the switch to the alternate position
4. Manually select the user on the locked workstation
5. Plug the bunny back in & let the alternate payload auto-type the password for you

## Configuration
No initial configuration is required for bunny firmware v1.6+.

### Per attack configuration
1. userlist.txt contains usernames to use in attack.
2. wordlist.txt contains passwords to use in attack.

Note: A fantastic collection of password wordlists are available: [SecLists](https://github.com/danielmiessler/SecLists)

## STATUS

| LED                     | Status                                         |
| ----------------------- | ---------------------------------------------- |
| FAIL                    | Attack failed, username/password not found     |
| FAIL2                   | Attack failed, network inaccessible            |
| STAGE 1                 | Stage 1: checking for SMB port with nmap       |
| STAGE 2                 | Stage 2: Brute forcing                         |
| Green (solid)           | Attack complete, check loot or flip the switch |
| Purple (solid)          | Preparing to attack                            |

