#!/bin/bash -x

# Run this script in the parent directory above the "backup" folder containing files you want to add to a checksums.txt list. Then take the checksums.txt file and place it in .../loot/hss/ to prevent the files from being copied to the .../loot/hss/backups/ directory the next time HSS is run.

find ./backup | while read p; do if cat ./checksums.txt | grep -qw `cksum "$(echo "$p" | tr -d '\')" | cut -d ' ' -f1`; then : ; else echo `cksum "$(echo "$p" | tr -d '\')" | cut -d ' ' -f1` >> ./checksums.txt; fi; done