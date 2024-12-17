<?php
$json = file_get_contents('php://input');
$obj = json_decode($json, true);
$file = $obj["filename"];
$name = "./data/{$file}.csv"; 
file_put_contents($name, $obj["filedata"], FILE_APPEND);
?>