import React from "react";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>🎉 Order Confirmed!!!</h2>
      <p>Thank you for your order. Your food will be delivered soon in less than 45 minutes. 🚚</p>

      <button
        onClick={() => navigate("/my-orders")}
        style={{
          margin: "10px",
          padding: "10px 20px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        View My Orders
      </button>

      <button
        onClick={() => navigate("/")}
        style={{
          margin: "10px",
          padding: "10px 20px",
          background: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default Confirmation;



