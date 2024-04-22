import { Router } from "express";
import CartController from "../Controller/CartController.js";


const CartRouter = Router()

CartRouter.get("/getCart", CartController.getCart)

CartRouter.get("/boughtItems", CartController.getBoughtItems)

CartRouter.post("/addToCart", CartController.addToCart)

CartRouter.post("/checkout", CartController.checkout)

CartRouter.put("/changeCount", CartController.changeCount)

CartRouter.delete("/deleteItem/:cartItemId", CartController.deletItem)




export default CartRouter