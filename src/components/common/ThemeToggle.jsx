import { IconButton } from '@mui/material';
import { LightMode } from '@mui/icons-material';

const ThemeToggle = () => {
  return (
    <IconButton 
      className="text-gray-600 hover:text-gray-900"
      aria-label="toggle theme"
    >
      <LightMode />
    </IconButton>
  );
};

export default ThemeToggle;