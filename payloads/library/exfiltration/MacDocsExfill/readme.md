# Mac Docs Exfilter for the BashBunny

```
    ____                      ______       ____ _  __ __
   / __ \ ____   _____ _____ / ____/_  __ / __/(_)/ // /
  / / / // __ \ / ___// ___// __/  | |/_// /_ / // // / 
 / /_/ // /_/ // /__ (__  )/ /___ _>  < / __// // // /  
/_____/ \____/ \___//____//_____//_/|_|/_/  /_//_//_/   
                                                        
```

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
