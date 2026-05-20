# SSHhhhhh

## Author: WWVB
## Version: Version 1.0

## Description

## Target =  Unlocked Linux machine (only tested on Ubuntu 18.04 LTS)
Base install of OS, plus OPENSSH-SERVER & NET-TOOLS (if NET-TOOLS is not installed, the route command will not return data [nothing major])

## Loot =      Contents of ~/$USER/.ssh folder (pub/priv RSA keys, known_hosts, etc..)
  whoami
  
  ip addr
  
  arp data
  
  route -n
  
  /etc/passwd
  
  /etc/shadow (on the off chance you get a root terminal)
  
  uname -a

## Two opportunites for persistence are injected:

  Attacker's RSA key is added to ~/$USER/.ssh/authorized_keys (aka I'll Call You)

  Reverse_TCP shell script is dropped in the ~/$USER/.config folder and a CRON job added that calls it on a schedule (aka Call Me Later)

## Configuration = HID STORAGE
