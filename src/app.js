import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes
// import
import userRouter from "./routes/user.routes.js";
// declaration
app.use("/api/v1/users", userRouter);
// http://locahost:8000/api/v1/users/login

export { app };
