import express from "express";
const app = express()

import userRouter from "./routes/userRouter.js"
import tweetRouter from "./routes/tweetRouter.js"
import { isLoggedIn } from "./middlewares/isLoggedIn.js";

import cookieParser from "cookie-parser"

app.use(cookieParser())
app.use(express.json())

import dotenv from "dotenv"
dotenv.config()

import {ConectDb} from "./db/db.js";
ConectDb()

app.use("/api/user", userRouter)
app.use("/api/tweet",isLoggedIn, tweetRouter)

app.listen(3000, (req, res) => {
    console.log("server is running on port 3000");
})