# SMB Hash Grabbing for Bash Bunnys

* Author: Combat_Wombat
* Version: Version 1.0
* Credit: <a href="https://twitter.com/zac_borders" target=_blank>@zac_borders</a>

## Description
Bash Bunny script to exfiltrate hash via SMB attack standalone against Windows Domain computers.
Inspired by Darren's <a href="https://twitter.com/hak5darren/status/869575984483147777" target=_blank>post</a>.  <a href="https://twitter.com/hak5darren" target=_blank>@hak5darren</a> || <a href="https://hakshop.com/blogs/news/whats-the-quickest-way-to-steal-a-windows-password-hash" target=_blank>Hak5 Blog</a>

## Configuration

Run on a domain computer that is logged in.

## Requirements

* impacket must be installed.
	1) Download impacket
	2) Place in /tools
	3) This will install when you reconnect the drive
	4) From the BashBunny run python setup.py install" in /tools/impacket
Here is the<a href="https://github.com/CoreSecurity/impacket" target=_blank>impacket github</a>.


## Payload LED STATUS

|   LED   | Status                                      |
|:-------:|---------------------------------------------|
| FAIL    | Missing Requirement Impacket                |
| SETUP   | Setup                                       |
| STAGE1  | Setting up SMB server                       |
| STAGE2  | HID Injection                               |
| CLEANUP | Grepping hash, storing loot, deleting share |
| FINISH  | Complete "Light is green trap is clean"     |

## Discussion
[Hak5 Forum Thread](https://forums.hak5.org/index.php?/topic/41132-payload-smbhashgrab/ "Hak5 Forum Thread")
