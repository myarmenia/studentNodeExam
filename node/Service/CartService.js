import Cart from "../Model/CartModel.js";

const cartService = {

    getCart: async (userId) => {
        const cart = await Cart.findOne({ user: userId }).populate('wines.wineId');
        return cart;
    },

    addToCart: async (userId, wineId, count) => {
        const cart = await Cart.findOne({ user: userId });
        if (!cart) {
            const newCart = new Cart({ user: userId, wines: [{ wineId, count }] });
            await newCart.save();
            return newCart;
        }

        const existingWineIndex = cart.wines.findIndex((wine) => wine.wineId.toString() === wineId.toString());
        if (existingWineIndex === -1) {
            cart.wines.push({ wineId, count });
        } else {
            cart.wines[existingWineIndex].count += count;
        }
        await cart.save();
        return cart;
    },

    updateCart: async (userId, wineId, count) => {
        const cart = await Cart.findOne({ user: userId });
        if (!cart) {
            throw new Error('Cart not found');
        }

        const existingWineIndex = cart.wines.findIndex((wine) => wine.wineId.toString() === wineId.toString());
        if (existingWineIndex === -1) {
            throw new Error('Wine not found in cart');
        }

        cart.wines[existingWineIndex].count = count;
        await cart.save();
        return cart;
    },

    removeFromCart: async (userId, wineId) => {
        const cart = await Cart.findOne({ user: userId });
        if (!cart) {
            throw new Error('Cart not found');
        }

        cart.wines = cart.wines.filter((wine) => wine.wineId.toString() !== wineId.toString());
        await cart.save();
        return cart;
    }
}

export default cartService