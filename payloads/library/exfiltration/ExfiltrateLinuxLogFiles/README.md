# Exfiltrate Linux Log Files

A script used to take linux logs.

**Category**: Exfiltration, Execution

## Description

A script used to take linux logs.

Opens a shel, zip all zippable (R permission) content of the log folder, send the zip into the dropbox folder, delete tmp folder.

## Getting Started

### Dependencies

* Internet Connection
* Linux System
* * Terminal that can be opened by the shortcommand CTRL-ALT t
* DropBox Account for the access token

### Settings

* Set your dropbox access token

  ```shell
  DROPBOX_ACCESS_TOKEN='example'
  ```

* Change, if you want, the folder path. Pay attention to the fact that this payload is set up to know the user name of the machines, which is identified via the variable $USER_NAME

  ```shell
  FOLDER_PATH='/home/$USER_NAME/tmp/'
  ```

* Change, if you want, the log path

  ```shell
  LOG_PATH='/var/log/'
  ```

* Change (if you think that it is necessary) the delay of the zipping operation

  ```plaintext
  # Delay of zipping operation - it depends
  QUACK DELAY 10000
  ...
  # Send timing - it depends
  QUACK DELAY 5000
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
