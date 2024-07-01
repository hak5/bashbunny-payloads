## Smart Data Thief

Make your Bash Bunny into the perfect data thief. This payload is ideal for demonstrating the need to lock workstations: using it, you can stroll through a facility and steal critical information from PC after PC. The attack is highly configurable with the following options:

 - Copies are timed to be as fast or as long as you want. You’ll know
   exactly how long you have per workstation, and also know you can
   remove the Bash Bunny safely once it the time expires
 - The copy may be configured to stop when a secret BLE beacon is sent –
   the Bash Bunny will shut down for immediate removal.
 - Concerned that someone might see the attack? Configure the payload to
   flash windows and suddenly lock before shutting down the Bash Bunny,
   which gives the payload time to clean up its tracks while you make
   appropriate excuses.
 - Want to trigger the payload from afar? Make the attack a “button job”
   – the Bash Bunny will take advantage of Cool Cucumber CPU usage while
   waiting for the secret BLE beacon.
  
The payload may be used with or without a SD card and places loot in a folder with the computer’s name. Additionally it targets the most likely high-value targets on a workstation, and only those that have been updated in past 30 days – however feel free to tailor parameters to your unique pentest situation.

**Targets**

 1. All WiFi creds used by the workstation
 2. The past 30 days in both Desktop and Documents for:
- Word docs
- Excel spreadsheets
- Loose email files (*.msg)
- Text files
- OneNote notebooks

**Files Used**

- payload.txt: Starts and monitors the attack. All configuration constants are contained in this file.
- verify.bat: Runs the file exfiltration. You may configure the target files in this batch file. Of course, it really doesn't verify anything – it is just called that because it is "in disguise"

**Setup**
1. Place the payload.txt and verify.bat on either switch directory
2. If you are using a SD card, copy verify.bat to /payloads/switch*n*/ (where *n* is the switch you are running)
3. For maximum versatility, place verify.bat in both locations

**Payload Configuration**

Change any of the constants below to match your mission parameters:
- BB_NAME: Make sure you have the right Bash Bunny name in this constant
- EJECT_TIME: Total time allocated for the attack, after which the Bash Bunny will shutdown
- ABORT_MISSION: Specify what BLE beacon will stop the attack - the payload will check every second for the beacon
- DISTRACT_ON_ABORT: If the payload is stopped by the BLE beacon, it will also flash a bunch of windows and lock the PC before shutting down to cause a distraction.
- WAIT_FOR_TRIGGER: Don’t start the attack immediately but wait for the BLE beacon.
- START_MISSION: The BLE beacon that will remotely start the attack. Make sure WAIT_FOR_TRIGGER is set to true.

**LED meanings**
- Magenta: Initial setup – about 1 – 3 seconds
- Slow 1 second yellow on and off: Waiting for start mission trigger to be sent by BLE
- Single yellow blink: Attack in progress
- Green rapid flash, then solid, then off: Attack complete – Bash Bunny may be removed