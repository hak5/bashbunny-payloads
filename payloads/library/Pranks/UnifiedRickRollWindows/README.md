# UnifiedRickRoll for Bash Bunny

* Author: Jafahulo
* Version: Version 1.0
* Target: Windows

## Description
Runs a script in background that will crank up volume and rick roll target at specified time. Also removes 'run' diologue history to "hide" tracks

The format for the time is as follows: How many hours have passed since midnight + how many minutes have passed since that hour started.



As an example: 1:39am would be 139, 1:39pm would be 1339 (it's in 24 hour format, not 12), 5:03pm would be 173, and 5:02am would be 52.



This is kinda confusing at first, but if you tinker with it for a couple minutes, it's pretty easy to figure out. 

Additionally, you can run this in any powershell window, and it will set the current time in that format to $time:

$time=(Get-Date).Hour.toString()+(Get-Date).Minute.toString()


## Configuration

set time to run in payload.txt

## STATUS

| LED                | Status                                       |
| ------------------ | -------------------------------------------- |
| Red (blinking)     | Running                                      |
| Blue (blinking)    | Cleaning up
| Green              | Attack Complete                              |

## Discussion
https://forums.hak5.org/index.php?/topic/40621-payload-unifiedrickrollwindows/
