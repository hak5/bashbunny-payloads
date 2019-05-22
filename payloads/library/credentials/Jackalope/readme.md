# Jackalope
```
   `\ #   # /'
   | \ # # /;|
   \ :\# #|; /
    \./#_#\./
     /     \
    : O   O "
    |  \ /  |
     \  v  /
      \_x_/
    
Jackalope
  by: catatonic
```
* Author: catatonic
* Target: Windows (for now)

## Description

Uses ethernet to attempt dictionary attacks against passwords. When the password is discovered a payload is automatically generated and placed in the alternate switch location. This alternate payload may be used to unlock the machine by:

1. Checking loot OR...
2. Manually select user/password at login screen
3. Flip switch to alternate payload to enter password

To clear an already identified password from a GREEN status light, flip the switch to switch3 (arming) and the status light will change to SPECIAL (cyan).

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
| Green (solid)           | Attack complete, check loot or flip switch to switch1 or switch2 to enter password. Flip switch to switch3 (arming) to clear password. |
| SPECIAL                 | Clearing/cleared password, flip switch to switch 1 or switch 2 to initiate attack. |
| Purple (solid)          | Preparing to attack                            |

