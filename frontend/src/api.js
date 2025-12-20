import axios from "axios";

const API = axios.create({
  baseURL: "import.meta.env.VITE_API_URL",
  withCredentials: true,
});

// Fetch all restaurants
export const fetchRestaurants = async () => {
  try {
    const res = await API.get("/restaurants");
    return res.data;
  } catch (err) {
    console.error("Error fetching restaurants:", err);
    throw err;
  }
};

// Fetch dishes by restaurant
export const fetchDishes = async (restaurantId) => {
  try {
    const res = await API.get(`/dishes/${restaurantId}`);
    return res.data;
  } catch (err) {
    console.error("Error fetching dishes:", err);
    throw err;
  }
};

export default API;
