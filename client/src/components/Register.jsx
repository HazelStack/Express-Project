import React, { useState } from "react";
import { register } from "../api";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/Auth.css";

export default function Register({ onRegister, onSwitchToLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const newUser = await register(username, password, email);
      onRegister(newUser); // auto-login
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-page">
  <Container className="auth-card">
    <Card className="shadow-lg">
      <Card.Body>
        <h2 className="text-center mb-4 auth-title">
          🌱 Create Your Botanical Account
        </h2>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Choose a username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button type="submit" className="w-100 auth-btn">
            Register
          </Button>
        </Form>

        {error && (
          <p className="text-danger text-center mt-3">{error}</p>
        )}

        <div className="text-center mt-3">
          Already have an account?{" "}
          <Button
            variant="link"
            onClick={onSwitchToLogin}
            className="auth-link"
          >
            Login
          </Button>
        </div>
      </Card.Body>
    </Card>
  </Container>
</div>
  );
}