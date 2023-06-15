# Simple USB File Extractor
---
- Author: TheZeal0t
- Creds: DanTheGoodman, thehappydinoa, sebkinne

### Original Description

A stupid easy to use file extractor leveraging the USB storage attack mode. Will stuff the found files in the `/loot/simple-usb-file-extractor` folder. Also deletes the run-line history because why not.

### Description
---
Some modifications to Simple USB File Extractor by DanTheGoodman.

I fixed the issue with the payload failing in the AM, because the filenames were getting spaces instead of leading zeroes placed in hours, minutes, seconds, etc.

https://forums.hak5.org/topic/49404-timestamped-file-name-in-windows-batch-script/

I needed the ability to exfiltrate configuration files off of embedded devices with USB ports.  I needed to be able to watch the status on the screen (stealth is not important; monitoring progress is more important).  I needed a log of the files that were copied, so that I could easily review it for files of interest.  Finally, I switched from xcopy to robocopy, since I needed the files to be copied over in the same directory structure that they were in at the source.  This makes it easier to locate the files on the target in case I need to modify them for some kind of attack (while doing legal, ethical pentesting engagements).


### Dependencies
---
None :)


### Configuration (optional)
---
To specify file extensions for including, in x.cmd, modify:

set files=*.xml *.conf *.config *.properties *.sql *.cmd *.bat *.txt

To specify excluded directories, modify x.cmd:

set exclude_dirs=c:\Windows c:\Users "c:\Program Files" "C:\Program Files (x86)" c:\Applications c:\ProgramData

I am currently supporting drives, C, D, and E.  I initially ran into a problem with recursion, where the script would find the loot directory on the device, and enumerate it in an endless loop. Now, I check the BashBunny's drive to make sure I am not enumerating it.  The script can be modified to support more / other drives.  Maybe eventually, I'll enumerate the drives and then loop through them.

Change payload.txt if you have renamed your BashBunny.  Set the lable to the new name for your USB device:

RUN WIN powershell ".((gwmi win32_volume -f 'label=''BashBunny''').Name+'payloads\\$SWITCH_POSITION\x.cmd')"

Currently, I want to see the output of the command so that I know when the file copy is completed.  Eventually, I'll fix the script so that the status lights work correctly.  If you want to add stealth back in, you can switch the PowerShell payload to execute "z.cmd" instead of "x.cmd", which adds in a couple more layers, and involves a Visual Basic script called "i.vbs".  I recently read that Microsoft is going to disable VBS on Windows 7 and 8, so that is another benefit to removing those extra layers.  However, I'm leaving in the files from the original project, in case you want to add stealth back in.  In payload.txt:

RUN WIN powershell ".((gwmi win32_volume -f 'label=''BashBunny''').Name+'payloads\\$SWITCH_POSITION\z.cmd')"


### Status:
---
|LED|Status|
|---|---|
|Yellow single blink|Running payload|
|Solid Green|Currently goes solid green when the PowerShell script is complete, not when files are finished copying|

---
This is my first payload for the Bash Bunny.  I'd like to improve this with better status updates.
