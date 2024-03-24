import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // mongoose.Schema.Types.ObjectId voch te mongoose.Schema.ObjectId, tarber en
    items: [
      {
        wineId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Wine",
          required: true,
        }, // mongoose.Schema.Types.ObjectId voch te mongoose.Schema.ObjectId, tarber en
        count: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
