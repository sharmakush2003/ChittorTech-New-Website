<?php
header('Content-Type: application/json');
include 'db.php';  

$input = json_decode(file_get_contents("php://input"), true);

$lead_name = $conn ? mysqli_real_escape_string($conn, $input['lead_name'] ?? '') : addslashes($input['lead_name'] ?? '');
$phone     = $conn ? mysqli_real_escape_string($conn, $input['phone'] ?? '') : addslashes($input['phone'] ?? '');
$message   = $conn ? mysqli_real_escape_string($conn, $input['message'] ?? '') : addslashes($input['message'] ?? '');
$source    = 'WhatsApp Icon';
$response  = [];

if (!empty($lead_name) && !empty($phone)) {

    // --- Insert Lead ---
    $insert = false;
    if ($conn) {
        $insertSql = "INSERT INTO leads_master (lead_name, phone, message, source, created_at)
                      VALUES ('$lead_name', '$phone', '$message', '$source', NOW())";
        $insert = mysqli_query($conn, $insertSql);
    }

    if ($insert || !$conn) {
        // --- Call WhatsApp API ---
        $apiUrl = "https://wa20.nuke.co.in/v5/api/index.php/addbroadcast";
        $token  = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NjA3MDY0NDYsImRhdGEiOnsidXNlcm5hbWUiOiJEaWdpZnlfc29mdCIsIm5hbWUiOiJEaWdpZnlfc29mdCJ9fQ.lbhITMYPzs0RvDRf-YhqbJ5r63rFUPnInfTnIG_T998";


        $payload = [
            "broadcast_service" => "whatsApp_credits",
            "broadcast_name"    => "Website Lead - " . $lead_name,
            "template_id"       => "digify",
            "contacts"          => preg_replace('/\D/', '', $phone)
        ];

        $ch = curl_init($apiUrl);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            "Authorization: $token",
            "Content-Type: application/json"
        ]);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));

        $apiResponse = curl_exec($ch);
        $error = curl_error($ch);
        curl_close($ch);

        $response['status'] = 'success';
        $response['msg'] = 'Lead saved and WhatsApp API triggered.';
        $response['api_response'] = json_decode($apiResponse, true);

    } else {
        $response['status'] = 'error';
        $response['msg'] = 'Failed to insert lead.';
        $response['sql_error'] = $conn ? mysqli_error($conn) : 'No database connection';
    }
} else {
    $response['status'] = 'error';
    $response['msg'] = 'Missing required fields.';
}

echo json_encode($response);
