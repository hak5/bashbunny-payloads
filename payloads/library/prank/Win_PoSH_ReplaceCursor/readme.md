# Replace Cursor
- Author: Cribbit
- Version: 1.0
- Target: Windows 10 (Powershell 5.1+)
- Category: Pranks
- Attackmode: HID & Storage
- Extensions: Run
- Props: The Hak5 Team (Wallpaper changer & Eject USB sound)

## Change Log
| Version | Changes         |
| ------- | --------------- |
| 1.0     | Initial release |

## Description
Replaces the standard arrow with a little bash bunny icon.

## Notes
I have included a both a static and animated cursor. 

## Information about SystemParametersInfo
### Microsoft Doc:

https://docs.microsoft.com/en-gb/windows/win32/api/winuser/nf-winuser-systemparametersinfoa

### Flags

```
SPI_SETCURSORS = 0x0057;
```

Convert uint to int = 87; 

```
SPIF_UPDATEINIFILE = 0x01; 
SPIF_SENDCHANGE = 0x02;
```

Bitwise "OR" these two together (0x01 -bor 0x02) = 3;


## Colours
| Status | Colour                        | Description                 |
| ------ | ----------------------------- | --------------------------- |
| SETUP  | Magenta solid                 | Setting attack mode         |
| ATTACK | Yellow single blink           | Injecting Powershell script |
| FINISH | Green blink followed by SOLID | Script is finished          |