<?php

require_once "status.class.php";
$status = new MinecraftServerStatus();
$ip = $_POST ["address"];
if (!isset($ip)) {
    $ip = "afteremerald.us";
}
$port = $_POST ["port"];
if (!isset($port)) {
    $port = 25565;
}
$response = $status->getStatus ( $ip, $port, '1.8.*');
if (! $response) {
    echo "Server is Offline";
} else {
    echo preg_replace("§[0-z]", "", json_encode ( $response));
}
