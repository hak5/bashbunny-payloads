# SudoBackdoor

* Author: oXis
* Version: 0.1
* Target: Mac/Linux

## Description

Injector: Inject a sudo backdoor by installing a wrapper inside .config/sudo/ and sourcing the dir in the $PATH.    
Cleaner: Get back the password grabbed by the sudo backdoor and do cleanup.    

## Configuration

Inside the injector and the cleaner you can specify mac=true to switch the playload to macos mode.    

## STATUS
Injector

| LED              | Status               |
| ---------------- | -------------------- |
| White            |  Ready               |
| Ammber blinking  |  Waiting for server  |
| Blue blinking    |  Attacking           |
| Green            |  Finished            |
    
Cleaner

| LED              | Status               |
| ---------------- | -------------------- |
| White            |  Ready               |
| Blue blinking    |  Attacking           |
| Green            |  Finished            |
