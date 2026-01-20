import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import FoodMenu from "./pages/FoodMenu";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import FloatingCartButton from "./components/FloatingCartButton";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Confirmation from "./pages/Confirmation";
import MyOrders from "./pages/MyOrders";

import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

import "./App.css"; // ← create this file if you want custom styles

function App() {
  return (
    <CartProvider>
      {/* === NAVBAR === */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <NavLink to="/" className="navbar-brand fw-bold fs-4">
            🍔 Eatzer DeliveryApp
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMainContent"
            aria-controls="navbarMainContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMainContent">
            <ul className="navbar-nav ms-auto align-items-center gap-2 gap-lg-3">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  end
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/Menu"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Menu
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/my-orders"
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  Orders
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `nav-link btn btn-outline-light btn-sm ${isActive ? "active" : ""}`
                  }
                >
                  Login
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    `nav-link btn btn-success btn-sm ${isActive ? "active" : ""}`
                  }
                >
                  Sign Up
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Push content down because navbar is fixed */}
      <div className="pt-5 pb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<FoodMenu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>

      <FloatingCartButton />

      {/* === FOOTER === */}
      <footer className="bg-dark text-light py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
              <h5 className="text-success mb-3">🍔 Eatzer DeliveryApp</h5>
              <p>
                Your favorite meals delivered fast at your door.<br />
                Fresh food • Secure payments • Great service
              </p>

              <div className="mt-4 d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    style={{ height: "48px" }}
                  />
                </a>
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    style={{ height: "48px" }}
                  />
                </a>
              </div>
            </div>

            <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end align-items-center">
              <div className="d-flex gap-4 fs-4">
                <a href="#" className="text-white"><FaFacebookF /></a>
                <a href="#" className="text-white"><FaTwitter /></a>
                <a href="#" className="text-white"><FaInstagram /></a>
                <a href="#" className="text-white"><FaWhatsapp /></a>
              </div>
            </div>
          </div>

          <div className="text-center mt-5 pt-4 border-top border-secondary">
            <small>
              © {new Date().getFullYear()} Eatzer DeliveryApp. All rights reserved.<br />
              Designed & Developed by Thabang Rakeng • 064 917 3328<br />
              Proudly South African
            </small>
          </div>
        </div>
      </footer>
    </CartProvider>
  );
}

export default App;