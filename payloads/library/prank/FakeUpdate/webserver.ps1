$cHOST= 'localhost';
$cPORT= 8080; #Get-Random -Minimum 1024 -Maximum 65535;
$cCHOISE = 'win10'; # mac, xp, win7, win8, win10

$URL = "http://$($cHOST):$($cPORT)/";

$ROUTES = @{
  "GET /mac" = { return [IO.File]::ReadAllText("$($PSScriptRoot)/mac/index.html") };
  "GET /win7" = { return [IO.File]::ReadAllText("$($PSScriptRoot)/win7/index.html") };
  "GET /win8" = { return [IO.File]::ReadAllText("$($PSScriptRoot)/win8/index.html") }; 
  "GET /win10" = { return [IO.File]::ReadAllText("$($PSScriptRoot)/win10/index.html") }
};

$LISTENER = New-Object System.Net.HttpListener;
$LISTENER.Prefixes.Add($URL);
$LISTENER.Start();

While ($LISTENER.IsListening) {
  If ($START -eq $null) {
    Start-Process -FilePath "iexplore.exe" -ArgumentList "-k http://localhost:$($cPORT)/$($cCHOISE)" -WindowStyle "Maximized";
    $START=1;
    Start-Sleep -m 2000;
  }
  $CONTEXT = $LISTENER.GetContext();
  $REQUEST = $CONTEXT.Request;
  $RESPONSE = $CONTEXT.Response;

  $RECEIVED = '{0} {1}' -f $REQUEST.httpMethod, $REQUEST.Url.LocalPath;
  
  $ROUTE = $ROUTES.Get_Item($RECEIVED);
  
  If ($ROUTE -eq $null) {
    $RESPONSE.StatusCode = 404;
  } Else {
    $CONTENT = & $ROUTE;
    $BUFFER = [System.Text.Encoding]::UTF8.GetBytes($CONTENT);
    $RESPONSE.ContentLength64 = $BUFFER.Length;
    $RESPONSE.OutputStream.Write($BUFFER, 0, $BUFFER.Length);
  }
  $RESPONSE.Close();
  Remove-ItemProperty -Path 'HKCU:\Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU' -Name '*' -ErrorAction SilentlyContinue
  EXIT;
}