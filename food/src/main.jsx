import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
     <PayPalScriptProvider options={{ "client-id": "AbGQ3BRTle195I-cOUhOXnR76_Lfcg0gJbGT4WgW5gO3WLNxxkTdsNHi2yPgI-b-qXPf3hgj9T8DdJWe", currency: "USD" }}>
      <CartProvider>
        <App />
      </CartProvider>
      </PayPalScriptProvider>
    </BrowserRouter>
  </React.StrictMode>
);
