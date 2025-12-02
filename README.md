Delivery App – MERN Stack

A simple and modern delivery application built using the MERN stack (MongoDB, Express, React, Node). Users can browse restaurants, view menus, add items to cart, and place orders, while admins manage restaurants, menu items, and orders. The app includes secure authentication, responsive UI, and clean RESTful APIs.

Features

User signup & login (JWT auth)

Browse restaurants & menus

Add to cart & place orders

Track order status

Admin panel for restaurants, items & orders

Image uploads (Cloudinary/Multer)

Fully responsive frontend

Tech Stack

Frontend: React, React Router, Axios, Bootstrap
Backend: Node, Express, MongoDB, Mongoose
Other: JWT, bcrypt, Cloudinary/Multer

Project Setup
1. Install
git clone https://github.com/thabang56R/Eatzer-Delivery-App.git
cd Eatzer-Delivery-App

2. Install Dependencies
cd client && npm install
cd ../server && npm install

3. Environment Variables

Create server/.env:

MONGO_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret

4. Run App
# Backend
cd server
npm start

# Frontend
cd client
npm start
