import express from "express";
const app = express()

import userRouter from "./routes/userRouter.js"

app.use(express.json())

import dotenv from "dotenv"
dotenv.config()

import {ConectDb} from "./db/db.js";
ConectDb()

app.use("/api/user", userRouter)

app.listen(3000, (req, res) => {
    console.log("server is running on port 3000");
    
})