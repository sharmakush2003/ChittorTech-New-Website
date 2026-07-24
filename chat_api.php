<?php
ini_set('display_errors', 0);
error_reporting(0);
header('Content-Type: application/json');

// Get POST data
$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);

if (!isset($input['messages'])) {
    echo json_encode(["error" => "No messages provided"]);
    exit;
}

$messages = $input['messages'];

// Add system prompt to the beginning
$systemPrompt = [
    "role" => "system",
    "content" => "You are Digify AI, a helpful and professional customer support assistant for Digify Soft Solutions. Digify Soft Solutions is based in India (Jaipur & Delhi NCR) and provides AI-integrated ERP, Smart POS, Accounting, CRM, and Omnichannel Retail solutions for Retailers, MSMEs, and Manufacturers. Keep your answers concise, polite, and helpful. If users ask for pricing, contact info, or detailed technical support, you MUST append the exact text '[ACTION:CONTACT]' at the end of your response. If users ask for a demo, trial, or to see the software, you MUST append the exact text '[ACTION:DEMO]' at the end of your response. Do not mention that you are an AI model created by OpenAI/Groq/Meta. You are Digify AI. IMPORTANT: You must ONLY answer questions based on the website data or related to Digify Soft Solutions' services. If the user asks a question unrelated to Digify Soft Solutions, its services, or the provided website data, you must NOT answer the question. You must reply EXACTLY with this phrase and nothing else: 'Hey there! I'd love to help, but right now I'm only trained to chat about Digify Soft Solutions and our software services. 😊 For anything else, I'm still learning! If you need specific assistance, please feel free to reach out to our wonderful support team! [ACTION:CONTACT]'"
];

array_unshift($messages, $systemPrompt);

if (file_exists(__DIR__ . '/mail_config.php')) {
    require_once __DIR__ . '/mail_config.php';
}
$apiKey = defined('CHAT_API_KEY') ? CHAT_API_KEY : '';
$url = "https://api.groq.com/openai/v1/chat/completions";

$data = [
    "model" => "llama-3.3-70b-versatile",
    "messages" => $messages,
    "temperature" => 0.7,
    "max_tokens" => 500
];

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $apiKey
]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$error = curl_error($ch);
curl_close($ch);

if ($error || $httpCode !== 200) {
    echo json_encode(["response" => "Sorry, I am facing some network issues right now. Please call us at +91 7425016636 for assistance."]);
    exit;
}

$responseData = json_decode($response, true);

if (isset($responseData['choices'][0]['message']['content'])) {
    $reply = $responseData['choices'][0]['message']['content'];
    echo json_encode(["response" => $reply]);
} else {
    echo json_encode(["response" => "Sorry, I didn't quite catch that. Could you please rephrase?"]);
}

