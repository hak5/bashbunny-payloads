# Mac Docs Exfilter for the BashBunny

 _______    ______    ______         __    __ 
|       \  /      \  /      \       |  \  |  \
| $$$$$$$\|  $$$$$$\|  $$$$$$\      | $$  | $$
| $$  | $$| $$  | $$| $$   \$$______ \$$\/  $$
| $$  | $$| $$  | $$| $$     |      \ >$$  $$ 
| $$  | $$| $$  | $$| $$   __ \$$$$$$/  $$$$\ 
| $$__/ $$| $$__/ $$| $$__/  \      |  $$ \$$\
| $$    $$ \$$    $$ \$$    $$      | $$  | $$
 \$$$$$$$   \$$$$$$   \$$$$$$        \$$   \$$


* Author:     afsh4ck
* Version:    1.0
* Target:     MacOS
* Tested on:  Ventura 13.3.1
* Category:   Exfiltration

# DESCRIPTION

Exfilter all the documents from the principal folders on unlocked MacOS targets.
Stashes them in /loot/MacDocsExfill/$hostname grouped in subfolders:

| Subfolder          | Content                                      |
| ------------------ | -------------------------------------------- |
| Documents          | All the docs in /root/Documents folder       |
| Desktop            | All the docs in /root/Desktop folder         |
| Downloads          | All the docs in /root/Downloads folder       |

# IMAGE FORMATS

| Format             | 
| ------------------ |
| .docx              | 
| .xlsx              | 
| .pdf               |

# LED STATUS

| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| Green              | Setup                                        |
| Yellow Blink       | Attack Mode ON                               |
| Purple Slow        | Cleaning all proofs                          |
| Green Fixed        | Finish                                       |
