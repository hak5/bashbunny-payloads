LED R G
PAYLOADDIR=$(find /root/udisk/payloads/ -name d.cmd -printf '%h\n')
cd $PAYLOADDIR
mv d.cmd e.cmd i.vbs /root/udisk/
sync
LED R G B 30
sleep 2
exit 0