import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { messages } = await req.json();

    if (!messages) {
      return NextResponse.json({ error: "No messages provided" }, { status: 400 });
    }

    const systemPrompt = {
      role: "system",
      content: "You are Chittortech AI, a helpful and professional customer support assistant for ChittorTech. ChittorTech is based in India (Jaipur & Delhi NCR) and provides AI-integrated AI & IT Solutions, Smart POS, Accounting, AI Knowledge Base, and Omnichannel Retail solutions for Retailers, MSMEs, and Manufacturers. Keep your answers concise, polite, and helpful. If users ask for pricing, contact info, or detailed technical support, you MUST append the exact text '[ACTION:CONTACT]' at the end of your response. If users ask for a demo, trial, or to see the software, you MUST append the exact text '[ACTION:DEMO]' at the end of your response. Do not mention that you are an AI model created by OpenAI/Groq/Meta. You are Chittortech AI. IMPORTANT: You must ONLY answer questions based on the website data or related to ChittorTech' services. If the user asks a question unrelated to ChittorTech, its services, or the provided website data, you must NOT answer the question. You must reply EXACTLY with this phrase and nothing else: 'Hey there! I'd love to help, but right now I'm only trained to chat about ChittorTech and our software services. 😊 For anything else, I'm still learning! If you need specific assistance, please feel free to reach out to our wonderful support team! [ACTION:CONTACT]'"
    };

    const finalMessages = [systemPrompt, ...messages];
    const apiKey = process.env.CHAT_API_KEY;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: finalMessages,
        temperature: 0.7,
        max_tokens: 500
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Groq API Error Status:", response.status, "Error:", errorText);
      return NextResponse.json({ response: "Sorry, I am facing some network issues right now. Please call us at +91 7597451057 for assistance." });
    }

    const data = await response.json();
    if (data.choices && data.choices[0] && data.choices[0].message) {
      return NextResponse.json({ response: data.choices[0].message.content });
    }

    return NextResponse.json({ response: "Sorry, I didn't quite catch that. Could you please rephrase?" });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ response: "Sorry, I am facing some network issues right now. Please call us at +91 7597451057 for assistance." }, { status: 500 });
  }
}
