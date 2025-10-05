import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  if (!cart || cart.length === 0) {
    return <h2 style={{ padding: "20px" }}>No Orders Yet...</h2>;
  }

  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);


  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Ordered Items</h2>
      <h3>Total: R{total.toFixed(2)}</h3>

      {/* Show cart items */}
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - R{item.price}
          </li>
        ))}
      </ul>

      

      {/* Manual Confirm Button */}
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Back To HomePage
      </button>
      
    </div>
  );
};

export default MyOrders;
