import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js"; 
import orderRoutes from "./routes/orderRoutes.js";
import restaurantRoutes from "./routes/restaurantRoutes.js";
import dishRoutes from "./routes/dishRoutes.js";
import paypal from "@paypal/checkout-server-sdk";
import paypalRoutes from "./routes/paypalRoutes.js";



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// mount routes
app.use("/auth", authRoutes);
app.use("/dishes", dishRoutes);
app.use("/api/orders", orderRoutes);
app.use("/restaurants", restaurantRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/paypal", paypalRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});
// PayPal environment
const environment = new paypal.core.SandboxEnvironment(
  "AbGQ3BRTle195I-cOUhOXnR76_Lfcg0gJbGT4WgW5gO3WLNxxkTdsNHi2yPgI-b-qXPf3hgj9T8DdJWe",
  "EBFzd57S0YpBZbraoHfwt6MdyPQNeArV8WUY9yAFWhW50Q4GvvVqKRt8Lgr9akkRv-6fDfquHOWh7uva"
);
const client = new paypal.core.PayPalHttpClient(environment);

// Create order
app.post("/api/paypal/create-order", async (req, res) => {
  const { amount } = req.body;

  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer("return=representation");
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [{ amount: { currency_code: "USD", value: amount } }],
  });

  try {
    const order = await client.execute(request);
    res.json({ id: order.result.id });
  } catch (err) {
    console.error(err);
    res.status(500).send("Error creating PayPal order");
  }
});

// Capture order
app.post("/api/paypal/capture-order", async (req, res) => {
  const { orderID } = req.body;

  const request = new paypal.orders.OrdersCaptureRequest(orderID);
  request.requestBody({});

  try {
    const capture = await client.execute(request);
    res.json(capture.result);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error capturing PayPal order");
  }
});

const PORT = process.env.PORT || 5000;

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(process.env.PORT || 5000, () =>
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch((err) => console.error("❌ DB connection failed:", err.message));

  




  




