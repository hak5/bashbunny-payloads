# LaZassword
Password recovery payload for the BashBunny, using LaZagne.

• Author: kuyaya

• Firmware support: I tested it for 1.6, but it should work for all firmwares

• Target: Windows

• Creds: [PoSHMagiC0de](https://github.com/PoSHMagiC0de)

## Description
The payload uses powershell to bypass the AV and stores the output of lazagne (runned as admin) in a lootfile.

Payload running time: ~ 1 minute

You can rely on the LED FINISH. You don't have to do anything on the victim computer, as long as he has Windows Defender as the AV. No keyboard change, no safe eject, just plug it in, wait for the LED FINISH, plug it out.

Only works with Windows Defender as victim AV.

The BashBunny ejects itself. You don't have to do anything.

## Configuration
You need to download the latest version of LaZagne from the [release page of LaZagne](https://github.com/AlessandroZ/LaZagne/releases).

Be sure to temporarily disable the AV so it doesn't get removed during download and installation. Then make a Zip-file (not 7zip or rar, just the normal zip format that windows provides) out of it, and place it in the /root folder of the Bunny.
Example: 
> G:\lazagne.zip\lazagne.exe

Then just copy-paste the payload.txt and the lazassword.ps1 into one of the switch folders. (Doesn't matter if switch1 or switch2)

***Be sure to change the DUCKY_LANG in the payload.txt***

***Be sure to change the "administrators" in bypass.ps1 on line 42***
Change it to "administrators" in your language. Example: German people should replace it by "Administratoren".

If you have an idea on how to improve the payload or if you have an issue (e.g. the payload itself is not working) don't hesitate to PM me by E-Mail or at the [Hak5 Forums](https://forums.hak5.org/profile/63440-kuyaya/).

## Latest update information
Adding the ability to bypass UAC. Creds go to PoSHMagiC0de.
