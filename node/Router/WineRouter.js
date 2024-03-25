import express from "express";
import wineController from "../Controller/WineController.js";

const wineRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Wines
 *   description: Wines managing APIs
 */

/**
 * @swagger
 * /api/wine/getById:
 *   get:
 *     summary: Get wine by ID
 *     tags: [Wines]
 *     description: Retrieve wine details by its ID.
 *     parameters:
 *       - in: query
 *         name: wineId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the wine to retrieve.
 *     responses:
 *       '200':
 *         description: OK. Returns the wine details.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Wine'
 *       '400':
 *         description: Bad Request. Invalid input.
 *       '404':
 *         description: Not Found. Wine not found.
 *       '500':
 *         description: Internal Server Error. Something went wrong on the server.
 */

wineRouter.get("/getById", wineController.getById);

/**
 * @swagger
 * /api/wine/getAll:
 *   get:
 *     summary: Get Wines Based on filter
 *     tags: [Wines]
 *     parameters:
 *       - in: query
 *         name: types
 *         schema:
 *           type: array
 *           items:
 *             type: string
 *         description: Filter wines based on types.
 *       - in: query
 *         name: brands
 *         schema:
 *           type: array
 *           items:
 *             type: string
 *         description: Filter wines based on brands.
 *       - in: query
 *         name: minPrice
 *         schema:
 *           type: number
 *         description: Filter wines with a minimum price.
 *       - in: query
 *         name: maxPrice
 *         schema:
 *           type: number
 *         description: Filter wines with a maximum price.
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Wine"
 */

wineRouter.get("/getAll", wineController.getAllAndFilter);

export default wineRouter;
