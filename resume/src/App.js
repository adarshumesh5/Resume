import './App.css';
import React from "react";
import { Container, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Education from './Education';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Projects from './Projects';
import BackgroundParticles from "./BackgroundParticles";
import ProfilePicture from './ProfilePicture';
import NavBar from './NavBar';
import About from './About';
import Contact from './Contact';
import LandingPage from './LandingPage';
import Header from './Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function ResumeLayout() {
  const theme = useTheme();
  

  return (
    <>
      <NavBar />
      <Container
        maxWidth="md"
        sx={{
          padding: 4,
          position: 'relative',
          zIndex: 1,
          backgroundColor: theme.palette.mode === "dark" ? "rgba(18,18,18,0.6)" : "rgba(255,255,255,0.5)",
          backdropFilter: 'blur(10px)',
          borderRadius: 2,
          border: theme.palette.mode === "dark" ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.1)",
          boxShadow: theme.palette.mode === "dark" ? "0 0 20px rgba(255,255,255,0.1)" : "0 0 20px rgba(0,0,0,0.05)",
          minHeight: '100vh'
        }}
      >
        

        <Box display="flex" justifyContent="center">
          <ProfilePicture />
        </Box>

        <Header center nameOnly />

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
}

function App() {
  return (
    <Router basename="/Resume">
      <BackgroundParticles />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/resume" element={<ResumeLayout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
