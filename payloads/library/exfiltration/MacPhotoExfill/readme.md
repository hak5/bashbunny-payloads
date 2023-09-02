# Mac Photo Exfilter for the BashBunny

```
    ____   __            __          ______       ____ _  __ __
   / __ \ / /_   ____   / /_ ____   / ____/_  __ / __/(_)/ // /
  / /_/ // __ \ / __ \ / __// __ \ / __/  | |/_// /_ / // // / 
 / ____// / / // /_/ // /_ / /_/ // /___ _>  < / __// // // /  
/_/    /_/ /_/ \____/ \__/ \____//_____//_/|_|/_/  /_//_//_/   
                                                               
```

* Author:     afsh4ck
* Version:    1.0
* Target:     MacOS
* Tested on:  Ventura 13.3.1
* Category:   Exfiltration

# DESCRIPTION

Exfilter all the images from the principal folders on unlocked MacOS targets.
Stashes them in /loot/MacPhotoExfill/$hostname grouped in subfolders:

| Subfolder          | Content                                      |
| ------------------ | -------------------------------------------- |
| Documents          | All the images in /root/Documents folder     |
| Desktop            | All the images in /root/Desktop folder       |
| Pictures           | All the images in /root/Pictures folder      |
| Downloads          | All the images in /root/Downloads folder     |

# IMAGE FORMATS

| Format             | 
| ------------------ |
| .jpg               | 
| .jpeg              | 
| .png               |

# LED STATUS

| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| Green              | Setup                                        |
| Yellow Blink       | Attack Mode ON                               |
| Purple Slow        | Cleaning all proofs                          |
| Green Fixed        | Finish                                       |
