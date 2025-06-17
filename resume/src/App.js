import './App.css';
import React from "react";
import { Container, Typography, IconButton, Box, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useColorMode } from "./ThemeContext";
import Education from './Education';
import WorkExperience from './WorkExperience';
import Skills from './Skills';
import Projects from './Projects';

function App() {
  const theme = useTheme();
  const { toggleColorMode } = useColorMode();

  return (
    <Container maxWidth="md" sx={{ padding: 4 }}>
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <IconButton onClick={toggleColorMode}>
          {theme.palette.mode === "dark" ? "☀️" : "🌙"}
        </IconButton>
      </Box>

      <Box display="flex" justifyContent="center" mb={2}>
        <img
          src="/profile.jpg"
          alt="Adarsh Umesh"
          style={{
            width: 120,
            height: 120,
            borderRadius: "50%",
            border: "2px solid #888",
            objectFit: "cover"
          }}
        />
      </Box>

      <Typography variant="h4" gutterBottom align="center">
        Adarsh Umesh
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Los Angeles, CA | +1 (747)333-4258 | adarshumesh657@gmail.com |{" "}
        <Link href="https://www.linkedin.com/in/adarsh-umesh/" target="_blank" rel="noopener">
          LinkedIn
        </Link>{" "} | {" "}
        <Link href="https://github.com/adarshumesh5" target="_blank" rel="noopener">
          GitHub
        </Link>{" "}
      </Typography>

      <Education />
      <WorkExperience />
      <Projects />
      <Skills />
    </Container>
  );
};

export default App;