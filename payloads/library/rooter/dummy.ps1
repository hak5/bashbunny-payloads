$file = ( Get-ChildItem -Path C:\files\root.cer )
$file | Import-Certificate -CertStoreLocation cert:\CurrentUser\Root