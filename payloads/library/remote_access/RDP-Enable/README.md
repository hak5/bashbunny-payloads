# Enable-RDP

* Author: Mike Galvin
* Version: Version 1.0
* Category: Enabling services and accounts
* Target: Windows 10 / Powershell

[Mike Galvin's site](https://gal.vin)
Twitter:[@mikegalvin_](https://twitter.com/mikegalvin_)

## Description

This payload will launch an elevated PowerShell session and run p.ps1.

The script will enable RDP without NLA, enable the RDP firewall rules in Windows firewall and enable the local admin user and set a password configurable in the script.
The script also creates another admin user just in case.

### Configuration

You can configure the password and new user account name using the variables at the top of p.ps1.

### Status

| LED    | Status               |
| ------ | ---------------------|
| SETUP  | Setting up attack    |
| ATTACK | Injecting keystrokes |
| FINISH | Done                 |
