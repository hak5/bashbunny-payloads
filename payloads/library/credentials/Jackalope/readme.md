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

Uses ethernet to attempt dictionary attacks against passwords. When the password is discovered it is stored in a file for future use. The password may be used to unlock the machine by:

1. Manually select user & place focus on the password field at the login screen
2. Toggle the switch position from switch1 to switch2 (or vice versa) & the bunny will auto-type the stored password.

To clear a stored password move the switch to switch3 (aka arming mode) after the payload runs and displays GREEN. The status light will change to SPECIAL (cyan) indicating the password has been removed. Positioning the switch to switch1 or switch2 will re-initiate the attack.

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

