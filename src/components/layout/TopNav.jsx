import { IconButton } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Logo from '../common/Logo';
import ThemeToggle from '../common/ThemeToggle';
import Dropdown from '../ui/Dropdown';
import { Link } from 'react-router-dom';

const TopNav = ({ onMenuClick }) => {
  const browseItems = [
    { label: 'All Templates', href: '#' },
    { label: 'Landing Pages', href: '#' },
    { label: 'Web Apps', href: '#' },
    { label: 'E-commerce', href: '#' },
  ];

  const resourcesItems = [
    { label: 'Documentation', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Support', href: '#' },
    { label: 'Community', href: '#' },
  ];

  return (
    <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left section: Hamburger + Logo */}
          <div className="flex items-center gap-4">
            <IconButton
              onClick={onMenuClick}
              className="text-gray-600 hover:text-gray-900"
              aria-label="open menu"
            >
              <MenuIcon />
            </IconButton>
            <Logo />
          </div>

          {/* Center section: Navigation items */}
          <div className="hidden md:flex items-center gap-8">
            <Dropdown label="Browse" items={browseItems} />
            <Link
              to="/templates"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Templates
            </Link>
            <Link
              to="/components"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Components
            </Link>
            <Link
              to="/pricing"
              className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
            >
              Pricing
            </Link>
            <Dropdown label="Resources" items={resourcesItems} />
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