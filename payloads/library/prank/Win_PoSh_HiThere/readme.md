# Hi There
- Author: Cribbit
- Version: 1.0
- Tested on: Windows 10 (Powershell 5.1+)
- Category: Pranks
- Attackmode: HID & RNDIS_ETHERNET
- Extensions: Run
- Props: v3ded, Hexacorn and Audibleblink (Python Server)

## Change Log
| Version | Changes         |
| ------- | --------------- |
| 1.0     | Initial release |

## Description
Creates a hidden link file that override the ctrl+c functionality.
So, when the user press ctrl+c it lunches the first sign-in animation.

## Notes
to kill the animation, you need to open task manger and look for "First Sign-in Animation".
For extra evilness add `/explorer` to the `$shortcut.Arguments` line in the script file. Then you can't switch programs or kill it.

## More information
<https://v3ded.github.io/redteam/abusing-lnk-features-for-initial-access-and-persistence>

<https://www.hexacorn.com/blog/2022/01/16/windows-installation-animation/>

## Colours
| Status   | Colour                        | Description                 |
| -------- | ----------------------------- | --------------------------- |
| SETUP    | Magenta solid                 | Setting attack mode         |
| ATTACK   | Yellow single blink           | Injecting Powershell script |
| FINISHED | Green blink followed by SOLID | Injection finished          |