// const express=require('express')
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express"; //method-2
import connectDB from "./config/database.js";
import messageRoute from "./routes/messageRoute.js";
import userRoute from "./routes/userRoute.js";

dotenv.config({});

const app=express();

const PORT=process.env.PORT || 5000;
// middleware

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/v1/user",userRoute);
app.use("/api/v1/message",messageRoute);


app.listen(PORT,()=>{
    connectDB();
    console.log(`Server is running at port ${PORT}`)
})