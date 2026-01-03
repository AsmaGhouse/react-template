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
    <div className="min-h-screen bg-gray-50 dark:bg-[#0B1120] text-gray-900 dark:text-white transition-colors duration-200">
      <TopNav onMenuClick={handleMenuClick} />
      <Sidebar isOpen={sidebarOpen} onClose={handleSidebarClose} />
      <main className="lg:ml-[205px] pt-5 transition-all duration-300">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;