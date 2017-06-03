# ghost_cleanup for Bash Bunnys

* Author: bg-wa
* Version: Version 1.0
* Target: Windows, Mac, Linux
* Props: Hak5

## Description

Cleans the input history on Windows, Mac and Linux (Unity)

## Configuration

By default this script clears ALL history.  
To only delete a certain number of lines, set the LINES=XX param (MAC / LINUX).

By default this script clears UNITY history.

To delete Windows history, set the OS="WINDOWS" param, or create the file '/root/udisk/loot/ghost_cleanup/os_windows' in your initial payload.

To delete Mac(OSX) history, set the OS="MAC" param, or create the file '/root/udisk/loot/ghost_cleanup/os_mac' in your initial payload.

To Debug, set the DEBUG=true param.
Write text to the debug file with:

```

echo "DEBUG MESSAGE" >> "${DEBUG_FILE}"

```

TODO:

Delete a fixed number of lines from Windows history

Unmount USB Storage (Window, Mac, Linux)

Delete extra Network Adapters (Windows)

Delete last ssh login info (Mac, Linux)

## STATUS

| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| Brown              | Cleanup Setup                                |
| Purple (Flashing)  | Unity Desktop (OS:UNITY) Default             |
| White (Flashing)   | OSX (OS:MAC)                                 |
| Blue (Flashing)    | Windows (OS:WINDOWS)                         |
| Green              | Cleanup Finished                             |