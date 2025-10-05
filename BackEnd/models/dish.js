import mongoose from "mongoose";

const dishSchema = new mongoose.Schema({
  name: String,
  price: Number,
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" }
});

const Dish = mongoose.model("Dish", dishSchema);

export default Dish;
