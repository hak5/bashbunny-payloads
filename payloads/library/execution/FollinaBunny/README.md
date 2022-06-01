# FollinaBunny
- Author: PanicAcid
- Version: 1.0
- Target: Windows (Powershell 5.1+)
- Category: Execution
- Attackmode: HID & RNDIS_ETHERNET
- Extensions: Run
- Props: Cribbit and 0xBacco


## Change Log
| Version | Changes         |
| ------- | --------------- |
| 1.0     | Initial release |

## Description
Executes code leveraging CVE-2022-30190 aka Follina using a malicious html file hosted on the Bunny itself. Whilst this exploit can be called via a malicious word document, a simple wget via PowerShell will also execute the malicious code.. Tweak and well you get the picture.

This WILL flag on Defender if you're up to date, however the PoC here isn't that you can just run this code, it's that you can self serve this malicious html file via the BashBunny and you can tweak it to your hearts content.

Based on Cribbit's Moo payload https://github.com/hak5/bashbunny-payloads/blob/master/payloads/library/prank/Win_PoSH_AnsiSebsCow
Example payload taken from https://greynolds.me.uk/ - https://greynolds.me.uk/poc.html



## Colours
| Status   | Colour                        | Description                 |
| -------- | ----------------------------- | --------------------------- |
| SETUP    | Magenta solid                 | Setting attack mode         |
| ATTACK   | Yellow single blink           | Injecting Powershell script |
| FINISHED | Green blink followed by SOLID | Injection finished          |