function Invoke-AddAdminUser
{
    [CmdletBinding()]
    Param(
        [Parameter(Mandatory=$true, Position=0)]
        [string]$UserName,

        [Parameter(Mandatory=$true, Position=1)]
        [string]$Password
    )
    try {
        $secPassword = ConvertTo-SecureString -String $Password -AsPlainText -Force
        $ptrStr = [Runtime.InteropServices.Marshal]::PtrToStringAuto([Runtime.InteropServices.Marshal]::SecureStringToBSTR($secPassword))
        $computer = $env:COMPUTERNAME
        $ObjOU = [ADSI]"WinNT://$computer"
        $objUser = $objOU.Create("User", $UserName)
        $objUser.setpassword($ptrStr)
        $objUser.put("description","New LocalAdmin")
        $objUser.UserFlags = 64 + 65536 # ADS_UF_PASSWD_CANT_CHANGE + ADS_UF_DONT_EXPIRE_PASSWD
        $objUser.SetInfo()
        $objGroup = [ADSI]"WinNT://$computer/Administrators,group"
        $objGroup.add("WinNT://$computer/$UserName,user")
        $objGroup.SetInfo()
        $objGroup = [ADSI]"WinNT://$computer/Users,group"
        $objGroup.add("WinNT://$computer/$UserName,user")
        $objGroup.SetInfo()
        return ("User '{0}' with password '{1}' successfully added as local admin." -f ($UserName, $Password))
    }
    catch {
        return ("There was an error.`r`n{0}" -f ($_.Exception.Message))
    }
    
}