# Linux Reverse Shell for Bash Bunny

Author: tuzzmaniandevil --creds: hak5darren
Version: Version 1.2

## Description

With the help of ducky script, it opens a terminal window using `CTRL ALT T`. Once the window is open it will copy the script to a hidden directory in the home directory.
The script will then be executed which starts a background reverse shell, delete itself and closes the terminal window.

Great when combined with the LAN Turtle :-)

Example listening for the connection on linux:
`nc -nlvp 4444`

## Configuration

- **RHOST** The host computer to connect to
- **RPORT** The post to use for the connection

## Requirements

The RHOST pc must be accessible from the target machine

## STATUS

| LED              | Status                                |
| ---------------- | ------------------------------------- |
| SETUP            | Setting Attack mode                   |
| ATTACK           | Executing Ducky and starting script   |
| FINISH           | Finished executing payload            |
