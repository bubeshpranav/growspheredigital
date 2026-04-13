import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API route for sending emails
  app.post("/api/send-email", async (req, res) => {
    const { fullName, email, phoneNumber, message, services, budget, companyName, type } = req.body;

    // Validate required fields
    if (!fullName || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      // Create a transporter
      // For Gmail, you need to use an "App Password" if 2FA is enabled
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
            <p><strong>Services Required:</strong> ${services ? services.join(", ") : "N/A"}</p>
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
        res.json({ success: true, message: "Email sent successfully" });
      } else {
        console.log("SMTP_PASS not set in environment variables. Logging email content instead:");
        console.log("To: growspheredigital26@gmail.com");
        console.log("Subject:", subject);
        console.log("Content:", emailContent);
        res.json({ 
          success: true, 
          message: "Message received! (Email sending is in demo mode - check server logs for content)" 
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
