# Hosts file DNS poisoning using Powershell

## Description
Redirects a given domain name to the target IP address. Uses the run prompt and Powershell to edit the hosts file, should work with any Windows version with those features but only tested on Windows 10.

Change the variables under "options" in the setup stage before executing.

## Options
| Variable        | Description                              |
|-----------------|------------------------------------------|
| poisoned_domain | This domain will point to the target IP  |
| target_ip       | The IP that the domain should resolve to |

## LED States
| State  | Color               | Description                             |
|--------|---------------------|-----------------------------------------|
| SETUP  | Magenta solid       | Set attackmode and initialize variables |
| STAGE1 | Yellow single blink | Modifying the hosts file                |
| STAGE2 | Yellow double blink | Bypassing UAC                           |
| FINISH | Green solid         | Script completed                        |
