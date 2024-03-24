import express from "express";
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
import swaggerUi from "swagger-ui-express";
import { specs } from "./Utils/Swagger/Swagger.js";

const app = express();
dotenv.config();
connection();

app.use(
  "/api/swagger",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

app.use(credentials);
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/seed", seedRouter);
app.use("/api/auth", authRouter);
app.use("/api/wine", wineRouter);
app.use("/api/cart", isAuth, cartRouter);

const PORT = process.env.PORT || 8090;

app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`));
