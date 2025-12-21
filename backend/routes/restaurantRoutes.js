import express from "express";

const router = express.Router();

// Sample restaurant data (you can later replace this with MongoDB)
const sampleRestaurants = [
  {
    _id: "1",
    name: "Pizza Palace",
    cuisine: "Italian",
    location: "New York",
    rating: 4.5,
  },
  {
    _id: "2",
    name: "Sushi Spot",
    cuisine: "Japanese",
    location: "San Francisco",
    rating: 4.8,
  },
  {
    _id: "3",
    name: "Burger Hub",
    cuisine: "American",
    location: "Chicago",
    rating: 4.2,
  },
];

// GET /restaurants
router.get("/", (req, res) => {
  res.json(sampleRestaurants);
});

export default router;
