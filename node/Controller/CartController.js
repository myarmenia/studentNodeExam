import cartService from "../Service/CartService.js";

const cartController = {
  getCart: async (req, res) => {
    try {
      const { _id } = req.user;
      console.log(_id);
      const cart = await cartService.getCart(_id);
      res.status(200).send(cart);
    } catch (error) {
      console.error(error);
      res.status(500).send({ CriticalError: "Internal Server Error" });
    }
  },

  addToCart: async (req, res) => {
    try {
      const { _id } = req.user;
      const { wineId, count } = req.body;
      const cart = await cartService.addToCart(_id, wineId, count);
      console.log(cart);
      res.status(201).json(cart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ CriticalError: "Internal Server Error" });
    }
  },

  updateCart: async (req, res) => {
    try {
      const { _id } = req.user;
      const { wineId, count } = req.body;
      const cart = await cartService.updateCart(_id, wineId, count);
      res.status(202).json(cart);
    } catch (error) {
      console.error(error);
      res.status(500).send({ CriticalError: "Internal Server Error" });
    }
  },

  removeFromCart: async (req, res) => {
    try {
      const { _id } = req.user;
      const { wineId } = req.body;
      const cart = await cartService.removeFromCart(_id, wineId);
      res.status(200).json(cart);
    } catch (error) {
      console.error(error);
      res.status(500).send({ CriticalError: "Internal Server Error" });
    }
  },
};

export default cartController;
