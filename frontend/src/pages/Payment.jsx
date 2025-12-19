
import React from "react";
import { useCart } from "../context/CartContext";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  if (!cart || cart.length === 0) {
    return <h2 style={{ padding: "20px" }}>Your cart is empty.</h2>;
  }

  const total = cart.reduce((sum, item) => sum + (item.price || 0), 0);
  
  const handleConfirm = () => {
    confirmOrder();
    navigate("/my-orders"); // ✅ redirect after confirming
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Payment Page</h2>
      <h3>Total: R{total.toFixed(2)}</h3>

      {/* Show cart items */}
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - R{item.price}
          </li>
        ))}
      </ul>

      {/* PayPal Integration */}
      <PayPalScriptProvider
        options={{
          "client-id": "test", // 🔴 Replace with your real PayPal client ID
          currency: "USD",
        }}
      >
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    // Convert ZAR to USD (basic demo, real apps should fetch exchange rates)
                    value: (total / 18).toFixed(2),
                    currency_code: "USD",
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then(() => {
              alert("✅ Payment successful!");
              navigate("/confirmation");
            });
          }}
          onError={(err) => {
            console.error("PayPal Checkout Error:", err);
            alert("❌ Payment failed!");
          }}
        />
      </PayPalScriptProvider>

      {/* Manual Confirm Button */}
      <button
        onClick={() => navigate("/confirmation")}
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
        Confirm Payment
      </button>
    </div>
  );
};

export default Payment;
