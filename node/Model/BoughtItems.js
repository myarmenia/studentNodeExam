import mongoose, { mongo } from "mongoose";

const BoughtItemsSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required:true,
    },
    boughtItems: [
      {
        wine_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Wines",
          required: true,
        },
        count: { type: Number, default: 1 },
      },
    ],
    totalCount: { type: Number, required: true, default: 1 },
    totalSpent: { type: Number, required: true },
  },
  { timestamps: true }
);

const BoughtItems = mongoose.model("BoughtItems", BoughtItemsSchema);

export default BoughtItems;
