<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>BrowserBunny</title>
    <link href="inc/css/bootstrap.min.css" rel="stylesheet">
    <link href="inc/css/style.css" rel="stylesheet">
</head>
<body>


<div id="payload-list-target">
<?php
include $_SERVER['DOCUMENT_ROOT'].'/inc/BrowserBunny.php';
$BrowserBunny = new BrowserBunny();
// echo "PWD: ".$BrowserBunny->pwd."<br />";
// echo "Target: ".$BrowserBunny->target_dir."<br />";
echo $BrowserBunny->display_payload_list();
?>
</div>
<div id="readme-target"></div>


    <script src="inc/js/jquery.min.js"></script>
    <script src="inc/js/bootstrap.min.js"></script>
    <script src="inc/js/script.js"></script>
</body>
</html>
