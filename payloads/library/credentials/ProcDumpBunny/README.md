**Title: ProcDumpBunny**

Author: 0iphor13

Version: 1.0

What is ProcDumpBunny?
#
*It is simple - using a renamed version of procdump - you are able to dump hashes from lsass.exe*
#

**Instruction:**

Download ProcDump from Microsoft - https://docs.microsoft.com/en-us/sysinternals/downloads/procdump - rename the Executeable to Bunny.exe
![alt text]
Place Bunny.exe in the same payload switch as your payload
![alt text]
#
Plug in BashBunny.
Exfiltrate the out.dmp file and read it with Mimikatz.
![alt text]
