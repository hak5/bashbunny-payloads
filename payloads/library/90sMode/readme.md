# 90s Mode for Bash Bunnys

* Author: Hak5Darren
* Version: Version 1.1
* Category: Prank
* Target: Windows XP SP3+ / Powershell


## Description

Turns back the clock to a k-rad ultra ereet 1990's VGA resolution
Executes p.ps1 from the selected switch folder of the Bash Bunny USB Disk partition.

## Unnecessary Background Story

Once a family member asked me to troubleshoot their computer. They claimed their hard drive was filling up. I checked and they had barely used the enormous (at the time) 20 GB HDD. Sorry I said, everything looks good. No they exclaimed, loading all of these cool programs from the World Wide Web was fine, but there's barely any room for another icon! 

Oh. Yes. About that... So I did what any good geek would and increased their resolution from 800x600 to 1024x768. Voila! More desktop real estate!

Great! But now I need my reading glasses!

So, one could say this payload *decreases* the disk space of the victim computer ;-)

## Configuration

By default the payload switches to the very cool 640x480 resoluiton, however this can be configured to other standards such as 800x600 or 1024x768 in the last line of r.ps1 (this should eventually become a config line in payload.txt)

## STATUS

| LED    | Status               |
| ------ | ---------------------|
| SETUP  | Setting up attack    |
| ATTACK | Injecting keystrokes |
| FINISH | Done                 |