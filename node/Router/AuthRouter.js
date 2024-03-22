import { Router } from "express";
import authController from "../Controller/AuthController.js";

const authRouter = Router()

authRouter.post("/register", authController.register)
authRouter.post("/login", authController.login)
authRouter.post("/refresh" ,authController.refresh)
authRouter.post("/logout", authController.logOut)

export default authRouter