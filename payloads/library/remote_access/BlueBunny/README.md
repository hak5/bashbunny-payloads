# BlueBunny
* Author: 90N45
* Version: 1.0
* Category: Remote
* Attackmodes: NONE (Custom)

### Description
Command & Control (C2) solution that communicates directly over Bluetooth-Low-Energy with your Bash Bunny Mark II.
Send your Bash Bunny all the instructions it needs on-demand over the air.

### Setup
This payload makes your Bash Bunny usable for the BlueBunny C2 server. For installing the C2 server and controlling your Bash Bunny remotly from it you can follow the instructions form the [BlueBunny GitHub repository](https://github.com/90N45-d3v/BlueBunny)

### Status
| LED | State |
| --- | --- |
| Magenta solid (SETUP) | Configuring BLE |
| Green 1000ms VERYFAST blink followed by SOLID (FINISH) | Bash Bunny can be connected to BlueBunny C2 |

*Average runtime: 13 seconds*