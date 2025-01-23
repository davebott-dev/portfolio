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

//integrate nodemailer and a prisma query to save and send the email

app.listen(port,()=>console.log(`The Server is Running on Port ${port}`));