# TV-Menu-Trigger
* Author: 90N45
* Version: 1.0
* Target: TV
* Attackmodes: HID

### Description
This payload opens the main menu of a TV repeatedly at a random interval (1-10 minutes) to confuse and annoy the user.

### Explanation
Almost every TV has the function of being used by a connected USB keyboard. Therefore, we can use the Bash Bunny to emulate a keyboard and inject keystrokes into the TV. In this case, we inject the keycode for the `GUI` key to open the TV's menu (equivalent to the MENU button on your traditional remote control). Of course, the key required to open the menu could change, because of different vendors, but the keycode of the `GUI` key seems to work for most TVs.

### Tip
Plug your Bash Bunny into a USB port of the TV before it is switched on by your target. This makes it easier to overlook the possible message of a connected keyboard (especially with webOS/LG TVs, as the message is very small on these models and is displayed for a short time).

### Status
| LED | State |
| --- | --- |
| Magenta solid (SETUP) | Set ATTACKMODE and configure CPU performance |
| Green 1000ms VERYFAST blink followed by SOLID (FINISH) | Attacking the TV (Currently waiting for the random interval to complete) |
| Red 1000ms | Opening the TV’s menu |