
## Description
Initiate a Microsoft Management Console (MMC) DCOM bruteforce. This script was inspired by mmcexec.py in the impacket library. The idea is to use the error codes that return after an attempted connection to determine if credentials are valid.

This script is useful for environments where smb logins are disabled, thus preventing the smb reverse bruteforce. The target must be a domain joined windows host with the windows firewall off. The firewall must be off because by default because DCOM connections are not authorized by the Windows Firewall.

By default, the script will not show failed login attempts. To view failed login attempts you must specify the verbose option, -v. The script is also designed to quit if an account lockout is detected. If this is not desired you must specify honey badger mode, -b. You are also able to tell mmcbrute that you want to try user as pass by specifying -U. See the help menu for a full list of options (-h).

A progress bar will update in real time to let you know how the attack is progressing. There's nothing more frustrating than a bruteforcer that doesn't provide any feedback as it's running.

## Output
![honey badger mode](https://user-images.githubusercontent.com/11075149/33751087-62af2cec-dba6-11e7-9924-ae7445125768.png)

## Requirements
The impacket library is required in order to run this script.
```
pip2 install impacket
```

If that fails, you can get the library from here.
```
https://github.com/CoreSecurity/impacket
```

## Example Usage:
users.txt = Unique usernames separated by new lines

pass.txt = Unique passwords separated by new lines
```
./mmcbrute.py -t 10.10.10.10 -d DOMAIN -u users.txt -p pass.txt
```
