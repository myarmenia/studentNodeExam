import { Router } from "express";
import { wines } from "../data.js";
import Wine from "../Model/WineModel.js";
const seedRouter = Router();

seedRouter.get("/", async (req, res) => {
  await Wine.deleteMany({});
  const wineSeed = await Wine.insertMany(wines);
  res.status(201).json(wineSeed);
});

export default seedRouter;
