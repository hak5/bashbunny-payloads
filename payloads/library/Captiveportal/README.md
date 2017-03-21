# Captive Portal for the Bash Bunny

Author: Sebkinne  
Version: 1.1

## Description

Redirects and spoofs all DNS requests to the Bash Bunny, and serves a configurable captive portal. All captured credentials will be logged in the payload's folder in a file named *capture.log*.

## Configuration

Configured for Windows by default. Swap RNDIS_ETHERNET for ECM_ETHERNET on Mac/*nix.

The *portal.html* file can be modified as seen fit, but changes must remain in the file (no external images, css, or javascript).

To capture more information from the user, simply add more form inputs to *portal.html*, and update the *INPUTS* line in payload.txt. Example: `INPUTS=(email username password)`

## STATUS

| LED              | Status                              |
| ---------------- | ----------------------------------- |
| Green (blinking) | The captive portal is starting up   |
| Blue (solid)     | The captive portal is ready for use |

