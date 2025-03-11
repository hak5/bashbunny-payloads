 
# Change Network Configuration

A script used to change the network configuration on a GNU/Linux machine.

**Category**: Execution

## Description

A script used to change the network configuration on a GNU/Linux machine.

It opens a shell, retrieves the network card name, sets the network configuration, and erases any traces of the changes made.

## Getting Started

### Dependencies

* Sudo password (so the permissions)

### Settings

* Set the sudo password

  ```shell
  # 1) You need to know the sudo password and replace 'example' with this
  SUDO_PASS='example'
  ```

* Change as you want the network configuration

  ```shell
  # 2) Set your NEW_IP i.e. 192.168.1.100
  NEW_IP='example'
  # 3) Set your NEW_MASK i.e. 255.255.255.0
  NEW_MASK='example'
  # 4) Set your NEW_GATEWAY i.e.192.168.1.1
  NEW_GATEWAY='example'
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
