# GetTraffic for Bash Bunnys

* Author: samdeg555
* Version: Version 1.0
* Target: Windows


## Description

Plug the Bunny and let the computer work for you! 

The scrit launches PowerShell as admin, bypasses UAC, creates a powershell script in the C:\temp\ directory 
called script.ps1 that captures all network traffic for a specified amount of time, allows powershell script 
execution and start the script in background. The script will run for the amount of time you chose and then 
upload the capture file to an FTP server. It then deletes the capture files on the computer. The capture 
file is in ETL format (opened with Microsoft Message Analyzer) but can easily be converted to CAP file 
(see here for procedure: https://blogs.technet.microsoft.com/yongrhee/2013/08/16/so-you-want-to-use-wireshark-to-read-the-netsh-trace-output-etl/) 
if you are like me and prefer WireShark ;). 

The FTP user only needs WRITE permission. 


## Configuration

You need to edit four variables at the beginning of the script: 
user: Username of the FTP account. 
pass: Password of the FTP account. 
server: Address (or FQDN) of the FTP server. 
scanTime: Amount of time (in seconds) that you want the traffic to be captured. 

On line 101 and 53, there is a modification to make depending of your language to accept a modification (put Y for english, 
O for french, etc...). 

On line 38, you can set the language for the DuckyScript (ca=Canadian french, us=English US, etc...). 

Of course, the netsh trace command can be adapted to your needs (type netsh trace start /? for the manual). 


## STATUS

| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| Red (blinking)     | Setting up                                   |
| Blue (blinking)    | Attack running                               |
| Green              | Attack Complete                              |


## Discussion
None yet. 