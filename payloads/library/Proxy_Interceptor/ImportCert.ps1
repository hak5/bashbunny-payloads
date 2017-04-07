#Import variables from vars.ps1 for use.
. .\vars.ps1

#Add certificate to certificate store
$certFile = ( Get-ChildItem -Path $certName )
$certFile | Import-Certificate -CertStoreLocation cert:\CurrentUser\Root