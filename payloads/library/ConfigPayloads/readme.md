# Config Payloads

Author: mrt0mat0
Version: Version 1.0

## Description

I was sick of copying payloads to the switch folders. I would always forget what I had where, and changes I made in the switch would get overwritten by another payload. 

This script update will allow you to create a config.txt in the root directory (same as payloads) that will allow you to set payloads to point to library directories. keeps it clean. If no file exists, it will default to the switch1, switch2 setup.

## Configuration

You don't need a `config.txt` for this to work. However, it's the whole point so I would recommend it. In the root storage directory, create a file called config.txt. in it should have two lines:
```
switch1:payloads/library/MacReverseShell
switch2:payloads/switch1
```

that's it. Enjoy!

## STATUS

| LED              | Status                                |
| ---------------- | ------------------------------------- |
| Blue             | Running                               |
| Red              | File Missing (new_bunny_bash.sh       |
| Purple (blink)   | Copy in progress                      |
| Red (blink)      | Copy Failed. Reverting.               |
| Green            | Finished                              |