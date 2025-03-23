// pages/sidebar.tsx

import { Button } from 'react-bootstrap';
import { FaHome, FaUserAlt, FaCog } from 'react-icons/fa';

const Sidebar = ({ setActiveView }) => {
  return (
    <div className="p-0 bg-dark text-white d-flex flex-column align-items-center" style={{ position: 'relative', minHeight: '100%' }}>
      <div className="px-3 pt-5 w-100">
        <Button
          variant="link"
          className="text-white mb-3 w-100 text-start fs-5"
          onClick={() => setActiveView('dashboard')}
          style={{ textDecoration: 'none' }}
        >
          <FaHome className="me-3" /> Dashboard
        </Button>
        <Button
          variant="link"
          className="text-white mb-3 w-100 text-start fs-5"
          onClick={() => setActiveView('profile')}
          style={{ textDecoration: 'none' }}
        >
          <FaUserAlt className="me-3" /> Profile
        </Button>
        <Button
          variant="link"
          className="text-white mb-3 w-100 text-start fs-5"
          onClick={() => setActiveView('settings')}
          style={{ textDecoration: 'none' }}
        >
          <FaCog className="me-3" /> Settings
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
