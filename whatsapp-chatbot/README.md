# 🤖 ChittorTech Free 24/7 WhatsApp Chatbot

A production-ready, open-source automated WhatsApp Chatbot built with `whatsapp-web.js`, Express.js, MongoDB Atlas (Free Tier), and an automated Anti-Sleep Keep-Alive ping system designed for Render's free tier.

---

## 🌟 Features

- 📱 **100% Free**: No official Meta WhatsApp API or paid gateway fees.
- ⚡ **24/7 Uptime (Anti-Sleep Mechanism)**: Contains an automated internal self-ping timer (`setInterval` hitting `/ping` every 10 minutes) to prevent Render's free web service from sleeping after 15 minutes of inactivity.
- 🔑 **Browser QR Viewer (`/qr`)**: Easily scan the WhatsApp QR code from any mobile or desktop web browser without checking server logs.
- 💾 **Persistent Session (MongoDB RemoteAuth)**: Stores your WhatsApp authentication session in MongoDB Atlas (Free 512MB M0 cluster). Even if Render restarts or redeploys, your session remains active **without requiring QR re-scanning**!
- 🔀 **LocalAuth Fallback**: Works seamlessly out of the box even if MongoDB is disabled (`USE_MONGODB=false`).
- 🤖 **ChittorTech Core Services Menu**:
  - 1️⃣ Web Development (Next.js, E-commerce, Business Portals)
  - 2️⃣ Mobile App Development (Android & iOS)
  - 3️⃣ Google Play Store Publishing Help (Publishing & Policy Compliance)
  - 4️⃣ Search Engine Optimization (SEO) & Ranking Growth
  - 5️⃣ AI Agents & Custom Automation
  - 6️⃣ Request Technical Callback / Lead Generation
- 📥 **Lead Capture & Logging**: Saves customer inquiries and callback requests cleanly into MongoDB and memory (viewable at `/leads`).

---

## 📁 Directory Structure

```text
whatsapp-chatbot/
├── server.js          # Express web server, QR viewer, keep-alive self-ping & wwebjs client
├── botEngine.js       # Conversational state machine for ChittorTech core services
├── leadService.js     # MongoDB & memory lead logger
├── render.yaml        # Render free tier deployment configuration
├── package.json       # Dependencies (whatsapp-web.js, express, qrcode, mongoose, wwebjs-mongo)
├── .env.example       # Sample environment variables
└── README.md          # Deployment & setup documentation
```

---

## 🛠️ Step-by-Step Setup & Deployment Guide

### Step 1: Create a Free MongoDB Atlas Database (For Persistent Session)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) and create a free account.
2. Create a **Free Shared Cluster (M0 Sandbox - 512 MB)**.
3. Under **Database Access**, create a Database User (e.g. `chittor_user`) and password.
4. Under **Network Access**, add IP `0.0.0.0/0` (Allow access from anywhere so Render can connect).
5. Click **Connect** → **Drivers** → Copy your Connection String (`mongodb+srv://chittor_user:<password>@cluster0.mongodb.net/chittortech_bot?retryWrites=true&w=majority`).

---

### Step 2: Deploy to Render (Free Tier)
1. Push your code repository to GitHub / GitLab.
2. Go to [Render Dashboard](https://dashboard.render.com/) and click **New +** → **Web Service**.
3. Select your repository and specify the **Root Directory** as `whatsapp-chatbot`.
4. Configure setting details:
   - **Environment**: `Node`
   - **Build Command**: `npm install --legacy-peer-deps`
   - **Start Command**: `node server.js`
   - **Plan**: `Free`
5. Add Environment Variables under **Environment**:
   - `USE_MONGODB`: `true`
   - `MONGODB_URI`: `<Your MongoDB Atlas connection string>`
   - `SERVER_URL`: `https://<your-app-name>.onrender.com`
6. Click **Create Web Service**.

---

### Step 3: Scan WhatsApp QR Code
1. Once deployment succeeds, open `https://<your-app-name>.onrender.com/qr` in your browser.
2. Open WhatsApp on your ChittorTech official phone → **Linked Devices** → **Link a Device**.
3. Scan the QR code displayed on the webpage.
4. Once scanned, the page will confirm connection status: **"WhatsApp Client Connected!"**.

---

### Step 4: Ensure 24/7 Uptime (UptimeRobot Setup)
Although `server.js` contains an internal self-ping interval, to guarantee Render free container never sleeps:
1. Go to [UptimeRobot.com](https://uptimerobot.com/) (Free Account).
2. Click **Add New Monitor**.
3. **Monitor Type**: `HTTP(s)`
4. **Friendly Name**: `ChittorTech WhatsApp Bot Ping`
5. **URL (or IP)**: `https://<your-app-name>.onrender.com/ping`
6. **Monitoring Interval**: `5 minutes` or `10 minutes`.
7. Click **Create Monitor**. Your bot will now stay online 24/7/365 for free!

---

## 🧪 Local Testing

To run and test locally on your computer:
```bash
cd whatsapp-chatbot
npm install
npm run dev
```
Open `http://localhost:3000/qr` to view the QR code and test locally.
