# Git-Bunny-Git

Author: Draxiom & audibleblink & Nicholas Adamou
Version: 1.0

## Description

Clones the bashbunny-payloads repository and also will update an existing repository. Use this payload to get all the other payloads!

## Configuration

Configured for nix by default. Swap RNDIS_ETHERNET with ECM_ETHERNET on Windows

## Requirements

Target must be sharing internet. BashBunny must have git installed.

 1. Run bb.sh (pause at main menu)
 2. Plug in da bunny
 3. Connect (type 'c') 5 seconds after the white light
 4. You can now ssh into the bunny (Run `tail -f /var/log/git.log` to montior progress)

## Status

| LED              | Status                                |
| ---------------- | ------------------------------------- |
| White            | Ready (to share internet connection)  |
| Red              | Failed (no internet)                  |
| Red (blinking)   | Failed (could not mount filesystem)   |
| Amber            | Running                               |
| Purple           | Cleaning Up                           |
| Green (blinking) | Finished (git pull)                   |
| Green            | Finished (git clone)                  |
