import { IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import ThemeToggle from '../common/ThemeToggle';
import Dropdown from '../ui/Dropdown';
import { Link } from 'react-router-dom';

const TopNav = ({ onMenuClick }) => {
  const browseItems = [
    { label: 'All Templates', href: '/browse/all' },
    { label: 'Landing Pages', href: '/browse/landing-pages' },
    { label: 'Web Apps', href: '/browse/web-apps' },
    { label: 'E-commerce', href: '/browse/e-commerce' },
  ];

  const resourcesItems = [
    { label: 'Documentation', href: '/resources/documentation' },
    { label: 'Blog', href: '/resources/blog' },
    { label: 'Support', href: '/resources/support' },
    { label: 'Community', href: '/resources/community' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 lg:ml-[205px] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section: Hamburger + Logo */}
          {/* Left section: Hamburger */}
          <div className="flex items-center gap-4">
            <div className="lg:hidden">
              <IconButton
                onClick={onMenuClick}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                aria-label="open menu"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </div>

          {/* Center section: Navigation items */}
          <div className="hidden md:flex items-center gap-8">
            <Dropdown label="Browse" items={browseItems} className="text-gray-700 dark:text-gray-200" />
            <Link
              to="/templates"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              Templates
            </Link>
            <Link
              to="/components"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              Components
            </Link>
            <Link
              to="/pricing"
              className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
            >
              Pricing
            </Link>
            <Dropdown label="Resources" items={resourcesItems} className="text-gray-700 dark:text-gray-200" />
          </div>

          {/* Right section: Theme toggle */}
          <div className="flex items-center">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;