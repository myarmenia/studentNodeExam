import { Router } from "express";
import { wines } from "../data.js";
import Wine from "../Model/WineModel.js";
const seedRouter = Router()

/**
 * @swagger
 * /api/seed:
 *   get:
 *     summary: Seed the database with wines
 *     security:
 *        - bearerAuth: []
 *     tags: [Seed]
 *     responses:
 *       201:
 *         description: Wines seeded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Wine'
 */

seedRouter.get("/", async (req, res) => {
    await Wine.deleteMany({})
    const wineSeed = await Wine.insertMany(wines)
    res.status(201).json(wineSeed)
})

export default seedRouter