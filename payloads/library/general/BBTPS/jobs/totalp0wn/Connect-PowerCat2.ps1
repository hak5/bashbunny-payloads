function New-RuntimeParameter { 
<#
Author: Jesse Davis (@secabstraction)
License: BSD 3-Clause
#>
[CmdletBinding()]
    Param (
        [Parameter(Position = 0, Mandatory = $true)]
        [ValidateNotNullOrEmpty()]
        [Type]$Type,

        [Parameter(Position = 1, Mandatory = $true)]
        [ValidateNotNullOrEmpty()]
        [String]$Name,

        [Parameter()]
        [ValidateNotNullOrEmpty()]
        [String[]]$Alias,

        [Parameter()]
        [ValidateNotNullOrEmpty()]
        [Int]$Position,

        [Parameter()]
        [Switch]$Mandatory,

        [Parameter()]
        [ValidateNotNullOrEmpty()]
        [String]$HelpMessage,
        
        [Parameter()]
        [ValidateNotNullOrEmpty()]
        [String[]]$ValidateSet,
        
        [Parameter()]
        [ValidateNotNullOrEmpty()]
        [Regex]$ValidatePattern,

        [Parameter()]
        [Switch]$ValueFromPipeline,
        
        [Parameter()]
        [Switch]$ValueFromPipelineByPropertyName,

        [Parameter()]
        [ValidateNotNullOrEmpty()]
        [String]$ParameterSetName = '__AllParameterSets',

        [Parameter()]
        [System.Management.Automation.RuntimeDefinedParameterDictionary]$ParameterDictionary
    )      
    #create a new ParameterAttribute Object
    $Attribute = New-Object Management.Automation.ParameterAttribute
    $Attribute.ParameterSetName = $ParameterSetName

    if ($PSBoundParameters.Position) { $Attribute.Position = $Position }

    if ($Mandatory.IsPresent) { $Attribute.Mandatory = $true }
    else { $Attribute.Mandatory = $false }

    if ($PSBoundParameters.HelpMessage) { $Attribute.HelpMessage = $HelpMessage }
    
    if ($ValueFromPipeline.IsPresent) { $Attribute.ValueFromPipeline = $true }
    else { $Attribute.ValueFromPipeline = $false }

    if ($ValueFromPipelineByPropertyName.IsPresent) { $Attribute.ValueFromPipelineByPropertyName = $true }
    else { $Attribute.ValueFromPipelineByPropertyName = $false }
 
    #create an attributecollection object for the attribute we just created.
    $AttributeCollection = New-Object Collections.ObjectModel.Collection[Attribute]
 
    if ($PSBoundParameters.ValidateSet) {
        $ParamOptions = New-Object Management.Automation.ValidateSetAttribute -ArgumentList $ValidateSet
        $AttributeCollection.Add($ParamOptions)
    }

    if ($PSBoundParameters.Alias) {
        $ParamAlias = New-Object Management.Automation.AliasAttribute -ArgumentList $Alias
        $AttributeCollection.Add($ParamAlias)
    }

    if ($PSBoundParameters.ValidatePattern) {
        $ParamPattern = New-Object Management.Automation.ValidatePatternAttribute -ArgumentList $ValidatePattern
        $AttributeCollection.Add($ParamPattern)
    }

    #add our custom attribute
    $AttributeCollection.Add($Attribute)

    $Parameter = New-Object Management.Automation.RuntimeDefinedParameter -ArgumentList @($Name, $Type, $AttributeCollection)

    if($PSBoundParameters.ParameterDictionary) { $ParameterDictionary.Add($Name, $Parameter) }
    else {
        $Dictionary = New-Object Management.Automation.RuntimeDefinedParameterDictionary
        $Dictionary.Add($Name, $Parameter)
        Write-Output $Dictionary
    }
}

function Test-Port { 
<#
Author: Jesse Davis (@secabstraction)
License: BSD 3-Clause
#>
    Param (
        [Parameter(Position = 0, Mandatory = $true)]
        [Int]$Number,

        [Parameter(Position = 1)]
        [ValidateSet('Tcp','Udp')]
        [String]$Transport
    )      
    
    $IPGlobalProperties = [Net.NetworkInformation.IPGlobalProperties]::GetIPGlobalProperties()

    if ($Transport -eq 'Tcp') {       
        foreach ($Connection in $IPGlobalProperties.GetActiveTcpConnections()) {
            if ($Connection.LocalEndPoint.Port -eq $Number) { 
                Write-Warning "Port $Number`:Tcp is already in use."
                return $false
            }
        }
        foreach ($Listener in $IPGlobalProperties.GetActiveTcpListeners()) {
            if ($Listener.Port -eq $Number) { 
                Write-Warning "Port $Number`:Tcp is already in use."
                return $false
            }
        }
    }
    elseif ($Transport -eq 'Udp') {       
        foreach ($Listener in $IPGlobalProperties.GetActiveUdpListeners()) {
            if ($Listener.Port -eq $Number) { 
                Write-Warning "Port $Number`:Udp is already in use."
                return $false
            }
        }
    }
    else { # check both Tcp & Udp
        foreach ($Connection in $IPGlobalProperties.GetActiveTcpConnections()) {
            if ($Connection.LocalEndPoint.Port -eq $Number) { 
                Write-Warning "Port $Number`:Tcp is already in use."
                return $false
            }
        }
        foreach ($Listener in $IPGlobalProperties.GetActiveTcpListeners()) {
            if ($Listener.Port -eq $Number) { 
                Write-Warning "Port $Number`:Tcp is already in use."
                return $false
            }
        }
        foreach ($Listener in $IPGlobalProperties.GetActiveUdpListeners()) {
            if ($Listener.Port -eq $Number) { 
                Write-Warning "Port $Number`:Udp is already in use."
                return $false
            }
        }
    }
    return $true
}

function New-X509Certificate { 
<#
Author: Jesse Davis (@secabstraction)
License: BSD 3-Clause
#>
    Param (
        [Parameter(Position = 0, Mandatory = $true)]
        [ValidateNotNullOrEmpty()]
        [String]$CommonName
    )      
    $DN = New-Object -ComObject 'X509Enrollment.CX500DistinguishedName.1'
    $DN.Encode("CN=$CommonName", 0)

    $PrivateKey = New-Object -ComObject 'X509Enrollment.CX509PrivateKey.1'
    $PrivateKey.ProviderName = "Microsoft RSA SChannel Cryptographic Provider"
    $PrivateKey.KeySpec = 1 # XCN_AT_KEYEXCHANGE
    $PrivateKey.ExportPolicy = 2 # XCN_NCRYPT_ALLOW_PLAINTEXT_EXPORT_FLAG
    $PrivateKey.MachineContext = $true
    $PrivateKey.Length = 2048
    $PrivateKey.Create()

    $HashAlg = New-Object -ComObject 'X509Enrollment.CObjectId.1'
    $HashAlg.InitializeFromAlgorithmName(1, 0, 0, 'SHA512')

    $ServerAuthOid = New-Object -ComObject 'X509Enrollment.CObjectId.1'
    $ServerAuthOid.InitializeFromValue('1.3.6.1.5.5.7.3.1')
    $EkuOid = New-Object -ComObject 'X509Enrollment.CObjectIds.1'
    $EkuOid.Add($ServerAuthOid)
    $EkuExtension = New-Object -ComObject 'X509Enrollment.CX509ExtensionEnhancedKeyUsage.1'
    $EkuExtension.InitializeEncode($EkuOid)

    $Certificate = New-Object -ComObject 'X509Enrollment.CX509CertificateRequestCertificate.1'
    $Certificate.InitializeFromPrivateKey(2, $PrivateKey, '')
    $Certificate.Subject = $DN
    $Certificate.Issuer = $Certificate.Subject
    $Certificate.NotBefore = [DateTime]::Now.AddDays(-1)
    $Certificate.NotAfter = $Certificate.NotBefore.AddDays(90)
    $Certificate.X509Extensions.Add($EkuExtension)
    $Certificate.HashAlgorithm = $HashAlg
    $Certificate.Encode()

    $Enroll = New-Object -ComObject 'X509Enrollment.CX509Enrollment.1'
    $Enroll.InitializeFromRequest($Certificate)
    $Enroll.CertificateFriendlyName = $CommonName
    $Csr = $Enroll.CreateRequest()
    $Enroll.InstallResponse(2, $Csr, 1, '')
    $Base64 = $Enroll.CreatePFX('', 0)

    $Bytes = [Convert]::FromBase64String($Base64)
    $X509Cert = New-Object Security.Cryptography.X509Certificates.X509Certificate2($Bytes, '')
    
    return $X509Cert
}

function New-SmbStream {
<#
Author: Jesse Davis (@secabstraction)
License: BSD 3-Clause
#>
[CmdletBinding(DefaultParameterSetName = 'Client')]
    Param (
        [Parameter(Position = 0, ParameterSetName = 'Client')]
        [String]$ServerIp,
        
        [Parameter(Position = 0, ParameterSetName = 'Listener')]
        [Switch]$Listener,
        
        [Parameter(Position = 1)]
        [ValidateNotNullorEmpty()]
        [String]$PipeName,  

        [Parameter(Position = 3)]
        [Int]$Timeout = 60,
        
        [Parameter()]
        [Int]$BufferSize = 65536
    )

    if ($Listener.IsPresent) {
        $PipeSecurity = New-Object IO.Pipes.PipeSecurity
        $PipeServer = New-Object IO.Pipes.NamedPipeServerStream($PipeName, 3, 1, 0, [IO.Pipes.PipeOptions]::Asynchronous, $BufferSize, $BufferSize, $PipeSecurity, 0, [IO.Pipes.PipeAccessRights]::ChangePermissions)
        $PipeSecurity = $PipeServer.GetAccessControl()
        $PipeSecurity.AddAccessRule((New-Object IO.Pipes.PipeAccessRule("Everyone", [IO.Pipes.PipeAccessRights]::FullControl, 0)))
        $PipeServer.SetAccessControl($PipeSecurity)
        $ConnectResult = $PipeServer.BeginWaitForConnection($null, $null)

        Write-Verbose "Listening on 0.0.0.0:$PipeName [smb]"
       
        $Stopwatch = [Diagnostics.Stopwatch]::StartNew()
        [console]::TreatControlCAsInput = $true
      
        do {
            if ([console]::KeyAvailable) {          
                $Key = [console]::ReadKey($true)
                if ($Key.Key -eq [Consolekey]::Escape) {
                    Write-Warning "Caught escape sequence, stopping Smb Setup."
                    [console]::TreatControlCAsInput = $false
                    $PipeServer.Dispose()
                    $Stopwatch.Stop()
                    return
                }
            }
            if ($Stopwatch.Elapsed.TotalSeconds -gt $Timeout) {
                Write-Warning "Timeout exceeded, stopping Smb Setup."
                [console]::TreatControlCAsInput = $false
                $PipeServer.Dispose()
                $Stopwatch.Stop()
                return
            }
        } until ($ConnectResult.IsCompleted)
        
        [console]::TreatControlCAsInput = $false
        $Stopwatch.Stop()

        try { $PipeServer.EndWaitForConnection($ConnectResult) }
        catch { 
            Write-Warning "Pipe server connection failed. $($_.Exception.Message)." 
            $PipeServer.Dispose()
            return
        }
        Write-Verbose "Connection from client accepted."

        $Buffer = New-Object Byte[] $BufferSize

        $Properties = @{
            Pipe = $PipeServer
            Buffer = $Buffer
            Read = $PipeServer.BeginRead($Buffer, 0, $Buffer.Length, $null, $null)
        }
        New-Object psobject -Property $Properties
    }
    else { # Client

        $PipeClient = New-Object IO.Pipes.NamedPipeClientStream($ServerIp, $PipeName, [IO.Pipes.PipeDirection]::InOut, [IO.Pipes.PipeOptions]::Asynchronous)
        try { $PipeClient.Connect(($Timeout * 1000)) }
        catch { 
            Write-Warning "Pipe client connection failed. $($_.Exception.Message)." 
            $PipeClient.Dispose()
            return
        }
        Write-Verbose "Connected to $ServerIp`:$PipeName."

        $Buffer = New-Object Byte[] $BufferSize

        $Properties = @{
            Pipe = $PipeClient
            Buffer = $Buffer
            Read = $PipeClient.BeginRead($Buffer, 0, $Buffer.Length, $null, $null)
        }
        New-Object psobject -Property $Properties
    }
}

function New-TcpStream {
<#
Author: Jesse Davis (@secabstraction)
License: BSD 3-Clause
#>
[CmdletBinding(DefaultParameterSetName = 'Client')]
    Param (
        [Parameter(Position = 0, ParameterSetName = 'Client')]
        [Net.IPAddress]$ServerIp,
        
        [Parameter(Position = 0, ParameterSetName = 'Listener')]
        [Switch]$Listener,
        
        [Parameter(Position = 1)]
        [Int]$Port, 
        
        [Parameter(Position = 2)]
        [String]$SslCn, 

        [Parameter(Position = 3)]
        [Int]$Timeout = 60
    )
    
    if ($Listener.IsPresent) {

        $TcpListener = New-Object Net.Sockets.TcpListener $Port
        $TcpListener.Start()
        $ConnectResult = $TcpListener.BeginAcceptTcpClient($null, $null)

        Write-Verbose "Listening on 0.0.0.0:$Port [tcp]"
        
        $Stopwatch = [Diagnostics.Stopwatch]::StartNew()
        [console]::TreatControlCAsInput = $true
      
        do {
            if ([console]::KeyAvailable) {          
                $Key = [console]::ReadKey($true)
                if ($Key.Key -eq [Consolekey]::Escape) {
                    Write-Warning 'Caught escape sequence, stopping TCP setup.'
                    [console]::TreatControlCAsInput = $false
                    $TcpListener.Stop()
                    $Stopwatch.Stop()
                    return
                }
            }
            if ($Stopwatch.Elapsed.TotalSeconds -gt $Timeout) {
                Write-Warning 'Timeout exceeded, stopping TCP setup.'
                #[console]::TreatControlCAsInput = $false
                $TcpListener.Stop()
                $Stopwatch.Stop()
                return
            }
        } until ($ConnectResult.IsCompleted)
        
        [console]::TreatControlCAsInput = $false
        $Stopwatch.Stop() 

        $TcpClient = $TcpListener.EndAcceptTcpClient($ConnectResult)
        $TcpListener.Stop()
        
        if (!$TcpClient) { Write-Warning "Connection to $($ServerIp.IPAddressToString):$Port [tcp] failed." ; return }

        Write-Verbose "Connection from $($TcpClient.Client.RemoteEndPoint.ToString()) accepted."

        $TcpStream = $TcpClient.GetStream()
        $Buffer = New-Object Byte[] $TcpClient.ReceiveBufferSize

        if ($PSBoundParameters.SslCn) { 
            $TcpStream = New-Object System.Net.Security.SslStream($TcpStream, $false)
            $Certificate = New-X509Certificate $SslCn
            $TcpStream.AuthenticateAsServer($Certificate)
            Write-Verbose "SSL Encrypted: $($TcpStream.IsEncrypted)"
        }
        
        $Properties = @{
            Socket = $TcpClient.Client
            TcpStream = $TcpStream
            Buffer = $Buffer
            Read = $TcpStream.BeginRead($Buffer, 0, $Buffer.Length, $null, $null)
        }
        New-Object psobject -Property $Properties
    }        
    else { # Client

        $TcpClient = New-Object Net.Sockets.TcpClient
        
        $ConnectResult = $TcpClient.BeginConnect($ServerIp, $Port, $null, $null)
        
        $Stopwatch = [Diagnostics.Stopwatch]::StartNew()
        [console]::TreatControlCAsInput = $true

        do {
            if ([console]::KeyAvailable) {          
                $Key = [console]::ReadKey($true)
                if ($Key.Key -eq [Consolekey]::Escape) {
                    Write-Warning 'Caught escape sequence, stopping TCP setup.'
                    [console]::TreatControlCAsInput = $false
                    if ($PSVersionTable.CLRVersion.Major -lt 4) { $TcpClient.Close() }
                    else { $TcpClient.Dispose() }
                    $Stopwatch.Stop()
                    return
                }
            }
            if ($Stopwatch.Elapsed.TotalSeconds -gt $Timeout) {
                Write-Warning 'Timeout exceeded, stopping TCP setup.'
                [console]::TreatControlCAsInput = $false
                if ($PSVersionTable.CLRVersion.Major -lt 4) { $TcpClient.Close() }
                else { $TcpClient.Dispose() }
                $Stopwatch.Stop()
                return
            }
        } until ($ConnectResult.IsCompleted)

        [console]::TreatControlCAsInput = $false
        $Stopwatch.Stop()

        try { $TcpClient.EndConnect($ConnectResult) }
        catch {
            Write-Warning "Connection to $($ServerIp.IPAddressToString):$Port [tcp] failed. $($_.Exception.Message)"
            if ($PSVersionTable.CLRVersion.Major -lt 4) { $TcpClient.Close() }
            else { $TcpClient.Dispose() }
            return
        }
        Write-Verbose "Connection to $($ServerIp.IPAddressToString):$Port [tcp] succeeded!"
        
        $TcpStream = $TcpClient.GetStream()
        $Buffer = New-Object Byte[] $TcpClient.ReceiveBufferSize
        
        if ($PSBoundParameters.SslCn) { 
            $TcpStream = New-Object System.Net.Security.SslStream($TcpStream, $false, { param($Sender, $Cert, $Chain, $Policy) return $true })
            $TcpStream.AuthenticateAsClient($SslCn)
            Write-Verbose "SSL Encrypted: $($TcpStream.IsEncrypted)"
        }

        $Properties = @{
            Socket = $TcpClient.Client
            TcpStream = $TcpStream
            Buffer = $Buffer
            Read = $TcpStream.BeginRead($Buffer, 0, $Buffer.Length, $null, $null)
        }        
        New-Object psobject -Property $Properties
    }
}

function New-UdpStream {
<#
Author: Jesse Davis (@secabstraction)
License: BSD 3-Clause
#>
[CmdletBinding(DefaultParameterSetName = 'Client')]
    Param (
        [Parameter(Position = 0, ParameterSetName = 'Client')]
        [Net.IPAddress]$ServerIp,
        
        [Parameter(Position = 0, ParameterSetName = 'Listener')]
        [Switch]$Listener,
        
        [Parameter(Position = 1)]
        [Int]$Port, 
        
        [Parameter()]
        [Int]$BufferSize = 65536,
        
        [Parameter()]
        [Int]$Timeout = 60
    )

    if ($Listener.IsPresent) {

        $SocketDestinationBuffer = New-Object Byte[] 65536
        $RemoteEndPoint = New-Object Net.IPEndPoint @([Net.IPAddress]::Any, $null)
        $UdpClient = New-Object Net.Sockets.UDPClient $Port
        $PacketInfo = New-Object Net.Sockets.IPPacketInformation

        Write-Verbose "Listening on 0.0.0.0:$Port [udp]"
                
        $ConnectResult = $UdpClient.Client.BeginReceiveMessageFrom($SocketDestinationBuffer, 0, 65536, [Net.Sockets.SocketFlags]::None, [ref]$RemoteEndPoint, $null, $null)
        
        $Stopwatch = [Diagnostics.Stopwatch]::StartNew()
        [console]::TreatControlCAsInput = $true
      
        do {
            if ([console]::KeyAvailable) {          
                $Key = [console]::ReadKey($true)
                if ($Key.Key -eq [Consolekey]::Escape) {
                    Write-Warning "Caught escape sequence, stopping UDP Setup."
                    [console]::TreatControlCAsInput = $false
                    if ($PSVersionTable.CLRVersion.Major -lt 4) { $UdpClient.Close() }
                    else { $UdpClient.Dispose() }
                    $Stopwatch.Stop()
                    return
                }
            }
            if ($Stopwatch.Elapsed.TotalSeconds -gt $Timeout) {
                Write-Warning "Timeout exceeded, stopping UDP Setup."
                [console]::TreatControlCAsInput = $false
                if ($PSVersionTable.CLRVersion.Major -lt 4) { $UdpClient.Close() }
                else { $UdpClient.Dispose() }
                $Stopwatch.Stop()
                return
            }
        } until ($ConnectResult.IsCompleted)
        
        [console]::TreatControlCAsInput = $false
        $Stopwatch.Stop()

        $SocketFlags = 0
        $SocketBytesRead = $UdpClient.Client.EndReceiveMessageFrom($ConnectResult, [ref]$SocketFlags, [ref]$RemoteEndPoint, [ref]$PacketInfo)
        $UdpClient.Connect($RemoteEndPoint)
                
        if ($SocketBytesRead.Count) { $InitialBytes = $SocketDestinationBuffer[0..($SocketBytesRead - 1)] }

        Write-Verbose "Connection from $($RemoteEndPoint.ToString()) [udp] accepted."

        $Properties = @{
            UdpClient = $UdpClient
            Socket = $UdpClient.Client
            Read = $UdpClient.BeginReceive($null, $null)
        }
        $UdpStream = New-Object psobject -Property $Properties
    }        
    else { # Client
        $RemoteEndPoint = New-Object Net.IPEndPoint @($ServerIp, $Port) 
        $UdpClient = New-Object Net.Sockets.UDPClient
        $UdpClient.Connect($RemoteEndPoint)

        Write-Verbose "Sending UDP data to $($RemoteEndPoint.ToString()).`nMake sure to send some data to the server!"

        $Properties = @{
            UdpClient = $UdpClient
            Socket = $UdpClient.Client
            Read = $UdpClient.BeginReceive($null, $null)
        }
        $UdpStream = New-Object psobject -Property $Properties
    }
    return $InitialBytes, $UdpStream
}

function Write-NetworkStream {
<#
Author: Jesse Davis (@secabstraction)
License: BSD 3-Clause
#>
    Param (
        [Parameter(Position = 0)]
        [String]$Mode,
    
        [Parameter(Position = 1)]
        [Object]$Stream,
    
        [Parameter(Position = 2)]
        [Byte[]]$Bytes
    )    
    switch ($Mode) {
        'Smb' { 
            try { $Stream.Pipe.Write($Bytes, 0, $Bytes.Length) }
            catch { Write-Warning "Failed to send Smb data. $($_.Exception.Message)" }
            continue 
        }
        'Tcp' { 
            try { $Stream.TcpStream.Write($Bytes, 0, $Bytes.Length) }
            catch { Write-Warning "Failed to write to Tcp stream. $($_.Exception.Message)." }
            continue 
        }
        'Udp' { 
            try { $BytesSent = $Stream.UdpClient.Send($Bytes, $Bytes.Length) }
            catch { Write-Warning "Failed to send Udp data to $($Stream.Socket.RemoteEndPoint.ToString()). $($_.Exception.Message)." }
        }
    }
}

function Read-NetworkStream {
<#
Author: Jesse Davis (@secabstraction)
License: BSD 3-Clause
#>
    Param (
        [Parameter(Position = 0)]
        [String]$Mode,
    
        [Parameter(Position = 1)]
        [Object]$Stream
    )    
    switch ($Mode) {
        'Smb' { 
            try { $BytesRead = $Stream.Pipe.EndRead($Stream.Read) }
            catch { Write-Warning "Failed to read Smb stream. $($_.Exception.Message)." ; continue }

            if ($BytesRead) {
                $BytesReceived = $Stream.Buffer[0..($BytesRead - 1)]
                [Array]::Clear($Stream.Buffer, 0, $BytesRead)
            }
            $Stream.Read = $Stream.Pipe.BeginRead($Stream.Buffer, 0, $Stream.Buffer.Length, $null, $null)
            
            if ($BytesRead) { return $BytesReceived }
            else { Write-Verbose 'Smb stream closed by remote end.' ; continue }
        }
        'Tcp' { 
            try { $BytesRead = $Stream.TcpStream.EndRead($Stream.Read) }
            catch { Write-Warning "Failed to read Tcp stream. $($_.Exception.Message)." ; continue }
                
            if ($BytesRead) {
                $BytesReceived = $Stream.Buffer[0..($BytesRead - 1)]
                [Array]::Clear($Stream.Buffer, 0, $BytesRead)
            }
            $Stream.Read = $Stream.TcpStream.BeginRead($Stream.Buffer, 0, $Stream.Buffer.Length, $null, $null)
                
            if ($BytesRead) { return $BytesReceived }
            else { Write-Verbose 'Tcp stream closed by remote end.' ; continue }
        }
        'Udp' { 
            try { $Bytes = $Stream.UdpClient.EndReceive($Stream.Read, [ref]$Stream.Socket.RemoteEndpoint) }
            catch { Write-Warning "Failed to receive Udp data from $($Stream.Socket.RemoteEndpoint.ToString()). $($_.Exception.Message)." ; continue }
            
            $Stream.Read = $Stream.UdpClient.BeginReceive($null, $null)

            return $Bytes
        }
    }
}

function Close-NetworkStream {
<#
Author: Jesse Davis (@secabstraction)
License: BSD 3-Clause
#>
    Param (
        [Parameter(Position = 0)]
        [String]$Mode,
    
        [Parameter(Position = 1)]
        [Object]$Stream
    )    
    switch ($Mode) {
        'Smb' { 
            try { $Stream.Pipe.Dispose() }
            catch { Write-Verbose "Failed to close Smb stream. $($_.Exception.Message)." }
            continue 
        }
        'Tcp' { 
            try { 
                if ($PSVersionTable.CLRVersion.Major -lt 4) { $Stream.Socket.Close() ; $Stream.TcpStream.Close() }
                else { $Stream.Socket.Dispose() ; $Stream.TcpStream.Dispose() }
            }
            catch { Write-Verbose "Failed to close Tcp stream. $($_.Exception.Message)." }
            continue 
        }
        'Udp' { 
            try { 
                if ($PSVersionTable.CLRVersion.Major -lt 4) { $Stream.Socket.Close() ; $Stream.UdpClient.Close() }
                else { $Stream.Socket.Dispose() ; $Stream.UdpClient.Dispose() }
            }
            catch { Write-Verbose "Failed to close Udp stream. $($_.Exception.Message)." }
        }
    }
}

function Connect-PowerCat {
<#
Author: Jesse Davis (@secabstraction)
License: BSD 3-Clause
#>
[CmdletBinding(DefaultParameterSetName = 'Console')]
    Param (
        [Parameter(Position = 0)]
        [Alias('m')]
        [ValidateSet('Smb', 'Tcp', 'Udp')]
        [String]$Mode = 'Tcp',

        [Parameter(Position = 1, Mandatory = $true)]
        [String]$RemoteIp,
        
        [Parameter(ParameterSetName = 'Execute')]
        [Alias('e')]
        [Switch]$Execute,
        
        [Parameter(ParameterSetName = 'Relay')]
        [Alias('r')]
        [String]$Relay,

        [Parameter(ParameterSetName = 'ReceiveFile')]
        [Alias('rf')]
        [String]$ReceiveFile,
    
        [Parameter(ParameterSetName = 'SendFile')]
        [Alias('sf')]
        [String]$SendFile,
    
        [Parameter(ParameterSetName = 'Input')]
        [Alias('i')]
        [String]$Input,
    
        [Parameter()]
        [Alias('d')]
        [Switch]$Disconnect,
    
        [Parameter()]
        [Alias('t')]
        [Int]$Timeout = 60,
        
        [Parameter()]
        [ValidateSet('Ascii','Unicode','UTF7','UTF8','UTF32')]
        [String]$Encoding = 'Ascii'
    ) 
    DynamicParam { 
        $ParameterDictionary = New-Object Management.Automation.RuntimeDefinedParameterDictionary

        if ($Mode -eq 'Smb') { New-RuntimeParameter -Name PipeName -Type String -Mandatory -Position 2 -ParameterDictionary $ParameterDictionary }
        else { New-RuntimeParameter -Name Port -Type Int -Mandatory -Position 2 -ParameterDictionary $ParameterDictionary }

        if ($Mode -eq 'Tcp') { New-RuntimeParameter -Name SslCn -Type String -ParameterDictionary $ParameterDictionary }
        
        if ($Execute.IsPresent) { 
            New-RuntimeParameter -Name ScriptBlock -Type ScriptBlock -ParameterDictionary $ParameterDictionary 
            New-RuntimeParameter -Name ArgumentList -Type Object[] -ParameterDictionary $ParameterDictionary 
        }
        return $ParameterDictionary
    }
    Begin {     
        if ($RemoteIp -notmatch "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$") { 
            Write-Warning "$RemoteIp is not a valid IPv4 address."
            return 
        }
        $ServerIp = [Net.IPAddress]::Parse($RemoteIp)

        switch ($Mode) {
            'Smb' { 
                try { $ClientStream = New-SmbStream $RemoteIp $ParameterDictionary.PipeName.Value $Timeout }
                catch { Write-Warning "Failed to open Smb stream. $($_.Exception.Message)" ; return }
                continue 
            }
            'Tcp' { 
                try { $ClientStream = New-TcpStream $ServerIp $ParameterDictionary.Port.Value $ParameterDictionary.SslCn.Value $Timeout }
                catch { Write-Warning "Failed to open Tcp stream. $($_.Exception.Message)" ; return }
                continue 
            }
            'Udp' { 
                try { $InitialBytes, $ClientStream = New-UdpStream $ServerIp $ParameterDictionary.Port.Value -TimeOut $Timeout }
                catch { Write-Warning "Failed to open Udp stream. $($_.Exception.Message)" ; return }
            }
        } 
        switch ($Encoding) {
            'Ascii' { $EncodingType = New-Object Text.AsciiEncoding ; continue }
          'Unicode' { $EncodingType = New-Object Text.UnicodeEncoding ; continue }
             'UTF7' { $EncodingType = New-Object Text.UTF7Encoding ; continue }
             'UTF8' { $EncodingType = New-Object Text.UTF8Encoding ; continue }
            'UTF32' { $EncodingType = New-Object Text.UTF32Encoding ; continue }
        }
        
        if ($PSCmdlet.ParameterSetName -eq 'Input') { Write-NetworkStream $Mode $ClientStream $EncodingType.GetBytes($Input) }     
        elseif ($PSCmdlet.ParameterSetName -eq 'ReceiveFile') { $FileStream = New-Object IO.FileStream @($ReceiveFile, [IO.FileMode]::Append) } 
        elseif ($PSCmdlet.ParameterSetName -eq 'SendFile') {   
            
            Write-Verbose "Attempting to send $SendFile"

            if ((Test-Path $SendFile)) { 
            
                try { $FileStream = New-Object IO.FileStream @($SendFile, [IO.FileMode]::Open) }
                catch { Write-Warning $_.Exception.Message }

                if ($BytesLeft = $FileStream.Length) { # goto cleanup
                    
                    $FileOffset = 0
                    if ($BytesLeft -gt 4608) { # Max packet size for Ncat

                        $BytesToSend = New-Object Byte[] 4608

                        while ($BytesLeft -gt 4608) {

                            [void]$FileStream.Seek($FileOffset, [IO.SeekOrigin]::Begin)
                            [void]$FileStream.Read($BytesToSend, 0, 4608)
                            
                            $FileOffset += 4608
                            $BytesLeft -= 4608

                            Write-NetworkStream $Mode $ClientStream $BytesToSend
                        } 
                        # Send last packet
                        $BytesToSend = New-Object Byte[] $BytesLeft
                        [void]$FileStream.Seek($FileOffset, [IO.SeekOrigin]::Begin)
                        [void]$FileStream.Read($BytesToSend, 0, $BytesLeft)

                        Write-NetworkStream $Mode $ClientStream $BytesToSend
                    }
                    else { # Only need to send one packet
                        $BytesToSend = New-Object Byte[] $BytesLeft
                        [void]$FileStream.Seek($FileOffset, [IO.SeekOrigin]::Begin)
                        [void]$FileStream.Read($BytesToSend, 0, $BytesLeft)

                        Write-NetworkStream $Mode $ClientStream $BytesToSend
                    }
                    $FileStream.Flush()
                    $FileStream.Dispose()
                }
                if ($Mode -eq 'Smb') { $ClientStream.Pipe.WaitForPipeDrain() } 
                if ($Mode -eq 'Tcp') { sleep 1 }
            }
            else { Write-Warning "$SendFile does not exist." }
        }
        elseif ($PSCmdlet.ParameterSetName -eq 'Relay') {
            
            Write-Verbose "Setting up relay stream..."

            $RelayConfig = $Relay.Split(':')
            $RelayMode = $RelayConfig[0].ToLower()

            if ($RelayConfig.Count -eq 2) { # Listener
                switch ($RelayMode) {
                    'smb' { $RelayStream = New-SmbStream -Listener $RelayConfig[1] ; continue }
                    'tcp' { $RelayStream = New-TcpStream -Listener $RelayConfig[1] ; continue }
                    'udp' { $RelayStream = New-UdpStream -Listener $RelayConfig[1] ; continue }
                    default { Write-Warning 'Invalid relay mode specified.' ; return }
                }
            }
            elseif ($RelayConfig.Count -eq 3) { # Client                
                if ($RelayConfig[1] -match "^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$") {
                    $ServerIp = [Net.IPAddress]::Parse($RelayConfig[1])
                    switch ($RelayMode) {
                        'smb' { $RelayStream = New-SmbStream $RelayConfig[1] $RelayConfig[2] ; continue }
                        'tcp' { $RelayStream = New-TcpStream $ServerIp $RelayConfig[2] ; continue }
                        'udp' { $RelayStream = New-UdpStream $ServerIp $RelayConfig[2] ; continue }
                        default { Write-Warning 'Invalid relay mode specified.' ; return }
                    }
                }
                else { Write-Warning "$($RelayConfig[1]) is not a valid IPv4 address." }
            }
            else { Write-Warning 'Invalid relay format.' }
        }          
        elseif ($PSCmdlet.ParameterSetName -eq 'Execute') {
            if ($ClientStream) {    
                $BytesToSend = $EncodingType.GetBytes("`nPowerCat by @secabstraction`n")
            
                if ($ParameterDictionary.ScriptBlock.Value) {

                    $ScriptBlock = $ParameterDictionary.ScriptBlock.Value
            
                    $Global:Error.Clear()
            
                    $BytesToSend += $EncodingType.GetBytes(($ScriptBlock.Invoke($ParameterDictionary.ArgumentList.Value) | Out-String))
                    if ($Global:Error.Count) { foreach ($Err in $Global:Error) { $BytesToSend += $EncodingType.GetBytes($Err.Exception.Message) } }
                }
                $BytesToSend += $EncodingType.GetBytes(("`nPS $((Get-Location).Path)> "))
                Write-NetworkStream $Mode $ClientStream $BytesToSend
                $ScriptBlock = $null
                $BytesToSend = $null
            }
        }
    }
    Process {             
        [console]::TreatControlCAsInput = $true

        while ($true) {
        
            if ($PSCmdlet.ParameterSetName -eq 'SendFile' -or $Disconnect.IsPresent) { break } # Skip to Cleanup
            
            # Catch Esc / Read-Host
            if ([console]::KeyAvailable) {          
                $Key = [console]::ReadKey()
                if ($Key.Key -eq [Consolekey]::Escape) {
                    Write-Verbose 'Caught escape sequence, stopping PowerCat.'
                    break
                }
                if ($PSCmdlet.ParameterSetName -eq 'Console') { 
                    $BytesToSend = $EncodingType.GetBytes($Key.KeyChar + (Read-Host) + "`n") 
                    Write-NetworkStream $Mode $ClientStream $BytesToSend
                }
            }

            # Get data from the network
            if ($InitialBytes) { $ReceivedBytes = $InitialBytes ; $InitialBytes = $null }
            elseif ($ClientStream.Socket.Connected -or $ClientStream.Pipe.IsConnected) { 
                if ($ClientStream.Read.IsCompleted) { $ReceivedBytes = Read-NetworkStream $Mode $ClientStream } 
                else { Start-Sleep -Milliseconds 1 ; continue }
            }
            else { Write-Verbose "$Mode connection broken, exiting." ; break }

            # Redirect received bytes
            if ($PSCmdlet.ParameterSetName -eq 'Execute') {
            
                try { $ScriptBlock = [ScriptBlock]::Create($EncodingType.GetString($ReceivedBytes)) }
                catch { break } # network stream closed
            
                $Global:Error.Clear()
                
                $BytesToSend += $EncodingType.GetBytes(($ScriptBlock.Invoke() | Out-String))
                foreach ($Err in $Global:Error) { $BytesToSend += $EncodingType.GetBytes($Err.Exception.Message) }
                $BytesToSend += $EncodingType.GetBytes(("`nPS $((Get-Location).Path)> "))
                
                Write-NetworkStream $Mode $ClientStream $BytesToSend 
                $BytesToSend = $null
                $ScriptBlock = $null
                continue
            }
            elseif ($PSCmdlet.ParameterSetName -eq 'Relay') { Write-NetworkStream $RelayMode $RelayStream $ReceivedBytes ; continue }
            elseif ($PSCmdlet.ParameterSetName -eq 'ReceiveFile') { 
                try { $FileStream.Write($ReceivedBytes, 0, $ReceivedBytes.Length) }
                catch { break } # EOF reached
                continue
            }
            else { # Console
                try { Write-Host -NoNewline $EncodingType.GetString($ReceivedBytes).TrimEnd("`r") }
                catch { break } # network stream closed
            }
        }
    }
    End { # Cleanup
        Write-Host "`n"

        if ($PSCmdlet.ParameterSetName -eq 'ReceiveFile') { $FileStream.Flush() ; $FileStream.Dispose() }
      
        try { Close-NetworkStream $Mode $ClientStream }
        catch { Write-Warning "Failed to close client stream. $($_.Exception.Message)" }

        if ($PSCmdlet.ParameterSetName -eq 'Relay') {
            try { Close-NetworkStream $RelayMode $RelayStream }
            catch { Write-Warning "Failed to close relay stream. $($_.Exception.Message)" }
        }
        [console]::TreatControlCAsInput = $false
    }
}