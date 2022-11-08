#!/usr/bin/env bash
# oh man. you trust me to edit your primary bunny file? you have balls, my friend
# but for real, if this fails, just reboot bunny 3 more times and it'll recover. 

source bunny_helpers.sh

LED B
# I wouldn't touch this unless you know what you're doing
LOG_FILE=/tmp/config_payloads.log
OLD_FILE=/root/bash_bunny.sh
NEW_FILE=/root/udisk/payloads/${SWITCH_POSITION}/new_bash_bunny.sh


echo "Install Log:" > $LOG_FILE
echo "----------------" >> $LOG_FILE

if [ -f ${NEW_FILE} ]; then
        echo "Found ${NEW_FILE}" >> $LOG_FILE
else
    LED R
    echo "No Bueno. Missing File. Did you forget to move it? You need this more than you realize" >> $LOG_FILE
    cp $LOG_FILE /root/udisk/payloads/${SWITCH_POSITION}/install_log.txt
        exit 1
fi

# purple means work is being done.
LED R B 100

# Backup Existing Bash Bunny
if [ -f $OLD_FILE ]; then
    echo "Moving the old file." >> $LOG_FILE
    mv  $OLD_FILE /root/old_bash_bunny.sh
fi

echo "Copying new bash bunny" >> $LOG_FILE
cp $NEW_FILE $OLD_FILE
chmod +x $OLD_FILE

FILE_SIZE=$(wc -c <"$OLD_FILE")
if [ $FILE_SIZE -ge 80 ]; then
     LED G
     echo "File copy a success" >> $LOG_FILE
else
     LED R 100
     echo "File copy failed, reverting" >> $LOG_FILE
     rm $OLD_FILE
     mv /root/old_bash_bunny.sh $OLD_FILE
fi

cp $LOG_FILE /root/udisk/payloads/${SWITCH_POSITION}/install_log.txt
