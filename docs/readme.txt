
           _____  _____  _____  _____     _____  _____  _____  _____  __ __ 
 (\___/)  | __  ||  _  ||   __||  |  |   | __  ||  |  ||   | ||   | ||  |  |
 (='.'=)  | __ -||     ||__   ||     |   | __ -||  |  || | | || | | ||_   _|
 (")_(")  |_____||__|__||_____||__|__|   |_____||_____||_|___||_|___|  |_|  
 Bash Bunny by Hak5                           USB Attack/Automation Platform


                      -+- QUICK REFERENCE GUIDE v1.3 -+-


     +-----------------+
 +----                 |   The Bash Bunny by Hak5 is a simple and powerful
 | : |    Boot Modes   |   multi-function USB attack and automation platform
 +----               * |   for penetration testers and systems administrators.
     +--|||------------+
        |||
        ||+-- (sw1) Switch Position 1: Customizeable Payload.
        |+-- (sw2) Switch Position 2: Customizeable Payload.
        +-- (sw3) Switch Position 3: Arming Mode - Serial + Mass Storage.

  

 Welcome & Updating the Bash Bunny Software
 ------------------------------------------------------------------------------
 Congratulations on your new Bash Bunny by Hak5! For the best experience, we
 recommend updating to the latest framework version and payload set from the
 downloads section of https://www.bashbunny.com. There you will find a wealth
 of knowledge and a helpful community of creative penetration testers and 
 IT professionals. Welcome!
 


 Mass-Storage Directory Structure                 Default Settings
 --------------------------------------------     -----------------------------
 .
 |-payloads/                                      Username: root
 | |-library/                                     Password: hak5bunny
 | | |-* Payloads from Bash Bunny repository    
 | | |-extensions/ - Additional Bunny Script      Hostname: bunny
 | |                 commands/functions.
 | |-switch1/                                     IP Address: 172.16.64.1
 | | |-payload.txt - Bunny Script executed on     DHCP Range: 172.16.64.10-12
 | |                 boot in switch position 1  
 | |-switch2/                                     LED Status:
 |   |-payload.txt - Bunny Script executed on     Green Solid    - Boot up
 |                   boot in switch position 2    Blue Blink     - Arming Mode
 |-loot/  - Where payloads store logs and data    Red/Blue Blink - Recovery
 |-docs/  - EULA, License, this readme.txt
 |-tools/ - Contents placed here will be copied
 |          to /tools at boot in arming mode.
 |          *.deb packages will be installed.
 |-languages/ - HID languages placed here will
                install at boot in arming mode.

        

 Partitions                               Recovery
 --------------------------------------   -------------------------------------
 /dev/root   - Main Linux file system     If the Bash Bunny Setup Mode fails to
 /dev/nandg  - Recovery file systems      boot >3 times the file system will
               do not modify              recover automatically. DO NOT UNPLUG
 /dev/nandf  - Mass storage partition     while the LED is blinking in an 
               Mounted at /root/udisk     alternating Red/Blue pattern. This 
 /root/udisk - Mass storage mount point   process requires 5-10 minutes.

 

 Bunny Script Builtin Commands                                 Ducky Script
 -----------------------------------------------------------   ---------------
 ATTACKMODE  Specifies the USB devices to emulate.             REM
             Accepts combinations of three: SERIAL,            DELAY
             ECM_ETHERNET, RNDIS_ETHERNET, STORAGE, HID        STRING
                                                               WINDOWS/GUI
 LED         Control the RGB LED. Accepts color and pattern    MENU/APP
             or predefined payload state.                      SHIFT
             See detail from LED section.                      ALT
                                                               CONTROL/CTRL
 QUACK       Injects specified keystrokes via Ducky Script     UPARROW/UP
             Accepts file relative to /payloads/ path          DOWNARROW/DOWN
             Accepts inline Ducky Script                       LEFTARROW/LEFT
                                                               RIGHTARROW/RIGHT
 Q           Alias for QUACK                                   PAUSE/BREAK
                                                               DELETE
 Example:                                                      END
  QUACK helloworld.txt   Inject keystrokes from file           ESCAPE/ESC
  Q STRING Hello World   Inject keystrokes from Ducky Script   HOME
                                                               INSERT
 DUCKY_LANG=us Sets keystroke injection language               PAGEUP P
                                                               PAGEDOWN
                                                               PRINTSCREEN
                                 SPACE
 Bunny Script Environment Variables                            TAB
 ----------------------------------------------------------    NUMLOCK      
 $TARGET_IP         IP Address of the computer received        SCROLLOCK  
                    by the Bash Bunny DHCP Server.             CAPSLOCK
 $TARGET_HOSTNAME   Host name of the computer on the           F1...F12
                    Bash Bunny network.                         
 $HOST_IP           IP Address of the Bash Bunny               
                    (Default: 172.16.64.1)                             
 $SWITCH_POSITION   "switch1", "switch2" or "switch3"



 Bash Bunny Extensions
 -----------------------------------------------------------------------------
 The Bash Bunny scripting language is further enhanced by additional commands,
 known as extensions. Sourced from payloads/library/extensions/* at run-time,
 payloads may make use of these command. Similar to payloads, the extensions 
 can be obtain and updated from the Bash Bunny repository.
 
 Example extension: RUN - Simplifies command execution for HID attacks.
 Usage: RUN [OS] [Command] 
   RUN WIN notepad.exe
   RUN WIN "powershell -Exec Bypass \"tree c:\\ > tree.txt; type tree.txt\"
   RUN OSX http://www.example.com

   
 
 Connecting to the Linux Serial Console from Windows           Serial Settings
 ---------------------------------------------------------     ---------------
 Find the COM# from Device Manager > Ports (COM & LPT)         115200/8N1
 Look for USB Serial Device (COM#). Example: COM3              
 Or run the following powershell command to list ports:        Baud: 115200
 [System.IO.Ports.SerialPort]::getportnames()                  Data Bits: 8
                                                               Parity Bit: No
 Open Putty (putty.org) and select Serial. Enter COM# for      Stop Bit: 1
 serial line and 115200 for Speed. Clock Open.



 Connecting to the Linux Serial Console from Linux/Mac
 -----------------------------------------------------------------------------
 Find the device from the terminal with: "ls /dev/tty*" or "dmesg | grep tty"
 On Linux the Bash Bunny may be /dev/ttyUSB0 or /dev/ttyACM0
 Connect to the serial device with screen. (apt-get install screen if needed)
 Example: "sudo screen /dev/ttyACM0 115200"
 Disconnect with keyboard combo: CTRL+a followed by CTRL+\



 Example Payload Structure
 -------------------------
 payloads/switch#/
                 |-payload.txt   Primary payload file executed on boot in
                 |               specified switch position
                 |-readme.txt    Optional payload documentation
                 |-config.txt    Optional payload configuration for variables
                 |               sourced by complex payloads
                 |-install.sh    Installation script for complex payloads
                 |               requiring initial setup (may require Internet)
                 |-remove.sh     Uninstall/Cleanup script for complex payloads



 Share Internet Connection with Bash Bunny from Windows
 -----------------------------------------------------------------------------
 - Configure a payload.txt for ATTACKMODE RNDIS_ETHERNET
 - Boot Bash Bunny from RNDIS_ETHERNET set payload on the host Windows PC
 - Open Control Panel > Network Connections (Start > Run > "ncpa.cpl" > Enter)
 - Identify Bash Bunny interface. Device name: "USB Ethernet/RNDIS Gadget"
 - Right-click Internet interface (e.g. Wi-Fi) and click Properties.
 - From the Sharing tab, check "Allow other network users to connect through
   this computer's Internet connection",  select the Bash Bunny from the 
   Home networking connection list (e.g. Ethernet 2) and click OK.
 - Right-click Bash Bunny interface (e.g. Ethenet 2) and click Properties.
 - Select TCP/IPv4 and click Properties.
 - Set the IP address to 172.16.64.64. Leave Subnet mask as 255.255.255.0 and
   click OK on both properties windows. Internet Connection Sharing is complete



 Share Internet Connection with Bash Bunny from Linux
 -----------------------------------------------------------------------------
 - Download the Internet Connection Sharing script from bashbunny.com/bb.sh
   e.g: wget bashbunny.com/bb.sh
 - Run the bb.sh connection script with bash as root
   e.g: sudo bash ./bb.sh
 - Follow the [M]anual or [G]uided setup to configure iptables and routing
 - Save settings for future sessions and [C]onnect



 ATTACKMODE Command
 -----------------------------------------------------------------------------
 ATTACKMODE sets the device emulation parameters for the Bash Bunny. 
 Three of five attack modes may be executed simultaneously.
 
 Parameter      Type                                  Target/Use
 -------------- ------------------------------------  -------------------
 SERIAL         ACM     Abstract Control Model        Serial Console
 ECM_ETHERNET   ECM     Ethernet Control Model        Linux/Mac/Android
 RNDIS_ETHERNET RNDIS   Remote Network Dvr Int Spec   Windows (some *nix)
 STORAGE        UMS     USB Mass Storage              Flash Drive
 HID            HID     Human Interface Device        Keystroke Injection



 LED Command
 -----------------------------------------------------------------------------
 The multi-color LED enables at-a-glance information on payload status.
 The LED is controlled via the LED command, from the console or payload.txt
 
 Usage: LED [COLOR] [PATTERN] or LED [STATE]

 COLORS
 ------
 In addition to Red, Green and Blue, additive color mixing is possible.

 --------    --------------------------------------------
 R           Red
 G           Green
 B           Blue
 Y, R G      Yellow (Commonly known as Amber)
 C, G B      Cyan (Commonly known as Light Blue)
 M, R B      Magenta (Commonly known as Violet or Purple)
 W, R G B    White (Combination of R + G + B)
   
 PATTERNS
 --------    --------------------------------------------------------
 SOLID       *Default. No blink. Used if pattern argument is ommitted

 SLOW        Symmetric 1000ms ON, 1000ms OFF, repeating
 FAST        Symmetric 100ms ON, 100ms OFF, repeating
 VERYFAST    Symmetric 10ms ON, 10ms OFF, repeating

 SINGLE      1 100ms blink(s) ON followed by 1 second OFF, repeating
 DOUBLE      2 100ms blink(s) ON followed by 1 second OFF, repeating
 TRIPLE      3 100ms blink(s) ON followed by 1 second OFF, repeating
 QUAD        4 100ms blink(s) ON followed by 1 second OFF, repeating
 QUIN        5 100ms blink(s) ON followed by 1 second OFF, repeating

 ISINGLE     1 100ms blink(s) OFF followed by 1 second ON, repeating
 IDOUBLE     2 100ms blink(s) OFF followed by 1 second ON, repeating
 ITRIPLE     3 100ms blink(s) OFF followed by 1 second ON, repeating
 IQUAD       4 100ms blink(s) OFF followed by 1 second ON, repeating
 IQUIN       5 100ms blink(s) OFF followed by 1 second ON, repeating
   
 SUCCESS     1000ms VERYFAST blink followed by SOLID
 #           Custom value in ms for continuous symmetric blinking

 STATES
 ---------------------------------------------------------------------
 In addition to the combinations of COLORS and PATTERNS listed above,
 these standardized LED STATES may be used to indicate payload status:

 ----------  -------------   ---------------------------------------------
 SETUP       M SOLID         Magenta solid

 FAIL        R SLOW          Red slow blink
   FAIL1     R SLOW          Red slow blink
   FAIL2     R FAST          Red fast blink
   FAIL3     R VERYFAST      Red very fast blink

 ATTACK      Y SINGLE        Yellow single blink
   STAGE1    Y SINGLE        Yellow single blink
   STAGE2    Y DOUBLE        Yellow double blink
   STAGE3    Y TRIPLE        Yellow triple blink
   STAGE4    Y QUAD          Yellow quadruple blink
   STAGE5    Y QUIN          Yellow quintuple blink

 SPECIAL     C ISINGLE       Cyan inverted single blink
   SPECIAL1  C ISINGLE       Cyan inverted single blink
   SPECIAL2  C IDOUBLE       Cyan inverted double blink
   SPECIAL3  C ITRIPLE       Cyan inverted triple blink
   SPECIAL4  C IQUAD         Cyan inverted quadriple blink
   SPECIAL5  C IQUIN         Cyan inverted quintuple blink
   
 CLEANUP     W FAST          White fast blink
 FINISH      G SUCCESS       Green 1000ms VERYFAST blink followed by SOLID
 
 OFF                         Turns the LED off  

 -----------------------------------------------------------------------------
 
 (\___/)      Find further documentation, repository of payloads,      (\___/)
 (='.'=)      tutorial videos and community support forums at          (='.'=)
 (")_(")      bashbunny.com.                         (C) Hak5 LLC      (")_(")
