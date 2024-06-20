

 

function get-WifiCreds
{

         # Run the Netsh command to determine all wifi profiles.
         $Output = netsh wlan show profiles

         $SSID = $Output | Select-String -Pattern "Profil f.r alle Benutzer :", "All User Profile" # ,"Value for All User Profile in other Languages"

         Foreach ($sid in $SSID)
         {
              $out = ($sid -split ":")[-1].Trim() -replace '"'
              $profile = netsh wlan show profiles name=$out key=clear
              $pw = $profile | select-string -Pattern "Authentifizierung","Authentication"    # ,"Value for Authentication in other Languages"

              if ($pw) 
              {
                  $pw2 = ($pw -split ":")[-1].Trim() -replace '"'
                  if ($pw2 -eq "Open") 
                  {
                      Write-Output "$out, <open>"
                  } else 
                  {
                      $key = $profile | select-string -Pattern "Schl.sselinhalt" ,"Key Content"   # ,"Value for Key Content in other Languages"
                      if ($key) 
                      {
                          $key = ($key -split ":")[-1].Trim() -replace '"'
                      }
                      write-Output "SSID: $out"
                      write-output "Auth: $pw2" 
                      write-output "Key:  $key"
                      Write-Output "`n"
                  }
              }
         }
     
}

####################################

echo "##Wifi Creds"
echo "======================================================"
echo " "

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
