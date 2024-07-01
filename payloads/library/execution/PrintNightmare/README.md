Title:         PrintNightmare

Author:        PanicAcid

Version:       1.2


Leverages the following Powershell script https://github.com/calebstewart/CVE-2021-1675 to invoke the PrintNightmare Vuln and create a local administator account, without bypassing defender or exectuon policy. It aint prudy but it works.

Powershell AMSI or whatever it's called kept picking it up and blocking it every time I tried to call the script externally, even bypassing execution policy seemed to work but the output would always contain "This script contains malicious content and has been blocked by your antivirus software."

However if we run it via PowersShell ISE it works fine. So we're going to type out the whole thing! (Well copy and paste it!)

Huge thanks to Cribbit for the clipboard string- without it I would have been typing out the whole thing which when I tried it took FOREVER. Additionally thanks to Korben and Foxtrot for putting up with my nonsense.

NOTE - you may need to tweak the delays a bit, with version 1.0 I took for granted that it ran really fast on my machine which caused some issues for other folks whereby it'd close the ise window before finishing execution etc. so test and tweak the dealys to your hearts content.

# Purple.............Loading
# Green .............Execute
# Off................Finished


Note that it's set to GB for my language, set to yours so you get the correct \'s when copying the text file to clipboard.

Other than that it creates the function for Invoke-Nightmare and then uses that to create our Hak5Rules user (which is an admin) and then launches CMD as said admin. If you want to change the details it uses to create your user it's the last line of juicybits.txt
