import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, company, industry, firm, contact, location, message } = data;

    if (!name || !email || !company || !contact || !location) {
      return NextResponse.json({ status: "error", msg: "Missing required fields." }, { status: 400 });
    }

    // Log the lead details locally
    console.log("New ChittorTech Lead Received (Stored Locally):", {
      timestamp: new Date().toISOString(),
      name,
      email,
      company,
      industry,
      firm,
      contact,
      location,
      message: message || "No message provided."
    });

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    let mailSent = false;

    if (scriptUrl) {
      try {
        const response = await fetch(scriptUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        const result = await response.json();
        if (response.ok && result.status === "success") {
          mailSent = true;
          console.log("Lead forwarded successfully to Google Apps Script.");
        } else {
          console.warn("Google Apps Script returned an error:", result);
        }
      } catch (err) {
        console.error("Failed to forward lead to Google Apps Script:", err);
      }
    }

    return NextResponse.json({
      status: "success",
      msg: "Thank you! Your demo request has been received. Our team will contact you soon.",
      mailSent
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ status: "error", msg: "Internal server error." }, { status: 500 });
  }
}
