import Cart from "../Model/CartModel.js";

const CartService = {
  getCart: async (_id) => {
    const cart = await Cart.findOne({ _id }).populate("items.wineId");
    if (!cart) {
      return { ErrorMessage: "Cart Not Found" };
    }
    return cart;
  },

  addToCart: async (_id, wineId, count) => {
    let cart = await Cart.findOne({ userId: _id });

    if (!cart) {
      cart = new Cart({ userId: _id, items: { wineId, count } });
    } else {
      const existingItem = cart.items.find(
        (item) => item.wineId.toString() === wineId
      );
      console.log("existingItem", existingItem);
      if (existingItem) {
        existingItem.count = count;
      } else {
        cart.items.push({ wineId, count });
      }
    }

    await cart.save();
    return cart;
  },

  updateCart: async (_id, wineId, count) => {
    const cart = await Cart.findOne({ userId: _id });

    if (!cart) {
      return { ErrorMessage: "Cart Not Found" };
    }
    console.log("cart" + " " + cart.items);

    const item = cart.items.find((item) => item.wineId.toString() === wineId);
    console.log("item" + " " + item);
    if (!item) {
      return { ErrorMessage: "Item not found in cart" };
    }

    item.count = count;
    await cart.save();
    return cart;
  },

  removeFromCart: async (_id, wineId) => {
    const cart = await Cart.findOne({ userId: _id });

    if (!cart) {
      return { ErrorMessage: "Cart not found" };
    }

    cart.items = cart.items.filter((item) => item.wineId.toString() !== wineId);
    await cart.save();
    return cart;
  },
};

export default CartService;
