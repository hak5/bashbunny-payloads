# Two Stage Mac

Author: Draxiom

## Description
A simple two stage payload for OSX. First stage, opens terminal and executes a shell script, saved on the Bash Bunny's storage. Sample second stage does some device profiling.

## Usage
Overwrite second-stage.sh with custom script and plug into mac. It should open up terminal and execute the second stage via `sh /Volumes/BashBunny/switch#/second-stage.sh`. Loot is saved in /Volumes/BashBunny/loot/hostname/epoch/ and is passed into second-stage.sh as the parameter `$1`