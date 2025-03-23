// pages/dashboard.tsx

import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, Navbar, Nav } from 'react-bootstrap';
import { FaPowerOff, FaBell, FaRegUserCircle } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Sidebar from './Sidebar'; // Custom sidebar component
import DashboardContent from './DashboardContent';
import ProfileContent from './ProfileContent';
import SettingsContent from './SettingContent';

const DashboardPage = () => {
  const router = useRouter();
  const [activeView, setActiveView] = useState('dashboard'); // Track which content to render

  const handleLogout = () => {
    console.log('Logged out');
    router.push('/login');
  };

  // Function to render content dynamically based on the active view
  const renderContent = () => {
    switch (activeView) {
      case 'profile':
        return <ProfileContent />;
      case 'settings':
        return <SettingsContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#1e2a47' }}>
      {/* Top Navbar */}
      <Navbar bg="dark" expand="lg" fixed="top" variant="dark" style={{ zIndex: 999 }}>
        <Navbar.Brand href="/" className="fw-bold text-light ms-3">AI Interview System</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto">
            <Dropdown align="end">
              <Dropdown.Toggle variant="link">
                <FaBell className="me-3 text-white" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Notification 1</Dropdown.Item>
                <Dropdown.Item>Notification 2</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown align="end">
              <Dropdown.Toggle variant="link">
                <FaRegUserCircle className="me-3 text-white" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setActiveView('profile')}>Profile</Dropdown.Item>
                <Dropdown.Item onClick={() => setActiveView('settings')}>Settings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={handleLogout}>
                  <FaPowerOff className="me-2" /> Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Sidebar and Main Content */}
      <Container fluid className="pt-5 d-flex flex-column" style={{ minHeight: 'calc(100vh - 56px)' }}>
        <Row className="flex-grow-1" style={{ minHeight: 'calc(100vh - 56px)' }}>
          <Col xs={2} sm={2} className="p-0">
            <Sidebar setActiveView={setActiveView} /> {/* Pass state updater function */}
          </Col>
          <Col xs={10} sm={10} className="p-3" style={{ backgroundColor: '#a8c7e7', height: '100%' }}>
            <div className="flex-grow-1">{renderContent()}</div>
          </Col>
        </Row>
      </Container>

      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <p className="mb-0">&copy; {new Date().getFullYear()} AI Interview System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DashboardPage;
