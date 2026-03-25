import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

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

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    // Admin notification
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

    // User confirmation email
    await transporter.sendMail({
      from: SENDER_EMAIL,
      to: email,
      subject: "Thanks for contacting CIONIX",
      text: `Hi ${name},\n\nThank you for your message. Our team has received your query and will contact you soon.\n\nBest regards,\nCIONIX Team`,
    });

    res.json({ status: "ok" });
  } catch (error) {
    console.error("Error sending emails", error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(port, () => {
  console.log(`contact-api server listening at http://localhost:${port}`);
});