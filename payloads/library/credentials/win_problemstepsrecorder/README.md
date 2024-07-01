# "Microsoft Windows" Problem Steps Recorder

- Title:         Win_ProblemStepsRecorder
- Author:        TW-D
- Version:       1.0
- Target:        Microsoft Windows
- Category:      Credentials      

## Description

1) Partially avoids "PowerShell Script Block Logging".
2) Closing of all windows.
3) Hide "PowerShell" window.
4) Abuse of "Windows Problem Steps Recorder" to spy on a user's activities.
5) Writes the file system cache to disk.
6) Safely eject.

## Configuration

From "payload.txt" change the values of the following constants :
```bash

######## INITIALIZATION ########

readonly BB_LABEL="BashBunny"
readonly RECORDER_TIME=300


```
