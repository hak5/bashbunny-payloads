# PwnKit Vulnerability - Local Privilege Escalation - Compiled

- Title:         PwnKit Vulnerability - Local Privilege Escalation
- Author:        TW-D
- Version:       1.0
- Target:        Linux
- Category:      Execution
- Credits:       Qualys Research Team     

## Description

This is a version of the PwnKit Vulnerability Local Privilege Escalation containing pre-compiled binaries for x86_64 Linux. If you don't want to use the pre-compiled binaries or you are targetting a different architecture, please find the `PwnKit-LPE` directory.

The Qualys Research Team has discovered a memory corruption vulnerability in polkit’s pkexec, a SUID-root program that is installed by default on every major Linux distribution. This easily exploited vulnerability allows any unprivileged user to gain full root privileges on a vulnerable host by exploiting this vulnerability in its default configuration.

[PwnKit: Local Privilege Escalation Vulnerability Discovered in polkit’s pkexec (CVE-2021-4034)](https://blog.qualys.com/vulnerabilities-threat-research/2022/01/25/pwnkit-local-privilege-escalation-vulnerability-discovered-in-polkits-pkexec-cve-2021-4034)

## Configuration

From "payload.txt" change the values of the following constant :
```bash

######## INITIALIZATION ########

readonly BB_LABEL="BashBunny"


```

## Checksums

>
> 9e2c0af3d55192449760f1364a67f290554b98cdbe9ace9f84e6c33ea3e957eb ./CVE-2021-4034_files/pwnkit
>
> acd21bf70492d22317a4592551dcd4666a693b9622ddf952e63cf3ce288f3745 ./CVE-2021-4034_files/pwnkit.so
> 
