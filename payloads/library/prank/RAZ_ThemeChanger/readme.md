# RAZ_ThemeChanger
* Author: sil3n7h
* Version: 1.2a
* Target: Windows 7+
* Category: Prank
* Attackmode: HID, STORAGE

## Change Log
| Version | Changes                                |
| ------- | ---------------------------------------|
| 1.2a    | Documentation change                   |
| 1.2     | Updated docs and check for themepack   |
| 1.1     | Updated for firmware 1.1               |
| 1.0     | Initial release                        |

## Dependencies
The following files must exist in the switch folder:

theme.themepack - The Windows theme file used to set the wallpaper and colors of the screen.

Note: themepack files are windows zipfiles which contain wallpapers and other files (screensavers, sounds, etc).  You can export your own themepack using Windows GUIs.  Just look it up `exporting a windows themepack`.

## Description
Executes theme file (theme.themepack) from the ${SWITCH_POSITION} folder in the payloads library of the Bash Bunny USB Disk partition.

## Configuration
None

## Colors
| Status    | Color                         | Description                                      |
| --------- | ------------------------------| ------------------------------------------------ |
| SETUP     | Magenta solid                 | Setting attack mode, getting the switch position | 
| FAIL1     | Red slow blink                | Could not find the theme.themepack file          | 
| ATTACK    | Yellow single blink           | Running the VBScript                             | 
| FINISH    | Green blink followed by SOLID | Script is finished                               |