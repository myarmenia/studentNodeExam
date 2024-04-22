import { Router } from "express";
import AuthController from "../Controller/AuthController.js";


const AuthRouter = Router()

AuthRouter.post("/signUp", AuthController.signUp)

AuthRouter.post("/signIn", AuthController.signIn)

AuthRouter.post("/signOut", AuthController.signOut)

AuthRouter.post("/refresh", AuthController.refresh)


export default AuthRouter