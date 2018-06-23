# Blue Team PC Audit

* Author: Sorsnce
* Version: Version 1.0
* Target: Windows

## Description

The PowerShell script changes the users background to "background.bmp", this allows Blue team to remind users to lock their PCs.
The PowerShell script also sends an email to the Security Team with information about the users PC.
This allows the Security Team to keep a record of repeatable offenders.

## Configuration

Edit 1.ps1 to specify usernames, email addresses, and domain.
You will need to add your background iamge with the name of "background.bmp". This file will be the new background on the PC.
The script will accept other file formats as long as you change the file extension in the powershell script. 
Place "background.bmp" in the same directory as your payload, and you should be ready to use the Blue Team PC Audit script.

## STATUS

| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| Magenta			 | Setup								        |
| Yellow		     | Calling the Powershell Script                |
| Green              | Attack Complete                              |

## Discussion

