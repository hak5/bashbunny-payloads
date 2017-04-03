#
# Get_WiFiCreds.ps1
#
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
        Write-Output $obj 
    }
}

####################################

echo "##Wifi Creds"
echo "======================================================"
echo ""

# Update output buffer size to 500
if( $Host -and $Host.UI -and $Host.UI.RawUI ) {
  $rawUI = $Host.UI.RawUI
  $oldSize = $rawUI.BufferSize
  $typeName = $oldSize.GetType( ).FullName
  $newSize = New-Object $typeName (500, $oldSize.Height)
  $rawUI.BufferSize = $newSize
}

Get-WiFiCreds
echo "`n`n`n"
###################################