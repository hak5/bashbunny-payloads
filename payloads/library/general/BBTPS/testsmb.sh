#!/bin/bash
# Test bash shell to initialize and launch smbserver to tmp loot folders
# For exfiltration tests.  Must be ran before running payloads to for
# exfiltration to work.
# Requires Impacket on your machine.

if [ ! -d ./tmploot ]; then
    mkdir ./tmploot;
    mkdir ./TestMachine;
fi

if [ ! -d ./tmploot/TestMachine ]; then
    mkdir ./tmploot/TestMachine;
fi

sudo python /usr/share/doc/python-impacket/examples/smbserver.py -c 'TestServer' 'tmploot' $PWD/tmploot/ | tee -a $PWD/tmploot/TestMachine/smb.log
