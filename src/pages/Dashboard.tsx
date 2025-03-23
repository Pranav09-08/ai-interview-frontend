import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, Navbar, Nav, Button } from 'react-bootstrap';
import { FaPowerOff, FaBell, FaRegUserCircle, FaBars } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Sidebar from './Sidebar';
import DashboardContent from './DashboardContent';
import ProfileContent from './ProfileContent';
import SettingsContent from './SettingContent';
import EditResume from "./EditResume";
import FacialExpression from "./FacialExpression";

const DashboardPage = () => {
  const router = useRouter();
  const [activeView, setActiveView] = useState('dashboard');
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const handleLogout = () => {
    console.log('Logged out');
    router.push('/login');
  };

  const renderContent = () => {
    switch (activeView) {
      case 'profile':
        return <ProfileContent />;
      case 'settings':
        return <SettingsContent />;
      case 'resume':
        return <EditResume />;
      case 'face':
        return <FacialExpression/>
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#1e2a47' }}>
      {/* Top Navbar */}
      <Navbar bg="dark" expand="lg" fixed="top" variant="dark" style={{ zIndex: 999, height: '56px' }}>
        <div className="d-flex align-items-center">
          <Button
            variant="outline-light"
            className="me-3 ms-3 d-block"
            onClick={() => setSidebarVisible(!isSidebarVisible)}
          >
            <FaBars />
          </Button>
          <Navbar.Brand href="/" className="fw-bold text-light">AI Interview System</Navbar.Brand>
        </div>
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

      {/* Main Content with Fixed Footer and Scrolling Central Section */}
      <Container fluid className="d-flex" style={{ paddingTop: '56px', paddingBottom: '60px', height: '100vh' }}>
        <Row className="w-100">
          {isSidebarVisible && (
            <Col xs={12} sm={2} className="p-0" style={{ height: 'calc(100vh - 116px)', position: 'fixed', overflowY: 'auto' }}>
              <Sidebar setActiveView={setActiveView} />
            </Col>
          )}
          <Col
            xs={isSidebarVisible ? 10 : 12}
            sm={isSidebarVisible ? 10 : 12}
            className="ms-auto p-3"
            style={{
              backgroundColor: '#a8c7e7',
              height: 'calc(100vh - 116px)',
              overflowY: 'auto',
              marginLeft: isSidebarVisible ? '16.666667%' : '0',
            }}
          >
            {renderContent()}
          </Col>
        </Row>
      </Container>

      {/* Fixed Footer */}
      <footer className="bg-dark text-white text-center py-3" style={{ position: 'fixed', bottom: 0, width: '100%', height: '60px' }}>
        <p className="mb-0">&copy; {new Date().getFullYear()} AI Interview System. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DashboardPage;