import React, { useEffect, useState,useContext } from "react";
import { fetchRestaurants } from "../api";
import {  Container,Row, Col,Card,Button,Form,InputGroup,Dropdown,DropdownButton,Carousel,} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Home() {
  const { cartItems, addToCart } = useCart();

  const restaurants = [
    { id: 1, name: "Pizza Palace Inn.", img: "pizza.jfif", rating: "⭐⭐⭐⭐☆" },
    { id: 2, name: "Burger King Restaurant", img: "buggerhub.webp", rating: "⭐⭐⭐☆☆" },
    { id: 3, name: "Kota King HUB", img: "kota.jfif", rating: "⭐⭐⭐⭐⭐" },
    { id: 4, name: "Chisa-Nyama Restaurant", img: "pap.jfif", rating: "⭐⭐⭐⭐☆" },
    { id: 5, name: "Mogodu Monday Inn.", img: "mogodu.jfif", rating: "⭐⭐⭐⭐⭐" },
    { id: 6, name: "BreakFast King Restaurant", img: "Breakfast.jfif", rating: "⭐⭐⭐⭐⭐" },
    { id: 7, name: "Sushi Palace Restaurant", img: "sushi.avif", rating: "⭐⭐⭐⭐⭐" },
    { id: 8, name: "North Fried Fish Restaurant", img: "fish.jfif", rating: "⭐⭐⭐⭐⭐" },
  ];

  return (
    <>
      {/* Hero Search Section */}
      <div className="hero-section text-center d-flex flex-column justify-content-center align-items-center">
        <br/>
        <br/>
        <Form className= "d-flex w-75 w-md-50">
          <Form.Control
            type="text"
            placeholder="Search for restaurant, cuisine or dish"
            className="me-2"
          />
          <Button variant="danger">Search</Button>
        </Form>
        
        <h2 className="fw-bold mb-4 text-success">
          Discover the best food & drinks near you
        </h2>
      </div>

      {/* Categories */}
      <Container className="my-5">
        <Row className="text-center">
          {[
            { title: "Order Online", text: "Stay home and order to your doorstep", img: "orderOnline.webp" },
            { title: "Dining Out", text: "View the city’s favourite dining venues", img: "diningout.avif" },
            { title: "Nightlife & Clubs", text: "Explore the city’s top nightlife outlets", img: "night.avif" },
          ].map((cat, i) => (
            <Col md={4} key={i} className="mb-4">
              <Card className="shadow-sm category-card h-100">
                <Card.Img variant="top" src={cat.img} className="category-img" />
                <Card.Body>
                  <Card.Title>{cat.title}</Card.Title>
                  <Card.Text>{cat.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Restaurants */}
      <Container className="my-5">
        <h3 className="fw-bold mb-4">Popular Restaurants</h3>
        <Row>
          {restaurants.map((res) => (
            <Col md={3} className="mb-4" key={res.id}>
              <Card className="shadow-sm restaurant-card h-100">
                <Card.Img variant="top" src={res.img} />
                <Card.Body>
                  <Card.Title>{res.name}</Card.Title>
                  <Card.Text>{res.rating}</Card.Text>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => Preview(res)}
                  >
                    Preview
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;