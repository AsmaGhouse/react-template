import { IconButton } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <IconButton
      onClick={toggleTheme}
      className={theme === 'dark' ? 'text-yellow-400 hover:text-yellow-300' : 'text-gray-500 hover:text-gray-900'}
      aria-label="toggle theme"
      sx={{
        color: theme === 'dark' ? '#facc15' : 'inherit',
        transition: 'all 0.3s ease'
      }}
    >
      {theme === 'dark' ? <LightMode /> : <DarkMode />}
    </IconButton>
  );
};

export default ThemeToggle;