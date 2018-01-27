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
3. You can use [this software(unicorn bash bunny payload generator)](https://github.com/Prodicode/bash-bunny-unicorn-payload-generator) to generate a **payload.txt** from the **powershell_attack.txt**.
4. Transfer the **payload.txt** to one of the switches on the Bash Bunny. You're ready to go!

## Status

| LED                  | Status                                       |
| -------------------- | -------------------------------------------- |
| Yellow Blink(ATTACK) |  Attack Setup                                |
| Green(FINISH)        |  Attack Complete                             |
