**Title: SerialNumBunny**

<p>Author: 0i41E<br>
OS: Windows<br>
Version: 1.0<br>

**What is SerialNumBunny?**

*It is pretty simple... The BashBunny enables you to set its USB identifiers. You can change VID, PID, Manufacturer and of course, the Serial number. Now we do the little trick here and place our payload within the serial number. Then starting a webserver on the Bunny, where a script is hosted and call the serial number via powershell on the target system. The content of the retrieved script is then executed on the target. Easy as that.*

You can get pretty creative here, from basically calling basic powershell commands, up to this example where you execute remote scripts.

**Instruction:**

- Upload your script or the example provided onto your Bunnys switch folder.
- Plug in the Bunny and let the magic happen.
![SerialNumBunny](https://github.com/0i41E/bashbunny-payloads/assets/79219148/fa11d9b5-e2f2-45a9-a701-5a25220ca226)

_Note: If you want to adapt your payload nested, in the serial number, you may need to stay in a certain character limit. In my case this was 40 characters. This might be different, depending on your target. Also make sure to replace spaces within the serial number with underscores._
