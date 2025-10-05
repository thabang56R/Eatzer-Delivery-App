import express from "express";
import Order from "../models/order.js";



const router = express.Router();

// Place an order
router.post("/", async (req, res) => {
  try {
    const { user, items, total, address, phone } = req.body;
    if (!items || items.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    const newOrder = new Order({ user, items, total, address, phone });
    await newOrder.save();

    res.status(201).json({ message: "Order placed successfully", order: newOrder });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ Get all orders for a specific user
router.get("/:user", async (req, res) => {
  try {
    const { user } = req.params;
    const orders = await Order.find({ user }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    console.error("❌ Fetch orders error:", err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

export default router;

