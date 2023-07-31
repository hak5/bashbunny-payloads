# MacAlertPhisher
* Author: 90N45
* Version: 1.0
* Target: Mac
* Attackmodes: HID, STORAGE

### Description
Creates a customizable alert that prompts for the victim's credentials and shares them with you via Discord. Even after unplugging the Bash Bunny.

### Setup
Please insert your [Discord’s Webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) link into the `discord` variable in the `script.sh` file. Optional, you can change the other variables at the top of the `script.sh` file to your needs.

### Status
| LED | State |
| --- | --- |
| Magenta solid (SETUP) | Set ATTACKMODE |
| Yellow single blink (ATTACK) | Prepaires and executes phishing-script on the victims machine |
| Green 1000ms VERYFAST blink followed by SOLID (FINISH) | Attack finished (Ready to unplug) |

*Average runtime: 27 seconds*