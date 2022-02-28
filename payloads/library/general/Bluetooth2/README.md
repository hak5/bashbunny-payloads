# BlueTooth2

BlueTooth2 is a program that scans for two bluetooth devices and depending on what one it finds it runs whatever.

## What it Does and How its Different

Unlike the standard WAIT_FOR_PRESENT that scans for one device and doesnt allow code after it to run until found.
This will do a scan and then check for two different devices names allowing for multiple remote triggers that
can do different things.

## Note

I imagine your looking at this code and wondering what idiot wrote it and I would very cool if you would
make it more efficient or even pretty. It worked when I tested it (I use BLE Tool)

## LED

|  COLOR  | DESCRIPTION |
|---------|-------------|
| White   | Scan        |
| Yellow  | Checking    |
| Green   | Attack1     |
| Blue    | Attack2     |
