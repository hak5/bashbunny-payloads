# Simple USB File Extractor
---
- Author: DanTheGoodman
- Creds: thehappydinoa, sebkinne
(I snagged lots of lines from their code)

### Description
---
A stupid easy to use file extractor leveraging the USB storage attack mode. Will stuff the found files in the `/loot/simple-usb-file-extractor` folder. Also deletes the run-line history because why not.



### Dependencies
---
None :)



### Configuration (optional)
---
By default the payload is set to pull all .pdf and .docx files from the Desktop, Downloads, and Documents folders. You can add new items/locations by making new xcopy lines in the x.cmd file.


### Status:
---
|LED|Status|
|---|---|
|Yellow single blink|Running payload|
|Solid Green|Files copied|

---
This is my first payload for the Bash Bunny, and I have finals right now, and I am doing this instead of studying so it's not fancy but I wanted to make something.
