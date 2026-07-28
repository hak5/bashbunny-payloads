# AutoScreenShot Windows for Bash Bunny

* Author: Nick Rau
* Credits to: guitarrapc for Get-ScreenShot.ps1
* Version: 2.0
* Target: Windows

## Description
This payload runs a powershell script that makes a screenshot and saves it to the Bash Bunny. It makes use of a powershell script made by guitarrapc
but I altered it a bit so it makes a screenshot of the full desktop even in 1920x1080.

## Configuration

Put the powershell script Get-ScreenShot.ps1 in the root of the Bash Bunny's directory. In this script is a variable named $fillres.
Thanks to a problem in powershell, the command normally used for finding the screen resolution doesn't get the right screen resolution with some screens.
If you want to put in the resolution of your screen type: $fillres = 1920, 1080.
If you want the script to find the resolution itself: $fillres = "null"

# Status of the LED'S

| LED                               | STATUS                                       |
| --------------------------------- | -------------------------------------------- |
| Purple                            | Setting up                                   |
| Yellow (blinking)                 | Putting Bash Bunny on the background         |
| Blue (blinking)                   | Running powershell                           |
| Green                             | Attack Complete                              |
