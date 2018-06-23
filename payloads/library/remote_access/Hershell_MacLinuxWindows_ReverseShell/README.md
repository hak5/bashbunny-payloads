# Hershell Encrypted Reverse Shell (Cross-platform - Manual Mode)

Author: metalkey<br>
Creds: Ronan Kervella (Creator of Hershell)<br>
Version: Version 0.5<br>

## Instructions

Hershell Github: https://github.com/sysdream/hershell (read all instructions on Hershell git before starting)

1. Compile all payloads and place binaries in the `payloads\$SWITCH_POSITION` directory (Double check binary names. Defaults are `mac32`, `linux32`, `win32.exe`)
2. Uncomment desired target OS payload lines and ensure others are commented out
3. Start ncat listener on your attacking machine, that is to receive the reverse shell (e.g. `ncat --ssl --ssl-cert server.pem --ssl-key server.key -lvp 4343`)
4. Execute attack via Bash Bunny
