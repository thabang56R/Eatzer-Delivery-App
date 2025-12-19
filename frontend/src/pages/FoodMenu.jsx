import React, { useContext } from "react";

import { useCart } from "../context/CartContext";


const foods = [
  { id: 1, name: "Pap + grilled Steak", price:129.95, img: "grills.jfif" },
  { id: 2, name: "Burger & Chips + Coke", price: 185.95, img: "burgerM.jpg" },
  { id: 3, name: "Chicken flavor Pizza with Cheese", price: 199.95, img: "pizza2.jfif" },
  { id: 4, name: "Kasi-kota", price: 59.95, img: "Kasi-Kota.webp" },
  { id: 5, name: "Spaghetti", price: 139.95, img: "spaghetti.jfif" },
  { id: 6, name: "Rice and Chicken stew + Veg", price: 99.95, img: "rice.jfif" },
  { id: 7, name: "full chicken", price: 129.95, img: "full chi.jfif" },
  { id: 8, name: "Fat koeks & Tea Breakfast", price: 59.95, img: "fatcooks.jfif" },
  { id: 9, name: "Sushi & Grills", price: 159.95, img: "sush.jfif" },
  { id: 10, name: "Delicious Burger", price: 99.95, img: "deliciousB.jfif" },
];

function FoodMenu() {
  const { addToCart } = useCart();

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center">🍴 Choose Your Food</h2>
      <div className="row">
        {foods.map((food) => (
          <div key={food.id} className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              <img src={food.img} className="card-img-top" alt={food.name} />
              <div className="card-body text-center">
                <h5 className="card-title">{food.name}</h5>
                <p className="card-text">Price: R{food.price}</p>
                <button
                  onClick={() => addToCart(food)}
                  className="btn btn-primary"
                >
                  Add to Cart 🛒
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodMenu;

