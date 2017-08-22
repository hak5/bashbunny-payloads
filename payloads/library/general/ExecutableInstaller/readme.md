# ExecutableInstaller for Bash Bunnys

* Author: IMcPwn
* Version: Version 1.0
* Target: Windows

## Description

Copies an executable (or executable in a directory) from the Bash Bunny USB Mass Storage
to %APPDATA% and then executes it with the --startup parameter (or whatever parameter you want).

## Configuration

By default the staged payload copies the payload payload.exe from the root of the Bash Bunny, rename this to whatever you like inside
by editing e.cmd.
The payload copies to %APPDATA%, change this to wherever you like by editing e.cmd.
You may also copy a payload inside a directory, see comments in e.cmd.

## STATUS

| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| Red                | Attack Setup                                 |
| Green              | Attack Complete                              |

## Discussion
[Hak5 Forum Thread](https://forums.hak5.org/index.php?/forum/92-bash-bunny/ "Hak5 Forum Thread")
