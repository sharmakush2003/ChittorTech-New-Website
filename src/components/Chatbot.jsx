"use client";

import React, { useState, useEffect, useRef } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const messagesEndRef = useRef(null);

  // Pre-chat Registration states
  const [isRegistered, setIsRegistered] = useState(false);
  const [userName, setUserName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [validationError, setValidationError] = useState("");

  const defaultGreeting = "Hello! I'm the Chittortech AI Assistant. How can I help you today?";
  const suggestions = ["What is Chittortech?", "View Services", "Contact Support"];

  // Initialize chatbot messages and user registration from localStorage
  useEffect(() => {
    const savedUserInfo = localStorage.getItem("chittortech_user_info");
    let isUserRegistered = false;
    let registeredName = "there";
    if (savedUserInfo) {
      try {
        const userInfo = JSON.parse(savedUserInfo);
        if (userInfo.name && userInfo.phone) {
          setUserName(userInfo.name);
          registeredName = userInfo.name;
          const parts = userInfo.phone.split(" ");
          if (parts.length > 1) {
            setCountryCode(parts[0]);
            setPhoneNumber(parts.slice(1).join(" "));
          } else {
            setPhoneNumber(userInfo.phone);
          }
          setIsRegistered(true);
          isUserRegistered = true;
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

    if (isUserRegistered) {
      setMessages([
        {
          role: "ai",
          content: `Hello ${registeredName}! How can I assist you today? If you have any questions or need help, just let me know.`,
          isSystem: true,
          timestamp: new Date().toISOString(),
        },
      ]);
    } else {
      setMessages([]);
    }
  }, []);

  // Save messages to localstorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("chittortech_chat_history", JSON.stringify(messages));
    }
  }, [messages]);

  // Scroll to bottom on updates
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const resetChat = () => {
    localStorage.removeItem("chittortech_chat_history");
    setIsRegistered(false);
    setMessages([]);
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

    // Format code block
    let html = text
      .replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>")
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*]+)\*/g, "<em>$1</em>")
      .replace(/\n\n/g, "</p><p>")
      .replace(/^- (.*$)/gim, "<ul><li>$1</li></ul>")
      .replace(/<\/ul>\n<ul>/g, "");

    // Inject contact/demo dynamic triggers
    html = html.replace(
      /\[ACTION:CONTACT\]/g,
      '<a href="/contact-us" class="message-action-btn">Contact Us <i class="fas fa-arrow-right"></i></a>'
    );
    html = html.replace(
      /\[ACTION:DEMO\]/g,
      '<a href="#" data-bs-toggle="modal" data-bs-target="#trialModal" class="message-action-btn">Request a Demo <i class="fas fa-laptop"></i></a>'
    );

    return { __html: `<p>${html}</p>` };
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
    const phone = phoneNumber.trim();

    if (!name || name.length < 2) {
      setValidationError("Please enter a valid name (at least 2 characters).");
      return;
    }

    if (!phone || phone.length < 8) {
      setValidationError("Please enter a valid phone number.");
      return;
    }

    setValidationError("");
    const fullPhone = `${countryCode} ${phone}`;

    localStorage.setItem(
      "chittortech_user_info",
      JSON.stringify({ name, phone: fullPhone })
    );

    // Send lead alert to Google Apps Script Web App in background
    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    if (scriptUrl) {
      const leadPayload = {
        name: name,
        email: "chatbot-lead@chittortech.online",
        contact: fullPhone,
        location: "Chatbot Lead Capture",
        industry: "N/A",
        message: "User initiated a chat session with the ChittorTech AI Assistant.",
        company: "N/A",
        firm: "N/A"
      };

      try {
        fetch(scriptUrl, {
          method: "POST",
          body: JSON.stringify(leadPayload),
        }).catch((err) => {
          console.error("Background chatbot lead submission fetch failed:", err);
        });
      } catch (err) {
        console.error("Background chatbot lead submission error:", err);
      }
    }

    setIsRegistered(true);

    const regMsg = {
      role: "user",
      content: `Name : ${name}\nPhone : ${fullPhone}`,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, regMsg]);
    const welcomeText = `Hello ${name}! How can I assist you today? If you have any questions or need help, just let me know.`;
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
      const systemPrompt = {
        role: "system",
        content: `You are the official ChittorTech Principal AI Assistant for ChittorTech.
 
STRICT BOUNDARY & RESTRICTION RULE:
- You MUST ONLY answer questions strictly related to ChittorTech company, its web & mobile services, invoicing software, digital products, portfolio projects, founders (Kush Sharma & Lav Sharma), contact information, and pricing.
- If the user asks ANY general knowledge, general coding, politics, math, jokes, or unrelated off-topic questions (e.g. "Who is the Prime Minister?", "Write Python code for snake game"), politely decline by stating: "I am ChittorTech's official AI assistant. I can only assist you with questions regarding ChittorTech services, invoicing software, portfolio projects, and founder inquiries. How can I help you with ChittorTech today?"
- NEVER break character. Maintain an elite, high-end engineering tone.
- Do NOT mention "DigiFy" or "DigiFy Soft Solutions" under any circumstances. Always refer to the company as ChittorTech.
 
CHITTORTECH KNOWLEDGE BASE:
- Company Name: ChittorTech (Premier IT Startup & Digital Product Engineering Agency).
- Location: Chittorgarh, Rajasthan, India (Office is located only in Chittorgarh, Rajasthan, but serving clients all over the world).
- Founders: Kush Sharma (Founder) & Lav Sharma (Co-Founder).
- Email: chittortech@gmail.com
- Phone: +91 7597451057
- Core Services & Products:
  1. Invoicing Software: Custom invoicing and billing software for retail shops, distributors, and service providers.
  2. Web Development: Custom high-performance web applications using Next.js, React, Node.js, and SaaS platforms.
  3. Mobile App Development: Android and iOS applications using React Native.
  4. Custom AI Solutions: Custom AI chatbots, RAG vector document search, and bilingual WhatsApp AI assistants.
- Key Projects: 
  1. AI Content & NotebookLLM Systems
  2. Mewari Achar E-Commerce (https://www.mewari-achar.shop/)
  3. Hospitality & Admin Hubs (https://dharamsala-admin-portal.vercel.app/)
  4. Shaadi Sutra Event SaaS (https://shaadi-sutra.vercel.app/)
  5. MailPulse Elite Bulk Email Engine
- Contact Link: [Contact Us](https://chittortech.online/contact-us)
- If users ask for pricing, contact info, or detailed technical support, you MUST append the exact text '[ACTION:CONTACT]' at the end of your response. If users ask for a demo, trial, or to see the software, you MUST append the exact text '[ACTION:DEMO]' at the end of your response.`
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
          max_tokens: 500
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

  return (
    <>
      {/* Background Blur Overlay */}
      <div 
        id="chatbot-overlay" 
        className={`chatbot-overlay ${isOpen ? "open" : ""}`}
        onClick={toggleChat}
      />

      <div className="chatbot-container">
        {/* FAB Button */}
        <button 
          id="chatbot-fab" 
          className={`chatbot-fab ${isOpen ? "active" : ""}`} 
          onClick={toggleChat}
          aria-label="Open AI Assistant" 
          title="Talk to AI"
        >
          {isOpen ? (
            <i className="fa-solid fa-chevron-down"></i>
          ) : (
            <i className="fa-solid fa-comments"></i>
          )}
          <div className="pulse-ring"></div>
        </button>

        {/* Chat Window */}
        <div id="chatbot-window" className={`chatbot-window ${isOpen ? "open" : ""}`}>
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar" style={{ position: "relative" }}>
                <img src="/assets/images/chatbot-kaira.webp" alt="Logo" style={{ width: "40px", height: "40px", objectFit: "cover", borderRadius: "50%", background: "#fff" }} />
                <span style={{ position: "absolute", bottom: "-2px", right: "-2px", width: "10px", height: "10px", background: "#10b981", border: "2px solid #fff", borderRadius: "50%", boxShadow: "0 0 8px rgba(16, 185, 129, 0.6)" }}></span>
              </div>
              <div className="chatbot-header-text">
                <h4>Kaira</h4>
                <span style={{ color: "#64748b", fontWeight: "500", fontSize: "0.7rem", textTransform: "none", letterSpacing: 0 }}>Customer Support Executive</span>
              </div>
            </div>
            <div className="chatbot-header-actions">
              {isRegistered && (
                <button onClick={resetChat} className="chatbot-reset-btn" title="Clear Chat">
                  <i className="fas fa-trash-alt"></i>
                </button>
              )}
              <button onClick={toggleChat} className="chatbot-close-btn" title="Close Chat">
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
          </div>

          {!isRegistered ? (
            <div className="chatbot-reg-container">
              <div className="chatbot-reg-welcome">
                <i className="fas fa-robot"></i>
                <h3>Start ChittorTech AI Chat</h3>
                <p>Please enter your name and phone number to start a conversation with our AI Assistant.</p>
              </div>

              <form onSubmit={handleRegister} className="chatbot-reg-form">
                <div className="chatbot-reg-group">
                  <label className="chatbot-reg-label">Name</label>
                  <input
                    type="text"
                    className="chatbot-reg-input"
                    placeholder="Enter your name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>

                <div className="chatbot-reg-group">
                  <label className="chatbot-reg-label">Phone Number</label>
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
                    <input
                      type="tel"
                      className="chatbot-reg-input"
                      style={{ flex: 1 }}
                      placeholder="Enter mobile number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
                      required
                    />
                  </div>
                </div>

                {validationError && (
                  <div className="chatbot-reg-error">{validationError}</div>
                )}

                <button type="submit" className="chatbot-reg-btn">
                  <span>Start Chat</span>
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          ) : (
            <>
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

              {/* Render Suggestions */}
              {messages.length <= 1 && (
                <div id="chatbot-suggestions" className="suggestion-vertical-menu" style={{ display: "flex", padding: "0 20px" }}>
                  {suggestions.map((s, i) => (
                    <button 
                      key={i} 
                      className="suggestion-btn"
                      onClick={() => handleSend(s)}
                    >
                      {s} <i className="fas fa-chevron-right"></i>
                    </button>
                  ))}
                </div>
              )}

              <div className="chatbot-disclaimer">
                <i className="fas fa-shield-alt"></i>
                <span>This AI bot can make mistakes. Please double-check information.</span>
              </div>

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
      </div>
    </>
  );
}

