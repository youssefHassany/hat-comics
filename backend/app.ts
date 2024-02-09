import express from "express";
import fs from "fs";
import cors from "cors";

const app = express();

app.use(express.json()); // middleware

app.use(
  cors({
    origin: "http://localhost:5173", // Corrected origin URL
  })
);

const comics = JSON.parse(
  fs.readFileSync(`${__dirname}/data/comics-data.json`, "utf-8")
);

app.get("/api/v1/comics", (req, res) => {
  res.status(200).json({
    status: "success",
    comics: comics,
  });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Running From Port ${PORT}...`);
});
