import { useState } from "react";
import { login } from "../api";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/Auth.css";

export default function Login({ onLogin, onSwitchToRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const user = await login(username, password);
      onLogin(user);
    } catch {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="auth-page">
      <Container className="auth-card">
        <Card className="shadow-lg">
          <Card.Body>
            <h2 className="text-center mb-4 auth-title">
              🌿 Welcome Back
            </h2>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button type="submit" className="w-100 auth-btn">
                Login
              </Button>
            </Form>

            {error && (
              <p className="text-danger text-center mt-3">{error}</p>
            )}

            <div className="text-center mt-3">
              Don’t have an account?{" "}
              <Button
                variant="link"
                onClick={onSwitchToRegister}
                className="auth-link"
              >
                Register
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}