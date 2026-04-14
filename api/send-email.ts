import { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { fullName, email, phoneNumber, message, services, budget, companyName, type } = req.body;

  // Validate required fields
  if (!fullName || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER || "growspheredigital26@gmail.com",
        pass: process.env.SMTP_PASS,
      },
    });

    let emailContent = "";
    let subject = "";

    if (type === "quote") {
      subject = `New Quote Request from ${fullName}`;
      emailContent = `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #E50914;">New Quote Request</h2>
          <p><strong>1. Full Name:</strong> ${fullName}</p>
          <p><strong>2. Email Address:</strong> ${email}</p>
          <p><strong>3. Phone Number:</strong> ${phoneNumber || "N/A"}</p>
          <p><strong>Company Name:</strong> ${companyName || "N/A"}</p>
          <p><strong>Services Required:</strong> ${services ? (Array.isArray(services) ? services.join(", ") : services) : "N/A"}</p>
          <p><strong>Project Budget:</strong> ${budget || "N/A"}</p>
          <p><strong>4. Your Message:</strong> ${message}</p>
        </div>
      `;
    } else {
      subject = `New Contact Message from ${fullName}`;
      emailContent = `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #E50914;">New Contact Message</h2>
          <p><strong>1. Full Name:</strong> ${fullName}</p>
          <p><strong>2. Email Address:</strong> ${email}</p>
          <p><strong>3. Phone Number:</strong> ${phoneNumber || "N/A"}</p>
          <p><strong>4. Your Message:</strong> ${message}</p>
        </div>
      `;
    }

    const mailOptions = {
      from: process.env.SMTP_USER || "growspheredigital26@gmail.com",
      to: "growspheredigital26@gmail.com",
      subject: subject,
      html: emailContent,
    };

    // Only attempt to send if SMTP_PASS is provided
    if (process.env.SMTP_PASS) {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true, message: "Email sent successfully" });
    } else {
      console.log("SMTP_PASS not set in environment variables. Demo mode.");
      return res.status(200).json({ 
        success: true, 
        message: "Message received! (Email sending is in demo mode - check server logs for content)" 
      });
    }
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
