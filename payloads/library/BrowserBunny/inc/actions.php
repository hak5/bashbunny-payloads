<?php
if($_POST) {
	$root = "/root/udisk/payloads";
	include $_SERVER['DOCUMENT_ROOT'].'/inc/parsedown.php';
	$Parsedown = new Parsedown();
	include $_SERVER['DOCUMENT_ROOT'].'/inc/BrowserBunny.php';
	$BrowserBunny = new BrowserBunny();

	switch($_POST['action']) {
		case 'get_payload':
			
			$payload = strip_tags($_POST['payload']);
			$valid = $BrowserBunny->is_valid_payload($payload);
			if($valid) {
				$file = $Parsedown->text(file_get_contents($root."/library/$payload/README.md"));
				echo json_encode(array('success'=>true, 'payload'=>$payload,'readme'=>$file));
			} else {
				echo json_encode(array('success'=>false,'payload'=>$payload,'message'=>'Payload not found...'));
			}
			
		break;
		case 'get_attackmode':
			
			$payload = strip_tags($_POST['payload']);
			$valid = $BrowserBunny->is_valid_payload($payload);
			if($valid) {
				$out = [];
				$cmd = 'grep -R "ATTACKMODE" '.$root.'/library/'.$payload.'/payload.txt';
				exec($cmd, $out);
				echo json_encode(array('success'=>true, 'payload'=>$payload,'attackmodes'=>implode(",", $out)));
			} else {
				echo json_encode(array('success'=>false,'payload'=>$payload,'message'=>'Payload not found...'));
			}
			
		break;
		case 'get_existing':
			
			$target = preg_replace("/\/inc.*$/", "", $BrowserBunny->target_dir);
			$file = $Parsedown->text(file_get_contents($root."/$target/README.md"));
			echo json_encode(array('success'=>true,'target'=>$target,'readme'=>$file));
			
		break;
		case 'move_payload':
			
			$payload = strip_tags($_POST['payload']);
			$attack_modes = json_decode(strip_tags($_POST['attack_modes']));
			$valid = $BrowserBunny->is_valid_payload($payload);
			if($valid) {
				//pwd is run where ever the BrowserBunny is called from, so remove all trailing chars, but the "webroot"
				$target_dir = preg_replace("/\/inc.*$/", "", $BrowserBunny->target_dir);
				$rmout = [];
				$cmd = 'rm -r '.$BrowserBunny->root.'/'.$target_dir.'/*';
				exec($cmd, $rmout);
				if(count($rmout)) {
					echo json_encode(array('success'=>false,'payload'=>$payload,'debug'=>$cmd."\n".implode("\n", $rmout)));
				} else {
					$out = [];
					$cmd = 'cp -r '.$BrowserBunny->root.'/library/'.$payload.'/* '.$BrowserBunny->root.'/'.$target_dir.'/. && sync';
					exec($cmd, $out);
					if(count($out)) { 
						echo json_encode(array('success'=>false,'payload'=>$payload,'debug'=>$cmd."\n".implode("\n", $out)));
					} else {

						$path_to_file = $BrowserBunny->root.'/'.$target_dir.'/payload.txt';
						$file_contents = file_get_contents($path_to_file);
						foreach($attack_modes as $attack_mode=>$is_active) {
							if($is_active) {
								$file_contents = str_replace("#".$attack_mode,$attack_mode,$file_contents);
							} else { 
								$file_contents = str_replace($attack_mode,"#".$attack_mode,$file_contents);
								$file_contents = str_replace("##".$attack_mode,"#".$attack_mode,$file_contents);
							}
						}
						file_put_contents($path_to_file,$file_contents);

						echo json_encode(array('success'=>true,'payload'=>$payload,'attack_modes'=>$attack_modes));
					}
				}
			} else {				
				echo json_encode(array('success'=>false,'payload'=>$payload,'message'=>'Payload not found...'));
			}
			
		break;
		case 'console':
			
			$out = [];
			exec(urldecode($_POST['cmd']), $out);
			echo json_encode(array('success'=>true,'output'=>htmlentities(implode("\n", $out))));
			
		break;

		default:
			echo json_encode(array('success'=>false));
		break;
	}
}