require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const nodemailer = require("nodemailer");
const cors = require("cors");

const prisma = new PrismaClient();

module.exports = async (req, res) => {
    // Enable CORS for API requests
    res.setHeader("Access-Control-Allow-Origin", "https://your-vercel-frontend-url.vercel.app");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
        return res.status(200).end();
    }

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { name, email, message } = req.body;

    try {
        // Store message in the database
        const sentMessage = await prisma.mail.create({
            data: { name, email, message },
        });

        // Send email notification
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Portfolio Contact Message: ${name}`,
            text: `You have received a message from ${name}, ${email}: \n\n ${message}`,
        });

        return res.status(200).json({ success: true, message: "Message sent successfully" });
    } catch (err) {
        console.error("Error", err);
        return res.status(500).json({ success: false, error: "Failed to send message" });
    }
};


