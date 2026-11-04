# MK2 SD Dropper
Author: CoulsTech
Version: 1.1

## Description

Creates empty files or copies files from the Bash Bunny to an inserted SD card.

Default configuration creates an empty `ssh` file to enable SSH on a Raspberry Pi at boot.

## LED Status

LED SETUP: Initializing payload

LED G: Mounting SDHC to `/root/udisk`

LED ATTACK: Creating empty file

LED SPECIAL: Copying specified file

LED FAIL: Operation failed

LED FINISH: Operation completed and SDHC unmounted. Safe to eject.

## Configuration

All options are set through variables in the script.

METHOD: EMPTYFILE or COPYFILE

SOURCE: File to copy from the Bunny

SDHC: Target SD card partition

SDHC_MOUNT: Mount location

DEST: Destination directory

FILENAME: Name of the file to create or copy

CHMOD: Enable or disable permission changes

CHMOD_VAL: File permissions to apply

## Requirements

Bash Bunny MK2 with current firmware

Compatible SDHC card

Supported filesystem

Stable 5V DC power

## Usage

Set the desired options in the script.

Insert the SD card and run the payload.

Wait for LED FINISH before ejecting the card.