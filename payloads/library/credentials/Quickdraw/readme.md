# Quickdraw
* Author: golem445
* Version: 1.0
* Target: Windows Domains

## Description

Sets up Ethernet and HID keyboard interfaces simultaneously,
runs Responder, then uses HID to generate an NTLMv2 hash
response from the target computer.

Note: This module will bypass network restrictions on USB
disk drives as only a network card and keyboard are emulated.

## Requirements

Responder should be installed

## STATUS

| Status              | Description                              |
| ------------------- | ---------------------------------------- |
| Flashing Red        | Responder not found                      |
| Solid Violet        | Setup for attack                         |
| Flashing Amber      | Attack in progress                       |
| Solid Green         | Attack complete                          |
