# Linux HID poc

Author: Thorsten Sick

Version: 0.9

OS: Linux

Attackmode: HID

IOC: gedit started, file created ('/tmp/owned')

Category: POC

## Description

Uses HID (keyboard) to start an xterm and create the file '/tmp/owned'. After that it starts gedit and writes 'Gotcha'

## Status

|LED|Status|
|-|-|
|SETUP (Magenta solid)|Not much setup needed|
|ATTACK (Yellow single blink)|attack: start xterm and gedit|
|FINISH (Green 1000ms VERYFAST blink followed by SOLID)|Done|
