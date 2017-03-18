%~dp0laZagne.exe all >> %~dp0..\..\loot\laZagne\runningscan\%COMPUTERNAME%_%DATE%_.txt
timeout /T 4 > null
move %~dp0..\..\loot\laZagne\runningscan\%COMPUTERNAME%_%DATE%_.txt %~dp0..\..\loot\laZagne\finishedscan\