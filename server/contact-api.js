import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Enable CORS for all routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  host: process.env.HOSTINGER_SMTP_HOST || "smtp.hostinger.com",
  port: process.env.HOSTINGER_SMTP_PORT ? Number(process.env.HOSTINGER_SMTP_PORT) : 587,
  secure: process.env.HOSTINGER_SMTP_SECURE === "true",
  auth: {
    user: process.env.HOSTINGER_SMTP_USER,
    pass: process.env.HOSTINGER_SMTP_PASS,
  },
});

const SENDER_EMAIL = process.env.HOSTINGER_SMTP_USER || "contact@cionixinnovations.com";


app.post("/api/contact", async (req, res) => {
  const { name, email, phone, company, service, message, admin_email } = req.body;

  console.log("🔔 Contact form received:", { name, email });

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    console.log("📧 SMTP config check:");
    console.log("  Host:", process.env.HOSTINGER_SMTP_HOST);
    console.log("  Port:", process.env.HOSTINGER_SMTP_PORT);
    console.log("  User:", process.env.HOSTINGER_SMTP_USER ? "✅ Set" : "❌ Missing");
    console.log("  Pass:", process.env.HOSTINGER_SMTP_PASS ? "✅ Set" : "❌ Missing");

    if (!process.env.HOSTINGER_SMTP_USER || !process.env.HOSTINGER_SMTP_PASS) {
      console.error("❌ SMTP credentials not configured in environment!");
      return res.status(500).json({ 
        error: "Email service not configured. Missing SMTP credentials in server environment." 
      });
    }

    // Admin notification
    console.log("📬 Sending admin email to:", admin_email || process.env.VITE_ADMIN_EMAIL);
    await transporter.sendMail({
      from: SENDER_EMAIL,
      to: admin_email || process.env.VITE_ADMIN_EMAIL,
      subject: `New contact form submission from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Service/Interest:</strong> ${service || "N/A"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    console.log("✅ Admin email sent");

    // User confirmation email
    console.log("📬 Sending confirmation to user:", email);
    await transporter.sendMail({
      from: SENDER_EMAIL,
      to: email,
      subject: "Thanks for contacting CIONIX",
      text: `Hi ${name},\n\nThank you for your message. Our team has received your query and will contact you soon.\n\nBest regards,\nCIONIX Team`,
    });

    console.log("✅ User confirmation sent");
    res.json({ status: "ok", message: "Email sent successfully" });
  } catch (error) {
    console.error("❌ SMTP Error:", error.code, error.message);
    console.error("Full error object:", error);
    res.status(500).json({ 
      error: `Email sending failed: ${error.code || error.message}` 
    });
  }
});

app.listen(port, () => {
  console.log(`contact-api server listening at http://localhost:${port}`);
});