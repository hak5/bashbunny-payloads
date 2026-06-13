# USB ID Randomization

## Description

Forensically hardened Rick-roll demonstration payload.

package that randomizes a payloads `ATTACKMODE` parameters. Supports four modes for best `ATTACKMODE` usage match.

`ATTACKMODE` offers VID/PID spoofing, however it is hardcoded for each payload. To change it, you must change the payload on disk. This signature is an artifact that can be easily recovered and flagged by extensive endpoint protection mechanisms in hardened environments.

This extension allows users to use the same payload, but employ different USB Identifier combinations. The script selects one of the thousands of serial devices defined by The Linux Project.

## Extension Usage

Invoking this extension is as simple as:

```bash
# default is level 0, which is a random and legitimate VID/PID/MAN/PROD combination.
ATTACKMODE HID $(bash ${ABSOLUTE_PATH}/riverwalker.sh)
```

The output of the command
```bash
$(bash ${ABSOLUTE_PATH}/riverwalker.sh)
```
which returns valid `ATTACKMODE` parameters:
```
VID_0XA455 PID_0XA455 MAN_GingerBreadMan PROD_Device SN_123456
```
This allows you to pass it inline with your payloads `ATTACKMODE` specification, whatever it may be.

The parameters:
Level 0:
* All values retireved from the `./riverwalker/config.json` file.
* Ensure all values in config.json are properly Bash escaped.

Level 1:
* Uses randomly selected vendor and product ID.

Level 2:
* uses randomly selected vendor and product ID, and randomized mac address.

Level 3:
* uses randomly selected vendor and product, with a randomly selected and valid OUI MAC Address.


## But what if the identifier was the point?
You could totally just set your device id to a sha-256 hash using the `./riverwalker/config.json` file so you can prove when/where your device was inserted for traceablility on an engagement. From what I read, max specified length supportable for that is 255 charicters.

___Disclaimer:___ I have not tested a product name of that length. Something that smells of Red team may be sufficient, like `213374DEADBEEF`
