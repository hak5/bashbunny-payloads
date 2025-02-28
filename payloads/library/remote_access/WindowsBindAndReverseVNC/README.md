# Windows Bind and Reverse VNC
* Author: El3ct71k (Nimrod Levy, Scorpiones)
* Version: Version 1.0
* Target: Windows 7, 8, 8.1, 10

## Description
In computing, Virtual Network Computing (VNC) is a graphical desktop sharing system that uses the Remote Frame Buffer protocol (RFB) to remotely control another computer. It transmits the keyboard and mouse events from one computer to another, relaying the graphical screen updates back in the other direction, over a network.
Invoke-Vnc executes a VNC agent in-memory and initiates a reverse connection, or binds to a specified port. Password authentication is supported.

## Configuration

you must edit the payload file and update the following variables:

* ATTACK_TYPE - with this variable you will choose with which type of payload you want execute (bind connection / reverse connection)
1. bind - open VNC port on the victim host (connect directly to your victim)
2. reverse - connect to the attacker VNC server (reverse connection, attacker machine must be on listen mode)

### for reverse VNC please update the following variables:
1. ATTACKER_IP - your VNC server (the IP must be resolved from the victim computer)
2. VNC_PASS - A password for authentication to the victim
3. PORT - A port that your attacker machine is binded

### for bind VNC please update the following variables:
1. VNC_PASS - A password for authentication to the victim
2. PORT - A port that the victim computer will listen to (the IP must be resolved from the attacker computer)

## On your attacker machine:
* vncviewer -listen - in order to binds a vnc server on your attacker machine (this command is mentioned to reverse vnc)
* vncviewer IP:PORT - in order to connect to victim computer (this command is mentioned to bind vnc)
## STATUS

1. Purple - Initial processing (cleanning cache files from previous execution and starts HTTP server)
2. Yellow - Starts HID attack and typing a staged payload based on powershell
3. Cyan - Starts Ethernet attack and waiting for the powershell payload that will executes the second payload from the server
4. Green - Attack Finished