import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
  {
    boughtItemsId: { type: mongoose.Schema.Types.ObjectId, ref: "BoughtItems" },
    cartId: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("Users", UsersSchema);

export default Users;
