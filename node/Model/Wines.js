import mongoose from "mongoose";

const WinesSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    imageUrl: { type: String, required: true },
    article: { type: String, required: true },
    about: {
      country: { type: String, required: true },
      region: { type: String, required: true },
      manufacturer: {
        name: { type: String, required: true },
        imageUrl: { type: String, required: true },
      },
      color: { type: String, required: true },
    },
    type: { type: String, required: true },
    volume: { type: Number, required: true },
    alcohol: { type: Number, required: true },
    price: { type: Number, required: true },
    discount: { type: Number },
    rating: { type: Number, required: true },
    sale: { type: Number, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Wines = mongoose.model("Wines", WinesSchema);

export default Wines;
