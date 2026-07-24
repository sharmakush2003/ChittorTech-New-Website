<?php
header('Content-Type: application/json');

$response = [
    "curl_exists" => function_exists('curl_init'),
    "allow_url_fopen" => ini_get('allow_url_fopen')
];

echo json_encode($response);
