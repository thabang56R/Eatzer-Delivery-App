import React from "react";
import { Routes, Route, Link } from "react-router-dom";
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




function App() {
  return (
    <CartProvider>
      
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link to="/" className="navbar-brand fw-bold">
              🍔Eatzer DeliveryApp
            </Link>
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
             <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
               <ul className="navbar-nav">
                <li className="nav-item">
                 <a className="nav-link btn btn-outline-light mx-2" href="/">Home</a></li>
                <li className="nav-item">
                <a className="nav-link btn btn-outline-light mx-2" href="/my-orders">Orders</a></li>
                <li className="nav-item">
                <a className="nav-link btn btn-outline-light mx-2" href="/login">Login</a></li>
                <li className="nav-item">
                <a className="nav-link btn btn-outline-light mx-2" href="/signup">SignUp</a></li>

               </ul>
             </div>
          </div>
        
        </nav>

        {/* Pages */}
       
      {/* your routes and components */}
    
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
        

        {/* Floating Cart Button */}
        <FloatingCartButton />

        {/* Footer */}
        <footer className="bg-dark text-light text-center p-3 mt-5">
          <div className="container p-4">
        <div className="row">
          {/* Left text */}
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
            <h5 className="text-success">🍔Eatzer DeliveryApp</h5>
            <p className="text-light">
              Your favorite meals delivered fast at your door. 
              Enjoy fresh food and secure payments. 
              Thank You for choosing Us
              ⭐⭐⭐
            </p>
             {/* App Store Buttons */}
      <div style={{ marginTop: "15px" }}>
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
            style={{ height: "50px", marginRight: "10px" }}
          />
        </a>

        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            style={{ height: "50px" }}
          />
        </a>
      </div>
          </div>

          {/* Social icons */}
          <div className="col-lg-6 col-md-12 mb-4 mb-md-0 d-flex justify-content-center align-items-right">
            <a
              href=""
              className="text-white me-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href=""
              className="text-white me-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href=""
              className="text-white me-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href=""
              className="text-white me-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div><h6 className="text-success">By continuing past this page, you agree to our Terms of service , cookie Policy and content Policies . All trademarks are properties of their respective owners.</h6>
          © {new Date().getFullYear()} 🍔Eatzer DeliveryApp. All rights reserved.
        </footer>
      
    </CartProvider>
  );
}

export default App;
