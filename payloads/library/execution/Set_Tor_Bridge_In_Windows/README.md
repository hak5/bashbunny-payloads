# Set Tor Bridge in Windows

Introducing the "Set Tor Bridge in Windows" payload a DuckyScript payload designed for Bash Bunny. This versatile payload empowers users to manually configure Tor bridges, enabling the selection of any bridge of their choice. With the ease of customization, users can redefine their Tor experience by setting bridges in a way that suits their preferences. This payload not only provides flexibility but also enhances user control over their Tor network settings.

> In Tor, a "bridge" is a server used as an intermediary to help users connect to the Tor network more securely and bypass any restrictions or censorship on accessing Tor. Bridges are often employed when direct access to Tor is blocked or monitored by a firewall or censorship system.
>
> Essentially, when using a bridge, the initial connection is made through the bridge instead of through a standard Tor entry node. This makes it more challenging for censors to identify and block Tor traffic, as the traffic through the bridge appears like regular, non-Tor traffic.
>
> Bridges can be manually configured in the Tor client settings, allowing users to overcome restrictions and access the Tor network in situations where it might otherwise be prevented.

***Source**: What is a bridge\[[1](#sources)]*

**Category**: Execution

## Index

- [Set Tor Bridge in Windows](#set-tor-bridge-in-windows)
- [Payload Description](#payload-description)
- [Note](#note)
- [Sources](#sources)
- [Credits](#credits)

## Payload Description

The following DuckyScript payload is designed to execute a series of commands using the TorBrowser. It requires Tor to be installed before running. Here's a description of the payload's behavior:

1. Opens the Start menu by pressing the GUI (*Windows*) key.
2. Types "*TorBrowser*" and presses Enter to launch the TorBrowser.
3. Executes a sequence of key presses to navigate in the browser:
    
   a. Presses ALT
   
   b. Then 2 times the Left Arrow to position yourself on the "Tools" item

   c. Presses ENTER to open the menu

   d. Up Arrow and ENTER to open the settings page

   e. Write the contstant "Add a new Bridge" to search the bridge section
   
   f. Now the ALT TAB command combination is repeated 12 times. It is seemingly counterintuitive to go backwards, but this strategy allows the use of this payload to be generalized in that it does not change whether other active bridges are already present.
   
   h. Presses Enter to open the Manual Bridge area.
5. Moves the cursor to the text area (*TAB*).
6. Writes the contents of the variables $BRIDGE, $BRIDGE-N, multiple bridges can be entered (*see note 4*).
7. Saves the new settings and closes
8. Closes the TorBrowser using the ALT F4 key combination.

## Note

1) The payload is designed to run on a Windows system and requires Tor to be installed.
2) The variable $BRIDGE is defined at the beginning of the payload to allow the user to specify their own bridge.
3) Ensure that the key sequences are adapted to the specific version of the TorBrowser in use.
4) If you want to add more nodes, you need to enter a new BRIDGE-N variable at the beginning and the STRING + ENTER command when writing nodes. An example below...

```plaintext
[22] BRIDGE1="<an-another-one-bridge>"
...
[55] QUACK STRING $BRIDGE1
[56] QUACK ENTER
```

## Sources

1. What is a bridge? - https://support.torproject.org/censorship/censorship-7/

## Credits

<h2 align="center">Aleff</h2>
<div align=center>
<table>
  <tr>
    <td align="center" width="96">
      <a href="https://github.com/aleff-github">
        <img src=https://github.com/aleff-github/aleff-github/blob/main/img/github.png?raw=true width="48" height="48" />
      </a>
      <br>Github
    </td>
    <td align="center" width="96">
      <a href="https://www.linkedin.com/in/alessandro-greco-aka-aleff/">
        <img src=https://github.com/aleff-github/aleff-github/blob/main/img/linkedin.png?raw=true width="48" height="48" />
      </a>
      <br>Linkedin
    </td>
  </tr>
</table>
</div>