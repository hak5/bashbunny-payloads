**Title: ReverseBunnySSL**

<p>Author: 0iphor13<br>
OS: Windows<br>
Version: 1.2<br>
For input and inspiration - Thanks to: Cribbit, sebkinne</p>

**What is ReverseBunnySSL?**
#
<p>ReverseBunnySSL gets you remote access to your target in seconds.<br>
Unlike ReverseBunny, ReverseBunnySSL offers encrypted traffic via OpenSSL.</p>


**Instruction:**
<p>!Insert the IP of your attacking machine & PORT into the payload.txt!<br>
1. Create key.pem & cert.pem like so: <br>
	> openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes<br>
	It will ask for information about the certificate - Insert whatever you want.<br>

2. For catching the shell you need to start a listener, which supports encrypted traffic.<br>
I recommend openssl itself or ncat - Example syntax for both:<br>
	> `openssl s_server -quiet -key key.pem -cert cert.pem -port [Port Number]` <br>
	> `ncat --listen -p [Port Number] --ssl --ssl-cert cert.pem --ssl-key key.pem`</p>

3. Plug in Bunny, it will create a web server, and uses Invoke-Expression to execute the shell.

**Disclaimer: Because of obfuscation, it may take some time until the shell is fully executed by powershell**

![alt text](https://github.com/0iphor13/omg-payloads/blob/master/payloads/library/remote_access/ReverseCableSSL/CreateCert.png)
![alt text](https://github.com/0iphor13/bashbunny-payloads/blob/master/payloads/library/remote_access/ReverseBunnySSL/Startscreen.png)
