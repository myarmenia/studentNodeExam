import { Router } from "express";
import WinesController from "../Controller/WinesController.js";

const WinesRouter = Router();

WinesRouter.get("/", WinesController.getAll);

WinesRouter.get("/:id", WinesController.getById);

export default WinesRouter;
