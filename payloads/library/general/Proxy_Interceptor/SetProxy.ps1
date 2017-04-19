#Import variables from vars.ps1 for use.
. .\vars.ps1

#Change the Execution Policy to RemoteSigned and see if Internet Explorere is running and if so close it.
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
$ieProcess = Get-Process iexplore -ErrorAction SilentlyContinue
if ($ieProcess) {
	$ieProcess.CloseMainWindow()
Sleep 5
if (!$ieProcess.HasExited) {
    $ieProcess | Stop-Process -Force
  }
}
Remove-Variable ieProcess

#Change the proxy settings in the registry
$regKey="HKCU:\Software\Microsoft\Windows\CurrentVersion\Internet Settings"
Set-ItemProperty -path $regKey ProxyEnable -value 1
Set-ItemProperty -path $regKey ProxyServer -value $proxyVal