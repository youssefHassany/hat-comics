import express from "express";
import cors from "cors";
import comicsRouter from "./routes/comicsRouter";

const app = express();

app.use(express.json()); // middleware

app.use(
  cors({
    origin: "http://localhost:5173", // Corrected origin URL
  })
);

app.use("/api/v1/comics", comicsRouter);

export default app;
