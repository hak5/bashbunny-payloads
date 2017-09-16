# BashBunny Total P0wn System v1.6

Author: PoSHMag1C0de

### Credits:
* PowershellMafia
    * For [Powersploit](https://github.com/PowerShellMafia/PowerSploit) that I used snippets from for the bbAgent compression.
    * For some of the payloads I included in the example job pack called totalp0wn.
* PowershellEmpire Team
    * Love [Empire](https://github.com/EmpireProject/Empire), its agent gave me ideas for the bbAgent.
* Hak5 Team
    * Like the Ducky, Loving the Bash Bunny, soon to get the Pineapple.

## Introduction
The BashBunny Total P0wn System is a batch job tool for the [Hak5 BashBunny](https://hakshop.com/products/bash-bunny).  It's primary use is to manage multiple Powershell payloads as jobs, receive back the output of those jobs and can deliver payloads you wish to leave behind after the BashBunny is removed as processes.  You can even fire off jobs that can call back to the bunny to queue other jobs to be delivered and ran that are stored on the Bunny.

Note: If you are planning on delivering one payload, it is better if you customize a delivery just for it as it will be delivered faster than the BBTPS.  The BBTPS will only improve the speed of multiple payloads needing to be delivered as they will be ran asynchronously rather than consecutively.


# Directions
Below will be how to get the BBTPS up and going and using the default payload groups included.  I will be working on wiki documentation on how to configure BBTPS to work with your own list of payloads.  The link for the wiki will appear here when done.  In the meantime, there is a default payload pack for testing and totalp0wn pack with some popular scripts, a couple I created myself.

## Requirements

* BashBunny Firmware version 1.3 +.
* [Impacket](https://forums.hak5.org/index.php?/topic/40971-info-tools/) tools installed on Bash Bunny for smb services.

## Installation

1. Insert your BashBunny into your computer in arming mode.
2. Browse to your file folders on your Bash Bunny to "/payloads/(switch position of your choice)".
3. Copy the contents of the BBTPS folder to the switch location you chose.
4. Configure the jobselect.txt to point to your configuration file. (_currently pointing to TP payload config_)
5. Configure the payload configuration file to point to your folder containing your scripts and point to your joblist file. (_Currently pointing at TotalP0wn scripts folder and joblist 2_).
6. Configure joblist file for scripts to be ran. (_Sample jobslists already in jobs folder and template in templates folder_).

**Payload.txt** should not be modified unless attempting to improve system.  Primary files that are safe to edit and are used to configure the BBTPS for your payloads are below.

* jobselect.txt
    * This is the first file after payload.txt that is called.  It is used for you to easily select the config file that will select your payloads.
* configs/yourconfig.txt
    * File that is called by jobselect.txt and is used to point BBTPS to folder that has your script and JSON file that has your list of jobs to run.  Also a variable to name your loot root folder, to run as admin or not, debugging flag and quack speed is here.
* jobs folder
    * This is where you should put your jobs in its own folder but you are free to put them whereever you like.  Just make sure the config file reflects it.
* joblist.json file
    * This is the list of scripts and how they she be ran in a json array format.  This file can be named anything.

The BBTPS is default configured to use the totalp0wn jobs from joblist2.  Templates for the joblists and the config files are stored in the templates folder.

**More documentation will be included in the wiki on advanced configurations and usages.  Right now the sample joblists and configs should get you going in the right direction until I get some complete documentation up.**

## FAQ

* Can I run just a single script with the BBTPS?
    * Yes but it will probably be faster to create your own single downloader and run since the BBTPS has to download a pretty complex agent first before it begins to pull jobs and has a 3-4second cooldown to make sure no more jobs are to be delivered after the last job ends before it kills itself and lets the BashBunny know it is finished.  The BBTPS shines when you have multiple scripts you want to run as they will be ran asynchronously rather than on after another.

* Can I run a app that will run forever like a keylogger or watcher program with the BBTPS?
    * Yes but I would include in the joblist JSON file to run it as a process rather than thread.  This fires off that app as a process outside of the BBAgent and makes it so there is no stuck job thus never causing the agent to end and tell the Bash Bunny it is done.

* Can I write file exfiltation payloads for the BBTPS?
    * Yes, the BBTPS has an SMBServer running on it too.  A function and some global variables are delivered inside the job runspace your script runs.  The function is to push new job requests back to the BashBunny.  The global variables are some environment variables pulled from the BashBunny when the agent started which includes a full path, with BB IP, to the root SMB folder for the bbtps and another one that goes 1 deeper based off the hostname of the machine the BB is running on.  Just use the variables in your script and they will have the values you desire when your scripts are ran.  **More on this will be in the wiki when done**.

### Contact

If you wish to reach out to me to chat about the BBTPS or talk with a great bunch of folks about anything Bash Bunny, visit the [Hak 5 Bash Bunny Forums.](https://forums.hak5.org/index.php?/forum/92-bash-bunny/)
