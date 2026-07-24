<?php
// broadcast.php — WhatsApp Broadcast Sender (simple web form + cURL)

// === CONFIG ===
$endpoint = 'https://wa.goshort.in/v5/api/index.php/addbroadcast';
$bearerToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3NjA3MDY0NDYsImRhdGEiOnsidXNlcm5hbWUiOiJEaWdpZnlfc29mdCIsIm5hbWUiOiJEaWdpZnlfc29mdCJ9fQ.lbhITMYPzs0RvDRf-YhqbJ5r63rFUPnInfTnIG_T998';
// ==============

$response = '';
$status = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = [
        "broadcast_service" => trim($_POST['broadcast_service']),
        "broadcast_name"    => trim($_POST['broadcast_name']),
        "template_id"       => trim($_POST['template_id']),
        // send as array
        "contacts"          => array_map('trim', explode(',', $_POST['contacts']))
    ];

    $ch = curl_init($endpoint);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST           => true,
        CURLOPT_HTTPHEADER     => [
            'Content-Type: application/json',
            'Authorization: Bearer ' . $bearerToken
        ],
        CURLOPT_POSTFIELDS     => json_encode($data, JSON_UNESCAPED_SLASHES)
    ]);

    $response = curl_exec($ch);
    if ($response === false) {
        $status = 'cURL Error: ' . curl_error($ch);
    } else {
        $status = 'HTTP ' . curl_getinfo($ch, CURLINFO_HTTP_CODE);
    }
    curl_close($ch);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>WhatsApp Broadcast Sender</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body { font-family: Arial, sans-serif; background:#f5f7fa; padding:40px; color:#333; }
.container { max-width:600px; margin:auto; background:#fff; padding:25px; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.1); }
h2 { display:flex; align-items:center; gap:10px; color:#128C7E; }
svg { width:26px; height:26px; }
label { display:block; margin-top:15px; font-weight:600; }
input, textarea { width:100%; padding:10px; border:1px solid #ccc; border-radius:8px; margin-top:6px; font-size:14px; }
textarea { resize:vertical; min-height:60px; }
button { margin-top:20px; background:#25D366; color:#fff; border:none; padding:12px 20px; font-size:16px; border-radius:8px; cursor:pointer; display:flex; align-items:center; gap:8px; }
button:hover { background:#1eb854; }
.response { margin-top:25px; white-space:pre-wrap; background:#f0f0f0; padding:10px; border-radius:6px; font-family:monospace; font-size:13px; }
</style>
</head>
<body>
<div class="container">
  <h2>
    <svg viewBox="0 0 32 32"><path fill="#25D366" d="M16 0C7.2 0 0 7.1 0 15.9c0 2.8.7 5.5 2 7.9L0 32l8.5-2.2c2.3 1.2 4.9 1.8 7.5 1.8 8.8 0 16-7.1 16-15.9S24.8 0 16 0z"/><path fill="#FFF" d="M24 21.2c-.3-.1-1.8-.9-2-1-.3-.1-.5-.2-.7.2-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-1.6-.8-2.8-1.4-3.9-3.1-.3-.4.3-.4.9-1.3.1-.2.1-.3 0-.5-.1-.1-.7-1.6-.9-2.3-.2-.6-.5-.5-.7-.6-.2 0-.4 0-.6 0-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.5s1 2.8 1.2 3.1c.1.2 2.3 3.4 5.6 4.6 3.3 1.2 3.3.8 3.9.7.6-.1 1.8-.7 2.1-1.4.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.3z"/></svg>
    WhatsApp Broadcast Sender
  </h2>
  <form method="POST">
    <label>Broadcast Service</label>
    <input type="text" name="broadcast_service" value="whatsApp_credits" required>

    <label>Broadcast Name</label>
    <input type="text" name="broadcast_name" value="testingggg" required>

    <label>Template ID</label>
    <input type="text" name="template_id" value="digify" required>

    <label>Contacts (comma separated)</label>
    <textarea name="contacts" placeholder="917425016636,919999888777" required>917425016636</textarea>

    <button type="submit">
      <svg viewBox="0 0 24 24"><path fill="white" d="M2 21l21-9L2 3v7l15 2-15 2z"/></svg>
      Send Broadcast
    </button>
  </form>

  <?php if ($_SERVER['REQUEST_METHOD'] === 'POST'): ?>
  <div class="response">
<b>Status:</b> <?= htmlspecialchars($status) . "\n\n" ?>
<b>Sent JSON:</b>
<?= htmlspecialchars(json_encode($data, JSON_PRETTY_PRINT)) . "\n\n" ?>
<b>Response:</b>
<?= htmlspecialchars($response ?: 'No response') ?>
  </div>
  <?php endif; ?>
</div>
</body>
</html>
