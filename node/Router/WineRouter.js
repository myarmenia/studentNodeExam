import { Router } from "express";
import wineController from "../Controller/WineController.js";
import isAuth from "../Middleware/IsAuth.js";
const wineRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Wines
 *   description: Wines managing APIs
 */

/**
 * @swagger
 * /api/wine:
 *   get:
 *     summary: Get all Wines
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Wines
 *     parameters:
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         description: Sort Wines by a specific attribute ("rating").
 *       - in: query
 *         name: filter
 *         schema:
 *           type: string
 *         description: Filter wines based on a specific criteria.
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Wine"
 */

wineRouter.get("/", wineController.getAll);

/**
 * @swagger
 * /api/wine/getbyid:
 *   get:
 *     summary: Get Wine by Id
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Wines
 *     parameters:
 *       - in: path
 *         name: wineId
 *         schema:
 *           type: string
 *         description: The ID of the wine to retrieve.
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Wine"
 */

wineRouter.get("/getbyid", wineController.getById);

/**
 * @swagger
 * /api/wine/filter:
 *   get:
 *     summary: Get Wines Based on filter
 *     security:
 *       - bearerAuth: []
 *     tags:
 *       - Wines
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         description: Filter wines based on type.
 *       - in: query
 *         name: brand
 *         schema:
 *           type: string
 *         description: Filter wines based on brand.
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Wine"
 */

wineRouter.get("/filter", wineController.wineFilter);

export default wineRouter;
