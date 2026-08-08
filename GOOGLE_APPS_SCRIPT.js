/**
 * Google Apps Script Web App for ChittorTech
 * Handles:
 * 1. Client-side Lead alerts (formats into a premium, logo-free HTML template with optimized spacing)
 * 2. Chatbot requests (proxies messages to the Groq API)
 *
 * Deployment instructions:
 * 1. Go to https://script.google.com
 * 2. Paste this code into the editor.
 * 3. Replace 'YOUR_GROQ_API_KEY' with your actual Groq API key.
 * 4. Click Deploy > New Deployment.
 * 5. Set Select type to 'Web app', Description to 'ChittorTech API v3', Execute as 'Me', Who has access to 'Anyone'.
 * 6. Click Deploy and copy the Web App URL.
 * 7. Put this URL in your GitHub repository environment config or local .env.local file.
 */

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Check if it is a chatbot request
    if (data.action === "chat") {
      return handleChat(data.messages);
    }
    
    // Otherwise, handle as a lead submission
    return handleLead(data);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", msg: error.toString() }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}

function handleChat(messages) {
  // Replace this with your actual Groq API Key
  const apiKey = "YOUR_GROQ_API_KEY"; 
  
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
    to: "Kushsharma.cor@gmail.com",
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

function doGet(e) {
  try {
    return ContentService.createTextOutput(JSON.stringify({ 
      status: "success", 
      msg: "ChittorTech API is active and healthy." 
    })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 
      status: "error", 
      msg: error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

