import './App.css';
import React from "react";
import { Container, IconButton, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useColorMode } from "./ThemeContext";
import Education from './Education';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Projects from './Projects';
import BackgroundParticles from "./BackgroundParticles";
import Header from './Header';
import ProfilePicture from './ProfilePicture';
import NavBar from './NavBar';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();

  const ResumeLayout = () => (
    <>
      <NavBar />
      <Container
        maxWidth="md"
        sx={{
          padding: 4,
          position: 'relative',
          zIndex: 1,
          backgroundColor: theme.palette.mode === "dark"
            ? "rgba(18,18,18,0.6)"
            : "rgba(255,255,255,0.5)",
          backdropFilter: 'blur(10px)',
          borderRadius: 2,
          border: theme.palette.mode === "dark"
            ? "1px solid rgba(255,255,255,0.1)"
            : "1px solid rgba(0,0,0,0.1)",
          boxShadow: theme.palette.mode === "dark"
            ? "0 0 20px rgba(255,255,255,0.1)"
            : "0 0 20px rgba(0,0,0,0.05)",
          minHeight: '100vh'
        }}
      >
        <Box display="flex" justifyContent="flex-end" mb={2}>
          <IconButton onClick={toggleColorMode}>
            {theme.palette.mode === "dark" ? "🌙" : "☀️"}
          </IconButton>
        </Box>

        <div id="about">
          <ProfilePicture />
          <Header />
        </div>

        <div id="education">
          <Education />
        </div>

        <div id="experience">
          <WorkExperience />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="skills">
          <Skills />
        </div>
      </Container>
    </>
  );

  return (
    <Router>
      <BackgroundParticles />
      <Routes>
        <Route path="/" element={<ResumeLayout />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;