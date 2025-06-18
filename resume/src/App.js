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

function App() {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();
 
  return (
    <>
      <BackgroundParticles />
      <Container
        maxWidth="md"
        sx={{
          padding: 4,
          position: 'relative',
          zIndex: 1,
          backgroundColor: theme.palette.mode === "dark" ? "#121212" : "#ffffff",
          borderRadius: 2,
          minHeight: '100vh'
        }}
      >
        <Box display="flex" justifyContent="flex-end" mb={2}>
          <IconButton onClick={toggleColorMode}>
            {theme.palette.mode === "dark" ? "☀️" : "🌙"}
          </IconButton>
        </Box>

        <ProfilePicture />

        <Header />

        <Education />
        <WorkExperience />
        <Projects />
        <Skills />
      </Container>
    </>
  );
};

export default App;