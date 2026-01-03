import { useState, useEffect, useRef } from 'react';
import { KeyboardArrowDown } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Dropdown = ({ label, items, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex gap-1 transition-colors duration-200 py-2 items-center ${className || 'text-gray-700 hover:text-gray-900'}`}
      >
        {label}
        <KeyboardArrowDown
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fontSize="small"
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50 transition-all duration-200 opacity-100 scale-100">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="flex items-center px-4 h-10 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-150 text-sm"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;