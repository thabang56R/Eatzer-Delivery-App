import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);

//Add to cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };
  

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const placeOrder = (cartItems = [], totalAmount = 0) => {
    const newOrder = {
      id: uuidv4().slice(0, 8).toUpperCase(),
      items: cartItems,
      total: totalAmount,
      status: "Pending".toLocaleString(),
    };
    setOrders((prevOrders) => [...prevOrders, newOrder]);
    clearCart();
    return newOrder;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        orders,
        setOrders,
        addToCart,
        removeFromCart,
        clearCart,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);