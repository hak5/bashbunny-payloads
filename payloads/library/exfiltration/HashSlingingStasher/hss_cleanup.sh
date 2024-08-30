#!/bin/bash -x

# Run this script inside the .../loot/hss/ directory to perform cleanup functions on the loot directory: unhide hidden files, and sort files into directories based on their file extension

find ./backup/ -type f -name '\.*' -print | while read p; do mv $p ./backup/`echo $p | cut -b 11-`; done
ls ./backup/ | while read p; do mkdir ./backup/"${p##*.}"; done
ls ./backup/ | while read p; do mv ./backup/"$p" ./backup/"${p##*.}"/; done