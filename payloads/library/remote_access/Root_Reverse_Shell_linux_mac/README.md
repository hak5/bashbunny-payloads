# Root_Reverse_Shell_linux_mac

### Since i dont have a bash bunny this is tested in digispark
### I have converted this script to bash bunny
### If any issues put in discussion i will fix it
POC DIGISPARK LINK : https://drive.google.com/open?id=1DvKX8QXHImVRZMaoTvmtreFkiL4rwYF-
### Special thanks to sudobackdoor for bash script sample
Dont forget to change IP in payload.sh.<br/>
Before using this payload don't forget to start netcat listeners on port 4444 and 1337.<br/>
It reverse connects user shell in port 4444 and root shell in port 1337.<br/>
Make sure switch is in position 1.<br/>

Once the payload.sh is executed the sudobackdoor script it will gets the root credential and It will be used for getting higher privileges and gives a reverse root netcat connection. Additionaly i have added a user level netcat connection also.

The reason for two netcat connection is user level connection established when script is executed. But to obtain root credential is required, So it waits for user to elevate his privileges to root. So initialy i have given a normal connection then after sudo execution root connection will be established.
