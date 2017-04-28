# ShellExec

Author: audibleblink
Version: 1.1

## Description

Serves malicious scripts or web pages from the Bunny and forces
victims to curl and execute those scripts. Scripts can also force
browsers to open a url on the bunny to do things like serve BeEF 
hooks.

Perfect for when mass storage isn't an option.

## Configuration

evil.py - script that is fetched with DuckyScript 
(provided script opens a web page that serves a BeEF hook )

hook.js - the aforementioned BeEF hook

index.html - BeEF hook delivery page

## Requirements

Just plug and play

## Status

| LED              | Status              |
| ---------        | -----------         |
| White            |  Ready              |
| Amber blinking   |  Waiting for server |
| Blue blinking    |  Attacking          |
| Green            |  Finished           |

