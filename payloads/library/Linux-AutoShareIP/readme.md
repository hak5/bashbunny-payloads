# Auto share network connection for linux

* Author: TheDragonkeeper
* Version: Version 1.0
* Target: Linux

## Description

A simple payload to share an internet connection with the bashbunny without user action.

## Configuration

Only the payload.txt needs to be on the bashbunny.

if the script is not currently in the users home folder then it gets pulled from github automatically.
if the script is avalible then it is executed and uses default settings to give the bashbunny a connection

## Requirements

 * Running a distrobution of linux
 * Have dmenu installed
 * sudo to be used without password
 * The dmenu hotkey is Windows key + r  so you will need to edit the payload line if yours is different

## STATUS

| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| Red                | Starting                                     |
| White              | Running HID Input                            |
| Green              | Connection Established                       |
