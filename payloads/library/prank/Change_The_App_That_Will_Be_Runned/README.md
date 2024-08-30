# Change The App That Will Be Runned

A script used to prank your friends editing the deafault exec operation of desktop files running other app of wich is clicked confusing the user.

**Category**: Prank

![GIF](https://i.ibb.co/MfqrBQ7/Change-The-App-That-Will-Be-Runned.gif)

## Description

A script used to prank your friends editing the deafault exec operation of desktop files running other app of wich is clicked confusing the user.

The script will run a shell in wich it will mix 2 application

## Getting Started

### Dependencies

* sudo permissions
* Original desktop file names and exec commands
* The apps must be installed in the target

### Settings

- Sudo password to acquire the permissions

  ```shell
  SUDO-PSWD='example'
  ```

- Set the desktop file name, i.e. for Signal it is `/usr/share/applications/signal-desktop` and the exec command is `/opt/Signal/signal-desktop --no-sandbox %U`

  ```shell
  ORIGINAL_DESKTOP_FILE_NAME_1='example'
  ORIGINAL_DESKTOP_EXEC_COMMAND_1='example'
  ORIGINAL_DESKTOP_FILE_NAME_2='example'
  ORIGINAL_DESKTOP_EXEC_COMMAND_2='example'
  ```

### Example

- Config

  ```shell
  SUDO-PSWD='12345'
  ORIGINAL_DESKTOP_FILE_NAME_1='/usr/share/applications/code-oss.desktop'
  ORIGINAL_DESKTOP_EXEC_COMMAND_1='/usr/lib/code-oss/code-oss --unity-launch %F'
  ORIGINAL_DESKTOP_FILE_NAME_2='firefox-esr.desktop'
  ORIGINAL_DESKTOP_EXEC_COMMAND_2='/usr/lib/firefox-esr/firefox-esr %u'
  ```

- Content of ORIGINAL_DESKTOP_FILE_NAME_1

  ```plaintext
  [Desktop Entry]
  Exec=/usr/lib/code-oss/code-oss --unity-launch %F
  ...
  ```

- Content of ORIGINAL_DESKTOP_FILE_NAME_2

  ```plaintext
  [Desktop Entry]
  Exec=Exec=/usr/lib/firefox-esr/firefox-esr %u
  ...
  ```

- Result

  ```shell
  $ cat /usr/share/applications/code-oss.desktop
  [Desktop Entry]
  Exec=Exec=/usr/lib/firefox-esr/firefox-esr %u
  # ...

  $ cat /usr/share/applications/firefox-esr.desktop
  [Desktop Entry]
  Exec=Exec=/usr/lib/code-oss/code-oss --unity-launch %F
  # ...
  ```

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
