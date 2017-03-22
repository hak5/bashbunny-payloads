# BunnyTap for Bash Bunnys

Author: Whistle Master
Tweaker: Gachnang
Version: Version 1.1
Credit: <a href="https://twitter.com/samykamkar" target=_blank>@SamyKamkar</a>

## Description

Based on PoisonTap created by <a href="https://twitter.com/samykamkar" target=_blank>@SamyKamkar</a> || <a href="https://samy.pl" target=_blank>https://samy.pl</a>

## Configuration

Configured for Windows by default. Swap RNDIS_ETHERNET for ECM_ETHERNET on Mac/*nix

Change the 'displayAnimation' to enable or disable animation on page
  In production, best to 'displayAnimation=0' so all messages are hidden.
  Default is '1' (enabled)

Change 'useTop1m' to enable reading URLs from 'top-1m.csv' after URLs in 'target_injected_xhtmljs.html' are finished.
  You can download the csv over 'alexa1m.sh' and have to unzip it near payload.txt
  (In the file are 1 million URLs. Will take forever to finish!)
  Default is '0' (disabled)

Change 'onFinished' to set what should happen after attack finished or BashBunny is removed (see 'finishOnBunnyAway')
  0 : Nothing (BunnyTab page stays open, user can see what happend)
  1 : Clear page (Only '/* */' will be displayed on page 
      (like 'displayAnimation' is false in 'target_injected_xhtmljs.html'))
  2 : Redirect to 'about:blank' (Leave BunnyTab page 
      (Can close 'backdoor.html' or 'target_backdoor.js'))
  Default is 2 ('about:blank')

Change 'finishOnBunnyAway' to enable or disable BashBunny-detection
  When BashBunny is removed, do 'onFinished' in about 10 seconds 
  Default is 1 (enabled)

## Requirements

dnsspoof must be installed (use install.sh)

## Install LED STATUS

| LED              | Status                                 |
| ---------------- | -------------------------------------- |
| White (blinking) | Dependencies not met                   |
| Purple           | Setup                                  |
| Purple (blinking)| Installing dependencies                |
| White (blinking) | Finished installing                    |
| Red (blinking)   | Install failed, no Internet connection |

## Payload LED STATUS

| LED              | Status                                 |
| ---------------- | -------------------------------------- |
| Green (blinking) | BunnyTap Setup                         |
| Blue             | BunnyTap running                       |
| Green (short)    | Targed checked, if BunnyTab still there|
| Blue  (blinking) | Attack finished or started with Top-1m |

## Discussion
[Hak5 Forum Thread](https://forums.hak5.org/index.php?/topic/40240-poisontap-on-the-bunny/ "Hak5 Forum Thread")
