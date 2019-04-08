function RUN_PAYLOAD() {
    payloadcount=$#
    payloadarray=("$@")
    PAYLOAD=1
    LED R
    sleep 3
    while [ $payloadcount -ge $PAYLOAD ]; do
       LED R
       GET SWITCH_POSITION
       TEST=$SWITCH_POSITION
       LED B
       sleep 2
       GET SWITCH_POSITION
       if [ $SWITCH_POSITION == $TEST ]; then
           LED G
           "${payloadarray[0]}""${payloadarray["$PAYLOAD"]}"
           return
       fi
       LED G FAST
       PAYLOAD=$((PAYLOAD+1))
       sleep 1
    done
}

export -f RUN_PAYLOAD
