
Author : Paul Murton

Notes :

My background is in Computer Forensics and Incident Response.
I am new to Powershell, so it's likely that the script is inefficient,
but it does work.

A (naive) user may attempt to hide image(picture) files by simply
renaming them to appear to be other filetypes (i.e. Word documents etc).
This payload uses a powershell script to walk the userprofile to look
for image files that have been hidden in this manner.

It ignores files with image extensions, and checks the file headers
for known image file headers.

The output is put into a CSV file in the folder \loot\image-files

The script can be easily modified to search for other filetypes (maybe
mpg movie files etc)

It should be noted that payload is NOT forensically sound, and if
"proper" forensic tools are available, they should be used.

Tested on ver 1.3

## STATUS

| LED              | Status                                |
| ---------------- | ------------------------------------- |
| Purple (blinking)| Attack in progress                    |
| Green (blinking) | Attack Finished                       |




