import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const data = await req.json();
    const { name, email, company, industry, firm, contact, location, message } = data;

    if (!name || !email || !company || !contact || !location) {
      return NextResponse.json({ status: "error", msg: "Missing required fields." }, { status: 400 });
    }

    // Log the lead details locally in server logs (No external email sent to old servers)
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

    return NextResponse.json({
      status: "success",
      msg: "Thank you! Your demo request has been received. Our team will contact you soon.",
      mailSent: false
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ status: "error", msg: "Internal server error." }, { status: 500 });
  }
}
