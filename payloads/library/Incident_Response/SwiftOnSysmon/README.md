<img align="right" width="190" height="190" src="https://github.com/matze-infosec/matze-infosec/blob/main/Assets/Images/Logo_clear_small.png">

**Title: SwiftOnSysmon**

**Author: Matze**

**Version: 1.0**

**Category: Incident_Response**

#

What is Sysmon?

Sysmon is a Windows system service and device driver that, once installed on a system, remains across system reboots to monitor and log system activity to the Windows event log. It provides detailed information about process 
creations, network connections, and changes to file creation time. By collecting the events it generates using Windows Event Collection or SIEM agents you can identify malicious or anomalous activity and understand how intruders 
and malware operate on your network. Sysmon also lets you build custom filters to deside what should be logged and how much should be collected when an event is triggered. The custom filters are written in xml. 
You can custom make your own from scratch or modify existing filters to meat your exact need.
#
What is this payload?

This payload lets you automate the instalation of Sysmon with 2 options: default and rule based. I have included a commonly used rule set from [Swift On Security](https://github.com/SwiftOnSecurity/sysmon-config). This payload
uses a powershell script to allow for a quick and clean instalation. 

**You will need to have admin permishions for this to run.**

#
How to run this!

All files needed are stored in the Sysmon folder. I have named the custom rules custom.xml. You are free to modify the rules to fit your needs without problem as long as the file name stays the same. To use this payload just 
copy all files to an open switch folder and run it!

I wish you all the best of luck! Happy Hacking!
#

I would like to thank:

[IamJakoby](https://github.com/I-Am-Jakoby) for helping me troubleshoot and build this payload!

[Sysinternals](https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon) for an awsome tool!

[Swift On Security](https://github.com/SwiftOnSecurity) for releasing an amazing rule set for sysmon to work with!
