import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  Box
} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Home', icon: <HomeIcon />, action: () => navigate("/") },
    { label: 'About Me', action: () => navigate("/about") },
    { label: 'Education', action: () => scrollTo("education") },
    { label: 'Experience', action: () => scrollTo("experience") },
    { label: 'Projects', action: () => scrollTo("projects") },
    { label: 'Skills', action: () => scrollTo("skills") },
  ];

  return (
    <Box sx={{ width: '100vw', overflowX: 'hidden' }}>
      <AppBar position="sticky" sx={{ background: theme.palette.mode === 'dark' ? "#1c1c1c" : "#f5f5f5", color: 'inherit' }}>
        <Toolbar sx={{ justifyContent: isMobile ? "space-between" : "center", gap: 2 }}>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <List sx={{ width: 250 }}>
                  {navItems.map((item, index) => (
                    <ListItem button key={index} onClick={() => { item.action(); setDrawerOpen(false); }}>
                      {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
                      <ListItemText primary={item.label} />
                    </ListItem>
                  ))}
                </List>
              </Drawer>
            </>
          ) : (
            navItems.map((item, index) => (
              <Button key={index} onClick={item.action} color="inherit">
                {item.icon ? <HomeIcon sx={{ mr: 1 }} /> : null}
                {item.label !== 'Home' && item.label}
              </Button>
            ))
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
