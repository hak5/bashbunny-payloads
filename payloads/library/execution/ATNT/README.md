# ATNT : Persistent NT AUTHORITY\SYSTEM implant

Uses Windows [Ease of Access Assistive Technology](https://docs.microsoft.com/en-us/windows/win32/winauto/ease-of-access---assistive-technology-registration) to persistently run code with NT AUTHORITY\SYSTEM rights.

## Options
### :warning: FORCE_LOGOFF
> Ease of Access Assistive Technologies (ATs) are only callable after a restart or logoff. Setting this setting to true will forcefully log the user off. Unsaved work on the target may be lost.
### :warning: LOCK_ON_USER
> After the AT has been successfully registered (target machine has rebooted or user has been logged off), the AT will be launched when the user first logs in. The AT is ran as User, and thus can not complete its installation. Setting this setting to true will lock the desktop as soon as the user first logs in. This may cause suspicion for the target user, but only happens once.
### RUN_IMMEDIATELY
> When the AT is first launched as NT AUTHORITY/SYSTEM, the final stage is written to the SECURITY registry hive. Only NT AUTHORITY/SYSTEM has access to this hive. Setting this setting to true will also immediately run the final stage, instead of waiting for a second switch to a Secure Desktop to launch the final stage. 

## final_stage.ps1
The final_stage.ps1 file is merged into the second stage. Usage of `@"\n..."@\n` is therefore not possible. Variable definition and usage should be escaped as follows:
```powershell
`$example = 1;
Write-Host `$example;
```