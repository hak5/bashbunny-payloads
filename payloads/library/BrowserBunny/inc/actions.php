<?php
if($_POST) {
	include $_SERVER['DOCUMENT_ROOT'].'/inc/parsedown.php';
	$Parsedown = new Parsedown();
	include $_SERVER['DOCUMENT_ROOT'].'/inc/BrowserBunny.php';
	$BrowserBunny = new BrowserBunny();

	switch($_POST['action']) {
		case 'get_payload':
			$payload = strip_tags($_POST['payload']);
			$valid = $BrowserBunny->is_valid_payload($payload);
			if($valid) {
				$file = $Parsedown->text(file_get_contents("/root/udisk/payloads/library/$payload/README.md"));
				echo json_encode(array('success'=>true, 'payload'=>$payload,'readme'=>$file));
			} else {
				echo json_encode(array('success'=>false,'payload'=>$payload,'message'=>'Payload not found...'));
			}
		break;
		case 'get_existing':
			$target = preg_replace("/\/inc.*$/", "", $BrowserBunny->target_dir);
			$file = $Parsedown->text(file_get_contents("/root/udisk/payloads/$target/README.md"));
			echo json_encode(array('success'=>true,'target'=>$target,'readme'=>$file));
		break;
		case 'move_payload':
			$payload = strip_tags($_POST['payload']);
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
					$cmd = 'cp -r '.$BrowserBunny->root.'/library/'.$payload.'/* '.$BrowserBunny->root.'/'.$target_dir.'/.';
					exec($cmd, $out);
					if(count($out)) { 
						echo json_encode(array('success'=>false,'payload'=>$payload,'debug'=>$cmd."\n".implode("\n", $out)));
					} else {
						echo json_encode(array('success'=>true,'payload'=>$payload));
					}
				}
			} else {				
				echo json_encode(array('success'=>false,'payload'=>$payload,'message'=>'Payload not found...'));
			}
		break;

		default:
			echo json_encode(array('success'=>false));
		break;
	}
}