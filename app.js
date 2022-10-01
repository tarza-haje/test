import express from "express";//henany express => es5
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();




const app = express();

app.listen(3000,() =>{
    console.log("server is running")
})


app.get("/",(req,res) =>{
    res.send("hello")
})

