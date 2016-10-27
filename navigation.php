<?php

$dir = "/usr/local/var/www/music/blind_guardian/";

$command = '/usr/bin/find -H '.$dir.' -type f -name "*.mp3" -iregex ".*.*"';

exec($command.' | head -n100', $output);
sort($output, SORT_NATURAL);

for($i=0;$i<count($output);$i++) {
	$output[$i] = str_replace($dir,"",$output[$i]);
}

$response = array("data"=>$output);

header('Content-Type: text/json; charset=UTF-8');
echo(json_encode($response));

?>