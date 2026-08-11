require('dotenv').config();
const express = require('express');
const qrcode = require('qrcode');
const axios = require('axios');
const mongoose = require('mongoose');
const { Client, LocalAuth, RemoteAuth } = require('whatsapp-web.js');
const { processIncomingMessage } = require('./botEngine');
const { getRecentLeads } = require('./leadService');


const app = express();
const PORT = process.env.PORT || 3000;
const SERVER_URL = process.env.SERVER_URL || `http://localhost:${PORT}`;

// Global Bot Status Tracker
let botStatus = 'INITIALIZING';
let currentQrCode = null;
let currentQrDataUrl = null;
let botStartTime = new Date();
let lastPingTime = new Date();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Initialize WhatsApp Client with fallback Strategy
 */
async function initializeWhatsAppClient() {
    let authStrategy;
    const useMongo = process.env.USE_MONGODB === 'true' && process.env.MONGODB_URI;

    if (useMongo) {
        try {
            console.log('[Server] Connecting to MongoDB Atlas for RemoteAuth session storage...');
            await mongoose.connect(process.env.MONGODB_URI);
            console.log('[Server] ✅ MongoDB connected successfully.');
            const { MongoStore } = require('wwebjs-mongo');
            const store = new MongoStore({ mongoose });
            authStrategy = new RemoteAuth({
                store: store,
                backupSyncIntervalMs: 300000 // 5 minutes
            });
            console.log('[Server] Using RemoteAuth (MongoDB persistent session strategy)');
        } catch (err) {
            console.warn(`[Server] MongoDB connection failed: ${err.message}. Falling back to LocalAuth strategy.`);
            authStrategy = new LocalAuth({ dataPath: './.wwebjs_auth' });
        }
    } else {
        console.log('[Server] MongoDB not configured. Using LocalAuth strategy (Local Session Storage).');
        authStrategy = new LocalAuth({ dataPath: './.wwebjs_auth' });
    }

    // Lazily resolve Chrome path inside async function (never at module load time)
    let chromePath = process.env.PUPPETEER_EXECUTABLE_PATH;
    if (!chromePath) {
        try {
            const pup = require('puppeteer');
            chromePath = pup.executablePath();
            console.log(`[Server] Chrome path from puppeteer package: ${chromePath}`);
        } catch (e) {
            console.warn('[Server] puppeteer not found, letting whatsapp-web.js handle Chrome path');
        }
    }

    const puppeteerOpts = {
        headless: true,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-dev-shm-usage',
            '--disable-accelerated-2d-canvas',
            '--no-first-run',
            '--no-zygote',
            '--single-process',
            '--disable-gpu'
        ]
    };

    if (chromePath) {
        puppeteerOpts.executablePath = chromePath;
        console.log(`[Server] Using Chrome: ${chromePath}`);
    }


    const client = new Client({
        authStrategy: authStrategy,
        puppeteer: puppeteerOpts
    });

    // 1. QR Code Event
    client.on('qr', async (qr) => {
        console.log('[Server] 🔑 New QR Code received! Open /qr endpoint to scan.');
        currentQrCode = qr;
        botStatus = 'QR_READY';
        try {
            currentQrDataUrl = await qrcode.toDataURL(qr);
        } catch (err) {
            console.error('[Server] Failed to generate QR data URL:', err);
        }
    });

    // 2. Authenticated Event
    client.on('authenticated', () => {
        console.log('[Server] 🔐 WhatsApp Authenticated Successfully!');
        botStatus = 'AUTHENTICATED';
        currentQrCode = null;
        currentQrDataUrl = null;
    });

    // 3. Ready Event
    client.on('ready', () => {
        console.log('[Server] 🚀 ChittorTech WhatsApp Bot is LIVE & READY to process messages!');
        botStatus = 'READY';
    });

    // 4. Incoming Message Event
    client.on('message', async (msg) => {
        try {
            console.log(`[Server] 📩 Incoming Message from ${msg.from}: "${msg.body}"`);
            await processIncomingMessage(client, msg);
        } catch (err) {
            console.error('[Server] Error handling incoming message:', err);
        }
    });

    // 5. Disconnected Event
    client.on('disconnected', (reason) => {
        console.warn(`[Server] ⚠️ WhatsApp Client Disconnected: ${reason}`);
        botStatus = 'DISCONNECTED';
        setTimeout(() => {
            console.log('[Server] Re-initializing WhatsApp Client...');
            client.initialize();
        }, 5000);
    });

    client.initialize();
    return client;
}

// Start Client
const client = initializeWhatsAppClient();

// ==========================================
// EXPRESS WEB ROUTES & CONTROLLERS
// ==========================================

app.get('/', (req, res) => {
    const uptimeSec = Math.floor((new Date() - botStartTime) / 1000);
    const statusColor = botStatus === 'READY' ? 'green' : botStatus === 'QR_READY' ? 'orange' : 'gray';

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>ChittorTech WhatsApp Bot Status</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
                body { font-family: Arial, sans-serif; background: #0f172a; color: #f8fafc; padding: 20px; }
                .card { background: #1e293b; padding: 25px; border-radius: 12px; max-width: 600px; margin: 0 auto; box-shadow: 0 4px 12px rgba(0,0,0,0.3); }
                .status { font-weight: bold; color: ${statusColor}; font-size: 1.2rem; }
                .btn { display: inline-block; padding: 10px 20px; background: #2563eb; color: #fff; text-decoration: none; border-radius: 6px; margin-top: 15px; }
                .btn:hover { background: #1d4ed8; }
                code { background: #334155; padding: 2px 6px; border-radius: 4px; }
            </style>
        </head>
        <body>
            <div class="card">
                <h2>🤖 ChittorTech WhatsApp Chatbot Dashboard</h2>
                <p>Status: <span class="status">${botStatus}</span></p>
                <p>Uptime: <code>${Math.floor(uptimeSec / 60)} minutes (${uptimeSec} seconds)</code></p>
                <p>Last Anti-Sleep Ping: <code>${lastPingTime.toLocaleTimeString()}</code></p>
                ${botStatus === 'QR_READY' ? `<p>⚠️ <strong>Action Required:</strong> QR Code is ready to scan!</p><a href="/qr" class="btn">📱 Click Here to Scan QR Code</a>` : ''}
                ${botStatus === 'READY' ? `<p>✅ Bot is actively listening for customer messages on WhatsApp.</p>` : ''}
                <hr style="border-color: #334155; margin: 20px 0;">
                <h4>Quick Links:</h4>
                <ul>
                    <li><a href="/qr" style="color: #60a5fa;">/qr</a> - Live QR Scanner View</li>
                    <li><a href="/ping" style="color: #60a5fa;">/ping</a> - Health Check Endpoint</li>
                    <li><a href="/leads" style="color: #60a5fa;">/leads</a> - View Captured Customer Leads</li>
                </ul>
            </div>
        </body>
        </html>
    `);
});

app.get('/qr', (req, res) => {
    if (botStatus === 'READY' || botStatus === 'AUTHENTICATED') {
        return res.send(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>WhatsApp Bot Connected</title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <style>
                    body { font-family: Arial, sans-serif; background: #0f172a; color: #f8fafc; text-align: center; padding: 50px 20px; }
                    .card { background: #1e293b; padding: 30px; border-radius: 12px; max-width: 450px; margin: 0 auto; }
                    .success-icon { font-size: 50px; margin-bottom: 10px; }
                </style>
            </head>
            <body>
                <div class="card">
                    <div class="success-icon">✅</div>
                    <h2>WhatsApp Client Connected!</h2>
                    <p>The bot is already authenticated and active.</p>
                    <a href="/" style="color: #60a5fa;">Return to Dashboard</a>
                </div>
            </body>
            </html>
        `);
    }

    if (!currentQrDataUrl) {
        return res.send(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Generating QR Code...</title>
                <meta http-equiv="refresh" content="3">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <style>
                    body { font-family: Arial, sans-serif; background: #0f172a; color: #f8fafc; text-align: center; padding: 50px 20px; }
                    .card { background: #1e293b; padding: 30px; border-radius: 12px; max-width: 450px; margin: 0 auto; }
                </style>
            </head>
            <body>
                <div class="card">
                    <h2>⌛ Initializing WhatsApp Web...</h2>
                    <p>Please wait a few seconds. Page will auto-refresh when QR code is ready.</p>
                </div>
            </body>
            </html>
        `);
    }

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Scan WhatsApp QR Code - ChittorTech</title>
            <meta http-equiv="refresh" content="20">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
                body { font-family: Arial, sans-serif; background: #0f172a; color: #f8fafc; text-align: center; padding: 30px 20px; }
                .card { background: #1e293b; padding: 30px; border-radius: 12px; max-width: 450px; margin: 0 auto; box-shadow: 0 4px 12px rgba(0,0,0,0.3); }
                img { border-radius: 8px; border: 8px solid #fff; max-width: 250px; margin: 20px 0; }
                .instructions { font-size: 0.9rem; color: #94a3b8; text-align: left; }
            </style>
        </head>
        <body>
            <div class="card">
                <h2>📱 Scan QR Code with WhatsApp</h2>
                <p>Open WhatsApp on your phone → Linked Devices → Link a Device.</p>
                <img src="${currentQrDataUrl}" alt="WhatsApp QR Code" />
                <div class="instructions">
                    <p>💡 <em>Page auto-refreshes every 20 seconds. Once scanned, you can close this window.</em></p>
                </div>
            </div>
        </body>
        </html>
    `);
});

app.get('/ping', (req, res) => {
    lastPingTime = new Date();
    res.status(200).json({
        status: 'OK',
        message: 'ChittorTech WhatsApp Bot server is awake and healthy!',
        botStatus: botStatus,
        timestamp: lastPingTime.toISOString()
    });
});

app.get('/leads', async (req, res) => {
    try {
        const leads = await getRecentLeads(50);
        res.json({
            count: leads.length,
            leads: leads
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`[Server] Express server running on port ${PORT}`);
    console.log(`[Server] Dashboard URL: ${SERVER_URL}`);
    console.log(`[Server] QR Viewer URL: ${SERVER_URL}/qr`);

    const TEN_MINUTES_MS = 10 * 60 * 1000;
    setInterval(async () => {
        try {
            const pingUrl = `${SERVER_URL}/ping`;
            console.log(`[Auto-KeepAlive ⏰] Sending self-ping to ${pingUrl}...`);
            await axios.get(pingUrl);
            console.log(`[Auto-KeepAlive ✅] Self-ping successful. Render server kept awake!`);
        } catch (err) {
            console.warn(`[Auto-KeepAlive ⚠️] Self-ping warning: ${err.message}`);
        }
    }, TEN_MINUTES_MS);
});
