import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true }, // e.g. Pizza, Burgers, Sushi
  rating: { type: Number, default: 0 }, // 0–5 stars
  image: { type: String }, // image URL
  description: { type: String },
});

export default mongoose.model("Restaurant", restaurantSchema);
