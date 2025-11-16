import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { 
  Dashboard as DashboardIcon,
  Description as DescriptionIcon,
  Extension as ExtensionIcon,
  Settings as SettingsIcon 
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { label: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { label: 'Templates', icon: <DescriptionIcon />, path: '/templates' },
    { label: 'Components', icon: <ExtensionIcon />, path: '/components' },
    { label: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={onClose}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            boxSizing: 'border-box',
            borderRight: '1px solid #e5e7eb',
          },
        }}
        transitionDuration={300}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Menu</h2>
          <List>
            {menuItems.map((item, index) => (
              <ListItem
                key={index}
                component={Link}
                to={item.path}
                onClick={onClose}
                sx={{
                  borderRadius: '8px',
                  mb: 1,
                  '&:hover': {
                    backgroundColor: '#f3f4f6',
                  },
                  transition: 'all 0.2s',
                }}
              >
                <ListItemIcon sx={{ color: '#4f46e5', minWidth: 40 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: '0.95rem',
                    fontWeight: 500,
                  }}
                />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Sidebar;