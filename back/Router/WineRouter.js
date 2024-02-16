import { Router } from "express";
import wineController from '../Controller/WineController.js'
const wineRouter = Router()

wineRouter.get("/", wineController.getAll)

export default wineRouter