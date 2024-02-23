import cartService from "../Service/CartService.js"

const cartController = {

    getCart : async (req, res, next) => {
        try {
          const userId = req.user.id;
          const cart = await cartService.getCart(userId);
          res.json(cart);
        } catch (error) {
          next(error);
        }
      },
      
       addToCart : async (req, res) => {
        try {
          const { userId } = req.body;
          const { wineId, count } = req.body;
          const cart = await cartService.addToCart(userId, wineId, count);
          res.status(201).json(cart);
        } catch (error) {
          console.error(error)
          res.status(500).json({ CriticalError: "Internal Server Error"})
        }
      },
      
       updateCart : async (req, res, next) => {
        try {
          const userId = req.user.id;
          const { wineId, count } = req.body;
          const cart = await cartService.updateCart(userId, wineId, count);
          res.json(cart);
        } catch (error) {
          next(error);
        }
      },
      
       removeFromCart : async (req, res, next) => {
        try {
          const userId = req.user.id;
          const { wineId } = req.params;
          const cart = await cartService.removeFromCart(userId, wineId);
          res.json(cart);
        } catch (error) {
          next(error);
        }
      },
}
 
export default cartController