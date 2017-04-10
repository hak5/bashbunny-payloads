# Proxy Interceptor for Bash Bunny

Author: NightStalker

Version: 1.0

## Description

This payload will enable a proxy and import an SSL certificate to a Windows
computer for Internet Explorer and Chrome (FireFox is in progress for 2.0)
The script uses a combination of Ducky Code and PowerShell.

*Note: Currently no falure LED, if remains red for more than 60 seconds
script failed. Will build checks in later version.

## Requirements

Certificate needs to be in .pem format and in the root switch directory with
payload.txt, set the certificate and proxy information in the vars.ps1 file.

## STATUS

| LED              | Status                                |
| ---------------- | ------------------------------------- |
| White (blinking) | Script Running.                       |
| Purple (blinging)| Script Complete.                      |

## Discussion

https://forums.hak5.org/index.php?/topic/40476-payload-proxy-interceptor/
