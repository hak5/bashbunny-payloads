# Edit The Default Real App With An Arbitrary

A script used to download a modified application on the target computer that will be executed insted off the original one without notify it to the user.

**Category**: Execution

## Description

A script used to download a modified application on the target computer that will be executed insted off the original one without notify it to the user.

The script will download the zip archive in wich you should have the modified application, then unzip the archive and remove the original zip, then replace the original desktop file with the one that is present on the archive.

## Getting Started

### Dependencies

* sudo password (so the permissions)
* Internet Connection
* Original application installed 

### Settings

- Set the link from which to download the zipper archive

  ```shell
  ARBITRARY_APP_LINK='example.com'
  ```

- You must set the desktop file path present in the zip file, if i.e. you have the app name Signal and the desktop file path is Signal/files/signal you should put the path Signal/files/signal

  ```shell
  PATH_TO_DESKTOP_FILE='example'
  ```

- You must know the original desktop name file, if you don't know it you can rich this information download the app on you system and going to /usr/share/applications/ searching this one app, i.e. the desktop file name of Signal application is signal-desktop.desktop, so in this case you should put signal-desktop.desktop

  ```shell
  ORIGINAL_DESKTOP_FILE_NAME='example'
  ```

- Sudo permissions password

  ```shell
  SUDO-PSWD='example'
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
