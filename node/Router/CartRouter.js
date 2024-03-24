import { Router } from 'express';
import cartController from '../Controller/CartController.js';
import isAuth from "../Middleware/IsAuth.js"

const cartRouter = Router()

/**
 * @swagger
 * tags:
 *  name: Cart
 *  description: Cart Items managing APIs
 */

/**
 * @swagger
 * /api/cart:
 *   get:
 *     summary: Get all cart items
 *     security:
 *       - bearerAuth: []
 *     tags: 
 *       - Cart
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Cart"
 *       400:
 *         description: Bad request, invalid input
 *       500:
 *         description: Internal server error
 */


cartRouter.get('/', isAuth, cartController.getCart);

/**
 * @swagger
 *  /api/cart/add:
 *    post:
 *      summary: Add wine to cart
 *      tags: [Cart]
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/request/AddToCart"
 *      responses:
 *        200:
 *          description: Success
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Cart"
 *        400:
 *          description: Bad request, invalid input
 *        500:
 *          description: Internal server error
 */


cartRouter.post('/add', isAuth, cartController.addToCart);

/**
 * @swagger
 *  /api/cart/updateCart:
 *    put:
 *      summary: Change count of the cart item
 *      tags: 
 *        - Cart
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/request/UpdateCart"
 *      responses:
 *        200:
 *          description: Updated
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/Cart"
 *        400:
 *          description: Bad request, invalid input
 *        500:
 *          description: Internal server error
 */



cartRouter.put('/update', isAuth, cartController.updateCart);

/**
 * @swagger
 * /api/cart/removeFromCart:
 *   delete:
 *     summary: Delete item from cart
 *     tags: 
 *       - Cart
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/request/RemoveFromCart"
 *     responses:
 *       200:
 *         description: Deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Cart"
 *       400:
 *         description: Bad request, invalid input
 *       500:
 *         description: Internal server error
 */


cartRouter.delete('/remove', isAuth, cartController.removeFromCart)

export default cartRouter