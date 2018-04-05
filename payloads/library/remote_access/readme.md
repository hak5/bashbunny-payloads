# Xpl0it

Author: n3uron
Version: Version 1.0  

## Description

This payload was designed for a PoC.  It will write a text file to the desktop with a short message and instructions on how to fix everything.  Behind the scenes, it will execute a standard BASH reverse shell with persistance via a user agent.  

## Setup & Configuration 

1)  Change "attackerip" and "attackerport" in xpl0it.sh to your IP and preferred port.
2)  Move xpl0it.sh and setup.sh into library directory inside the payload directory.

## LED Indicators

| LED              | Status                                |
| ---------------- | ------------------------------------- |
| Slow Yellow      | Stage 1 - Payload                     |
| Fast Yellow      | Stage 2 - Cleanup                     |
| Green            | Done!                                 |

 