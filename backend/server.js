import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(express.json());

const allowedOrigins = process.env.CLIENT_ORIGIN
    ? process.env.CLIENT_ORIGIN.split(',').map(o => o.trim())
    : []; // fallback for local dev

app.use(
    cors({
        origin: (origin, callback) => {
            // Allow requests with no origin (e.g. curl, Postman, server-to-server)
            if (!origin) return callback(null, true);
            if (allowedOrigins.includes('*') || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error(`CORS blocked: ${origin}`));
            }
        },
        methods: ['POST', 'GET', 'OPTIONS'],
        credentials: true,
    })
);

// ─── Nodemailer Transporter ───────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use a Gmail App Password (not your real password)
    },
});

// ─── Health Check ─────────────────────────────────────────────────────────────
app.get('/', (req, res) => {
    res.json({ status: 'ok', message: 'Portfolio backend is running 🚀' });
});

// ─── Contact Form Route ───────────────────────────────────────────────────────
app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required.',
        });
    }

    // Email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: 'Please provide a valid email address.',
        });
    }

    try {
        // ── Mail to YOU (portfolio owner) ─────────────────────────────────
        const ownerMailOptions = {
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `📬 New Contact: ${subject}`,
            html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 32px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; color: #fff;">📩 New Message Received</h1>
            <p style="margin: 8px 0 0; color: rgba(255,255,255,0.85); font-size: 14px;">from your Portfolio Contact Form</p>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; width: 100px;">Name</td>
                <td style="padding: 10px 0; font-weight: 600; color: #f1f5f9;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #94a3b8; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; color: #818cf8;"><a href="mailto:${email}" style="color: #818cf8; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #94a3b8; font-size: 13px;">Subject</td>
                <td style="padding: 10px 0; font-weight: 600; color: #f1f5f9;">${subject}</td>
              </tr>
            </table>
            <div style="margin-top: 24px; padding: 20px; background: #1e293b; border-radius: 8px; border-left: 4px solid #6366f1;">
              <p style="margin: 0 0 8px; color: #94a3b8; font-size: 13px;">Message</p>
              <p style="margin: 0; line-height: 1.7; color: #e2e8f0;">${message.replace(/\n/g, '<br/>')}</p>
            </div>
          </div>
          <div style="padding: 20px 32px; background: #1e293b; text-align: center; font-size: 12px; color: #475569;">
            Sent from your Portfolio at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
          </div>
        </div>
      `,
        };

        // ── Auto-reply to SENDER ──────────────────────────────────────────
        const senderMailOptions = {
            from: `"Akshat Rawat" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `✅ Got your message, ${name}!`,
            html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; color: #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6); padding: 32px; text-align: center;">
            <h1 style="margin: 0; font-size: 26px; color: #fff;">Thanks, ${name}! 🎉</h1>
            <p style="margin: 8px 0 0; color: rgba(255,255,255,0.85);">Your message has been received.</p>
          </div>
          <div style="padding: 32px;">
            <p style="margin: 0 0 16px; line-height: 1.7;">Hi <strong>${name}</strong>,</p>
            <p style="margin: 0 0 16px; line-height: 1.7; color: #94a3b8;">
              Thank you for reaching out! I've received your message regarding "<strong style="color:#e2e8f0">${subject}</strong>" and will get back to you as soon as possible — usually within 24 hours.
            </p>
            <div style="margin: 24px 0; padding: 20px; background: #1e293b; border-radius: 8px; border-left: 4px solid #8b5cf6;">
              <p style="margin: 0 0 8px; font-size: 13px; color: #94a3b8;">Your message:</p>
              <p style="margin: 0; line-height: 1.7; color: #e2e8f0;">${message.replace(/\n/g, '<br/>')}</p>
            </div>
            <p style="margin: 0; line-height: 1.7; color: #94a3b8;">
              In the meantime, feel free to check out my work on
              <a href="https://github.com/Akshat5rawat" style="color: #818cf8; text-decoration: none;">GitHub</a> or connect on
              <a href="https://linkedin.com/in/akshat5rawat/" style="color: #818cf8; text-decoration: none;">LinkedIn</a>.
            </p>
          </div>
          <div style="padding: 20px 32px; background: #1e293b; text-align: center; font-size: 12px; color: #475569;">
            <p style="margin: 0;">Akshat Rawat &bull; Dehradun, Uttarakhand, India</p>
            <p style="margin: 8px 0 0;">
              <a href="mailto:akshat5rawat@gmail.com" style="color: #6366f1; text-decoration: none;">akshat5rawat@gmail.com</a>
            </p>
          </div>
        </div>
      `,
        };

        // Send both emails concurrently
        await Promise.all([
            transporter.sendMail(ownerMailOptions),
            transporter.sendMail(senderMailOptions),
        ]);

        return res.status(200).json({
            success: true,
            message: `Message sent successfully! I'll get back to you at ${email} soon. 🚀`,
        });
    } catch (error) {
        console.error('Email send error:', error);
        return res.status(500).json({
            success: false,
            message: 'Failed to send message. Please try again or email me directly.',
        });
    }
});

// ─── Start Server ─────────────────────────────────────────────────────────────
app.listen(PORT, () => {
    console.log(`\n🚀 Backend server running on http://localhost:${PORT}`);
    console.log(`📧 Email configured for: ${process.env.EMAIL_USER}`);
});
