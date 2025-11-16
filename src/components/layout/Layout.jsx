import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from './TopNav';
import Sidebar from './Sidebar';

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <TopNav onMenuClick={handleMenuClick} />
      <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;