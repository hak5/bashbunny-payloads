## FICBunny

* Title: FICBunny
* Short Description: Firmware Image Creator for the Bash Bunny
* Author: HSF3232
* Version: 1.0
* Last tested Bunny Firmware version: 1.7

## Long Description

The main purpose of this script is to create a backup image (in case you wanted to revert to a known good point) and to replace the missing firmware image within /dev/nandg, should it be missing.

Note: It may be a good idea to disable all any non-critical services - if any - on the bunny before starting this payload. 

**WARNING: /dev/nandg CONTAINS RECOVERY RELATED FILES! WHILE I HAVE TESTED THIS SCRIPT MANY TIMES TO ENSURE IT DOESN'T DO ANYTHING SCREWEY, YOU NORMALLY SHOULD NOT TOUCH /dev/nandg! IF YOU DON'T WANT TO MESS WITH THE RECOVERY PARTITION, TURN OFF "WriteToRecovery"!!**

## Variables
| Name            | Description                                                                       | Default |
| --------------- | --------------------------------------------------------------------------------- | ------- |
| WriteToRecovery | When firmware image extraction is complete, write the firmware image to recovery? | 1       |
| Overwrite       | If a existing firmware file is detected within recovery, overwrite it?            | 0       |

## STATUS

| LED                     | Status                                                                                                        |
| ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| SETUP                   | Copying required script file to /tmp, creating needed directorys, and mounting partitions                     |
| FAIL                    | Couldn't find required script file within payload directory                                                   |
| STAGE 1                 | Extracting uImage file                                                                                        |
| STAGE 2                 | Copying rootFS into rootfs.tar                                                                                |
| STAGE 3                 | Compile the firmware file from rootfs.tar and uImage into a file on MassDisk                                  |
| STAGE 4                 | Looking in Recovery partition for backup firmware image                                                       |
| R SOLID                 | Backup firmware image missing! If told to, will copy generated backup firmware image into recovery.           |
| C QUAD                  | Backup firmware image found! If told to, will overwrite it.                                                   |
| M VERYFAST              | Writing to recovery partition, **DO NOT UNPLUG!!!!**                                                          |
| CLEANUP                 | Removing temporary directories and unmounting partitions                                                      |
| FINISH                  | Script is finished, starting arming mode (ATTACKMODE SERIAL STORAGE)                                          |