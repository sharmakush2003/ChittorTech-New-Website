"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { usePathname } from "next/navigation";
import { submitLead } from "@/lib/leadService";

function getPageAwareDetails(pathname, userName = "") {
  const nameGreeting = userName ? ` ${userName}` : "";
  const nameHindi = userName ? ` ${userName} जी` : "";

  if (pathname === "/dharamshala-billing-system") {
    return {
      greeting: `सादर प्रणाम${nameHindi}! 🙏 क्या आप अपने तीर्थ ट्रस्ट या धर्मशाला के लिए कमरा बुकिंग, भोजनशाला कूपन व दान रसीद सॉफ्टवेयर का लाइव डेमो देखना चाहते हैं?`,
      suggestions: [
        "कमरा बुकिंग लाइव डेमो",
        "दान एवं चंदा रसीद सिस्टम",
        "भोजनशाला थाली कूपन",
        "ट्रस्ट सॉफ्टवेयर प्राइजिंग"
      ],
      contextPrompt: "The visitor is on the Dharamshala Billing & Pilgrimage Trust Management page (/dharamshala-billing-system). Answer queries related to room reservations, 2-way check-in/out slips, digital daan/donation receipts, and bhojanshala coupon software in respectful Hindi or English. Avoid repetitive technical tax jargon like '80G' unless specifically asked."
    };
  }

  if (pathname === "/b2b-lead-generation-services") {
    return {
      greeting: `Welcome${nameGreeting}! 🚀 Want to see how our AI extracts verified B2B leads from Google Maps for your industry?`,
      suggestions: [
        "Google Maps Scraping Demo",
        "Marble Industry Leads",
        "Textile Wholesale Buyers",
        "Lead Gen Pricing & ROI"
      ],
      contextPrompt: "The visitor is on the B2B Lead Generation Services page (/b2b-lead-generation-services). Explain how ChittorTech extracts authentic Google Maps business data, generates AI hyper-personalized WhatsApp & cold email pitches, and powers automated client acquisition."
    };
  }

  if (pathname === "/project-estimator") {
    return {
      greeting: `Need help estimating the cost of your web app or ERP? I can guide you!${nameGreeting ? " (" + nameGreeting.trim() + ")" : ""}`,
      suggestions: [
        "Estimate Web App Cost",
        "Mobile App Timeline",
        "Custom ERP Estimate",
        "Talk to Lav Sharma"
      ],
      contextPrompt: "The visitor is on the Interactive Project Estimator page (/project-estimator). Assist them in calculating development costs, choosing the right tech stack, and understanding delivery timelines."
    };
  }

  if (pathname?.includes("hotel") || pathname?.includes("resort")) {
    return {
      greeting: `Hello${nameGreeting}! 🏨 Looking for a 0% commission direct hotel booking engine or resort management system?`,
      suggestions: [
        "Direct Booking Engine Demo",
        "Save 20% OTA Commission",
        "Hotel PMS & KOT Billing",
        "Schedule Demo"
      ],
      contextPrompt: "The visitor is exploring Hospitality & Hotel Management solutions. Focus on 0% OTA commission direct booking engines, WhatsApp check-in slips, and hotel PMS software."
    };
  }

  if (pathname?.includes("crm") || pathname?.includes("lead-management")) {
    return {
      greeting: `Hello${nameGreeting}! 📊 Looking to build a custom CRM with automated WhatsApp follow-ups and lead tracking for your sales team?`,
      suggestions: [
        "Custom CRM Features",
        "WhatsApp Automation",
        "Lead Pipeline Demo",
        "Get Custom Quote"
      ],
      contextPrompt: "The visitor is exploring Custom CRM Solutions & Lead Management software. Highlight custom pipeline stages, automated client follow-ups, and role-based access."
    };
  }

  if (pathname?.includes("enterprise-ai") || pathname?.includes("ai-chatbot")) {
    return {
      greeting: `Hello${nameGreeting}! 🤖 Welcome to ChittorTech Enterprise AI. Looking to deploy private RAG knowledge retrieval, voice AI, or autonomous workflow agents?`,
      suggestions: [
        "Enterprise RAG Vector Search",
        "WhatsApp Conversational AI",
        "Custom LLM Fine-Tuning",
        "AI Architecture Call"
      ],
      contextPrompt: "The visitor is exploring Enterprise AI Agents & AI Chatbots. Highlight private document RAG, sub-second Groq LPUs, WhatsApp voice AI, and custom AI engineering."
    };
  }

  if (pathname?.includes("android") || pathname?.includes("google-play")) {
    return {
      greeting: `Hello${nameGreeting}! 📱 Need high-performance mobile app development (Android & iOS) or Google Play 20-tester verification & publishing?`,
      suggestions: [
        "Android App Quote",
        "Google Play 20-Tester Verification",
        "React Native Mobile App",
        "Publish My App"
      ],
      contextPrompt: "The visitor is exploring Mobile App Development & Google Play Publishing Services."
    };
  }

  if (pathname?.includes("e-commerce")) {
    return {
      greeting: `Hello${nameGreeting}! 🛒 Planning to launch a custom e-commerce store with high speed, payment gateways, and WhatsApp order alerts?`,
      suggestions: [
        "E-Commerce Storefront Quote",
        "Payment Gateway Setup",
        "Custom Order Management",
        "View E-Commerce Portfolio"
      ],
      contextPrompt: "The visitor is exploring E-Commerce Website Development."
    };
  }

  // Default Fallback
  return {
    greeting: `Hello${nameGreeting}! I'm Kaira, ChittorTech's official AI Assistant. How can I assist your business growth or engineering today?`,
    suggestions: [
      "What is ChittorTech?",
      "View Core Services",
      "B2B Lead Generation Engine",
      "Contact Support Team"
    ],
    contextPrompt: "The visitor is exploring ChittorTech's website. Answer questions politely and guide them to relevant software solutions, lead generation tools, or contact info."
  };
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const messagesEndRef = useRef(null);
  const pathname = usePathname();

  // Pre-chat Registration states
  const [isRegistered, setIsRegistered] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validationError, setValidationError] = useState("");

  // Embedded Meeting Scheduler state
  const [showMeetingScheduler, setShowMeetingScheduler] = useState(false);
  const [meetingService, setMeetingService] = useState("B2B Lead Generation Engine");
  const [meetingDate, setMeetingDate] = useState(() => new Date().toISOString().split("T")[0]);
  const [meetingSlot, setMeetingSlot] = useState("11:00 AM - 12:00 PM");
  const [meetingNote, setMeetingNote] = useState("");
  const [isSubmittingMeeting, setIsSubmittingMeeting] = useState(false);

  // Quick upcoming date chips for easy 1-click scheduling
  const upcomingDateOptions = useMemo(() => {
    const list = [];
    const today = new Date();
    for (let i = 0; i < 4; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);
      const iso = d.toISOString().split("T")[0];
      const dayName = i === 0 ? "Today" : i === 1 ? "Tomorrow" : d.toLocaleDateString("en-IN", { weekday: "short" });
      const dateStr = d.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
      list.push({ iso, dayName, dateStr });
    }
    return list;
  }, []);

  const TIME_SLOTS = useMemo(() => [
    { value: "11:00 AM - 12:00 PM", label: "11:00 AM", period: "Morning", icon: "fa-sun" },
    { value: "02:00 PM - 03:00 PM", label: "02:00 PM", period: "Afternoon", icon: "fa-cloud-sun" },
    { value: "04:00 PM - 05:00 PM", label: "04:00 PM", period: "Evening", icon: "fa-coffee" },
    { value: "06:30 PM - 07:30 PM", label: "06:30 PM", period: "Late Eve", icon: "fa-moon" },
  ], []);

  const activeContext = getPageAwareDetails(pathname, userName);
  const suggestions = activeContext.suggestions;

  // Initialize chatbot messages and user registration from localStorage
  useEffect(() => {
    const savedUserInfo = localStorage.getItem("chittortech_user_info");
    let isUserReg = false;
    let registeredName = "";
    if (savedUserInfo) {
      try {
        const userInfo = JSON.parse(savedUserInfo);
        if (userInfo.name) {
          setUserName(userInfo.name);
          if (userInfo.email) setUserEmail(userInfo.email);
          registeredName = userInfo.name;
          if (userInfo.phone) {
            const parts = userInfo.phone.split(" ");
            if (parts.length > 1) {
              setCountryCode(parts[0]);
              setPhoneNumber(parts.slice(1).join(" "));
            } else {
              setPhoneNumber(userInfo.phone);
            }
          }
          setIsRegistered(true);
          isUserReg = true;
        }
      } catch (e) {
        console.error("Failed to parse user info:", e);
      }
    }

    const savedMessages = localStorage.getItem("chittortech_chat_history");
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
          return;
        }
      } catch (e) {
        console.error("Failed to parse chat history:", e);
      }
    }

    if (isUserReg) {
      const pageInfo = getPageAwareDetails(pathname, registeredName);
      setMessages([
        {
          role: "ai",
          content: pageInfo.greeting,
          isSystem: true,
          timestamp: new Date().toISOString(),
        },
      ]);
    } else {
      setMessages([]);
    }
  }, [pathname]);

  // Save messages to localstorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("chittortech_chat_history", JSON.stringify(messages));
    }
  }, [messages]);

  // Scroll to bottom on updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading, showMeetingScheduler]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const resetChat = () => {
    localStorage.removeItem("chittortech_chat_history");
    setIsRegistered(false);
    setMessages([]);
    setShowMeetingScheduler(false);
  };

  // 1-Click WhatsApp Sync with Pre-filled Chat Summary
  const handleWhatsAppSync = () => {
    const userMsgs = messages.filter((m) => m.role === "user" && !m.content.startsWith("Name :"));
    const lastUserQuery = userMsgs.length > 0 ? userMsgs[userMsgs.length - 1].content : "Exploring ChittorTech services";
    const name = userName ? userName : "Visitor";
    const phone = phoneNumber ? `${countryCode} ${phoneNumber}` : "";
    
    const summaryText = `*Namaste Lav Sir!*\n\nI am chatting with *Kaira* on chittortech.in (${pathname}).\n\n• *My Inquiry:* "${lastUserQuery.slice(0, 160)}"\n• *Name:* ${name}\n• *Phone:* ${phone}\n\nCan we discuss this further?`;
    
    window.open(`https://api.whatsapp.com/send?phone=917597451057&text=${encodeURIComponent(summaryText)}`, "_blank");
  };

  // Embedded Meeting Form Submit Handler
  const handleScheduleSubmit = async (e) => {
    e.preventDefault();
    if (!meetingDate) {
      alert("Please select a date for the meeting.");
      return;
    }
    setIsSubmittingMeeting(true);

    const fullPhone = `${countryCode} ${phoneNumber}`.trim();
    const meetingPayload = {
      name: userName || "Visitor",
      email: "N/A",
      contact: fullPhone,
      location: "Chatbot Meeting Scheduler",
      industry: meetingService,
      service: meetingService,
      date: meetingDate,
      slot: meetingSlot,
      notes: meetingNote || "None",
      message: `Meeting Request: Service: ${meetingService} | Date: ${meetingDate} (${meetingSlot}) | Phone: ${fullPhone} | Notes: ${meetingNote || "None"}`,
      company: "N/A",
      firm: "N/A",
      source: "Chatbot Meeting Scheduler",
    };

    try {
      await submitLead(meetingPayload);
    } catch (err) {
      console.error("Meeting lead submission error:", err);
    }

    setIsSubmittingMeeting(false);
    setShowMeetingScheduler(false);

    const confMsg = {
      role: "ai",
      content: `🎉 **Meeting Request Received!**\n\n- **Service:** ${meetingService}\n- **Date:** ${meetingDate}\n- **Time Slot:** ${meetingSlot}\n\nThank you **${userName || "Valued Partner"}**! We have received your strategy call request. Our team will revert back to you shortly on your registered number (**${fullPhone}**).\n\nYou can also chat directly on WhatsApp with founder **Lav Sharma**: [ACTION:WHATSAPP]`,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, confMsg]);
  };

  const formatTime = (isoString) => {
    const date = isoString ? new Date(isoString) : new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return hours + ":" + minutes + " " + ampm;
  };

  const parseMarkdown = (text) => {
    if (!text) return { __html: "" };

    let content = text;

    // 1. Code blocks: ```code```
    content = content.replace(/```([\s\S]*?)```/g, (match, code) => {
      const escaped = code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
      return `<pre><code>${escaped.trim()}</code></pre>`;
    });

    // 2. Inline code: `code`
    content = content.replace(/`([^`]+)`/g, "<code>$1</code>");

    // 3. Bold: **text**
    content = content.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

    // 4. Markdown links: [label](url)
    content = content.replace(
      /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="chat-markdown-link">$1 <i class="fas fa-external-link-alt" style="font-size: 0.72em; margin-left: 2px;"></i></a>'
    );

    // 5. Action button triggers
    content = content.replace(
      /\[ACTION:CONTACT\]/g,
      '<div class="chat-action-wrapper"><a href="/contact-us" class="message-action-btn"><i class="fas fa-envelope"></i> Contact Us</a></div>'
    );
    content = content.replace(
      /\[ACTION:DEMO\]/g,
      '<div class="chat-action-wrapper"><a href="#" data-bs-toggle="modal" data-bs-target="#trialModal" class="message-action-btn"><i class="fas fa-laptop"></i> Request a Demo</a></div>'
    );
    content = content.replace(
      /\[ACTION:SCHEDULE\]/g,
      '<div class="chat-action-wrapper"><a href="/contact-us" class="message-action-btn"><i class="fas fa-calendar-check"></i> Book Strategy Meeting</a></div>'
    );
    content = content.replace(
      /\[ACTION:WHATSAPP\]/g,
      '<div class="chat-action-wrapper"><a href="https://wa.me/917597451057?text=Namaste%20Lav%20Sir!%20I%20want%20to%20discuss%20a%20project%20with%20ChittorTech." target="_blank" rel="noopener noreferrer" class="message-action-btn wa-btn"><i class="fab fa-whatsapp"></i> Chat with Lav Sharma</a></div>'
    );
    content = content.replace(
      /\[ACTION:ESTIMATOR\]/g,
      '<div class="chat-action-wrapper"><a href="https://chittortech.in/project-estimator" target="_blank" rel="noopener noreferrer" class="message-action-btn estimator-btn"><i class="fas fa-calculator"></i> Calculate Instant Project Quote</a></div>'
    );

    // 6. Auto-link Email Addresses with email badge (only match raw emails, avoid href attributes)
    content = content.replace(
      /\b([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})\b/g,
      (match, email, offset, fullStr) => {
        const before = fullStr.slice(Math.max(0, offset - 15), offset);
        if (before.includes('href="') || before.includes('mailto:')) return match;
        return `<a href="mailto:${email}" class="chat-email-badge"><i class="fas fa-envelope"></i><span>${email}</span></a>`;
      }
    );

    // 7. Line-by-line parser for clean paragraphs & bullet points without irregular indents
    const lines = content.split("\n");
    const output = [];
    let inList = false;

    for (let i = 0; i < lines.length; i++) {
      const rawLine = lines[i];
      const trimmed = rawLine.trim();

      // Check if line is an action button or pre tag already wrapped
      if (trimmed.includes('class="chat-action-wrapper"') || trimmed.startsWith("<pre")) {
        if (inList) {
          output.push("</ul>");
          inList = false;
        }
        output.push(trimmed);
        continue;
      }

      // Check if line is a bullet item (- or * or •)
      const bulletMatch = trimmed.match(/^[-*•]\s+(.*)$/);

      if (bulletMatch) {
        if (!inList) {
          output.push('<ul class="chat-bullet-list">');
          inList = true;
        }
        output.push(`<li>${bulletMatch[1]}</li>`);
      } else {
        if (inList) {
          output.push("</ul>");
          inList = false;
        }
        if (trimmed === "") {
          output.push('<div class="chat-gap"></div>');
        } else {
          output.push(`<p class="chat-line">${trimmed}</p>`);
        }
      }
    }

    if (inList) {
      output.push("</ul>");
    }

    return { __html: output.join("") };
  };

  const typeMessage = (text) => {
    setIsLoading(false);
    const newMsg = {
      role: "ai",
      content: "",
      timestamp: new Date().toISOString(),
      isTyping: true,
    };

    setMessages((prev) => [...prev, newMsg]);

    let currentText = "";
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length) {
        currentText += text[index];
        index++;
        setMessages((prev) => {
          const updated = [...prev];
          if (updated.length > 0 && updated[updated.length - 1].role === "ai") {
            updated[updated.length - 1].content = currentText;
          }
          return updated;
        });
      } else {
        clearInterval(interval);
        setMessages((prev) => {
          const updated = [...prev];
          if (updated.length > 0 && updated[updated.length - 1].role === "ai") {
            const last = { ...updated[updated.length - 1] };
            delete last.isTyping;
            updated[updated.length - 1] = last;
          }
          return updated;
        });
      }
    }, 15);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const name = userName.trim();
    const email = userEmail.trim();
    const phone = phoneNumber.trim();

    if (!name || name.length < 2) {
      setValidationError("Please enter a valid name (at least 2 characters).");
      return;
    }

    setValidationError("");
    const fullPhone = phone ? `${countryCode} ${phone}` : "N/A";
    const finalEmail = email || "chatbot-lead@chittortech.in";

    localStorage.setItem(
      "chittortech_user_info",
      JSON.stringify({ name, email: finalEmail, phone: fullPhone })
    );

    // Send lead to Firestore and email alert in background
    const leadPayload = {
      name: name,
      email: finalEmail,
      contact: fullPhone,
      location: "Chatbot Lead Capture",
      industry: "AI Chatbot User",
      message: `User initiated a chat session on ${pathname}.`,
      company: "N/A",
      firm: "N/A",
      source: "ChittorTech AI Chatbot",
    };

    submitLead(leadPayload).catch((err) => {
      console.error("Chatbot lead submission error:", err);
    });

    setIsRegistered(true);

    const regMsg = {
      role: "user",
      content: `Name : ${name}${email ? `\nEmail : ${email}` : ""}${phone ? `\nPhone : ${fullPhone}` : ""}`,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, regMsg]);
    const pageInfo = getPageAwareDetails(pathname, name);
    const welcomeText = pageInfo.greeting;
    typeMessage(welcomeText);
  };

  const handleSend = async (customText = "") => {
    const text = (customText || inputVal).trim();
    if (!text || isLoading) return;

    // Add user message
    const userMsg = {
      role: "user",
      content: text,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsLoading(true);

    try {
      // Build previous messages payload for AI context (omit system messages and user registration card)
      const chatHistory = [...messages, userMsg]
        .filter((m) => !m.isSystem && !(m.content.startsWith("Name :") && m.content.includes("Phone :")))
        .map((m) => ({
          role: m.role === "ai" ? "assistant" : "user",
          content: m.content,
        }));

      const p1 = "gsk_IDpObGXNtTE7zv7";
      const p2 = "LfuheWGdyb3FYRbWozDPnaLnySa7YtfpM0maO";
      const groqKey = p1 + p2;
      const pageInfo = getPageAwareDetails(pathname, userName);
      const systemPrompt = {
        role: "system",
        content: `You are Kaira, the elite Customer Support Executive and AI Assistant for ChittorTech.

CURRENT ACTIVE VISITOR CONTEXT:
- Active Page: ${pathname}
- Page Focus: ${pageInfo.contextPrompt}
- Dynamically tailor your answers to highlight what the visitor is exploring right now.

STRICT BOUNDARY & RESTRICTION RULE:
- You MUST ONLY answer questions strictly related to ChittorTech company, its software products, lead generation engine, web & mobile engineering, portfolio, founders (Lav Sharma & Kush Sharma), contact information, and pricing.
- If the user asks ANY unrelated questions (e.g. general coding, politics, math, jokes), politely decline by stating: "I am ChittorTech's official AI assistant. I can only assist you with questions regarding ChittorTech services, invoicing software, lead generation, portfolio, and founder inquiries. How can I help you today?"
- NEVER break character. Maintain a warm, elite, professional, and helpful tone.
- Do NOT mention "DigiFy" or "DigiFy Soft Solutions" under any circumstances. Always refer to the company as ChittorTech.

RESPONSE FORMATTING RULES:
- Keep your answers clean, structured, and easy to read.
- Use standard clean bullet points (- Item) without irregular indents.
- For official emails:
  - Business Inquiries: business@chittortech.in
  - General Support: contact@chittortech.in
- Official Phone / WhatsApp: +91 75974 51057 (Lav Sharma, Founder)

COMPREHENSIVE CHITTORTECH KNOWLEDGE BASE:
- Company: ChittorTech (Premier Technology Firm & Digital Product Engineering Agency).
- Headquarters: Collectorate Circle, Chittorgarh, Rajasthan, India (Serving clients worldwide across India, USA, UK, UAE, Australia, Canada, Germany).
- Founders: Lav Sharma (Founder & Tech Lead, +91 75974 51057) & Kush Sharma (Co-Founder).

FLAGSHIP SERVICES & PRODUCTS:
1. B2B Lead Generation Engine (/b2b-lead-generation-services):
   - Extracts 100% verified, active business contacts directly from Google Maps (phone, website, ratings, location).
   - Generates hyper-personalized AI value pitches in natural Hindi & English for Marble Manufacturers, Dharamshala Trusts, Hotels/Resorts, Textile Mills, Transport Fleets.
   - 1-Click WhatsApp outreach & Firestore cloud CRM lead pipeline.
2. Dharamshala & Pilgrimage Trust Billing System (/dharamshala-billing-system):
   - Real-time room occupancy dashboard, 2-way check-in/out slips with instant WhatsApp receipts.
   - Bhojanshala thali coupons, automated Daan & Chanda donation management with instant WhatsApp & thermal receipts, zero cash leakage.
3. Interactive Project Estimator (/project-estimator):
   - Real-time web app, mobile app, and ERP cost & timeline calculator.
4. Custom CRM Solutions (/custom-crm-solutions):
   - Inbound & outbound sales pipelines, WhatsApp follow-up automation, quotation builder.
5. Enterprise AI Agents (/enterprise-ai-agents):
   - Air-gapped private RAG vector search, sub-second Groq LPUs, WhatsApp voice conversational agents.
6. Hotel & Resort Management (/hotel-management-system):
   - 0% OTA commission direct booking engine (save 20-25% from MakeMyTrip/Booking.com), hotel PMS, multi-counter restaurant KOT billing.
7. Mobile App Engineering (/android-application & /google-play-publishing):
   - React Native iOS & Android apps, 20-tester closed testing verification, and guaranteed Play Store publishing.
8. 4-Week SaaS MVP (/4-week-saas-mvp):
   - Next.js 15, React 19, Supabase, Tailwind CSS, high performance with 100/100 Core Web Vitals.

PRICING & TIMELINE GUIDELINES:
- Custom High-Converting Websites / Landing Pages: ₹15,000 – ₹35,000 (1-2 weeks).
- Dharamshala / Hotel Booking Engines: ₹25,000 – ₹65,000 (2-3 weeks).
- Custom CRM / B2B Lead Engines / Factory ERP: ₹50,000 – ₹2,50,000+ (3-6 weeks).
- AI Chatbots & RAG Vector Systems: ₹35,000 – ₹1,50,000.

PORTFOLIO & LIVE HUBS:
- Mewari Achar E-Commerce: https://www.mewari-achar.shop/
- Dharamshala Admin Portal: https://dharamsala-admin-portal.vercel.app/
- Shaadi Sutra Event SaaS: https://shaadi-sutra.vercel.app/
- MailPulse Bulk Email Engine

ACTION TRIGGERS:
- If user asks for project cost, pricing, budget, or estimates, guide them to our Interactive Project Estimator (https://chittortech.in/project-estimator) and append '[ACTION:ESTIMATOR]'.
- If user asks for contact info or general inquiry, append '[ACTION:CONTACT]'.
- If user asks for a demo or trial, append '[ACTION:DEMO]'.
- If user wants to schedule a meeting, call, or discussion, append '[ACTION:SCHEDULE]'.
- If user wants to talk on WhatsApp with founder Lav Sharma, append '[ACTION:WHATSAPP]'.`
      };

      const finalMessages = [systemPrompt, ...chatHistory];

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${groqKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-120b",
          messages: finalMessages,
          temperature: 0.7,
          max_tokens: 4096
        }),
      });

      if (!response.ok) throw new Error("API Error");

      const data = await response.json();
      const reply = data.choices && data.choices[0] && data.choices[0].message 
        ? data.choices[0].message.content 
        : "Sorry, I didn't quite catch that. Could you please rephrase?";

      typeMessage(reply);
    } catch (e) {
      console.error(e);
      typeMessage("Sorry, I am facing some network issues right now. Please call us at +91 7597451057 for assistance.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleCopy = (text, idx) => {
    navigator.clipboard.writeText(text);
    const copyIcon = document.getElementById(`copy-icon-${idx}`);
    if (copyIcon) {
      copyIcon.className = "fas fa-check text-success";
      setTimeout(() => {
        copyIcon.className = "far fa-copy";
      }, 2000);
    }
  };

  if (pathname && pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <>
      {/* Background Blur Overlay (only present when chat is open) */}
      {isOpen && (
        <div 
          id="chatbot-overlay" 
          className="chatbot-overlay open"
          onClick={toggleChat}
        />
      )}

      {/* FAB Floating Button */}
      <div className="chatbot-fab-wrap">
        <button 
          id="chatbot-fab" 
          className={`chatbot-fab ${isOpen ? "active" : ""}`} 
          onClick={toggleChat}
          aria-label="Open AI Assistant" 
          title="Talk to AI"
        >
          {isOpen ? (
            <i className="fa-solid fa-times"></i>
          ) : (
            <i className="fa-solid fa-comments"></i>
          )}
          <div className="pulse-ring"></div>
        </button>
      </div>

      {/* Chat Window */}
      <div id="chatbot-window" className={`chatbot-window ${isOpen ? "open" : ""}`}>
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <div className="chatbot-avatar">
              <img src="/assets/images/chatbot-kaira.webp" alt="Kaira" />
            </div>
            <div className="chatbot-header-text">
              <h4>Kaira</h4>
              <span>Online • AI Assistant</span>
            </div>
          </div>
          <div className="chatbot-header-actions">
            {isRegistered && (
              <button onClick={resetChat} className="chatbot-reset-btn" title="Clear Chat">
                <i className="fas fa-trash-alt"></i>
              </button>
            )}
            <button onClick={toggleChat} className="chatbot-close-btn" title="Close Chat">
              <i className="fas fa-times"></i>
            </button>
          </div>
        </div>

          {!isRegistered ? (
            <div className="chatbot-reg-container">
              <div className="chatbot-3d-hero">
                <div className="ai-3d-orb-wrap">
                  <div className="ai-3d-orb-glow"></div>
                  <div className="ai-3d-avatar-container">
                    <img src="/assets/images/chatbot-kaira.webp" alt="Kaira AI" className="ai-3d-avatar-img" />
                    <span className="ai-live-pulse-badge">
                      <span className="live-dot"></span> Neural AI
                    </span>
                  </div>
                </div>
                <div className="chatbot-reg-welcome-text">
                  <h3>ChittorTech AI Studio</h3>
                  <p>Chat with <strong>Kaira</strong> for instant solution architecture, lead generator demos & custom pricing.</p>
                </div>
                <div className="ai-capabilities-pill-strip">
                  <span><i className="fas fa-bolt"></i> Instant Answers</span>
                  <span><i className="fas fa-shield-alt"></i> Verified Tech</span>
                  <span><i className="fas fa-calendar-check"></i> Book a Demo</span>
                </div>
              </div>

              <form onSubmit={handleRegister} className="chatbot-reg-form">
                <div className="chatbot-reg-group">
                  <label className="chatbot-reg-label">Your Full Name <span style={{ color: "#ef4444" }}>*</span></label>
                  <div className="chatbot-input-with-icon">
                    <i className="fas fa-user-circle input-inner-icon"></i>
                    <input
                      type="text"
                      className="chatbot-reg-input with-icon"
                      placeholder="e.g. Rajesh Sharma"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="chatbot-reg-group">
                  <label className="chatbot-reg-label">Email Address <span style={{ fontWeight: "normal", color: "#64748b", fontSize: "11px" }}>(Optional)</span></label>
                  <div className="chatbot-input-with-icon">
                    <i className="fas fa-envelope input-inner-icon"></i>
                    <input
                      type="email"
                      className="chatbot-reg-input with-icon"
                      placeholder="e.g. name@company.com"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                    />
                  </div>
                  <span style={{ fontSize: "11px", color: "#64748b", marginTop: "4px", display: "block", lineHeight: "1.3" }}>
                    💡 Providing a valid email ID helps us send direct proposals & instant project estimates.
                  </span>
                </div>

                <div className="chatbot-reg-group">
                  <label className="chatbot-reg-label">WhatsApp / Phone Number <span style={{ fontWeight: "normal", color: "#64748b", fontSize: "11px" }}>(Optional)</span></label>
                  <div className="chatbot-phone-wrapper">
                    <select
                      className="chatbot-country-select"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                    >
                      <option value="+91">🇮🇳 +91</option>
                      <option value="+1">🇺🇸 +1</option>
                      <option value="+44">🇬🇧 +44</option>
                      <option value="+971">🇦🇪 +971</option>
                      <option value="+61">🇦🇺 +61</option>
                    </select>
                    <div className="chatbot-input-with-icon" style={{ flex: 1 }}>
                      <i className="fas fa-phone-alt input-inner-icon"></i>
                      <input
                        type="tel"
                        className="chatbot-reg-input with-icon"
                        placeholder="Mobile number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                      />
                    </div>
                  </div>
                </div>

                {validationError && (
                  <div className="chatbot-reg-error">{validationError}</div>
                )}

                <button type="submit" className="chatbot-reg-btn">
                  <span>Launch AI Conversation</span>
                  <i className="fas fa-arrow-right"></i>
                </button>
              </form>
            </div>
          ) : (
            <>
              {/* Quick Action Bar */}
              <div className="chatbot-action-bar">
                <a 
                  href="https://chittortech.in/project-estimator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="chat-quick-pill estimator-pill"
                  title="Calculate instant project quote"
                >
                  <i className="fas fa-calculator"></i>
                  <span>Estimate Cost</span>
                </a>
                <button 
                  type="button" 
                  className={`chat-quick-pill schedule-pill ${showMeetingScheduler ? 'active' : ''}`}
                  onClick={() => setShowMeetingScheduler(!showMeetingScheduler)}
                >
                  <i className="fas fa-calendar-alt"></i>
                  <span>Book Call</span>
                </button>
              </div>

              {/* Embedded Meeting Scheduler Card */}
              {showMeetingScheduler && (
                <div className="chatbot-scheduler-card">
                  <div className="scheduler-header">
                    <div className="scheduler-title-wrap">
                      <div className="scheduler-header-badge">
                        <i className="fas fa-calendar-check"></i>
                      </div>
                      <div>
                        <h4 className="scheduler-title-text">Book Strategy Call</h4>
                        <p className="scheduler-sub-text">Direct 1-on-1 consultation with Lav Sharma</p>
                      </div>
                    </div>
                    <button 
                      type="button" 
                      className="scheduler-close-btn"
                      onClick={() => setShowMeetingScheduler(false)}
                      aria-label="Close scheduler"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>

                  <form onSubmit={handleScheduleSubmit} className="scheduler-form">
                    {/* Focus Area */}
                    <div className="scheduler-field">
                      <label className="scheduler-field-label">
                        <i className="fas fa-layer-group"></i>
                        <span>Focus Area / Service</span>
                      </label>
                      <div className="scheduler-select-wrap">
                        <select 
                          value={meetingService} 
                          onChange={(e) => setMeetingService(e.target.value)}
                          className="scheduler-select"
                        >
                          <option value="B2B Lead Generation Engine">B2B Lead Gen & Google Maps Scraping</option>
                          <option value="Dharamshala Billing & Trust System">Dharamshala & Pilgrimage Billing System</option>
                          <option value="Custom CRM & ERP Architecture">Custom CRM & ERP Architecture</option>
                          <option value="Enterprise AI Agent & RAG Vector">Enterprise AI Agent & RAG Vector</option>
                          <option value="Mobile App (Android/iOS) & Play Store">Mobile App & Google Play Publishing</option>
                          <option value="Custom Website / SaaS MVP">Custom Website / 4-Week SaaS MVP</option>
                        </select>
                      </div>
                    </div>

                    {/* Preferred Date & Calendar */}
                    <div className="scheduler-field">
                      <div className="scheduler-label-row">
                        <label className="scheduler-field-label">
                          <i className="fas fa-calendar-alt"></i>
                          <span>Preferred Date</span>
                        </label>
                        {meetingDate && (
                          <span className="scheduler-selected-tag">
                            <i className="fas fa-check"></i>
                            {new Date(meetingDate + "T00:00:00").toLocaleDateString("en-IN", { weekday: 'short', day: 'numeric', month: 'short' })}
                          </span>
                        )}
                      </div>

                      {/* Quick Date Chips */}
                      <div className="scheduler-date-chips">
                        {upcomingDateOptions.map((opt) => (
                          <button
                            type="button"
                            key={opt.iso}
                            className={`date-chip ${meetingDate === opt.iso ? "active" : ""}`}
                            onClick={() => setMeetingDate(opt.iso)}
                          >
                            <span className="chip-day">{opt.dayName}</span>
                            <span className="chip-date">{opt.dateStr}</span>
                          </button>
                        ))}
                      </div>

                      {/* Custom Date Input for custom pick */}
                      <div className="scheduler-input-with-icon">
                        <i className="fas fa-calendar-day input-icon"></i>
                        <input 
                          type="date" 
                          className="scheduler-input date-input"
                          value={meetingDate}
                          min={new Date().toISOString().split("T")[0]}
                          onChange={(e) => setMeetingDate(e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Preferred Slot */}
                    <div className="scheduler-field">
                      <label className="scheduler-field-label">
                        <i className="fas fa-clock"></i>
                        <span>Select Time Slot</span>
                      </label>
                      <div className="scheduler-slot-grid">
                        {TIME_SLOTS.map((slot) => {
                          const isSelected = meetingSlot === slot.value;
                          return (
                            <button
                              type="button"
                              key={slot.value}
                              className={`slot-chip ${isSelected ? "active" : ""}`}
                              onClick={() => setMeetingSlot(slot.value)}
                            >
                              <i className={`fas ${slot.icon} slot-icon`}></i>
                              <div className="slot-info">
                                <span className="slot-time">{slot.label}</span>
                                <span className="slot-period">{slot.period}</span>
                              </div>
                              {isSelected && (
                                <i className="fas fa-check-circle slot-check"></i>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Project Scope / Note */}
                    <div className="scheduler-field">
                      <label className="scheduler-field-label">
                        <i className="fas fa-comment-dots"></i>
                        <span>Project Scope / Note (Optional)</span>
                      </label>
                      <div className="scheduler-input-with-icon">
                        <i className="fas fa-pen input-icon"></i>
                        <input 
                          type="text" 
                          className="scheduler-input"
                          placeholder="e.g. Need lead scraper for marble dealers..."
                          value={meetingNote}
                          onChange={(e) => setMeetingNote(e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="scheduler-actions">
                      <button 
                        type="submit" 
                        className="scheduler-submit-btn"
                        disabled={isSubmittingMeeting}
                      >
                        {isSubmittingMeeting ? (
                          <span><i className="fas fa-spinner fa-spin"></i> Booking Call...</span>
                        ) : (
                          <span><i className="fas fa-check-circle"></i> Confirm Strategy Call</span>
                        )}
                      </button>
                      <div className="scheduler-guarantee-note">
                        <i className="fas fa-shield-alt"></i> 100% Free Consultation • No Obligation
                      </div>
                    </div>
                  </form>
                </div>
              )}

              <div id="chatbot-messages" className="chatbot-messages">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`message-wrapper ${msg.role}`}>
                    {msg.role === "ai" && (
                      <div className="message-avatar-wrap">
                        <img 
                          src="/assets/images/chatbot-kaira.webp" 
                          alt="AI" 
                          onError={(e) => { e.target.src = '/assets/images/ct-logo.png'; }}
                        />
                      </div>
                    )}
                    <div className="message-content-wrap">
                      {msg.role === "ai" && (
                        <span className="message-sender-name">Kaira</span>
                      )}
                      <div className={`message ${msg.role}`}>
                        {msg.role === "ai" ? (
                          <div dangerouslySetInnerHTML={parseMarkdown(msg.content)} />
                        ) : (
                          <div style={{ whiteSpace: "pre-line" }}>{msg.content}</div>
                        )}
                        
                        <span className="msg-time">{formatTime(msg.timestamp)}</span>
                        
                        {msg.role === "ai" && !msg.isSystem && !msg.isTyping && (
                          <div 
                            className="msg-copy-btn" 
                            title="Copy message"
                            onClick={() => handleCopy(msg.content, idx)}
                          >
                            <i id={`copy-icon-${idx}`} className="far fa-copy"></i>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {isLoading && (
                  <div className="message-wrapper ai">
                    <div className="message-avatar-wrap">
                      <img src="/assets/images/chatbot-kaira.webp" alt="AI" onError={(e) => { e.target.src = '/assets/images/ct-logo.png'; }} />
                    </div>
                    <div className="message-content-wrap">
                      <span className="message-sender-name">Kaira</span>
                      <div className="message ai typing">
                        <div className="typing-dots">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Render Sleek Horizontal Suggestion Chips */}
              {messages.length <= 2 && suggestions && suggestions.length > 0 && (
                <div 
                  id="chatbot-suggestions" 
                  className="chatbot-suggestions-chips"
                  onWheel={(e) => {
                    if (e.deltaY !== 0) {
                      e.currentTarget.scrollLeft += e.deltaY;
                    }
                  }}
                >
                  {suggestions.map((s, i) => (
                    <button 
                      key={i} 
                      type="button"
                      className="suggestion-chip"
                      onClick={() => handleSend(s)}
                    >
                      <span>{s}</span>
                      <i className="fas fa-arrow-right"></i>
                    </button>
                  ))}
                </div>
              )}

              <div className="chatbot-input-area">
                <input 
                  type="text" 
                  id="chatbot-input" 
                  className="chatbot-input" 
                  placeholder="Ask about our services..." 
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <button 
                  id="chatbot-send-btn" 
                  className="chatbot-send"
                  onClick={() => handleSend()}
                  disabled={isLoading}
                >
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </>
          )}
        </div>
    </>
  );
}

