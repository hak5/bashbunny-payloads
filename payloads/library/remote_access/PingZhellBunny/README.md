**Title: PingZhellBunny**

Author: 0iphor13

Version: 1.3

What is PingZhellBunny?
#
*Imagine a scenario in which communication to and from the server is protected and filtered by a firewall and does not allow TCP shell communication to take place on any listening port (both reverse and bind TCP connection).*
*But many environments allow ping requests to be sent and received. Ping requests work on the ICMP protocol.*
*ICMP stands for Internet Control Message Protocol; it is used by network devices’ query and error messages. ICMP differs from the widely used TCP and UDP protocols because ICMP is not used for transferring data between network devices.*
*When a device wants to test connectivity to another device, it uses the PING tool (ICMP communication) to send an ECHO REQUEST and waits for an ECHO RESPONSE.*
*The client ICMP agent (Bunny.pl) listens for ICMP packets from a specific host and uses the data in the packet for command execution.*
*The server ICMP Agent (Bunny.pl) sends ICMP packets to connect to the victim running a custom ICMP agent (PingZhell.ps1) and sends it commands to execute.*
#
There you go, a reverse shell.

**Instruction:**

Upload Bunny.pl onto your attacking machine.
Install dependencies, if needed:
- IO::Socket
- NetPacket::IP
- NetPacket::ICMP

Disable ICMP replies by the OS:
    `sysctl -w net.ipv4.icmp_echo_ignore_all=1`

Start Bunny.pl -> perl Bunny.pl
#
!!!Insert the IP of your attacking machine into PingZhell.ps1!!!
#
<p>Plug in Bashbunny with PingZhellBunny equipped.<br>
Achieve reverse shell.<br>
   run away <3</p>


Credit for code and ideas:
- bdamele
- samratashok
- krabelize
