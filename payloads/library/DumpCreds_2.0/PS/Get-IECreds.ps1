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

Get-IECreds

#######################################