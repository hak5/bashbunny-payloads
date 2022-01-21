# "Microsoft Windows" SSLKEYLOG

- Title:         Win_SSLKeyLog
- Author:        TW-D
- Version:       1.0
- Target:        Microsoft Windows
- Category:      Credentials      

## Description

>
> Captures the client network session.
> 
> Captures the client side session keys.
>

1) Partially avoids "PowerShell Script Block Logging".
2) Closing of all windows.
3) Hide "PowerShell" window.
4) Check if current process have "Administrator" privilege.
5) Sets the "SSLKEYLOGFILE" environment variable to store SSL session key information. 
6) Starts a "Network Tracing Session" with "ETW (Event Tracing for Windows)".
7) Writes the file system cache to disk.
8) Safely eject.

## Configuration

From "payload.txt" change the values of the following constants :
```bash

######## INITIALIZATION ########

readonly BB_LABEL="BashBunny"
readonly SNIFFING_TIME=300


```

## Required

Utility that converts an .etl file containing a Windows network packet capture into .pcapng format.
[ETL2PCAPNG](https://github.com/microsoft/etl2pcapng)

Wireshark network protocol analyzer.
[WIRESHARK](https://www.wireshark.org/)

## Steps

Convert "capture.etl" file into "capture.pcapng" with "etl2pcapng".
```
.\etl2pcapng.exe .\capture.etl .\capture.pcapng
```

Open your "capture.pcapng" with "Wireshark".

Configure "Wireshark" for HTTPS decryption.
```
Edit - Preferences
Protocols - (SSL and/or TLS)
(Pre)-Master-Secret log filename -> Browse -> SSLKEYLOGFILE.txt
```

Happy hunting.
