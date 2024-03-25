import Cart from "../Model/CartModel.js";

const CartService = {
  getCart: async (_id) => {
    const cart = await Cart.findOne({ userId: _id }).populate("items.wineId");
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
        existingItem.count += count;
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

    const item = cart.items.find((item) => item._id.toString() === wineId);
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

    if (cart.items.find((item) => item._id.toString() === wineId)) {
      cart.items = cart.items.filter((item) => item._id.toString() !== wineId);

      // if (cart.items.length === 0) {
      //   return { Message: "Item not Found" }
      // }

      console.log("cart.items " + cart);
      await cart.save();
      return { Message: "Item Deleted successfuly" };
    }

    return cart.items.length === 0
      ? { Message: "Cart empty" }
      : { Message: "Item not found" };
  },
};

export default CartService;
