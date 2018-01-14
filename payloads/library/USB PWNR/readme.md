# USB PWNR

* Written by: C1PH3R
* Creds: C1PH3R, Hak5Darren, Nirsoft
* Target: Windows

## Description

##Starts up multiple programs: 

# BPG (BrowserPasswordGrabber): Grabs passwords from web browsers: Internet Explorer, Mozilla Firefox, Google Chrome, Safari, and Opera. 
# BHG (BrowserHistoryGrabber): Grabs history from web browsers: Internet Explorer, Mozilla Firefox, Google Chrome, Safari, and Opera. 
# InfoGrabber: Gather a lot of information about the computer and place it in a text file in loot/info/.
# Reverse-Shell: Copy's the file servicehost.txt to startup directory: shell:startup and executes it.

##Configuration:
#Place a file servicehost.whatever in Bashbunny/payloads
#Replace the text: servicehost.txt in payload.txt as well as in the copy-reverse.txt file with servicehost.whatever
#(Whatever) = the filetype you have selected as your reverse shell


| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| Amber              | Attack Setup                                 |
| Green              | Attack Complete                              |

#No discussion jet!

#"Don't look at the branch of the problem, look at the root! (C1PH3R)"

#For older or slower computers you can visit this link to download a version that is optimized for those applications.
# https://github.com/CIPH3R0/BashBunny/tree/master/USB-PWNR%20-SLOW
