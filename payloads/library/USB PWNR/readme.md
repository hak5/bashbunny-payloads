# USB PWNR V2

* Written by: C1PH3R
* Creds: C1PH3R, Hak5Darren, Nirsoft
* Target: Windows

## Description

##Starts up multiple programs: 

# BPG (BrowserPasswordGrabber): Grabs passwords from web browsers: Internet Explorer, Mozilla Firefox, Google Chrome, Safari, and Opera. 
# BHG (BrowserHistoryGrabber): Grabs history from web browsers: Internet Explorer, Mozilla Firefox, Google Chrome, Safari, and Opera. 
# InfoGrabber: Gather a lot of information about the computer and place it in a text file in loot/info/.
# Reverse-Shell: Copy's the file servicehost.txt to startup directory: shell:startup and executes it.
# Ip grabber.

##Configuration:
#Optional: edit the "Delay CONFIGURATION" in payload file to your preferences to make the payload work with slower/older or faster/newer computers
#Optional: edit the "Shutting off CONFIGURATION" in the payload file to shut the bunny off after the payload is done
#Optional: edit the "Target ip CONFIGURATION" in the payload file to grab the ip of the victim
#Optional: edit the "Reverse shell CONFIGURATION" in the payload file to use reverse_shell
#When using a reverse_shell follow steps below
#Place a file servicehost.whatever in Bashbunny/payloads
#Replace the text: servicehost.txt in payload.txt file with servicehost.whatever (Whatever = the filetype you have selected as your reverse shell)



| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| Amber              | Attack Setup                                 |
| Stage (blinking)   | Bussy (do not remove stick)                  |
| Green              | Attack Complete                              |
| Red                | Fail                                         |

#No discussion jet!

#"Don't look at the branch of the problem, look at the root! (C1PH3R)"
