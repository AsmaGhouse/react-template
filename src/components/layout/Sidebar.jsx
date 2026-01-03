import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, useMediaQuery, useTheme } from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Description as DescriptionIcon,
  Extension as ExtensionIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Logo from '../common/Logo';

const Sidebar = ({ isOpen, onClose }) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const drawerWidth = 205;

  const menuItems = [
    { label: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { label: 'Templates', icon: <DescriptionIcon />, path: '/templates' },
    { label: 'Components', icon: <ExtensionIcon />, path: '/components' },
    { label: 'Settings', icon: <SettingsIcon />, path: '/settings' },
  ];

  const drawerContent = (
    <div className="h-full flex flex-col bg-white dark:bg-[#111827] border-r border-gray-200 dark:border-gray-800">
      <div className="p-6 pb-0 mb-6">
        <Logo />
      </div>
      <div className="px-4">
        <List>
          {menuItems.map((item, index) => (
            <ListItem
              key={index}
              component={Link}
              to={item.path}
              onClick={!isDesktop ? onClose : undefined}
              sx={{
                borderRadius: '8px',
                mb: 1,
                '&:hover': {
                  backgroundColor: isDesktop ? '#f3f4f6' : 'rgba(255,255,255,0.05)',
                },
                transition: 'all 0.2s',
              }}
              className="hover:bg-gray-100 dark:hover:bg-gray-800 group"
            >
              <ListItemIcon className="text-gray-600 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200" sx={{ minWidth: 40 }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontSize: '0.95rem',
                  fontWeight: 500,
                }}
                className="text-gray-700 dark:text-gray-200"
              />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
      aria-label="mailbox folders"
    >
      {/* Mobile Sidebar (Temporary) */}
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={onClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            borderRight: '1px solid #e5e7eb',
            backgroundColor: 'transparent',
          },
        }}
        PaperProps={{
          className: "dark:bg-[#111827] dark:border-gray-800"
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Desktop Sidebar (Permanent) */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', lg: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            borderRight: '1px solid #e5e7eb',
            backgroundColor: 'transparent',
          },
        }}
        PaperProps={{
          className: "dark:bg-[#111827] dark:border-gray-800"
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Sidebar;