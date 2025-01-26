require("dotenv").config();
const express = require('express');
const {PrismaClient} = require('@prisma/client');
const cors= require('cors');
const nodemailer= require('nodemailer');
const bodyParser= require('body-parser');

const prisma = new PrismaClient();
const app =express();
const port = process.env.PORT ||3000;

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET','POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    }
});

app.post("/contact", async(req,res)=> {
    const {name,email,message} = req.body;

    try{
        const sentMessage = await prisma.mail.create({
            data: {
                name,
                email,
                message,
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Portfolio Contact Message: ${name}`,
            text: `You have received a message from ${name}, ${email}: \n\n ${message}`,
        });
        res.status(200).json({
            success:true,
            message: "Message sent successfully"
        });
    } catch(err) {
        console.error("Error", err);
        res.status(500).json({
            success:false,
            error: "Failed to send message"
        })
    }
})

app.listen(port,()=>console.log(`The Server is Running on Port ${port}`));