// pages/login.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaGoogle, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion'; // For animations

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in both fields!');
    } else {
      setError('');
      console.log('Login Successful');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #6a11cb, #2575fc)',
      }}
    >
      <Container fluid className="d-flex align-items-center justify-content-center h-100">
        <Row className="w-100" style={{ maxWidth: '900px', height: '70vh' }}>
          {/* Left Section - Image */}
          <Col md={6} className="p-0">
            <motion.div
              className="h-100 w-100 rounded-start overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0 }}
              style={{ borderRadius: '1rem 0 0 1rem' }}
            >
              <img
                src="/assets/login_page.jpg"
                alt="Login Background"
                className="w-100 h-100"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </Col>

          {/* Right Section - Login Form */}
          <Col md={6} className="p-0">
            <motion.div
              className="h-100 d-flex flex-column justify-content-center align-items-center p-5 shadow-lg rounded-end bg-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0 }}
              style={{ borderRadius: '0 1rem 1rem 0' }}
            >
              <h3 className="text-center mb-4 text-primary fw-bold">AI Interview System</h3>
              <p className="text-center text-muted mb-4">Sign in to enhance your interview skills</p>

              {error && <div className="alert alert-danger text-center">{error}</div>}

              <Form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '360px' }}>
                {/* Email Field */}
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text bg-primary text-white">
                      <FaEnvelope />
                    </span>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </Form.Group>

                {/* Password Field */}
                <Form.Group className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text bg-primary text-white">
                      <FaLock />
                    </span>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </Form.Group>

                {/* Login Button */}
                <Button variant="primary" type="submit" className="w-100 fw-bold mb-3">
                  Log In
                </Button>

                {/* Footer Links */}
                <div className="d-flex justify-content-between">
                  <a href="/RegisterPage" className="text-decoration-none">
                    Register
                  </a>
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

        .rounded-circle {
          width: 50px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
