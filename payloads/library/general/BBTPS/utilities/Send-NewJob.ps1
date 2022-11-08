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