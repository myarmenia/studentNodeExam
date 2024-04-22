import mongoose from "mongoose";

const CartSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  items: [
    {
      wine_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Wines",
        required: true,
      },
      count: { type: Number, default: 1 },
      wineTotalPrice: { type: Number, required: true },
    },
  ],
  totalPrice: { type: Number, required: true },
  totalCount: { type: Number, required: true, default: 1 },
});

const Cart = mongoose.model("Cart", CartSchema);

export default Cart;
