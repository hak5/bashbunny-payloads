# ALTCODE TRANSCODER

* Author: G4te_Keep3r
* Props: Crackruckles, Hak5Darren
* Demo: Hak5 episode 2506
* Target: Windows 95+
* Category: General

## Description

Takes a text file containing ansi art and converts it to QUACKs so the bunny can be loud. In the future it might look for image files to convert to ansi art first. The code is still a little rough and not the most efficient, but working with windows only character set in linux problematic.

## Requirements

img.txt in the switch directory for the bunny to eat. If you want to change to a different image later, you will need to reset payload.txt as the lines of QUACK ALTCODE ### are added at the bottom of the payload. The encoding of img.txt can be an issue. It seemed to work best with unicode or utf-8, but it might work just fine with any format. If it fails, try another format.

## STATUS

| LED               | Status                                        |
| ----------------- | --------------------------------------------- |
| SETUP             | Setting attack mode, checking for image file  |
| SPECIAL           | Python script is transcoding                  |
| R B               | Sleep/reboot command started and storage sync |
| FINISH            | Will be rebooting any second                  |
| STAGE2            | Art is being typeed                           |
| FINISH            | Done                                          |
