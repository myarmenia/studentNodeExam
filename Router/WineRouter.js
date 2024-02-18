import { Router } from "express";
import wineController from '../Controller/WineController.js'
const wineRouter = Router()

wineRouter.get("/", wineController.getAll)
wineRouter.get("/getbyid", wineController.getById)
wineRouter.get("/filter", wineController.wineFilter)
export default wineRouter