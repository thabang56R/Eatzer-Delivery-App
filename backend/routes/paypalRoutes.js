import Order from "../models/order.js";
import express from "express";
import paypal from "@paypal/checkout-server-sdk";

const router = express.Router();

// PayPal Environment Setup (Sandbox for dev)
const environment = new paypal.core.SandboxEnvironment(
  process.env.PAYPAL_CLIENT_ID,
  process.env.PAYPAL_CLIENT_SECRET
);
const client = new paypal.core.PayPalHttpClient(environment);

// ✅ Create Order
router.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: amount,
        },
      },
    ],
  });

  try {
    const order = await client.execute(request);
    res.json({ id: order.result.id });
  } catch (err) {
    console.error("❌ PayPal Create Order Error:", err);
    res.status(500).json({ error: "Failed to create order" });
  }
});

// ✅ Capture Order
router.post("/capture-order/:orderID", async (req, res) => {
  const { orderID } = req.params;

  const request = new paypal.orders.OrdersCaptureRequest(orderID);
  request.requestBody({});

  try {
    const capture = await client.execute(request);
    res.json({ capture: capture.result });
  } catch (err) {
    console.error("❌ PayPal Capture Error:", err);
    res.status(500).json({ error: "Failed to capture order" });
  }
});

export default router;

