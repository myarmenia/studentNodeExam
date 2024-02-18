import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    wines: [
        {
            wineId: { type: mongoose.Schema.ObjectId, ref: "Wine", required: true },
            count: { type: Number, required: true }
        }
    ],
    totalQuantity: { type: Number, required: true, default: 0 },
    totalAmount: { type: Number, required: true, default: 0 }
}, { timestamps: true });

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;