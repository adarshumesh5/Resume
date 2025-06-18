import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const NavBar = () => {
  const theme = useTheme();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="sticky" sx={{ background: theme.palette.mode === 'dark' ? "#1c1c1c" : "#f5f5f5", color: 'inherit' }}>
      <Toolbar sx={{ justifyContent: "center", gap: 2 }}>
        <Button component={RouterLink} to="/about" color="inherit">About Me</Button>
        <Button onClick={() => scrollTo("education")} color="inherit">Education</Button>
        <Button onClick={() => scrollTo("experience")} color="inherit">Experience</Button>
        <Button onClick={() => scrollTo("projects")} color="inherit">Projects</Button>
        <Button onClick={() => scrollTo("skills")} color="inherit">Skills</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;