const { saveLead } = require('./leadService');
let Groq = null;

try {
    Groq = require('groq-sdk');
} catch (e) {
    console.warn('[BotEngine] groq-sdk package not loaded yet.');
}

// User conversational session state tracker
const userSessions = new Map();

// Initialize Groq AI Client if GROQ_API_KEY exists
function getGroqClient() {
    if (process.env.GROQ_API_KEY && Groq) {
        return new Groq({ apiKey: process.env.GROQ_API_KEY });
    }
    return null;
}

// ChittorTech Official Knowledge & AI Persona Prompt
const CHITTORTECH_SYSTEM_PROMPT = `
You are the Official AI Sales & Technical Assistant for ChittorTech Software Solutions (https://chittortech.com).
Your goal is to answer client queries intelligently, concisely, and professionally on WhatsApp, and guide them to book a consultation or request a quote.

About ChittorTech Solutions:
1. Web Development: Custom Next.js, React, Node.js web applications, e-commerce stores, admin portals, high speed, mobile-responsive, SEO-ready.
2. Mobile App Development: Android & iOS app development, React Native, Flutter, secure APIs, payment gateways.
3. Play Store Publishing: Google Play Console setup, app publishing assistance, target API updates, policy compliance resolutions.
4. Search Engine Optimization (SEO): Technical SEO, Google Search Console indexing, high quality backlinks, schema markup, ranking growth.
5. AI Agents & Automations: Custom WhatsApp chatbots, LLM integration, workflow automation, CRM sync.
6. ERP & Retail Systems: Garments ERP, Boutique billing systems, Kirana & Supermarket POS software with WhatsApp invoice integration.

Instructions for your responses:
- Keep responses short, clear, professional, and friendly (suitable for WhatsApp reading).
- Use bullet points and emoji formatting where appropriate.
- Always conclude by offering the user to reply '0' for the Main Menu or leave their Name & City to schedule a technical call.
- If asked about pricing, give a friendly estimate range and offer a custom consultation quote.
- Respond in the language used by the customer (English or Hinglish).
`;

/**
 * Generate AI Response using Groq LLM
 */
async function generateGroqAiResponse(userMessageText, conversationHistory = []) {
    const groq = getGroqClient();
    if (!groq) {
        return null;
    }

    try {
        const messages = [
            { role: 'system', content: CHITTORTECH_SYSTEM_PROMPT },
            ...conversationHistory,
            { role: 'user', content: userMessageText }
        ];

        const chatCompletion = await groq.chat.completions.create({
            messages: messages,
            model: process.env.GROQ_MODEL || 'llama-3.3-70b-versatile',
            temperature: 0.6,
            max_tokens: 450,
        });

        if (chatCompletion.choices && chatCompletion.choices[0] && chatCompletion.choices[0].message) {
            return chatCompletion.choices[0].message.content;
        }
    } catch (err) {
        console.error('[BotEngine ⚠️] Groq AI Generation Error:', err.message);
    }
    return null;
}

/**
 * Main Menu Message Generator
 */
function getMainMenuText() {
    return `👋 *Welcome to ChittorTech Software Solutions!*

We build high-performance web applications, mobile apps, AI solutions, and drive search engine rankings for growing businesses.

Please reply with a number or ask any question:

1️⃣ *Web Development Services* (Custom Websites, Next.js, E-commerce)
2️⃣ *App Development Services* (Android & iOS Mobile Apps)
3️⃣ *Google Play Store Publishing Help* (App Uploads & Policy Compliance)
4️⃣ *Search Engine Optimization (SEO)* (Technical SEO, Backlinks, Ranking)
5️⃣ *AI Agents & Custom Automation* (AI Chatbots, Automation Tools)
6️⃣ *Speak to a Technical Specialist / Request Callback*

💡 _You can also type any custom question directly, and our AI Assistant will answer you instantly!_`;
}

/**
 * Handle incoming message and generate appropriate bot response
 */
async function processIncomingMessage(client, msg) {
    const senderPhone = msg.from;
    const cleanPhone = senderPhone.replace('@c.us', '');
    const userText = (msg.body || '').trim();
    const lowerText = userText.toLowerCase();

    // Fetch or create user session state
    let session = userSessions.get(senderPhone) || { step: 'MAIN_MENU', data: {}, history: [] };
    session.lastActive = new Date();

    // Global reset trigger
    if (['0', 'menu', 'hi', 'hello', 'hey', 'start', 'help', 'chittortech'].includes(lowerText)) {
        session.step = 'MAIN_MENU';
        userSessions.set(senderPhone, session);
        await msg.reply(getMainMenuText());
        return;
    }

    // Process structured menu selections
    if (session.step === 'MAIN_MENU') {
        if (userText === '1') {
            session.step = 'WEB_DEV_MENU';
            userSessions.set(senderPhone, session);
            const reply = `💻 *ChittorTech Web Development Services*

We design & build modern, lightning-fast web applications tailored for high conversions.

*Our Web Capabilities:*
✅ Next.js & React High-Performance Websites
✅ Custom Enterprise Web Portals & Dashboards
✅ E-commerce Online Stores & Payment Integration
✅ Fast Loading, Mobile Responsive & SEO-Ready Architecture

*Reply with an option:*
*A* - Request Web Project Quote / Estimate
*B* - View Portfolio Showcase Link
*0* - Back to Main Menu`;
            await msg.reply(reply);
            return;
        }
        else if (userText === '2') {
            session.step = 'APP_DEV_MENU';
            userSessions.set(senderPhone, session);
            const reply = `📱 *ChittorTech Mobile App Development*

We build robust, cross-platform mobile applications for Android & iOS.

*Our Mobile App Solutions:*
✅ Native & Cross-Platform Mobile Apps
✅ Custom Business & Retail Store Apps
✅ Secure Backend APIs & Real-time Database
✅ Push Notifications & Payment Gateway Setup

*Reply with an option:*
*A* - Request App Cost Estimate
*B* - Schedule a Free Tech Call
*0* - Back to Main Menu`;
            await msg.reply(reply);
            return;
        }
        else if (userText === '3') {
            session.step = 'PLAY_STORE_MENU';
            userSessions.set(senderPhone, session);
            const reply = `🚀 *Google Play Store Publishing Help*

Need help publishing your Android App or resolving Google Play Console policy rejections?

*What We Handle:*
✅ Google Play Console Developer Setup
✅ App Publishing, Release Management & Testing
✅ Target API Level & Policy Compliance Updates
✅ App Store Optimization (ASO) for Higher Downloads

*Reply with an option:*
*A* - Get Play Store Publishing Assistance
*0* - Back to Main Menu`;
            await msg.reply(reply);
            return;
        }
        else if (userText === '4') {
            session.step = 'SEO_MENU';
            userSessions.set(senderPhone, session);
            const reply = `📈 *Search Engine Optimization (SEO) & Ranking*

Dominate Google Search Results and capture organic business leads!

*Our SEO Capabilities:*
✅ Technical SEO & Google Search Console Optimization
✅ High-Quality Client Site Backlinks & Profile Link Building
✅ Sitemap, Schema Markup & Page Speed Optimization
✅ Organic Lead Generation Strategy

*Reply with an option:*
*A* - Request Free Website SEO Audit
*B* - SEO Pricing Packages
*0* - Back to Main Menu`;
            await msg.reply(reply);
            return;
        }
        else if (userText === '5') {
            session.step = 'AI_AGENTS_MENU';
            userSessions.set(senderPhone, session);
            const reply = `🤖 *AI Agents & Custom Automation*

Supercharge your business operations with intelligent AI integrations!

*Our AI & Automation Services:*
✅ Custom WhatsApp & Web AI Chatbots
✅ LLM & Open-Source AI Model Integration (Groq, OpenAI, Ollama)
✅ Automated Lead Capture & CRM Sync
✅ Business Workflow Automation

*Reply with an option:*
*A* - Request AI Automation Consultation
*0* - Back to Main Menu`;
            await msg.reply(reply);
            return;
        }
        else if (userText === '6') {
            session.step = 'WAITING_FOR_NAME';
            session.data.service = 'General Technical Inquiry / Callback';
            userSessions.set(senderPhone, session);
            await msg.reply(`📞 *Request a Callback / Speak to Technical Specialist*\n\nPlease reply with your *Full Name* and *City* so our technical team can reach out to you promptly:`);
            return;
        }
    }

    // Process sub-menu choices
    if (session.step === 'WEB_DEV_MENU') {
        if (lowerText === 'a') {
            session.step = 'WAITING_FOR_NAME';
            session.data.service = 'Web Development Quote';
            userSessions.set(senderPhone, session);
            await msg.reply(`📝 Great! Please reply with your *Name* and *City* (or Project Requirements) to get an exact Web Development quote:`);
            return;
        } else if (lowerText === 'b') {
            await msg.reply(`🌐 Check out our services on our official website:\nhttps://chittortech.com\n\nReply *0* to return to Main Menu.`);
            return;
        }
    } else if (session.step === 'APP_DEV_MENU') {
        if (lowerText === 'a' || lowerText === 'b') {
            session.step = 'WAITING_FOR_NAME';
            session.data.service = 'Mobile App Development';
            userSessions.set(senderPhone, session);
            await msg.reply(`📝 Please reply with your *Name* and *City* to discuss your App requirement with our Mobile Lead:`);
            return;
        }
    } else if (session.step === 'PLAY_STORE_MENU') {
        if (lowerText === 'a') {
            session.step = 'WAITING_FOR_NAME';
            session.data.service = 'Play Store Publishing Help';
            userSessions.set(senderPhone, session);
            await msg.reply(`📝 Please reply with your *Name* and *App Name/Package ID* for Play Console publishing assistance:`);
            return;
        }
    } else if (session.step === 'SEO_MENU') {
        if (lowerText === 'a' || lowerText === 'b') {
            session.step = 'WAITING_FOR_NAME';
            session.data.service = 'SEO Audit / Growth Package';
            userSessions.set(senderPhone, session);
            await msg.reply(`🔍 Please reply with your *Website URL* and *Name* to receive a comprehensive SEO Audit report:`);
            return;
        }
    } else if (session.step === 'AI_AGENTS_MENU') {
        if (lowerText === 'a') {
            session.step = 'WAITING_FOR_NAME';
            session.data.service = 'AI Agents & Automation';
            userSessions.set(senderPhone, session);
            await msg.reply(`🤖 Please reply with your *Name* and *Business Type* to explore AI Automation for your enterprise:`);
            return;
        }
    } else if (session.step === 'WAITING_FOR_NAME') {
        const leadDetails = userText;
        const serviceName = session.data.service || 'ChittorTech General Inquiry';

        await saveLead({
            phone: cleanPhone,
            name: leadDetails,
            serviceRequested: serviceName,
            details: `WhatsApp user input: ${userText}`
        });

        session.step = 'MAIN_MENU';
        userSessions.set(senderPhone, session);

        const confirmationMsg = 
`✅ *Thank you! Your request has been logged successfully.*

Service: *${serviceName}*
Details: ${leadDetails}

Our technical specialist at ChittorTech will review your inquiry and connect with you shortly on WhatsApp / Phone.

_Reply *0* or *Hi* anytime to view the main menu again._`;

        await msg.reply(confirmationMsg);
        return;
    }

    // ====================================================
    // 🧠 AI NATURAL LANGUAGE RESPONSE ENGINE (GROQ LLM)
    // ====================================================
    // If the user's input is a freeform text/question, pass it to Groq AI!
    console.log(`[BotEngine 🤖] Passing query "${userText}" to Groq AI Engine...`);
    const aiResponse = await generateGroqAiResponse(userText, session.history || []);

    if (aiResponse) {
        // Maintain last 4 conversation messages in history for multi-turn AI context
        session.history = session.history || [];
        session.history.push({ role: 'user', content: userText });
        session.history.push({ role: 'assistant', content: aiResponse });
        if (session.history.length > 6) {
            session.history = session.history.slice(-6);
        }
        userSessions.set(senderPhone, session);

        await msg.reply(aiResponse);
        return;
    }

    // Fallback if Groq is not configured or AI call returns null
    session.step = 'MAIN_MENU';
    userSessions.set(senderPhone, session);
    await msg.reply(getMainMenuText());
}

module.exports = {
    processIncomingMessage,
    getMainMenuText
};
