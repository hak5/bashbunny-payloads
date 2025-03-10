# Send Messages In Discord Channel-Server

This script can be used to send messages in a specific channel of a Discord text server.

**Category**: Execution

## Description

This script can be used to send messages in a specific channel of a Discord text server.

Open the GUI interface and trough this one open the Discord app, then use the keyboard shortcut CTRL-k to open the server chat.

**Note** that if you want to send a message within a chat that has a very common name such as #general then be aware that it is very likely that the chat of the server in which you want to send the message will not be selected but some other. If, on the other hand, you want to send it in a chat with a somewhat more specific name such as wifi-pineapple (Hak5's text channel) then almost certainly the channel in which you wish to send the message will be selected.

![](https://i.ibb.co/2cMgxFz/1.png)
![](https://i.ibb.co/QjZfwv1/2.png)

## Dependencies

* Discord Installed
* Internet connection

## Settings

- If, for example, the server is Hak5 and the channel in which you want to send the message is called wifi-pineapple then you should write just wifi-pineapple

    `CHAT_NAME='example'`

- Create, remove or change your messages

    ```
    ...
    [21] MESSAGE1='example'
    [22] MESSAGE2='example'
    [23] MESSAGE3='example'
    ...
    [40] QUACK STRING $MESSAGE1
    [41] QUACK ENTER
    [42] QUACK STRING $MESSAGE2
    [43] QUACK ENTER
    [44] QUACK STRING $MESSAGE3
    [45] QUACK ENTER
    ...
    ```

- This depends on the power of the computer and whether there are upgrades to be done

    `[27] DELAY 6000`

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
      <br>LinkedIn
    </td>
  </tr>
</table>
</div>
