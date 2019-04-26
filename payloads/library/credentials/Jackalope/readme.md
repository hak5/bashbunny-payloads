# Jackalope
* Author: catatonic
* Target: Windows (for now)

## Description

Uses ethernet to attempt dictionary attacks against passwords. When the password is discovered, uses the password to unlock the machine.

## Configuration

### Per attack configuration
1. userlist.txt contains usernames to use in attack.
2. wordlist.txt contains passwords to use in attack.

Note: A fantastic collection of password wordlists are available: [SecLists](https://github.com/danielmiessler/SecLists)

## STATUS

| LED                     | Status                                       |
| ----------------------- | -------------------------------------------- |
| FAIL2                   | Attack failed, username/password not found   |
| FAIL                    | Attack failed, network inaccessible          |
| STAGE 1                 | Stage 1: checking for SMB port with nmap     |
| STAGE 2                 | Stage 2: Brute forcing                       |
| Green (solid)           | Attack complete, check loot!                 |
| Purple (solid)          | Preparing to attack                          |

