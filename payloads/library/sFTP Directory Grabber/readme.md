# ExecutableInstaller with sftp recursive directory grab for Bash Bunnys

* Author: IMcPwn
* Revision for SFTP: Mule Skinner
* Version: Version 1.0
* Target: Windows

## Description

Copies psFTP.exe from the Bash Bunny USB Mass Storage root directory to %TEMP% and then executes with parameters in the e.cmd.

## Configuration

By default the staged payload copies the payload psFTP.exe from the root of the Bash Bunnyand executes it via e.cmd.
The payload copies to %TEMP%, change this to wherever you like by editing e.cmd.
You may also copy a payload inside a directory, see comments in e.cmd.
Make changes to e.cmd for your sFTP user@domain.com, sFTP password, sftp directory for loot and target machine directory 
for loot to be taken from. Variables are as follows:

sftphost=username@hostname.domain.com
sftppass=password
lootfrom=c:\users\username\documents
looto=/loot

IMPORTANT: Please copy psFTP.exe from the payload directory to the root of the bash bunny before attempting to use this payload.

## STATUS

| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| Red                | Attack Setup                                 |
| Green              | Attack Complete                              |

## Discussion
[Hak5 Forum Thread](https://forums.hak5.org/index.php?/forum/92-bash-bunny/ "Hak5 Forum Thread")
