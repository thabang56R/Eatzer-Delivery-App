import express from "express";
import Dish from "../models/dish.js";




const router = express.Router();

// Sample dishes for each restaurant
const sampleDishes = {
  "1": [
    { _id: "d1", name: "Margherita Pizza", price: 10 },
    { _id: "d2", name: "Pepperoni Pizza", price: 12 },
    { _id: "d3", name: "Pasta Alfredo", price: 14 },
  ],
  "2": [
    { _id: "d4", name: "California Roll", price: 8 },
    { _id: "d5", name: "Spicy Tuna Roll", price: 9 },
    { _id: "d6", name: "Salmon Sashimi", price: 15 },
  ],
  "3": [
    { _id: "d7", name: "Cheeseburger", price: 11 },
    { _id: "d8", name: "Bacon Burger", price: 13 },
    { _id: "d9", name: "Fries", price: 5 },
  ],
};

// GET /dishes/:restaurantId
router.get("/:restaurantId", (req, res) => {
  const { restaurantId } = req.params;
  const dishes = sampleDishes[restaurantId] || [];
  res.json(dishes);
});

export default router;
