import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Utils/db.js";
import authRoutes from "./routes/auth.js";
import illustrationRoutes from "./routes/illustration.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/illustration", illustrationRoutes);

// Connect to DB and start server
connectDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`🚀 Server running on port ${process.env.PORT}`);
  });
});
