# Test job, will pull a directory listing and output as a string

function get-selecteddir
{
    Param(
        [Parameter(Mandatory=$true)]
        [string]$Path
    )
    $returnobj = "Directories are : `r`n"
    $returnobj += (get-childitem -path $Path | out-string) + "`r`n"
    $returnobj += "BashBunny Target host's name:{0}`r`n" -f $BB_TARGET_HOSTNAME
    $returnobj += "BashBunny IP:{0}`r`n" -f $BB_IP
    $returnobj += "BashBunny Port:{0}`r`n" -f $BB_PORT
    $returnobj += "BashBunny SMB Loot Directory:{0}`r`n" -f $BB_SMBLOOT
    $returnobj += "BaseBunny SMB Root Directory:{0}`r`n" -f $BB_SMBROOT
    $returnobj += "BashBunny Add Job URL path is:{0}`r`n" -f $BB_ADDJOBURL
    $returnobj += "Internal function to send new job is: Send-NewJob`r`n"
    $returnobj += "Parameters are:`r`n`t-jobName`r`n`t-command`r`n`t-runType`r`n`t-scriptName`r`n"

    return $returnobj
}
