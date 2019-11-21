# Root_Reverse_Shell_linux_mac

### Since i dont have a bash bunny this is tested in digispark
### I have converted this script to bash bunny
### If any issues put in git i will fix it

POC DIGISPARK LINK : https://drive.google.com/open?id=1DvKX8QXHImVRZMaoTvmtreFkiL4rwYF-

### Special thanks to sudobackdoor for bash script sample
Dont forgot to change IP in payload.sh
Before using this payload don't forgot to start netcat listeners on port 4444 and 1337
Because it gives both user shell and root shell

When bash bunny executes payload in a machine wich is neither linux nor mac, it will download the payload.sh from server
then executes it and removes the payload.sh.

Once the payload.sh is executed as explained in the sudobackdoor script it will gets the root credential instead of storing it it will used for getting higher privileges and gives a reverse root netcat connection. Additionaly i have added a user level netcat connection also.

The reason for two netcat connection is user level connection established when script is executed. But to obtain root credenitals it requires time because the user need elevate his privileges to root. So initialy i have given a normal connection then after sudo execution root connection will be established.
