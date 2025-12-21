
import mongoose from "mongoose";
import dotenv from "dotenv";
import Restaurant from "./models/Restaurant.js";
import Dish from "./models/dish.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected for seeding"))
  .catch((err) => console.error("❌ DB Connection Error:", err));

const sampleRestaurants = [
  { name: "Pizza Palace", category: "Pizza", rating: 4.5, image: "https://source.unsplash.com/400x300/?pizza" },
  { name: "Burger Hub", category: "Burgers", rating: 4.2, image: "https://source.unsplash.com/400x300/?burger" },
  { name: "Sushi World", category: "Sushi", rating: 4.8, image: "https://source.unsplash.com/400x300/?sushi" },
];

const sampleDishes = {
  "Pizza Palace": [
    { name: "Margherita", price: 8, image: "https://source.unsplash.com/400x300/?margherita" },
    { name: "Pepperoni", price: 10, image: "https://source.unsplash.com/400x300/?pepperoni" },
  ],
  "Burger Hub": [
    { name: "Cheese Burger", price: 7, image: "https://source.unsplash.com/400x300/?cheeseburger" },
    { name: "Double Beef", price: 9, image: "https://source.unsplash.com/400x300/?beefburger" },
  ],
  "Sushi World": [
    { name: "California Roll", price: 12, image: "https://source.unsplash.com/400x300/?sushi-roll" },
    { name: "Salmon Nigiri", price: 14, image: "https://source.unsplash.com/400x300/?nigiri" },
  ],
};

const seedData = async () => {
  try {
    await Restaurant.deleteMany();
    await Dish.deleteMany();

    const createdRestaurants = await Restaurant.insertMany(sampleRestaurants);

    for (const res of createdRestaurants) {
      const dishes = sampleDishes[res.name] || [];
      for (const dish of dishes) {
        await Dish.create({ ...dish, restaurant: res._id });
      }
    }

    console.log("✅ Restaurants and dishes seeded!");
    process.exit();
  } catch (err) {
    console.error("❌ Error seeding data:", err);
    process.exit(1);
  }
};

seedData();

