Title:         PrintNightmare
Author:        PanicACid
Version:       1.1

Leverages the following Powershell script https://github.com/calebstewart/CVE-2021-1675 to invoke the PrintNightmare Vuln and create a local administator

As Powershell ASAI or whatever it's called kept picking it up and blocking it. However if we run it via PowersShell ISE it works fine. So we're going to type out the whole thing!

Huge thanks to Cribbit for the clipboard string- without it I would have been typing out the whole thing which when I tried it took FOREVER. Additionally thanks to Korben and Foxtrot for putting up with my nonsense.


# Purple.............Loading
# Green .............Execute
# Off................Finished


Note that it's set to GB for my language, set to yours so you get the correct \'s when copying the text file to clipboard.

Other than that it creates the function for Invoke-Nightmare and then uses that to create our Hak5Rules user (which is an admin) and then launches CMD as said admin.
