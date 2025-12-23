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

// CORS
app.use(cors({
  origin: "*",
    
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/auth", authRoutes);
app.use("/dishes", dishRoutes);
app.use("/api/orders", orderRoutes);
app.use("/restaurants", restaurantRoutes);
app.use("/api/paypal", paypalRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});



const PORT = process.env.PORT || 5000;

// ✅ START SERVER ONLY ONCE, AFTER DB CONNECTS
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (err) {
    console.error("❌ DB connection failed:", err.message);
    process.exit(1);
  }
};

startServer();

  




  




