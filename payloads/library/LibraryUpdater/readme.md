# Library Updater

Author: audibleblink
Version: 1.0

## Description

Clones the bashbunny-payloads repository and rsyncs new changes.
If you modify your payloads from the library folder, they will be overwritten.
For now, I recommend either renaming modifiied payloads 
or storing them in your own forked repo and using your link/branch in the payload.

## Configuration

Configured for \*nix by default. Swap RNDIS_ETHERNET with ECM_ETHERNET on Windows

## Requirements

The BashBunny must have internet access in order to pull down updated payloads.
Run the [internet connection sharing](https://bashbunny.com/bb.sh)
script and plug in the BashBunny with the appropriate switch activated.

## Status

| LED       | Status      |
| --------- | ----------- |
| White     | Ready       |
| Red       | Failed      |
| Amber     | Running     |
| Purple    | Cleaning Up |
| Green     | Finished    |

