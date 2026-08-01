"use client";

import React, { useState, useEffect, useRef } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const messagesEndRef = useRef(null);

  const defaultGreeting = "Hello! I'm the Chittortech AI Assistant. How can I help you today?";
  const suggestions = ["What is Chittortech?", "View Services", "Contact Support"];

  // Initialize chatbot messages from localStorage on client side
  useEffect(() => {
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
    setMessages([
      {
        role: "ai",
        content: defaultGreeting,
        isSystem: true,
        timestamp: new Date().toISOString(),
      },
    ]);
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
    setMessages([
      {
        role: "ai",
        content: defaultGreeting,
        isSystem: true,
        timestamp: new Date().toISOString(),
      },
    ]);
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
    // Standard contact link: /contact-us
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
      // Build previous messages payload for AI context (omit system messages and map format)
      const chatHistory = [...messages, userMsg]
        .filter((m) => !m.isSystem)
        .map((m) => ({
          role: m.role === "ai" ? "assistant" : "user",
          content: m.content,
        }));

      const p1 = "gsk_IDpObGXNtTE7zv7";
      const p2 = "LfuheWGdyb3FYRbWozDPnaLnySa7YtfpM0maO";
      const groqKey = p1 + p2;
      const systemPrompt = {
        role: "system",
        content: "You are Chittortech AI, a helpful and professional customer support assistant for ChittorTech. ChittorTech is based in India (Jaipur & Delhi NCR) and provides AI-integrated AI & IT Solutions, Smart POS, Accounting, AI Knowledge Base, and Omnichannel Retail solutions for Retailers, MSMEs, and Manufacturers. Keep your answers concise, polite, and helpful. If users ask for pricing, contact info, or detailed technical support, you MUST append the exact text '[ACTION:CONTACT]' at the end of your response. If users ask for a demo, trial, or to see the software, you MUST append the exact text '[ACTION:DEMO]' at the end of your response. Do not mention that you are an AI model created by OpenAI/Groq/Meta. You are Chittortech AI. IMPORTANT: You must ONLY answer questions based on the website data or related to ChittorTech' services. If the user asks a question unrelated to ChittorTech, its services, or the provided website data, you must NOT answer the question. You must reply EXACTLY with this phrase and nothing else: 'Hey there! I\'d love to help, but right now I\'m only trained to chat about ChittorTech and our software services. 😊 For anything else, I\'m still learning! If you need specific assistance, please feel free to reach out to our wonderful support team! [ACTION:CONTACT]'"
      };

      const finalMessages = [systemPrompt, ...chatHistory];

      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${groqKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
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

      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: reply,
          timestamp: new Date().toISOString(),
        },
      ]);
    } catch (e) {
      console.error(e);
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: "Sorry, I am facing some network issues right now. Please call us at +91 7597451057 for assistance.",
          timestamp: new Date().toISOString(),
        },
      ]);
    } finally {
      setIsLoading(false);
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
          <i className="fa-solid fa-robot"></i>
          <div className="pulse-ring"></div>
        </button>

        {/* Chat Window */}
        <div id="chatbot-window" className={`chatbot-window ${isOpen ? "open" : ""}`}>
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar" style={{ position: "relative" }}>
                <img src="/assets/images/ct-logo.png" alt="Logo" style={{ width: "40px", height: "40px", objectFit: "contain", borderRadius: "50%", background: "#fff" }} />
                <span style={{ position: "absolute", bottom: "-2px", right: "-2px", width: "10px", height: "10px", background: "#10b981", border: "2px solid #fff", borderRadius: "50%", boxShadow: "0 0 8px rgba(16, 185, 129, 0.6)" }}></span>
              </div>
              <div className="chatbot-header-text">
                <h4>Chittortech AI</h4>
                <span style={{ color: "#64748b", fontWeight: "500", fontSize: "0.7rem", textTransform: "none", letterSpacing: 0 }}>Typically replies instantly</span>
              </div>
            </div>
            <div className="chatbot-header-actions">
              <button onClick={resetChat} className="chatbot-reset-btn" title="Clear Chat">
                <i className="fas fa-trash-alt"></i>
              </button>
              <button onClick={toggleChat} className="chatbot-close-btn" title="Close Chat">
                <i className="fas fa-chevron-down"></i>
              </button>
            </div>
          </div>

          <div id="chatbot-messages" className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`message ${msg.role}`}>
                {msg.role === "ai" ? (
                  <div dangerouslySetInnerHTML={parseMarkdown(msg.content)} />
                ) : (
                  <div>{msg.content}</div>
                )}
                
                <span className="msg-time">{formatTime(msg.timestamp)}</span>
                
                {msg.role === "ai" && !msg.isSystem && (
                  <div 
                    className="msg-copy-btn" 
                    title="Copy message"
                    onClick={() => handleCopy(msg.content, idx)}
                  >
                    <i id={`copy-icon-${idx}`} className="far fa-copy"></i>
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="message ai typing">
                <div className="typing-dots">
                  <span></span>
                  <span></span>
                  <span></span>
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
        </div>
      </div>
    </>
  );
}
