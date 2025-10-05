// src/pages/Cart.jsx
import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  if (!cart || cart.length === 0) {
    return <h2 style={{ padding: "20px" }}>Your cart is empty.</h2>;
  }

  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  return (
    
    <div className="container mt-5">
      <h2 className="mb-4">Your Cart</h2>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Price (R)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>R{item.price}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(index)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4 className="mt-3">Total: R{total.toFixed(2)}</h4>

      <div className="d-flex gap-3 mt-4">
        <button
          className="btn btn-secondary"
          onClick={clearCart}
        >
          Clear Cart
        </button>

        <button
          className="btn btn-primary"
          onClick={() => navigate("/payment")}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;
