# Unicorn Powershell Injection

* Author: Prodicode
* Creds: trustedsec
* Version: 1.0
* Firmware support: 1.1
* Target: Windows

## Description

A simple script that allows you to inject any metasploit payload with powershell and gain meterpreter or shell access to the target PC.

## Configuration

Configuring this payload is pretty time-consuming, but it's worth it.

1. Download Trustedsec's Unicorn: https://github.com/trustedsec/unicorn and use it to generate a powershell attack script.
2. After you generate a powershell script, execute ```$ msfconsole -r unicorn.rc``` in the same directory in order to start the listener.
3. Transfer **payload.txt** to any of your switches, then open it.
4. Replace ```your_powershell_attack_here``` with the contents of your **powershell_attack.txt** file which was generated.
5. Put a **\\** (backslash) before each special character (**\,**  **\"**  **\'**  **\:**  **\;**  **\(**  **\)**  **\[**  **\]**  **\+**).
6. Save the **payload.txt** file and eject Bash Bunny. You are good to go! Sessions will be opened in the metasploit's listener!

## Status

| LED                  | Status                                       |
| -------------------- | -------------------------------------------- |
| Yellow Blink(ATTACK) |  Attack Setup                                |
| Green(FINISH)        |  Attack Complete                             |
