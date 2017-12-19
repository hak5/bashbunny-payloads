Based on a payload written by Simen Kjeserud

Tested on firmware 1.3

Searches the user profile for .lnk files and reports on the file name,
Target file, Date Created, Date Last Written. Results are provided in
a CSV file.

Output = \loot\Link-Files\link_files.csv

Background
In an incident where it is suspected that a user has exfiltrated
data to a USB drive, the target element of any .lnk files may show 
files on external media (i.e. not the C: drive.).

Note - using this payload is NOT forensically sound!


## STATUS

| LED              | Status                                |
| ---------------- | ------------------------------------- |
| Purple (blinking)| Attack in progress                    |
| Green (blinking) | Attack Finished                       |




