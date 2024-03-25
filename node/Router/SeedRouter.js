import { Router } from "express";
import { wines } from "../data.js";
import Wine from "../Model/WineModel.js";
const seedRouter = Router();

seedRouter.get("/", async (req, res) => {
  try {
    await Wine.deleteMany({});
    const wineSeed = await Wine.insertMany(wines);
    res.status(201).json(wineSeed);
  } catch (error) {
    console.error(error);
    res.status(500).send({ CriticalError: "Internal Server Error" })
  }
});

export default seedRouter;
