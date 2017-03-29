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

<div id="page-container">
    <div class="navbar navbar-default navbar-fixed-top">
        <div class="navbar-collapse collapse">
            <ul class="nav navbar-nav">
                <li><a href="javascript:;" class="nav-btn" id="nb-payloads">Payloads</a></li>
                <li><a href="javascript:;" class="nav-btn" id="nb-console">Console</a></li>
                <li><a href="javascript:;" class="nav-btn" id="nb-help">Help</a></li>
            </ul>
        </div>
    </div>
    <div id="content-container">
        <h1 id="main-title">
            <div id="ascii">
<pre>
 _____ _____ _____ _ _ _ _____ _____ _____ _____ _____ _____ _____ __ __ 
| __  | __  |     | | | |   __|   __| __  | __  |  |  |   | |   | |  |  |  (\___/)
| __ -|    -|  |  | | | |__   |   __|    -| __ -|  |  | | | | | | |_   _|  (='.'=)
|_____|__|__|_____|_____|_____|_____|__|__|_____|_____|_|___|_|___| |_|    (")_(")
<pre>
            </div>
            <span id="page-id"></span>
        </h1>
        <?php
            include $_SERVER['DOCUMENT_ROOT'].'/inc/BrowserBunny.php';
            $BrowserBunny = new BrowserBunny();
        ?>
        
        <!-- Page - Switch Payloads -->
        <div class="page" id="page-payloads">
            <div id="payload-list-target"><?php echo $BrowserBunny->display_payload_list(); ?></div>
            <div id="readme-target"></div>
        </div>

        <!-- Page - Console -->
        <div class="page" id="page-console"><?php echo $BrowserBunny->display_console(); ?></div>


        <!-- Page - Help -->
        <div class="page" id="page-help">Go fuck yourself. (coming soon)</div>


    </div>
</div>

    <script type="text/javascript" src="inc/js/jquery.min.js"></script>
    <script type="text/javascript" src="inc/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="inc/js/quick_commands.js"></script>
    <script type="text/javascript" src="inc/js/script.js"></script>
</body>
</html>