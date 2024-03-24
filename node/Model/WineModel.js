import mongoose from "mongoose";

const WineSchema = new mongoose.Schema(
  {
    brand: { type: String, required: true },
    name: { type: String, required: true },
    type: { type: String, required: true },
    color: { type: String, required: true },
    img: { type: String, required: true },
    rating: { type: Number, default: 0 },
    stock: { type: Number, default: 0 },
    article: { type: String, required: true },
    country: { type: String, required: true },
    region: { type: String, required: true },
    volume: { type: String, required: true },
    alcohol: { type: String, required: true },
    price: { type: Number, required: true },
    sales: { type: Number, default: 0 },
    desc: { type: String },
  },
  { timestamps: true }
);

const Wine = mongoose.model("Wine", WineSchema);

export default Wine;
