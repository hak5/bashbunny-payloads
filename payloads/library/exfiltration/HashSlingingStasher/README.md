<pre>
NNNNNNNNNNNNNNNX0kxol:;'.....     ...,:lkKNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
NNNNNNNNNNN0xl:,..                      .,:o0NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
NNNNNNNNNOl'.                              .,xXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
NNNNNNNKo.                                   .lKNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
NNNNNN0:                                      .cKNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
NNNNNK;                                        .lKNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
NNNNXc                                          .dNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
NNNNo.                                           ,ONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
NNNO'                                            .lXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
NNXc                                              ;0NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
NNO'                                              'ONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
NNo                                               .;ccccccccccllloodxOXNNNNNNNNNNNNNN
NK;                                     .....                        .cKNNNNNNNNNNNNN
NO'                                                                   .xNNNNNNNNNNNNN
Nx.                   H A S H                   .               ...   .ONNNNNNNNNNNNN
Nd.                                             ......        .....   lXNNNNNNNNNNNNN
Nl                 S L I N G I N G               ......       ...    ;0NNNNNNNNNNNNNN
Xc                                                 ..               ,ONNNNNXK0KXNNNNN
K;                  S T A S H E R                                 .cKNNNNN0dc;:cldkKX
K,                                                              .:kXNNNNXxcdd:co:,,:o
O'                       by                                  .;o0XNNNNNKocddcd0x::c;;
k.                                                 ....',:ldkKNNNNNNNNOccoclkkl:oxl:x
x.                     theSW4n                    .l0KKXNNNNNNNNNNNNNKl,:;lko:ldl:lOX
d                                                 .lXNNNNNNNNNNNNNNNNX0o,,:::ol;cxKNN
l                                                  .:ok0XXXK0OxdldKNNKxlldoc:;cxKNNNN
c                                                     ..,;,'..    ;xdcoOXNNK00XNNNNNN
;                                                                  .:OXNNNNNNNNNNNNNN
,                                                                   lNNNNNNNNNNNNNNNN
'                                                                   cXNNNNNNNNNNNNNNN
.                                                               .':o0NNNNNNNNNNNNNNNN
.           ..                                     ..''''',;:cox0XNNNNNNNNNNNNNNNNNNN
            ..                                     .xNXXXXNNNNNNNNNNNNNNNNNNNNNNNNNNN
           ...                                     .dNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
          ....                                     .xNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
.         ....                                   .;dKNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
Ko.       ......                            .';cd0XNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
Nk,.        .oKk,       ....';:col.        .;OXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
NNXOdl;..   'ONNd.      ....';cxXNl          .;dKNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
NNNNNNNXOxl;oXNN0:.... .....',:xXN0l,........';dKNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
NNNNNNNNNNNXXNNNNXK0OOOOO00KXXNNNNNNXXKKKKKKXXNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
</pre>

HSS is a data backup tool for MacOS and Linux targets (tested on Ubuntu 22.04.3 LTS, MacOS 13.6, and Kali Linux 2023.3) (not compatible with Windows). It is designed to find and copy user defined file types/sizes to the udisk on the Bash Bunny, and keep track of them using checksums. This allows the user to scan, stop, and revisit the target to resume copying only new files, skipping those previously copied. 

# Instructions

If using a MicroSD XC card for your Bash Bunny Mark II, format it using FAT32 and name it "BashBunny".

Variables/options are set in payload.txt. By default, the script will recursively search the root directory of the target OS for image and video file extensions and copy only files greater than 10KB in size.

Copy the payload.txt and hss_bbscript.sh into the payload/switch folder on the Bash Bunny. If you have an existing checksums.txt file (a list of checksums for files which have been copied previously) you want to use, make sure to copy it to .../BashBunny/loot/hss/ on the Bash Bunny as well (or on the SD card if applicable). The list should contain one CRC-32 checksum per line.

Backup checksums.txt after running HSS and name it something specific so that you know which target it corresponds to. You probably wouldn't want to use the same list on multiple targets, especially if there is a low chance of them containing the same files, because the script will take longer to parse the irrelevant checksums from the existing list. But this depends on your use case. If you want to return to a specific target at a later time, just copy and rename the corresponding checksums file back to "checksums.txt" in the loot directory, and pick up where you left off (looking for new/modified files).

If the script completes its scan of the target system, it will create a file called "nosferatu" in the loot directory. Otherwise you may simply come back and run the HSS script again to resume scanning at any time. nosferatu is deleted at the beginning of each scan, if it exists on the Bash Bunny already.

Unplug the Bash Bunny device when the script is finished, or at any time if you wish to return and finish later (TBD; does this corrupt or not back up files?). You may now move the files off of the device for storage elsewhere, if desired. Leave the checksums.txt file inside the loot directory on the device if the script did not complete. The script will pick up where it left off, skipping over any files that were copied before (as long as checksums.txt is left on the device).

# Nuances
The tool will attempt to mount all connected disks and run as super user if possible (better results), unmounting whatever was not previously mounted before, once the script completes.

If an unsupported filesystem is connected, you may instead run the script from a bootable USB OS attached to the target, which supports the desired filesystem.

MacOS Time Machine backups and hidden ".Trashes" folders can not be accessed by running this script from the local machine running MacOS, unless full disk access has been granted to the termial application. You can do this relatively quickly (if you have the password to the user logged in) by pressing command + space, type "full disk access" and press return, then click the toggle to enable Terminal if it is not already enabled. Don't forget to turn it off afterwards if you go this route.

# LED Status Indicators (Standard)
SETUP.... Magenta solid
ATTACK... Yellow single blink
FINISH... Green 1000ms VERY FAST blink followed by SOLID

# hss_checksummer.sh
### To manually generate or update your checksum list for files which you have already copied

Manually run this script in the parent directory above a directory called "backup" containing files you want to add to a checksums.txt list. Then take the checksums.txt file and place it in .../loot/hss/ to prevent the files from being copied to the .../loot/hss/backups/ directory the next time HSS is run.

# hss_cleanup.sh
### To perform cleanup functions on the loot directory

Manually run this script inside the .../loot/hss/ directory to unhide hidden files, and sort files into directories based on their file extension inside the loot directory.