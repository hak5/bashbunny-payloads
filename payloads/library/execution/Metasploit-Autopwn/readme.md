# Metasploit-Autopwn

* Author: Mohamed A. Baset - @SymbianSyMoh - Seekurity.com
* Version: Version 0.1
* Target: All OS / services

## Description:

Runs Metasploit db_autopwn module against the dhcp connected client to the Bash Bunny device exploiting locked and unlocked machines that running vulnerable OSes or services.

## Configuration/Prequisities:

1. Ruby 2.4.1 installed via 'rbenv' (the best to have ruby installed without any problems)
2. You must have metasploit installation up and running in path /toos/metasploit-framework/
3. Copy auto_pwn.rc metasploit resources file from the payload folder to /tools/ by SSHing into your bunny
4. One-time fix for adding user "postgres" to the network user groups (should be done by HAK5 folks in the first place)



## STATUS

| LED                | Status                                         |
| ------------------ | -----------------------------------------------|
| Setup              | Setting up stuff                               |
| ATTACK             | Running Metasploit Autopwn Module              |
| FINISH             | Attack Finished (hopefully we got some shells) |

## Discussion
https://forums.hak5.org/topic/41737-metasploit-framework-with-db_autopwn-module-on-bashbunny/
