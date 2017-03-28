$file = ( Get-ChildItem -Path $PSScriptRoot\root.cer )
$file | Import-Certificate -CertStoreLocation cert:\CurrentUser\Root