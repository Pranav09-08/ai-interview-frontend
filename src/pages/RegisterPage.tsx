// pages/register.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !mobile || !password || !confirmPassword) {
      setError("Please fill in all fields!");
    } else if (password !== confirmPassword) {
      setError("Passwords do not match!");
    } else {
      setError("");
      console.log("Registration Successful");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to right, #6441A5, #2A0845)",
        flexDirection: "column", // Stack heading and container vertically
      }}
    >
      {/* Heading outside the container, centered at the top */}
      <h2 className="text-center text-white fw-bold mb-4" style={{ marginTop: "20px" }}>
        Register Page
      </h2>

      <Container className="d-flex align-items-center justify-content-center h-100">
        <Row className="w-100" style={{ maxWidth: "900px", height: "75vh" }}>
          <Col md={6} className="p-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="h-100 w-100 overflow-hidden rounded-start"
              style={{ borderRadius: "1rem 0 0 1rem" }}
            >
              <img
                src="/assets/register_page.png"
                alt="Register Background"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          </Col>

          <Col md={6} className="p-0">
            <motion.div
              className="h-100 d-flex flex-column justify-content-center align-items-center p-5 shadow-lg bg-light rounded-end"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-center text-primary fw-bold mb-4">AI Interview System</h3>
              <p className="text-center text-muted mb-3">Sign up to start enhancing your interview skills</p>

              {error && <div className="alert alert-danger text-center fw-bold">{error}</div>}

              <Form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "360px" }}>
                <Form.Group className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text bg-primary text-white">
                      <FaUser />
                    </span>
                    <Form.Control
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text bg-primary text-white">
                      <FaEnvelope />
                    </span>
                    <Form.Control
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text bg-primary text-white">
                      <FaPhone />
                    </span>
                    <Form.Control
                      type="text"
                      placeholder="Mobile Number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <div className="input-group">
                    <span className="input-group-text bg-primary text-white">
                      <FaLock />
                    </span>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-4">
                  <div className="input-group">
                    <span className="input-group-text bg-primary text-white">
                      <FaLock />
                    </span>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </div>
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 fw-bold mb-3 rounded">
                  Sign Up
                </Button>

                <div className="text-center">
                  <small className="text-muted">
                    Already have an account?{" "}
                    <a href="/LoginPage" className="text-primary text-decoration-none">
                      Log In
                    </a>
                  </small>
                </div>
              </Form>
            </motion.div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        .rounded-start {
          border-top-left-radius: 1rem !important;
          border-bottom-left-radius: 1rem !important;
        }
        .rounded-end {
          border-top-right-radius: 1rem !important;
          border-bottom-right-radius: 1rem !important;
        }
        .input-group-text {
          min-width: 50px;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default RegisterPage;
