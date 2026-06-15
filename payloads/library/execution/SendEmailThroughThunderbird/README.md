# Send Email Through Thunderbird

This payload can be used to prank friends by sending emails at top speed from their thunderbird clients.

**Category**: Execution

## Description

This payload can be used to prank friends by sending emails at top speed from their thunderbird clients.

This payload opens a shell (or powershell if running on windows), starts the Thunderbird application, and via the CTRL N sequence starts the email sending functionality that is not protected by any security system. After that it writes the recipient's email, the subject of the email and the body of the message and sends.

## Getting Started

### Windows 11

  ```plaintext
  QUACK DELAY 1000
  QUACK GUI r
  QUACK DELAY 1000
  QUACK STRING powershell
  QUACK ENTER
  QUACK DELAY 2000
  QUACK STRING Start-Process 'thunderbird.exe'
  QUACK ENTER
  QUACK DELAY 4000
  ```

### Ubuntu 23.04

  ```plaintext
  QUACK DELAY 1000
  QUACK CTRL-ALT t
  QUACK DELAY 2000
  QUACK STRING thunderbird
  QUACK ENTER
  QUACK DELAY 4000
  ```

### Dependencies

* Internet Connection
* Thunderbird installed and email configured
* ExecutionPolicy Bypass (for Windows target)

### Settings

- Receiver email address

  ```shell
  EMAIL-ADDRESS='example'
  ```

- Email Subject

  ```shell
  SUBJECT='example'
  ```

- Email Message

  ```shell
  MESSAGE='example'
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
