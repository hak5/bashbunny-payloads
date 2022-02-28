**Title: ProcDumpBunny**

Author: 0iphor13

Version: 1.0

What is ProcDumpBunny?
#
*It is simple - using a renamed version of procdump - you are able to dump hashes from lsass.exe*
#

**Instruction:**

Download ProcDump from Microsoft - https://docs.microsoft.com/en-us/sysinternals/downloads/procdump - rename the Executeable to Bunny.exe
![alt text](https://github.com/0iphor13/bashbunny-payloads/blob/master/payloads/library/credentials/ProcDumpBunny/Screenshot%20(38).png)
Place Bunny.exe in the same payload switch as your payload
![alt text](https://github.com/0iphor13/bashbunny-payloads/blob/master/payloads/library/credentials/ProcDumpBunny/Screenshot%20(37).png)
#
Plug in BashBunny.
Exfiltrate the out.dmp file and read it with Mimikatz.
![alt text](https://github.com/0iphor13/bashbunny-payloads/blob/master/payloads/library/credentials/ProcDumpBunny/Screenshot%20(39).png)
