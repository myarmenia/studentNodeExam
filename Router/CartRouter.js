import { Router } from 'express';
import cartController from '../Controller/CartController.js';

const cartRouter = Router()

cartRouter.get('/', cartController.getCart);
cartRouter.post('/add', cartController.addToCart);
cartRouter.put('/update/:wineId', cartController.updateCart);
cartRouter.delete('/remove/:wineId', cartController.removeFromCart)

export default cartRouter