# psh_DownloadExec
## Powershell Download and Execute

* Author: LowValueTarget
* Version: Version 1.2
* Target: Windows XP SP3+ (Powershell)
* Category: Powershell
* Attackmodes: HID, RNDIS_Ethernet
* Firmware: >= 1.2

## Description

Quick HID attack to retrieve and run powershell payload from BashBunny web server.

## Configuration

Ensure psh.txt exists in payload directory. This is the powershell script that will be downloaded and executed.

## Requirements

### gohttp

gohttp is a standalone simple webserver that is quicker and more stable than python's SimpleHTTPServer.

__Installation__

Assuming you have Golang Installed (https://golang.org/dl/)

```
go get -u github.com/itang/gohttp
cd $GOPATH/src/github.com/itang/gohttp
GOOS=linux GOARCH=arm go build
mkdir $HOME/gohttp
mv gohttp $HOME/gohttp/
```

Then copy the gohttp folder in your home directory to the BashBunny /tools/ folder.

## STATUS
```
| Attack Stage        | Description                              |
| ------------------- | ---------------------------------------- |
| Stage 1             | Running Initial Powershell Commands      |
| Stage 3             | Delivering powershell payload            |
```