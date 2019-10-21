# Garfield

``` txt
             --      --
            .:"  | .:'" |
          --  ___   ___  -
        /:.  /  .\ /.  \ .\
       |:|. ;\___/O\___/  :|
       |:|. |  `__|__'  | .|
       |:|.  \_,     ,_/  /
        \______       |__/
         |:.           \
        /.:,|  |        \
       /.:,.|  |         \
       |::.. \_;_\-;       |
 _____|::..    .::|       |
/   ----,     .::/__,    /__,
\_______|,...____;_;_|../_;_|
```

* Author: Mike Galvin
* Version: Version 1.0
* Category: Get local passwords
* Target: Windows 10 / PowerShell

Mike Galvin's site: [https://gal.vin](https://gal.vin)

Twitter:[@mikegalvin_](https://twitter.com/mikegalvin_)

## Description

This payload will launch an elevated PowerShell session and run g.ps1.

The script will disable Windows Defender realtime protection, run LaZange and dump all local passwords to a file in the loot folder.
A complete attack shouild take no more than 15 seconds from USB plug in.

### Configuration

You will need to obtain the LaZange and RunAsTI64 binaries and put them in a folder called 'bin' in the root of the BashBunny's USB drive partition.

LaZagne is by AlessandroZ and is available on GitHub: [https://github.com/AlessandroZ/LaZagne](https://github.com/AlessandroZ/LaZagne)
Warning: Windows Defender and possibly other AV's will flag LaZange as malware.

RunAsTI is by jschicht and is also available on GitHub: [https://github.com/jschicht/RunAsTI](https://github.com/jschicht/RunAsTI)

### Status

| LED    | Status               |
| ------ | ---------------------|
| SETUP  | Setting up attack    |
| ATTACK | Injecting keystrokes |
| FINISH | Done                 |
