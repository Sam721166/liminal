import express from "express";
import cors from "cors";

const app = express();

// CORS: specific origin for credentials. On Vercel, use FRONTEND_URL or reflect request origin.
const corsConfig = {
    origin: process.env.FRONTEND_URL || (process.env.VERCEL ? true : "http://localhost:5173"),
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(cors(corsConfig));

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

// Don't crash the serverless function if DB fails at cold start (e.g. missing MONGO_URI on Vercel)
try {
    await ConectDb();
} catch (err) {
    console.error("DB init failed (app will still start):", err.message);
}

app.use("/api/user", userRouter)
app.use("/api/tweet",isLoggedIn, tweetRouter)


app.get("/", (req, res) => {
    res.send("backend is running");
});

// Start server when running locally (not on Vercel). Without this, no APIs work locally.
if (!process.env.VERCEL) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

export default app;