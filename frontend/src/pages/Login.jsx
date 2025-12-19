import React, { useState } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import API from "../api";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token); // store JWT
      alert("✅ Login successful . Please Proceed to Menu Selection🍴🍔🍕");
      navigate("/Menu"); 
    } catch (err) {
      console.error("Login Error:", err.response?.data || err.message);
      alert("❌ Login failed: " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <Container className="my-5 d-flex justify-content-center">
      <Card className="p-4 shadow-sm" style={{ width: "400px" }}>
        <h3 className="mb-4 text-center">Login</h3>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button type="submit" className="w-100" variant="success">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;
