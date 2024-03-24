import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connection from "./Utils/Connection.js";
import credentials from "./Config/Credentials.js";
import corsOptions from "./Config/CorsOptions.js";

import seedRouter from "./Router/SeedRouter.js";
import authRouter from "./Router/AuthRouter.js";
import wineRouter from "./Router/WineRouter.js";
import cartRouter from "./Router/CartRouter.js";
import isAuth from "./Middleware/IsAuth.js";
import swaggerUi from "swagger-ui-express"
import { specs } from "./Utils/Swagger/Swagger.js";
const app = express();
dotenv.config();
connection();

app.use(credentials); app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/seed", seedRouter);
app.use("/api/auth", authRouter);
app.use("/api/wine", wineRouter);
app.use("/api/cart", isAuth, cartRouter);
app.use(
  "/api/swagger",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
)

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
