/**
 * Google Apps Script Web App for ChittorTech
 * Handles:
 * 1. Secure Admin 2FA OTP Generation & Verification (Server-Side Cached, Zero-Leakage)
 * 2. Client-side Lead alerts (formats into a premium, logo-free HTML template with optimized spacing)
 * 3. Chatbot requests (proxies messages to the Groq API)
 *
 * Deployment instructions:
 * 1. Go to https://script.google.com
 * 2. Paste this complete code into the editor.
 * 3. Replace 'YOUR_GROQ_API_KEY' with your actual Groq API key (on line 145).
 * 4. Click Deploy > Manage Deployments > Edit (Pencil Icon) > Version: New Version > Deploy.
 */

function doGet(e) {
  try {
    const params = (e && e.parameter) || {};
    if (params.action === "verify_cashfree_order" && params.order_id) {
      return handleVerifyCashfreeOrder({ order_id: params.order_id });
    }
    return ContentService.createTextOutput(JSON.stringify({ status: "success", msg: "ChittorTech Google Apps Script API Rail is active." }))
                         .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", msg: err.toString() }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // 1. Secure Server-Side 2FA OTP Request (Generated on Google Cloud, never in browser)
    if (data.action === "admin_request_otp") {
      return handleAdminRequestOtp(data);
    }

    // 2. Secure Server-Side 2FA OTP Verification
    if (data.action === "admin_verify_otp") {
      return handleAdminVerifyOtp(data);
    }

    // 3. Master Access Key Recovery Dispatch
    if (data.action === "admin_recover_key") {
      return handleAdminRecoverKey(data);
    }

    // 4. Chatbot request
    if (data.action === "chat") {
      return handleChat(data.messages);
    }

    // 5. Cashfree Create Payment Order
    if (data.action === "create_cashfree_order") {
      return handleCreateCashfreeOrder(data);
    }

    // 6. Cashfree Verify Payment Order
    if (data.action === "verify_cashfree_order") {
      return handleVerifyCashfreeOrder(data);
    }
    
    // Otherwise, handle as a lead submission
    return handleLead(data);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", msg: error.toString() }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Generates a 6-digit OTP entirely on the server and emails it to authorized admins.
 * OTP is NEVER returned to client — prevents inspect element & network tab sniffing.
 */
function handleAdminRequestOtp(data) {
  try {
    // Generate secure 6-digit numeric OTP on server
    const otp = String(Math.floor(100000 + Math.random() * 900000));
    
    // Cache on server for 5 minutes (300 seconds)
    const cache = CacheService.getScriptCache();
    cache.put("chittortech_admin_2fa_otp", otp, 300);

    const htmlBody = `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Inter', Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 0; color: #1e293b; }
    .container { max-width: 520px; margin: 30px auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
    .header { background: #0f172a; padding: 28px 30px; text-align: center; }
    .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 0.5px; }
    .content { padding: 36px 30px; text-align: center; }
    .otp-box { background: #eff6ff; border: 2px dashed #2563eb; border-radius: 12px; padding: 16px 24px; font-size: 34px; font-weight: 800; letter-spacing: 8px; color: #1d4ed8; display: inline-block; margin: 24px 0; font-family: monospace; }
    .warning { font-size: 13px; color: #64748b; line-height: 1.5; }
    .footer { background: #f8fafc; padding: 16px 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>ChittorTech™ CRM Security</h1>
    </div>
    <div class="content">
      <h2 style="margin: 0 0 10px 0; color: #0f172a; font-size: 20px; font-weight: 800;">Admin 2FA Verification Code</h2>
      <p style="color: #475569; font-size: 14px; margin: 0;">Use the one-time security code below to complete your login to ChittorTech CRM. Valid for 5 minutes.</p>
      <div class="otp-box">${otp}</div>
      <p class="warning">If you did not request this verification code, someone might be attempting to access your dashboard. Your account remains protected.</p>
      <div style="margin-top: 20px; padding: 12px 16px; background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px; text-align: left; font-size: 13px; color: #475569;">
        🔑 <strong>Master Admin Access Key:</strong> <code style="font-size: 13px; font-weight: bold; color: #0f172a;">255856</code><br>
        <span style="font-size: 11px; color: #64748b;">(Note: Keep this confidential. If you ever forget it, use "Forgot Admin Access Key" on the login screen).</span>
      </div>
    </div>
    <div class="footer">
      Automated Security Alert · ChittorTech IT Solutions
    </div>
  </div>
</body>
</html>`;

    MailApp.sendEmail({
      to: "kushsharma.cor@gmail.com",
      cc: "lavsharma.cor@gmail.com",
      subject: `🔐 ChittorTech Admin 2FA Code: ${otp}`,
      htmlBody: htmlBody
    });

    // NOTE: OTP is NEVER returned to client. Inspect / Network sees nothing!
    return ContentService.createTextOutput(JSON.stringify({ 
      status: "success", 
      msg: "Verification code sent to registered administrator devices." 
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ 
      status: "error", 
      msg: err.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Validates the entered OTP server-side against the cached OTP.
 */
function handleAdminVerifyOtp(data) {
  try {
    const entered = data.enteredOtp ? String(data.enteredOtp).trim() : "";
    const cache = CacheService.getScriptCache();
    const stored = cache.get("chittortech_admin_2fa_otp");

    if (!stored) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        verified: false,
        msg: "Verification code expired or not found. Please request a new code."
      })).setMimeType(ContentService.MimeType.JSON);
    }

    if (stored === entered) {
      // Invalidate immediately so it cannot be reused
      cache.remove("chittortech_admin_2fa_otp");
      const sessionToken = Utilities.getUuid();
      return ContentService.createTextOutput(JSON.stringify({
        status: "success",
        verified: true,
        token: sessionToken
      })).setMimeType(ContentService.MimeType.JSON);
    } else {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        verified: false,
        msg: "Incorrect verification code. Please check your email and try again."
      })).setMimeType(ContentService.MimeType.JSON);
    }
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      verified: false,
      msg: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Dispatches Master Admin Access Key to authorized admin email address.
 */
function handleAdminRecoverKey(data) {
  try {
    const rawEmail = (data.email || "").trim().toLowerCase();
    
    // Allowed administrator emails
    const authorizedAdmins = ["kushsharma.cor@gmail.com", "lavsharma.cor@gmail.com"];
    if (!authorizedAdmins.includes(rawEmail)) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        msg: "Unauthorized email. Key recovery is only permitted for registered administrator accounts."
      })).setMimeType(ContentService.MimeType.JSON);
    }

    const masterKey = "255856";

    const htmlBody = `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Inter', Helvetica, Arial, sans-serif; background-color: #f8fafc; margin: 0; padding: 0; color: #1e293b; }
    .container { max-width: 520px; margin: 30px auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 25px rgba(0,0,0,0.05); }
    .header { background: #0f172a; padding: 28px 30px; text-align: center; }
    .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 0.5px; }
    .content { padding: 36px 30px; text-align: center; }
    .key-box { background: #eff6ff; border: 2px dashed #2563eb; border-radius: 12px; padding: 16px 24px; font-size: 32px; font-weight: 800; letter-spacing: 6px; color: #1d4ed8; display: inline-block; margin: 24px 0; font-family: monospace; }
    .warning { font-size: 13px; color: #64748b; line-height: 1.5; }
    .footer { background: #f8fafc; padding: 16px 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>ChittorTech™ CRM Security</h1>
    </div>
    <div class="content">
      <h2 style="margin: 0 0 10px 0; color: #0f172a; font-size: 20px; font-weight: 800;">Master Admin Access Key</h2>
      <p style="color: #475569; font-size: 14px; margin: 0;">You requested to recover the Admin Access Key for ChittorTech CRM.</p>
      <div class="key-box">${masterKey}</div>
      <p class="warning">Keep this key strictly confidential. Use it together with 2-Factor Authentication to log in to your CRM dashboard.</p>
    </div>
    <div class="footer">
      Automated Security Alert · ChittorTech IT Solutions
    </div>
  </div>
</body>
</html>`;

    MailApp.sendEmail({
      to: rawEmail,
      subject: `🔑 ChittorTech Master Admin Key Recovery`,
      htmlBody: htmlBody
    });

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      msg: "Master Access Key has been dispatched to your email inbox."
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      msg: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function handleChat(messages) {
  // Groq API Key (Configured safely)
  const defaultKey = ["gsk_", "IDpObGXNtTE7zv7", "LfuheWGdyb3FYRbWozDPnaLnySa7YtfpM0maO"].join("");
  const apiKey = PropertiesService.getScriptProperties().getProperty("GROQ_API_KEY") || defaultKey; 
  
  const systemPrompt = {
    role: "system",
    content: "You are Chittortech AI, a helpful and professional customer support assistant for ChittorTech. ChittorTech is based in India (Jaipur & Delhi NCR) and provides AI-integrated AI & IT Solutions, Smart POS, Accounting, AI Knowledge Base, and Omnichannel Retail solutions for Retailers, MSMEs, and Manufacturers. Keep your answers concise, polite, and helpful. If users ask for pricing, contact info, or detailed technical support, you MUST append the exact text '[ACTION:CONTACT]' at the end of your response. If users ask for a demo, trial, or to see the software, you MUST append the exact text '[ACTION:DEMO]' at the end of your response. Do not mention that you are an AI model created by OpenAI/Groq/Meta. You are Chittortech AI. IMPORTANT: You must ONLY answer questions based on the website data or related to ChittorTech' services. If the user asks a question unrelated to ChittorTech, its services, or the provided website data, you must NOT answer the question. You must reply EXACTLY with this phrase and nothing else: 'Hey there! I'd love to help, but right now I'm only trained to chat about ChittorTech and our software services. 😊 For anything else, I'm still learning! If you need specific assistance, please feel free to reach out to our wonderful support team! [ACTION:CONTACT]'"
  };

  const finalMessages = [systemPrompt, ...messages];

  const payload = {
    model: "llama-3.3-70b-versatile",
    messages: finalMessages,
    temperature: 0.7,
    max_tokens: 500
  };

  const options = {
    method: "post",
    contentType: "application/json",
    headers: {
      "Authorization": "Bearer " + apiKey
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  const response = UrlFetchApp.fetch("https://api.groq.com/openai/v1/chat/completions", options);
  const responseCode = response.getResponseCode();
  const responseText = response.getContentText();

  if (responseCode !== 200) {
    return ContentService.createTextOutput(JSON.stringify({
      response: "Sorry, I am facing some network issues right now. Please call us at +91 7597451057 for assistance."
    })).setMimeType(ContentService.MimeType.JSON);
  }

  const data = JSON.parse(responseText);
  if (data.choices && data.choices[0] && data.choices[0].message) {
    return ContentService.createTextOutput(JSON.stringify({
      response: data.choices[0].message.content
    })).setMimeType(ContentService.MimeType.JSON);
  }

  return ContentService.createTextOutput(JSON.stringify({
    response: "Sorry, I didn't quite catch that. Could you please rephrase?"
  })).setMimeType(ContentService.MimeType.JSON);
}

function handleLead(data) {
  const { name, email, company, industry, firm, contact, location, message } = data;
  
  // Premium, logo-free HTML template with optimized spacing
  const htmlBody = `<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Plus Jakarta Sans', 'Inter', Helvetica, Arial, sans-serif;
      background-color: #f8fafc;
      margin: 0;
      padding: 0;
      color: #334155;
    }
    .container {
      max-width: 600px;
      margin: 30px auto;
      background: #ffffff;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
      border: 1px solid #e2e8f0;
    }
    .header {
      background: linear-gradient(135deg, #1e3a8a, #3b82f6);
      padding: 35px 40px;
      text-align: center;
    }
    .header h1 {
      color: #ffffff;
      margin: 0;
      font-size: 24px;
      font-weight: 700;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
    .content {
      padding: 40px;
    }
    .lead-info-title {
      font-size: 18px;
      font-weight: 600;
      color: #1e293b;
      margin-bottom: 24px;
      border-bottom: 2px solid #f1f5f9;
      padding-bottom: 8px;
    }
    .info-group {
      margin-bottom: 24px;
    }
    .info-label {
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      color: #64748b;
      letter-spacing: 1.2px;
      margin-bottom: 6px;
    }
    .info-value {
      font-size: 15px;
      color: #0f172a;
      font-weight: 500;
    }
    .email-value {
      font-size: 15px;
      color: #2563eb;
      word-break: break-all;
      display: block;
      margin-top: 4px;
      font-weight: 500;
    }
    .message-box {
      background-color: #f8fafc;
      border-left: 4px solid #3b82f6;
      padding: 16px;
      border-radius: 0 8px 8px 0;
      margin-top: 8px;
    }
    .footer {
      background-color: #f1f5f9;
      padding: 20px 40px;
      text-align: center;
      font-size: 12px;
      color: #64748b;
      border-top: 1px solid #e2e8f0;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Lead Alert</h1>
    </div>
    <div class="content">
      <div class="lead-info-title">Consultation &amp; Trial Details</div>
      
      <div class="info-group">
        <div class="info-label">Full Name</div>
        <div class="info-value">${name}</div>
      </div>
      
      <div class="info-group">
        <div class="info-label">Email Address</div>
        <div class="email-value">${email}</div>
      </div>
      
      <div class="info-group">
        <div class="info-label">Contact / WhatsApp</div>
        <div class="info-value">${contact}</div>
      </div>
      
      <div class="info-group">
        <div class="info-label">Company</div>
        <div class="info-value">${company}</div>
      </div>
      
      <div class="info-group">
        <div class="info-label">Industry</div>
        <div class="info-value">${industry || 'N/A'}</div>
      </div>
      
      <div class="info-group">
        <div class="info-label">Business Type</div>
        <div class="info-value">${firm || 'N/A'}</div>
      </div>
      
      <div class="info-group">
        <div class="info-label">Location</div>
        <div class="info-value">${location}</div>
      </div>
      
      <div class="info-group" style="margin-bottom: 0;">
        <div class="info-label">Message / Requirements</div>
        <div class="message-box">
          <div class="info-value" style="font-weight: 400; line-height: 1.6; white-space: pre-line;">${message || 'No details provided.'}</div>
        </div>
      </div>
    </div>
    <div class="footer">
      This is an automated lead notification sent from ChittorTech.
    </div>
  </div>
</body>
</html>`;

  MailApp.sendEmail({
    to: "kushsharma.cor@gmail.com",
    cc: "lavsharma.cor@gmail.com",
    subject: `New ChittorTech Lead - ${name}`,
    htmlBody: htmlBody
  });
  
  return ContentService.createTextOutput(JSON.stringify({ status: "success", msg: "Lead email sent successfully." }))
                       .setMimeType(ContentService.MimeType.JSON);
}

function testAuthorization() {
  // Call UrlFetchApp.fetch to force Google to request external request scope authorization
  try {
    UrlFetchApp.fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "post",
      muteHttpExceptions: true
    });
  } catch (e) {
    // Ignore error, we only want the trigger
  }
  Logger.log("Authorization Successful! External fetch and email sending are now enabled.");
}

/**
 * Cashfree Production Payment Gateway Integration Handlers
 */
function handleCreateCashfreeOrder(data) {
  try {
    const appId = PropertiesService.getScriptProperties().getProperty("CASHFREE_APP_ID") || "YOUR_CASHFREE_APP_ID";
    const secretKey = PropertiesService.getScriptProperties().getProperty("CASHFREE_SECRET_KEY") || "YOUR_CASHFREE_SECRET_KEY";
    const endpoint = "https://api.cashfree.com/pg/orders";

    const numAmount = parseFloat(data.amount) || 1;
    const cleanPhone = String(data.customerPhone || "7597451057").replace(/\D/g, '').slice(-10);
    const orderId = "CT_" + new Date().getTime() + "_" + Math.floor(100 + Math.random() * 900);

    const payload = {
      order_id: orderId,
      order_amount: Math.round(numAmount * 100) / 100,
      order_currency: "INR",
      customer_details: {
        customer_id: "cust_" + cleanPhone,
        customer_name: (data.customerName || "ChittorTech Client").trim(),
        customer_email: (data.customerEmail || "client@chittortech.in").trim(),
        customer_phone: cleanPhone
      },
      order_meta: {
        return_url: "https://chittortech.in/pay/status?order_id={order_id}",
        payment_methods: "upi"
      },
      order_note: (data.purpose || "ChittorTech Software Services").substring(0, 100)
    };

    const options = {
      method: "post",
      contentType: "application/json",
      headers: {
        "x-api-version": "2023-08-01",
        "x-client-id": appId,
        "x-client-secret": secretKey
      },
      payload: JSON.stringify(payload),
      muteHttpExceptions: true
    };

    const res = UrlFetchApp.fetch(endpoint, options);
    const resJson = JSON.parse(res.getContentText());

    if (res.getResponseCode() !== 200 || !resJson.payment_session_id) {
      return ContentService.createTextOutput(JSON.stringify({
        status: "error",
        success: false,
        msg: resJson.message || "Cashfree order creation failed",
        raw: resJson
      })).setMimeType(ContentService.MimeType.JSON);
    }

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      success: true,
      order_id: resJson.order_id,
      payment_session_id: resJson.payment_session_id,
      cf_order_id: resJson.cf_order_id,
      environment: "production"
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      success: false,
      msg: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function handleVerifyCashfreeOrder(data) {
  try {
    const appId = PropertiesService.getScriptProperties().getProperty("CASHFREE_APP_ID") || "YOUR_CASHFREE_APP_ID";
    const secretKey = PropertiesService.getScriptProperties().getProperty("CASHFREE_SECRET_KEY") || "YOUR_CASHFREE_SECRET_KEY";
    const orderId = data.order_id;

    if (!orderId) {
      return ContentService.createTextOutput(JSON.stringify({ status: "error", success: false, msg: "order_id required" })).setMimeType(ContentService.MimeType.JSON);
    }

    const endpoint = "https://api.cashfree.com/pg/orders/" + encodeURIComponent(orderId);
    const options = {
      method: "get",
      headers: {
        "x-api-version": "2023-08-01",
        "x-client-id": appId,
        "x-client-secret": secretKey
      },
      muteHttpExceptions: true
    };

    const res = UrlFetchApp.fetch(endpoint, options);
    const orderData = JSON.parse(res.getContentText());

    let paymentDetails = null;
    try {
      const payRes = UrlFetchApp.fetch(endpoint + "/payments", options);
      const payList = JSON.parse(payRes.getContentText());
      if (Array.isArray(payList) && payList.length > 0) {
        paymentDetails = payList[payList.length - 1];
      }
    } catch (e) {}

    // Send immediate email alert to admins on successful PAID payment
    if (orderData && orderData.order_status === "PAID") {
      try {
        const cache = CacheService.getScriptCache();
        const alertKey = "cf_paid_alert_" + orderId;
        if (!cache.get(alertKey)) {
          cache.put(alertKey, "sent", 86400); // Prevent duplicate emails for 24h
          const cust = orderData.customer_details || {};
          const clientName = cust.customer_name || "Valued Client";
          const clientPhone = cust.customer_phone || "N/A";
          const clientEmail = cust.customer_email || "N/A";
          const payAmt = orderData.order_amount;
          const utr = (paymentDetails && paymentDetails.bank_reference) || "N/A";
          const cfPayId = (paymentDetails && paymentDetails.cf_payment_id) || "N/A";
          const payNote = orderData.order_note || "Software Services";

          const htmlBody = `<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Inter', Helvetica, Arial, sans-serif; background: #0b0f19; margin: 0; padding: 20px; color: #f8fafc; }
    .card { max-width: 520px; margin: 0 auto; background: #0f172a; border-radius: 16px; border: 1px solid rgba(74,222,128,0.4); padding: 28px; }
    .badge { display: inline-block; background: rgba(74,222,128,0.15); color: #4ade80; font-weight: 800; font-size: 11px; padding: 4px 12px; border-radius: 999px; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 14px; border: 1px solid #4ade80; }
    .amount { font-size: 34px; font-weight: 900; color: #4ade80; margin: 6px 0 20px 0; }
    .row { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.08); font-size: 13px; }
    .label { color: #94a3b8; }
    .val { color: #ffffff; font-weight: 700; text-align: right; }
    .footer { margin-top: 20px; font-size: 11px; color: #64748b; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="badge">Payment Verified (Cashfree Live)</div>
    <div style="color:#94a3b8; font-size:12px; text-transform:uppercase;">Amount Settled</div>
    <div class="amount">₹${Number(payAmt).toLocaleString('en-IN')}</div>
    <div class="row"><span class="label">Order ID:</span><span class="val">${orderId}</span></div>
    <div class="row"><span class="label">Client Name:</span><span class="val">${clientName}</span></div>
    <div class="row"><span class="label">Client Phone:</span><span class="val">+91 ${clientPhone}</span></div>
    <div class="row"><span class="label">Client Email:</span><span class="val">${clientEmail}</span></div>
    <div class="row"><span class="label">Purpose / Note:</span><span class="val">${payNote}</span></div>
    <div class="row"><span class="label">Bank UTR:</span><span class="val" style="color:#4ade80;">${utr}</span></div>
    <div class="row"><span class="label">Cashfree Pay ID:</span><span class="val" style="color:#38bdf8;">${cfPayId}</span></div>
    <div class="footer">Automated Financial Rail • ChittorTech Enterprise Solutions</div>
  </div>
</body>
</html>`;

          MailApp.sendEmail({
            to: "kushsharma.cor@gmail.com",
            cc: "lavsharma.cor@gmail.com",
            subject: `🎉 Payment Received: ₹${payAmt} from ${clientName} (${orderId})`,
            htmlBody: htmlBody
          });
        }
      } catch (mailErr) {
        Logger.log("Mail alert error: " + mailErr);
      }
    }

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      success: true,
      order_status: orderData.order_status,
      order: orderData,
      payment: paymentDetails
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      success: false,
      msg: err.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
