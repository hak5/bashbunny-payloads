# Dropbox Exfiltrator Proof-of-Concept

* Author: Hak5Darren
* Props: jimcola99 Buchanan
* Demo: Hak5 episode 2505
* Target: Windows Vista+
* Category: Exfiltration

## Proof of Concept

This payload is not robust and is meant for demonstration purposes only. Known issues include the 150 MB file chunking limitation with Dropbox, as well as the IWR/IEX method and compression overhead. Please feel free to clean up.

## Description

Staged powershell payload which downloads and executes exfil.ps1 from dropbox which compresses the users documents folder and uploads it to dropbox.

## Requirements

* Step 1. Create a Dropbox app using their API and generate an access token from https://www.dropbox.com/developers/apps/create
* Step 2. Customize the powershell second stage exfil.ps1 file to exfiltrate the loot to Dropbox using the token generated above
* Step 3. Get a direct dropbox link for the powershell file (right-click exfil.ps1, get dropbox link, replace dl=0 with dl=1)
* Step 4. Customize the exfiltration payload.txt to use the dropbox link from above
* Step 5. ???
* Step 6. h4x



## STATUS

| LED               | Status                                 |
| ----------------- | -------------------------------------- |
| SETUP             | Setting attack mode                    |
| ATACK             | Injecting keystrokes                   |
| FINISH            | All done                               |
