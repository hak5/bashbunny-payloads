#CHANGE VARIABLES BELOW
#* Author: Sorsnce
#* Version: Version 1.0
#* Target: Windows 10
#
#Gets the current logged in username
$user = $(Get-WMIObject -class Win32_ComputerSystem | select username).username
#Varaiable you need to change for the script to work.#
######################################################
#Set the following email address you want to send the email too.
$To = "SecurityTeam@yahoo.com"

#Set to the SMTP server for your organization EXAMPLE: smtpserver = "smtp.yahoo.local"
$smtpserver = "smtp.yahoo.local"

#The following trims off the domain in front of the username
#EXAMPLE: $User = Yahoo\John.Smith --> $username = John.Smith
$username = $user.Substring(6)

#Change $username+"" to your email EXAMPLE: $email = $username+"@yahoo.com"
$email = $username+"@yahoo.com"
######################################################
#Gets drive letter for the bashbunny                 #
$drive = (Get-WMIObject Win32_Volume | ? { $_.Label -eq 'bashbunny' }).name

#Sets variable  to drive plus the file location
$Test = $drive + "payloads\switch1\background.bmp"

#Sets variable to test the path to file (background.bmp)
$Switch1 = Test-Path $Test

#Finds what switch bashbunny is set too
if ($Switch1 -eq "True") {$Path = $drive + "payloads\switch1\background.bmp"}
else {$Path = $drive + "payloads\switch2\background.bmp"}

#Sets wallpaper to background.bmp
$setwallpapersrc = @"
using System.Runtime.InteropServices;
public class wallpaper
{
public const int SetDesktopWallpaper = 20;
public const int UpdateIniFile = 0x01;
public const int SendWinIniChange = 0x02;
[DllImport("user32.dll", SetLastError = true, CharSet = CharSet.Auto)]
private static extern int SystemParametersInfo (int uAction, int uParam, string lpvParam, int fuWinIni);
public static void SetWallpaper ( string path )
{
SystemParametersInfo( SetDesktopWallpaper, 0, path, UpdateIniFile | SendWinIniChange );
}
}
"@
Add-Type -TypeDefinition $setwallpapersrc
[wallpaper]::SetWallpaper($path) 
#This sets the subject for the email
$subject = "PC Unlocked for $user"
#This sets the BODY for the email, currently using HTML
$body=@"
<body>
Security Violation!
<p>
$user left his or hers PC Unlocked!<br/>
<p>
</p>
<p>Thanks,</p>
<p></p>
Cyber Security
<p></p>
<p>Sent from my bashbunny.</p>
</body>
"@
#This sends the email with the attributes described above
send-mailmessage -smtpserver $smtpserver -to $To -Subject $subject -from $email -body $body -BodyAsHtml
