import * as dotenv from "dotenv";
import app from "./app";
dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Running on PORT ${PORT}...`));
