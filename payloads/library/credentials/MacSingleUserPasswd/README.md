# MacSingleUserPasswd

* Author: [thehappydinoa](https://github.com/thehappydinoa)
* Version: Version 1.0.2
* Target: macOS

## Description

Quickly and efficiently updates the password of a user though the single user mode on macOS.

## Configuration

Update `ACCOUNT` and `PASSWD` accordingly.

## Use

1. Restart the Mac.
2. Hold `command` and `s` until you see white text on the screen.
3. Once you come to the `:/ root#` prompt plug in the Bash Bunny. 
It should look similar to this:
![Single User Mode](http://cdn2.tekrevue.com/wp-content/uploads/2014/09/single-user-mode.jpg)
4. When it finishs mounting the root directory `/` it will tell you to `Change switch position now`. At this point you should change the switch position.
5. When you see the FINISHED LED you can unplug and wait for the machine to restart.

## STATUS

| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| STAGE1             | Mounts root directory                        |
| STAGE2             | Runs WAIT extension                          |
| STAGE3             | Loads LaunchDaemons for user management      |
| FINISH             | Clears history and restarts                  |
