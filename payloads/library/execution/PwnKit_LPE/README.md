# PwnKit Vulnerability - Local Privilege Escalation

- Title:         PwnKit Vulnerability - Local Privilege Escalation
- Author:        TW-D
- Version:       1.0
- Target:        Linux
- Category:      Execution
- Credits:       Qualys Research Team   

## Description

The Qualys Research Team has discovered a memory corruption vulnerability in polkit’s pkexec, a SUID-root program that is installed by default on every major Linux distribution. This easily exploited vulnerability allows any unprivileged user to gain full root privileges on a vulnerable host by exploiting this vulnerability in its default configuration.

[PwnKit: Local Privilege Escalation Vulnerability Discovered in polkit’s pkexec (CVE-2021-4034)](https://blog.qualys.com/vulnerabilities-threat-research/2022/01/25/pwnkit-local-privilege-escalation-vulnerability-discovered-in-polkits-pkexec-cve-2021-4034)

## Configuration

From "payload.txt" change the values of the following constant :
```bash

######## INITIALIZATION ########

readonly BB_LABEL="BashBunny"


```
