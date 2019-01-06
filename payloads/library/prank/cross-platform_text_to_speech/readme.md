## Cross Platform Text To Speech Prank

* Author: bobmcdouble3
* Version: Version 1.1
* Target: Windows & OSX

## Description
Runs a script in background that will download pictures of my
This payload attempts to open a terminal on MacOS & Windows.
It then tries to run a loop with TTS (long powershell command
on windows.) Finally, it minimizes the cmd on Windows, and 
hides the terminal on MacOS.

## Configuration

Edit the "textbody" variable, and put in your own message.
The default is "Hello, I am your robot overlord. Ha ha ha ha 
ha."

## Status

| LED                     | Status                                       |
| ----------------------- | -------------------------------------------- |
| Magenta Solid           | Setup                                        |
| Yellow single blink     | Opening a terminal/cmd                       |
| Yellow double blink     | Running the TTS code                         |
| Yellow triple blink     | Hiding/minimizing the terminal/cmd           |
| Green                   | Finished                                     |
| ----------------------- | -------------------------------------------- |

