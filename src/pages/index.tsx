// /src/pages/index.tsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Navbar, Nav, Card, Accordion } from "react-bootstrap";
import { FaBrain, FaUserGraduate, FaMicrophone, FaComments, FaRobot } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">AI Interview System</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/InterviewPage">Start Interview</Nav.Link>
              <Nav.Link href="/AboutUs">About Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <div className="bg-primary text-white text-center py-5">
        <Container>
          <h1 className="display-4 fw-bold">Ace Your Next Interview with AI</h1>
          <p className="lead mt-3">
            Practice, improve, and get real-time feedback on your interview skills with our AI-based platform.
          </p>
          <Button href="/InterviewPage" variant="light" size="lg" className="mt-4">
            Start Your Mock Interview Now
          </Button>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="my-5">
        <Row className="text-center">
          <Col md={4}>
            <FaBrain size={60} className="text-primary mb-3" />
            <h4>AI-Powered Insights</h4>
            <p>Get personalized feedback on your answers, body language, and tone to improve your performance.</p>
          </Col>
          <Col md={4}>
            <FaUserGraduate size={60} className="text-success mb-3" />
            <h4>Mock Interviews</h4>
            <p>Simulate real interview scenarios to build your confidence and reduce anxiety.</p>
          </Col>
          <Col md={4}>
            <FaMicrophone size={60} className="text-danger mb-3" />
            <h4>Speech Analysis</h4>
            <p>Analyze your speech, clarity, and delivery to refine your communication skills.</p>
          </Col>
        </Row>
      </Container>

      {/* Testimonials Section */}
      <div className="bg-light py-5">
        <Container>
          <h2 className="text-center mb-5">What Our Users Say</h2>
          <Row>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Text>
                    <FaComments size={30} className="text-primary me-2" />
                    "The AI feedback was spot-on and helped me land my dream job!" – <strong>Sarah L.</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Text>
                    <FaComments size={30} className="text-success me-2" />
                    "I felt more confident and prepared after the mock interviews!" – <strong>Michael J.</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Text>
                    <FaComments size={30} className="text-danger me-2" />
                    "A must-have tool for anyone preparing for interviews." – <strong>Anita D.</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* FAQ Section */}
      <Container className="my-5">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>How does the AI Interview System work?</Accordion.Header>
            <Accordion.Body>
              Our system uses advanced AI algorithms to simulate mock interviews and provide feedback on your answers,
              body language, and communication skills.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Is the platform free to use?</Accordion.Header>
            <Accordion.Body>
              Yes, the basic mock interview functionality is free. We also offer premium features for more advanced
              feedback and detailed analytics.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Can I practice specific interview questions?</Accordion.Header>
            <Accordion.Body>
              Absolutely! You can choose from a wide range of industry-specific questions to tailor your practice
              sessions.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <Container className="text-center">
          <p>&copy; 2025 AI Interview System. All rights reserved.</p>
          <p>
            <a href="/" className="text-white mx-2">
              Home
            </a>
            |{" "}
            <a href="/InterviewPage" className="text-white mx-2">
              Start Interview
            </a>
            |{" "}
            <a href="/AboutUs" className="text-white mx-2">
              About Us
            </a>
          </p>
        </Container>
      </footer>
    </div>
  );
}
