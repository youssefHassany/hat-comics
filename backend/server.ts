import * as dotenv from "dotenv";
import app from "./app";
import mongoose from "mongoose";

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE;

if (!DB) {
  console.error("Environment variable DATABASE is not set");
  process.exit(1); // exit the process or handle the error accordingly
}

mongoose
  .connect(DB)
  .then(() => console.log("Connection Succeeded!"))
  .catch((err) => console.error("Connection Failed:", err));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Running on PORT ${PORT}...`));
