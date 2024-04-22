import { Router } from "express";
import Wines from "../Model/Wines.js";
import winesData from "../winesData.js";

const SeedRouter = Router()

SeedRouter.get("/", async (req,res)=>{
    try {
        await Wines.deleteMany({})

        const createdWinees = await Wines.insertMany(winesData);

        res.status(200).send({ message: "Wines Was Added" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
})

export default SeedRouter