# Fake Login
- Author: Cribbit
- Version: 1.0
- Target: Windows 10 (Powershell 5.1+)
- Category: Credentials
- Attackmode: HID & Storage
- Extensions: Run
- Props: PanicAcid for testing multi-screen desktops, Foxtrot and Other Hak5 Discord members

## Change Log
| Version | Changes         |
| ------- | --------------- |
| 1.0     | Initial release |

## Description
Shows a fake login screen. Saves the entered value to the loots folder on the bunny.

## To Do
Adding a To Do section just in case someone (or me if I can be bothered) want to fix some issues:

- Fade between time panel 1 and login panel 2
    - The beginnings of the code are there but has too much noticeable flicker.
- Disable notifications as they display over the form:
    - HKEY\_LOCAL\_MACHINE\\Software\\Policies\\Microsoft\\Windows\\Explorer, this Explorer needs to be created, Dword32 “DisableNotificationCenter”, value as 1.
    - HKEY\_CURRENT\_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\PushNotifications, "ToastEnabled" DWORD 0 = Turn off
    - HKCU\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Notifications\\Settings\\Windows.SystemToast.AutoPlay, "Enabled" = 0

## Colours
| Status | Colour                        | Description                 |
| ------ | ----------------------------- | --------------------------- |
| SETUP  | Magenta solid                 | Setting attack mode         |
| ATTACK | Yellow single blink           | Injecting Powershell script |
| FINISH | Green blink followed by SOLID | Script is finished          |
