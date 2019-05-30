# SMBruteBunny
```
         / \
        / _ \
       | / \ |
       ||   || _______
       ||   || |\     \
       ||   || ||\     \
       ||   || || \    |
       ||   || ||  \__/
       ||   || ||   ||
        \\_/ \_/ \_//
       /   _     _   \
      /               \
      |    O     O    |
      |   \  ___  /   |
     /     \ \_/ /     \
    /  -----  |  --\    \
    |     \__/|\__/ \   |
    \       |_|_|       /
     \_____ S M B  ____/
           \     /
           |     |

------------------------------------------------
SMBruteBunny by: @SymbianSyMoh
```
* Author: Mohamed A. Baset aka [@SymbianSyMoh](https://twitter.com/symbiansymoh)

## Description
This payload exploits the inherited trust between USB pripherals and computers by setting up an RNDIS interface that works as a DHCP server and offer leases to the connected hosts then it can see the open SMB port which is 445 hence the bruteforcing process starts and once the password is found it will be entered to the lock screen via HID script and unlocking the target machine.

## What to expect?
Once the password found it will be stored under the "loot" folder and will be entered automatically in the lock screen resulting in unlocking the targeted machine.

## Setup
1. Clone this repo XXX in XXXX
2. Put all the required files in place:
password_process_file
password_loot_file
unlock_hid_script
user_bruteforce_list
pass_bruteforce_list
3.
4.
5.
6. Plug the BashBunny in a locked computer, once the DHCP lease is being offered it will perform SMB bruteforce attack and once succeded it will fire HID script to enter the password and unlock the machine.

## Credits
[Corey Gilks](https://github.com/Gilks) for [mmcbrute](https://github.com/Gilks/mmcbrute)
