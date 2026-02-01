import express from "express";
const app = express()

import userRouter from "./routes/userRouter.js"
import tweetRouter from "./routes/tweetRouter.js"
import { isLoggedIn } from "./middlewares/isLoggedIn.js";

import cookieParser from "cookie-parser"

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

import dotenv from "dotenv"
dotenv.config()

import ConectDb from "./db/db.js";
await ConectDb()

app.use("/api/user", userRouter)
app.use("/api/tweet",isLoggedIn, tweetRouter)

// Health check / root route (fix: 3000 was wrong - that's a port, not a path)
app.get("/", (req, res) => {
    res.send("backend is running")
})

// Only start listening when running locally (not on Vercel serverless)
if (!process.env.VERCEL) {
    app.listen(3000, () => {
        console.log("Server running on http://localhost:3000")
    })
}

// Required for Vercel serverless: export the app so @vercel/node can invoke it
export default app