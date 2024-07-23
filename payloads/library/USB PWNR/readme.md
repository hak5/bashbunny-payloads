# USB PWNR V2

`````
+   __  _______ ____     ____ _       ___   ______ 
+  / / / / ___// __ )   / __ \ |     / / | / / __ \
+ / / / /\__ \/ __  |  / /_/ / | /| / /  |/ / /_/ /
+/ /_/ /___/ / /_/ /  / ____/| |/ |/ / /|  / _, _/ 
+\____//____/_____/  /_/     |__/|__/_/ |_/_/ |_|

`````

* Written by: C1PH3R
* Creds: C1PH3R, Hak5Darren, Nirsoft
* Target: Windows

# Description:

# Starts up multiple programs: 

- [x] BPG (BrowserPasswordGrabber): Grabs passwords from web browsers: Internet Explorer, Mozilla Firefox, Google Chrome, Safari, and Opera. 
- [x] BHG (BrowserHistoryGrabber): Grabs history from web browsers: Internet Explorer, Mozilla Firefox, Google Chrome, Safari, and Opera. 
- [x] InfoGrabber: Gather a lot of information about the computer and place it in a text file in loot/info/.
- [x] Reverse-Shell: Copy's the file servicehost.txt to startup directory: shell:startup and executes it.
- [x] Ip grabber.

# Configuration:
* Required: download the binary files and put them in the switch position you chose:
https://github.com/CIPH3R0/BashBunny/tree/master/Binary-s/USB%20PWNR
* Optional: edit the "Delay CONFIGURATION" in payload file to your preferences to make the payload work with slower/older or faster/newer computers
* Optional: edit the "Shutting off CONFIGURATION" in the payload file to shut the bunny off after the payload is done
* Optional: edit the "Target ip CONFIGURATION" in the payload file to grab the ip of the victim
* Optional: edit the "Reverse shell CONFIGURATION" in the payload file to use reverse_shell
* When using a reverse_shell follow steps below
* Place a file whatever.whatever in Bashbunny/payloads
* Edit the "Reverse shell name CONFIGURATION" in the payload file to the name you chose for your reverse_shell



| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| Amber              | Attack Setup                                 |
| Stage (blinking)   | Bussy (do not remove stick)                  |
| Green              | Attack Complete                              |
| Red                | Fail                                         |

* No discussion jet!

# "Don't look at the branch of the problem, look at the root! (C1PH3R)"
