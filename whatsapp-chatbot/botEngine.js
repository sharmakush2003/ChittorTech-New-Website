const { saveLead } = require('./leadService');

// User conversational session state tracker
// Key: phone number (e.g., "919045099111@c.us")
// Value: { step: string, data: object, lastActive: Date }
const userSessions = new Map();

/**
 * Main Menu Message Generator
 */
function getMainMenuText() {
    return `👋 *Welcome to ChittorTech Software & Digital Solutions!*

We build high-performance web applications, mobile apps, AI solutions, and drive search engine rankings for growing businesses.

Please reply with a number to explore our services:

1️⃣ *Web Development Services* (Custom Websites, Next.js, E-commerce)
2️⃣ *App Development Services* (Android & iOS Mobile Apps)
3️⃣ *Google Play Store Publishing Help* (App Uploads & Policy Compliance)
4️⃣ *Search Engine Optimization (SEO)* (Technical SEO, Backlinks, Ranking)
5️⃣ *AI Agents & Custom Automation* (AI Chatbots, Automation Tools)
6️⃣ *Speak to a Technical Specialist / Request Callback*

_Reply with 1-6 to proceed._`;
}

/**
 * Handle incoming message and generate appropriate bot response
 */
async function processIncomingMessage(client, msg) {
    const senderPhone = msg.from; // e.g., "919876543210@c.us"
    const cleanPhone = senderPhone.replace('@c.us', '');
    const userText = (msg.body || '').trim();
    const lowerText = userText.toLowerCase();

    // Fetch or create user session state
    let session = userSessions.get(senderPhone) || { step: 'MAIN_MENU', data: {} };
    session.lastActive = new Date();

    // Global reset trigger (typing "0", "menu", "hi", "hello", "start")
    if (['0', 'menu', 'hi', 'hello', 'hey', 'start', 'help', 'chittortech'].includes(lowerText)) {
        session.step = 'MAIN_MENU';
        userSessions.set(senderPhone, session);
        await msg.reply(getMainMenuText());
        return;
    }

    // Process options based on current session step
    switch (session.step) {
        case 'MAIN_MENU':
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
            }
            else if (userText === '6') {
                session.step = 'WAITING_FOR_NAME';
                session.data.service = 'General Technical Inquiry / Callback';
                userSessions.set(senderPhone, session);
                await msg.reply(`📞 *Request a Callback / Speak to Technical Specialist*\n\nPlease reply with your *Full Name* and *City* so our technical team can reach out to you promptly:`);
            }
            else {
                await msg.reply(`❓ Invalid selection.\n\n${getMainMenuText()}`);
            }
            break;

        case 'WEB_DEV_MENU':
            if (lowerText === 'a') {
                session.step = 'WAITING_FOR_NAME';
                session.data.service = 'Web Development Quote';
                userSessions.set(senderPhone, session);
                await msg.reply(`📝 Great! Please reply with your *Name* and *City* (or Project Requirements) to get an exact Web Development quote:`);
            } else if (lowerText === 'b') {
                await msg.reply(`🌐 Check out our services on our official website:\nhttps://chittortech.com\n\nReply *0* to return to Main Menu.`);
            } else {
                session.step = 'MAIN_MENU';
                userSessions.set(senderPhone, session);
                await msg.reply(getMainMenuText());
            }
            break;

        case 'APP_DEV_MENU':
            if (lowerText === 'a' || lowerText === 'b') {
                session.step = 'WAITING_FOR_NAME';
                session.data.service = 'Mobile App Development';
                userSessions.set(senderPhone, session);
                await msg.reply(`📝 Please reply with your *Name* and *City* to discuss your App requirement with our Mobile Lead:`);
            } else {
                session.step = 'MAIN_MENU';
                userSessions.set(senderPhone, session);
                await msg.reply(getMainMenuText());
            }
            break;

        case 'PLAY_STORE_MENU':
            if (lowerText === 'a') {
                session.step = 'WAITING_FOR_NAME';
                session.data.service = 'Play Store Publishing Help';
                userSessions.set(senderPhone, session);
                await msg.reply(`📝 Please reply with your *Name* and *App Name/Package ID* for Play Console publishing assistance:`);
            } else {
                session.step = 'MAIN_MENU';
                userSessions.set(senderPhone, session);
                await msg.reply(getMainMenuText());
            }
            break;

        case 'SEO_MENU':
            if (lowerText === 'a' || lowerText === 'b') {
                session.step = 'WAITING_FOR_NAME';
                session.data.service = 'SEO Audit / Growth Package';
                userSessions.set(senderPhone, session);
                await msg.reply(`🔍 Please reply with your *Website URL* and *Name* to receive a comprehensive SEO Audit report:`);
            } else {
                session.step = 'MAIN_MENU';
                userSessions.set(senderPhone, session);
                await msg.reply(getMainMenuText());
            }
            break;

        case 'AI_AGENTS_MENU':
            if (lowerText === 'a') {
                session.step = 'WAITING_FOR_NAME';
                session.data.service = 'AI Agents & Automation';
                userSessions.set(senderPhone, session);
                await msg.reply(`🤖 Please reply with your *Name* and *Business Type* to explore AI Automation for your enterprise:`);
            } else {
                session.step = 'MAIN_MENU';
                userSessions.set(senderPhone, session);
                await msg.reply(getMainMenuText());
            }
            break;

        case 'WAITING_FOR_NAME':
            // Capture customer lead info
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
            break;

        default:
            session.step = 'MAIN_MENU';
            userSessions.set(senderPhone, session);
            await msg.reply(getMainMenuText());
            break;
    }
}

module.exports = {
    processIncomingMessage,
    getMainMenuText
};
