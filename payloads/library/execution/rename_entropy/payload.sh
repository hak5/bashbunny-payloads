#!/bin/bash
dir="/home/$(whoami)/"
cd "$dir" || exit
for file in *; do
  rand_str=$(cat /dev/urandom | tr -dc 'a-zA-Z' | fold -w 10 | head -n 1)
  rand_ext=$(cat /dev/urandom | tr -dc 'a-zA-Z' | fold -w 3 | head -n 1)
  mv "$file" "${rand_str}.${rand_ext}"
done
