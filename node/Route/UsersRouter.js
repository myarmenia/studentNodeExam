import { Router } from "express";
import UsersController from "../Controller/UsersController.js";


const UsersRouter = Router()

UsersRouter.get("/", UsersController.getUser)

UsersRouter.put("/change", UsersController.changeUser)



export default UsersRouter