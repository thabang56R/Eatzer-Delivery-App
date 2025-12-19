import React, { useEffect, useRef } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const FloatingCartButton = () => {
  const { cart } = useCart();
  const navigate = useNavigate();
  const buttonRef = useRef(null);

  // 🔥 Animate (bounce) whenever cart changes
  useEffect(() => {
    if (cart.length > 0 && buttonRef.current) {
      buttonRef.current.classList.add("cart-bounce");
      setTimeout(() => {
        buttonRef.current.classList.remove("cart-bounce");
      }, 600); // duration of bounce
    }
  }, [cart]);

  if (cart.length === 0) return null; // Hide if no items

  return (
    <button
      ref={buttonRef}
      onClick={() => navigate("/cart")}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: "60px",
        height: "60px",
        fontSize: "20px",
        cursor: "pointer",
        zIndex: 1000,
      }}
    >
      🛒 {cart.length}
    </button>
  );
};

export default FloatingCartButton;
