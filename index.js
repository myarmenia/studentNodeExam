import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";

import connection from "./Utils/Connection.js";
import credentials from "./Config/Credentials.js"
import corsOptions from "./Config/CorsOptions.js";

import seedRouter from "./Router/SeedRouter.js";
import authRouter from "./Router/AuthRouter.js";
import wineRouter from "./Router/WineRouter.js";

const app = express();
dotenv.config();
connection();

app.use(credentials)
app.use(cors())
app.use(express.json())
app.use(urlencoded({ extended: true }))
app.use(cookieParser)


app.use("/api/seed", seedRouter)
console.log("index26tox");
console.log("index27tox");
app.use("/api/auth", authRouter)
app.use("/api/wine", wineRouter)

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`SERVER RUNING ON PORT ${PORT}`);
});
