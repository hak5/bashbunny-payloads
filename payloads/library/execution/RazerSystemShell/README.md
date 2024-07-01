# Razer System Shell from Bash Bunny

Author:        Emptyhen
Version:       0.1

## Description
Makes use of a exploitation that's part of the driver installation process for Razer HID devices. From a low privilege (non administrator account) this code produces a System authority PowerShell prompt.

There are some long delays built into this payload to allow for the time required to install the drivers and start the Razer Synaptics installation and configuration tool.

Although this has been designed for the Bash Bunny, it should be compatible with the Key Croc too.

Note: To run the payload a second time, the Razer driver needs to be removed from Device Manager.

## STATUS
| LED Status             | Status                                            |
|------------------------|---------------------------------------------------|
| PINK                   | Payload starting and configuring the attack mode. |
| ORANGE - Single Flash  | Waiting for drivers to be installed.              |
| ORANGE - Two Flashes   | Injecting keystrokes to create the shell.         |
| ORANGE - Three Flashes | Waiting for PowerShell to launch                  |
| GREEN                  | Payload finished.                                 |
