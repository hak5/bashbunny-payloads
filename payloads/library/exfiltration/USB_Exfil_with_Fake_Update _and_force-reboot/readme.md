# Fake Win10 Update Extractor based on Simple USB File Extractor by DanTheGoodman
---
- Author: HackingMark
- Creds: thehappydinoa, sebkinne, DanTheGoodman


### Description
---
A stupid easy to use file extractor leveraging the USB storage attack mode. Will stuff the found files in the `/loot/USB-Exfiltration/Computername-Date` folder. Also deletes the run-line history because why not. At the start of the Copy Process a Fake Windows10 Update screen shows up and if all files are copied there is a forced reboot.

### BashBunny MK II
If you are using a SD-Card for Exfiltration, you should copy the Payload folder on it. X.cmd must be presented in the /Payloads/§Switch/ folder.

### Dependencies
---
None :)



### Configuration (optional)
---
By default the payload is set to pull all .jpg, .txt, .pdf and .docx files from the Desktop, Downloads, and Documents folders and the full Picture folder. You can add new items/locations by making new xcopy lines in the x.cmd file.


### Status:
---
|LED|Status|
|---|---|
|Yellow single blink|Running payload|
|Solid Green|Payload executed|

---
All files are copied when the PC reboots. Have fun ;)