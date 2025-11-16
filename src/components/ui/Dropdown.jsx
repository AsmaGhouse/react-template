import { useState, useEffect, useRef } from 'react';
import { KeyboardArrowDown } from '@mui/icons-material';

const Dropdown = ({ label, items }) => {
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
        className="flex gap-1 text-gray-700 hover:text-gray-900 transition-colors duration-200 py-2"
      >
        {label}
        <KeyboardArrowDown 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fontSize="small"
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-10 mt-4 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-4 z-50 transition-all duration-200 opacity-100 scale-100">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-4 text-gray-700 hover:bg-gray-100 transition-colors duration-150"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;