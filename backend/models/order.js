import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: String, required: true },
    items: [
      {
        name: String,
        price: Number,
        quantity: { type: Number, default: 1 },
      },
    ],
    totalAmount: { type: Number, required: true },
    paymentStatus: { type: String, default: "PENDING" },
  },
  { timestamps: true }
);

// ✅ Prevent OverwriteModelError
const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
